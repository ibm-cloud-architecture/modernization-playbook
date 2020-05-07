import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Github',
    href: 'https://github.com/carbon-design-system/gatsby-theme-carbon',
  },
  {
    title: 'Architecture Center',
    href: 'https://www.ibm.com/cloud/architecture/architectures/application-modernization/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
