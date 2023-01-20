import React from "react";
import { NextSeo } from "next-seo";

import Banner from "components/pages/home/Banner";
import Summary from "components/pages/home/Summary";
import About from "components/pages/home/About";
import Sectors from "components/pages/home/Sectors";
import Supply from "components/pages/home/Supply";
import Locations from "components/pages/home/Locations";
import Clients from "components/pages/home/Clients";
import Contact from "components/pages/home/Contact";

export default function Home() {
  const SEO = {
    title: "MCA International",
    description: "Your industrial supply partner.",
    url: "https://mca-international-next.vercel.app/",
    image: "/img/SEO/preview.jpg"
  };

  return (
    <>
      <Banner />
      <Summary />
      <About />
      <Sectors />
      <Supply />
      <Locations />
      <Contact />

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
              width: 2048,
              height: 1336
            }
          ],
          article: {
            tags: [
              "accounting",
              "actuators",
              "asset",
              "asset management",
              "automation",
              "bid tabulation",
              "bid tabulation and award",
              "brokerage",
              "budgeting",
              "buildings",
              "coating",
              "compressors",
              "contract",
              "contract management",
              "control",
              "customs",
              "customs brokerage",
              "drilling",
              "drilling equipment",
              "drilling rigs",
              "electrical",
              "electrical gear",
              "electronics",
              "engines",
              "environmental",
              "equipment",
              "fat",
              "factory acceptance test",
              "feasibility",
              "feasibility study",
              "filtration",
              "fittings",
              "flanges",
              "forwarding",
              "freight",
              "freight forwarding",
              "full tendering process",
              "gear",
              "general",
              "generators",
              "handling",
              "hardware",
              "hose",
              "hose tube",
              "hvac",
              "hydraulics",
              "implementation",
              "industrial",
              "industrial mro supplies",
              "inspection",
              "instrumentation",
              "lab",
              "lab supplies",
              "legal",
              "logistics",
              "maintenance",
              "management",
              "material",
              "material handling",
              "material inspection",
              "material sourcing",
              "material specification",
              "motors",
              "mro",
              "mrp",
              "mrp system implementation",
              "operations",
              "outsourcing",
              "packaging",
              "paint",
              "pipe",
              "plumbing",
              "pneumatics",
              "prefabricated",
              "prefabricated skids",
              "preparation",
              "pressure",
              "pressure vessels",
              "process",
              "procurement",
              "procurement outsourcing",
              "project",
              "project logistics",
              "project management",
              "pump",
              "quality",
              "quality control",
              "refrigeration",
              "rfp",
              "rfp preparation",
              "rigs",
              "safety",
              "security",
              "separation",
              "shipping",
              "skids",
              "sourcing",
              "specialty",
              "specialty valves",
              "specification",
              "study",
              "supplies",
              "support",
              "system",
              "technical",
              "technical support",
              "tendering",
              "tools",
              "tube",
              "valves",
              "vendor",
              "vendor management",
              "vessels",
              "warehousing",
              "warehousing management",
              "welding"
            ]
          }
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}