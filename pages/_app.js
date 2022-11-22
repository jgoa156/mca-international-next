import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/main.css";

import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

export default function AppWrapper(props) {
  return (
    <App {...props} />
  );
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
        <meta name="theme-color" content="#111111" />

        <title>MCA International</title>

        <meta name="description" content="Hi, I'm Guilherme Almeida, a 21-year-old Full-stack web and mobile developer based in Manaus, Brazil." />
        <meta name="image" content="https://jgoa156.vercel.app/img/SEO/preview.jpg" />

        {/*Favicon*/}
        {/*<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/img/logo.png`}
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/img/favicon.png`}
				/>*/}

        {/*Font Awesome*/}
        <link
          rel="stylesheet"
          href="fonts/fontawesome/css/all.min.css"
        />
      </Head>

      <noscript>
        You need to turn on JavaScript to see this page
      </noscript>

      <Header />

      <main id={"main"} className={"w-100"}>
        <props.Component {...props.pageProps} />
      </main>

      <Footer />
    </section>
  );
}