import Head from 'next/head'
import React from 'react';
import Layout from 'components/Layout';
import ResourceHighlight from 'components/ResourceHighlight';
import NewsLetters from 'components/Newsletters';
import ResourseList from 'components/ResourceList';

import { resources } from "api/data";

const Home =()=> {
  return (
    <div>
      <Head>
        <title>Content Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <ResourceHighlight resources={resources}/>
          <NewsLetters/>
          <ResourseList resources={resources}/>
      </Layout>
    </div>
  )
}
export default Home;
