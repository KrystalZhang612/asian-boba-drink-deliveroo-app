import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Featured from "../components/Featured";
import BobaList from '../components/BobaList';

export default function Home(bobaList) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asian Boba Drinks Delivery in San Francisco!</title>
        <meta name="description" content="Best Asian boba in the Bay Area! " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <BobaList /> 
    </div>
  ); 
}

