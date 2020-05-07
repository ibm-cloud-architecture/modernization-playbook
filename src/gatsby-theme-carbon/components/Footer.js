import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Last updated at {buildTime}
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/cloud/architecture/', linkText: 'IBM Cloud Architecture Center' },
    { href: 'https://www.ibm.com/cloud/architecture/', linkText: 'IBM Garage Method for Cloud' },
  ],
  secondCol: [
    { href: 'https://www.ibm.com/garage', linkText: 'IBM Garage' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
