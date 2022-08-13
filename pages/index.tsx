import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { useClearRides } from "../apis/rideApis";
import ImportFit from "../components/ImportFit";
import DisplayRides from "../components/DisplayRides";

const queryClient = new QueryClient();

const ClearRides = () => {
  const clearRides = useClearRides();
  return (
    <button className='btn btn-error' onClick={() => clearRides.mutate()}>
      Delete All Rides
    </button>
  );
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SOAR</title>
      </Head>
      <div className='flex m-5'>
        <div className='flex-1'>
          <QueryClientProvider client={queryClient}>
            <ClearRides />
          </QueryClientProvider>
        </div>
        <div>
          <ImportFit />
        </div>
      </div>
      <div className='flex m-5'>
        <DisplayRides />
      </div>
    </div>
  );
};

export default Home;
