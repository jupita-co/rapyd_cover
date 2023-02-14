import "../styles/globals.css";
import "../styles/ham.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <link
          href="https://api.fontshare.com/v2/css?f[]=archivo@200,300,500,100,400,600&display=swap"
          rel="stylesheet"
        /> */}
        <title>rapyd cover</title>
        <meta
          name="description"
          content="We design world-class digital products"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
