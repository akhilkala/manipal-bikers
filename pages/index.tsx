import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Manipal Bikers</title>
        <meta name="description" content="Manipal Bikers Registration Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
