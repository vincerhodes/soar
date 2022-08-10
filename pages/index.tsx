import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import ImportFit from "../components/ImportFit";
import DisplayRides from "../components/DisplayRides";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SOAR</title>
      </Head>
      <div className='flex place-content-end m-5'>
        <ImportFit />
      </div>
      <div className='flex m-5'>
        <DisplayRides />
      </div>
    </div>
  );
};

export default Home;
