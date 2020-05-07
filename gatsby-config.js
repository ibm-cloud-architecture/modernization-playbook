module.exports = {
  siteMetadata: {
    title: 'Modernization Playbook',
    description: 'Technical approaches to modernizing your existing enterprise applications for the cloud',
    keywords: 'cloud, modernization, application, integration',
  },
  pathPrefix: `/modernization-playbook`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/moderization-playbook',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl:
            'https://github.com/ibm-cloud-architecture/modernization-playbook',
        },
	titleType: 'append'
      },
    },
  ],
};
