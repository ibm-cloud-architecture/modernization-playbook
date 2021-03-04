## Performance and Memory Tests

Performance comparisons are difficult. While the goal is to do fair comparisions, you don't want to compare horses with 1 PS cars either.

My interpretations of the results are:

* OpenJ9 consumes less memory
* Reactive technologies in Quarkus require less resources

The same endpoint is invoked 30000 times. Each invocation reads some data from a database. See below for details.

Notes: 
* As with every performance test your mileage will vary!
* Again, as with every performance test your mileage will vary! 
* This is not a generic comparison of the different options. Instead I've tested my simple use case of the e-commerce sample application.
* I have not done any 'tuning' explicitly, but have used defaults. 
* Because of the many variations of runtimes, versions, JDKs, JVMs, etc. the results may not be respresentative yet. Reviews are going on.
* Please ping me if you have feedback.


| Test Case                     | Duration     | Memory - Start | Memory - End   |
| ----------------------------- |:------------:| --------------:| --------------:|
| 1) Quarkus/OpenJ9/Reactive    | 0:24         | 70             | 111            | 
| 2) Quarkus/Hotspot/Reactive   | 0:24         | 192            | 380            | 
| 3) OpenLiberty/OpenJ9/Synch   | 0:38         | 149            | 194            | 
| 4) Quarkus/OpenJ9/Synch       | 0:58         | 85             | 145            |
| 5) Quarkus/Native/Reactive    | 0:27         | 11             | 378            |


### Test Case 1: Quarkus - JVM Mode - OpenJ9 - Reactive

