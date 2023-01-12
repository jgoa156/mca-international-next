import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/main.css";

import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

export default function AppWrapper(props) {
  return <App {...props} />;
}

function App(props) {
  return (
    <section id="app">
      <Head>
        {/*Meta*/}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#2e3456" />

        <title>MCA International</title>

        <meta
          name="description"
          content="Your industrial supply partner."
        />
        <meta
          name="image"
          content="https://mca-international-next.vercel.app/img/SEO/preview.jpg"
        />

        {/*Favicon*/}
        <link
          rel="apple-touch-icon"
          href={`${process.env.basePath}/img/favicon.png`}
        />
        <link
          rel="icon"
          href={`${process.env.basePath}/img/favicon.png`}
        />

        {/*Font Awesome*/}
        <link
          rel="stylesheet"
          href="fonts/fontawesome/css/all.min.css"
        />
      </Head>

      <noscript>You need to turn on JavaScript to see this page</noscript>

      <Header />

      <main id={"main"} className={"w-100"}>
        <props.Component {...props.pageProps} />
      </main>

      <Footer />
    </section>
  );
}
