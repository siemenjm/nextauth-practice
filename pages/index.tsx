import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextAuth Practice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>NextAuth.js Example</h1>
        <p>
          This is an example site to demonstrate how to use{' '}
          <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
        </p>
        <h2>You are currently on the Home page.</h2>
      </Layout>
    </>
  );
}
