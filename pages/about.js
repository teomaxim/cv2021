import Head from 'next/head';
import React from 'react';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';

// const Index = () => {
//   return <h1>this is Index</h1>;
// };

class About extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>this is About</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
