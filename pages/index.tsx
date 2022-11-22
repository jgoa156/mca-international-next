import React from "react";
import { NextSeo } from "next-seo";

import Banner from "components/pages/home/Banner";
import WhatWeDo from "components/pages/home/WhatWeDo";
import About from "components/pages/home/About";

export default function Home() {
  const SEO = {
    title: "MCA International",
    description: "Hi, I'm Guilherme Almeida, a 21-year-old Full-stack web and mobile developer based in Manaus, Brazil.",
    url: "https://guilherme.vercel.app",
    image: "/img/SEO/preview.jpg"
  };

  return (
    <>
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        canonical={SEO.url}
        additionalMetaTags={[
          {
            name: "image",
            content: `${SEO.url}${SEO.image}`
          }
        ]}
        openGraph={{
          title: SEO.title,
          description: SEO.description,
          type: "website",
          locale: "en_IE",
          url: SEO.url,
          images: [
            {
              url: `${SEO.url}${SEO.image}`,
              secureUrl: `${SEO.url}${SEO.image}`,
              alt: "Preview Image",
              type: "image/jpeg",
              width: 1295,
              height: 621
            }
          ],
          article: {
            tags: [
              "software developer",
              "software",
              "programmer",
              "dev",
              "developer",
              "designer",
              "fullstack",
              "full-stack",
              "full stack",
              "back-end",
              "back end",
              "front-end",
              "front end",
              "design",
              "brazil",
              "brazilian",
              "remote",
              "worker",

              "javascript",
              "js",
              "java",
              "python",
              "php",
              "cakephp",
              "laravel",
              "springboot",
              "spring",
              "designer",
              "ui",
              "ui designer",
              "ux",
              "ux designer",
              "next",
              "next.js",
              "nextjs",
              "react",
              "react.js",
              "reactjs",
              "node",
              "node.js",
              "nodejs",
              "express",
              "express.js",
              "expressjs",

              "mysql",
              "sequelize",
              "wordpress",
              "jquery",
              "c",
              "aosp",
              "figma",
              "docker",
              "kubernetes"
            ]
          }
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <Banner />
      <WhatWeDo />
      <About />
    </>
  );
}