* Quarkus (directory: [service-catalog-quarkus-reactive](https://github.com/nheidloff/application-modernization-javaee-quarkus/tree/master/service-catalog-quarkus-reactive))
* Image: adoptopenjdk/openjdk11-openj9:ubi-minimal - [Dockerfile](../service-catalog-quarkus-reactive/Dockerfile)
* Reactive Postgres ([example](https://github.com/nheidloff/application-modernization-javaee-quarkus/blob/master/service-catalog-quarkus-reactive/src/main/java/com/ibm/catalog/ProductResource.java#L46))
* Postgres running in a container

```
$ git clone https://github.com/nheidloff/application-modernization-javaee-quarkus.git && cd application-modernization-javaee-quarkus
$ ROOT_FOLDER=$(pwd)
$ sh scripts-docker/stop-services.sh
$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run.sh
```

```
curl "http://localhost/CustomerOrderServicesWeb/jaxrs/Product/?categoryId=2"
```

```
docker exec storefront-catalog-reactive cat /sys/fs/cgroup/memory/memory.stat | grep rss
```

Results:
* Duration of 30000 invocations: 0:24 mins
* Memory before any invocations: 70 MB RSS
* Memory after 30000 invocations: 111 MB RSS


### Test Case 2: Quarkus - JVM Mode - Hotspot - Reactive

* Quarkus (directory: [service-catalog-quarkus-reactive](https://github.com/nheidloff/application-modernization-javaee-quarkus/tree/master/service-catalog-quarkus-reactive))
* Image: fabric8/java-alpine-openjdk11-jre - [Dockerfile](../service-catalog-quarkus-reactive/Dockerfile.hotspot)
* Reactive Postgres ([example](https://github.com/nheidloff/application-modernization-javaee-quarkus/blob/master/service-catalog-quarkus-reactive/src/main/java/com/ibm/catalog/ProductResource.java#L46))
* Postgres running in a container

```
$ git clone https://github.com/nheidloff/application-modernization-javaee-quarkus.git && cd application-modernization-javaee-quarkus
$ ROOT_FOLDER=$(pwd)
$ sh scripts-docker/stop-services.sh
$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-hotspot.sh
```

```
curl "http://localhost/CustomerOrderServicesWeb/jaxrs/Product/?categoryId=2"
```

```
docker exec storefront-catalog-reactive cat /sys/fs/cgroup/memory/memory.stat | grep rss
docker exec storefront-catalog-reactive ps -o rss,vsz 1 
```

Results:
* Duration of 30000 invocations: 0:24 mins
* Memory before any invocations: 192 MB RSS
* Memory after 30000 invocations: 380 MB RSS


### Test Case 3: Open Liberty - OpenJ9 - Synchronous 

* Open Liberty (directory: [monolith-open-liberty-cloud-native](https://github.com/nheidloff/application-modernization-javaee-quarkus/tree/master/monolith-open-liberty-cloud-native))
* Image: open-liberty:kernel-java11-openj9-ubi - [Dockerfile](../monolith-open-liberty-cloud-native/Dockerfile.multistage)
* JPA - synchronous ([example](https://github.com/nheidloff/application-modernization-javaee-quarkus/blob/master/monolith-open-liberty-cloud-native/src/main/java/org/pwte/example/service/ProductSearchServiceImpl.java#L30))
* Db2 running in a container

```
$ git clone https://github.com/nheidloff/application-modernization-javaee-quarkus.git && cd application-modernization-javaee-quarkus
$ ROOT_FOLDER=$(pwd)
$ sh scripts-docker/stop-services.sh
$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-monolith-db2.sh
$ sh ${ROOT_FOLDER}/scripts-docker/run-database-postgres-catalog.sh
$ sh ${ROOT_FOLDER}/scripts-docker/run-kafka.sh
$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-catalog.sh
```

```
curl "http://localhost:9088/CustomerOrderServicesWeb/jaxrs/Product/?categoryId=2"
```

```
docker exec storefront-backend-open-native cat /sys/fs/cgroup/memory/memory.stat | grep rss
```

Results:
* Duration of 30000 invocations:  0:38 mins
* Memory before any invocations:   149 MB RSS
* Memory after 30000 invocations:  194 MB RSS


### Test Case 4: Quarkus - JVM Mode - OpenJ9 - Synchronous

* Quarkus (directory: [service-catalog-quarkus-synch](https://github.com/nheidloff/application-modernization-javaee-quarkus/tree/master/service-catalog-quarkus-synch))
* Image: adoptopenjdk/openjdk11-openj9:ubi-minimal - [Dockerfile](../service-catalog-quarkus-synch/Dockerfile)
* Panache - synchronous ([example](https://github.com/nheidloff/application-modernization-javaee-quarkus/blob/master/service-catalog-quarkus-synch/src/main/java/com/ibm/catalog/CategoryResource.java#L29))
* Postgres running in a container

```
$ git clone https://github.com/nheidloff/application-modernization-javaee-quarkus.git && cd application-modernization-javaee-quarkus
$ ROOT_FOLDER=$(pwd)
$ sh scripts-docker/stop-services.sh
$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-monolith-db2.sh
$ sh ${ROOT_FOLDER}/scripts-docker/run-database-postgres-catalog.sh
$ sh ${ROOT_FOLDER}/scripts-docker/run-kafka.sh
$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-catalog.sh
```

```
curl "http://localhost/CustomerOrderServicesWeb/jaxrs/Product/?categoryId=2"
```

```
docker exec storefront-catalog cat /sys/fs/cgroup/memory/memory.stat | grep rss
```

Results:
* Duration of 30000 invocations:  1:01 mins
* Memory before any invocations:  85 MB RSS
* Memory after 30000 invocations: 145 MB RSS


### Test Case 5: Quarkus - Native Mode - Reactive

* Quarkus (directory: [service-catalog-quarkus-reactive](https://github.com/nheidloff/application-modernization-javaee-quarkus/tree/master/service-catalog-quarkus-reactive))
* Image: registry.access.redhat.com/ubi8/ubi-minimal - [Dockerfile](../service-catalog-quarkus-reactive/src/main/docker/Dockerfile)
* Reactive Postgres ([example](https://github.com/nheidloff/application-modernization-javaee-quarkus/blob/master/service-catalog-quarkus-reactive/src/main/java/com/ibm/catalog/ProductResource.java#L46))
* Postgres running in a container

```
$ git clone https://github.com/nheidloff/application-modernization-javaee-quarkus.git && cd application-modernization-javaee-quarkus
$ ROOT_FOLDER=$(pwd)
$ sh scripts-docker/stop-services.sh
$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-monolith-db2.sh
$ sh ${ROOT_FOLDER}/scripts-docker/run-database-postgres-catalog.sh
$ sh ${ROOT_FOLDER}/scripts-docker/run-kafka.sh
$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-quarkus-services.sh
```

```
curl "http://localhost/CustomerOrderServicesWeb/jaxrs/Product/?categoryId=2"
```

```
docker exec storefront-catalog-reactive cat /sys/fs/cgroup/memory/memory.stat | grep rss
```

Results:
* Duration of 30000 invocations:   0:26 mins
* Memory before any invocations:   11 MB RSS
* Memory after 30000 invocations:  378 MB RSS
