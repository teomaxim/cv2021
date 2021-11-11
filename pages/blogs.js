import Head from 'next/head';
import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
// const Index = () => {
//   return <h1>this is Index</h1>;
// };

class Blogs extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>this is Blogs</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blogs;
