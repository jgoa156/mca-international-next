import React from "react";
import SectionWrapper from "components/shared/SectionWrapper";
import AlternativeTitle from "components/shared/AlternativeTitle";
import Title from "components/shared/Title";

import {
  Wrapper,
  Text,
  Image,

  ServiceCardsWrapper,
  ServiceCard,

  Pipeline,
  Process,
  Separator
} from "./components";

export default function Summary() {
  const services = [
    { icon: "fa-solid fa-gear", title: "Industrial Products & Equipment" },
    { icon: "fa-solid fa-oil-well", title: "Capital Equipment" },
    { icon: "fa-solid fa-file-invoice-dollar", title: "Specialized Procurement Services" },
    { icon: "fa-solid fa-warehouse", title: "Warehousing & Logistics Services" }
  ];

  const pipeline = [
    { icon: "fa-solid fa-gear", title: "We Engineer" },
    { icon: "fa-solid fa-truck", title: "Source" },
    { icon: "fa-solid fa-file-invoice-dollar", title: "Build/Purchase" },
    { icon: "fa-solid fa-warehouse", title: "Store" },
    { icon: "fa-solid fa-plane", title: "Ship" },
  ];

  return (
    <SectionWrapper id="summary" style={{ overflow: "visible" }}>
      <div>
        <Wrapper>
          <Text>
            <h2>Since 2015, MCA International Group, Inc supplies:</h2>

            <ul>
              {services.map((service, index) => <li key={index}>{service.title}</li>)}
            </ul>
            <p>to clients in the Oil and Gas, Power Generation, Petrochemical and other industries worldwide.</p>
          </Text>

          <Image src={`${process.env.img}/components/Summary/sourcing.jpg`} />
        </Wrapper>

        <Pipeline>
          <Title>Why choose us?</Title>

          <div>
            {pipeline.map((process, index) =>
              <>
                <Process key={index}>
                  <i className={process.icon} />
                  <h4>{process.title}</h4>
                </Process>
                {(index != pipeline.length - 1) && <Separator className={"fas fa-chevron-right"} />}
              </>
            )}
          </div>
        </Pipeline>
      </div>
    </SectionWrapper>
  );
}