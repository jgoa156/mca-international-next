import React from "react";
import SectionWrapper from "components/shared/SectionWrapper";
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";

import {
  CardsWrapper,
  ServiceCard
} from "./components";

export default function WhatWeDo() {
  const services = [
    { icon: "fa-solid fa-gear", title: "Industrial Products & Equipment" },
    { icon: "fa-solid fa-oil-well", title: "Capital Equipment" },
    { icon: "fa-solid fa-truck-field", title: "Specialized Procurement Services" },
    { icon: "fa-solid fa-warehouse", title: "Warehousing & Logistics Services" }
  ];

  const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt lacus efficitur nibh semper, et consequat justo pharetra. Duis fermentum sapien non odio fermentum ornare. Sed auctor, tellus ut venenatis.";

  return (
    <SectionWrapper id="what-we-do">
      <div>
        <FadeIn>
          {/*Discuss if this should be removed*/}
          <Title>What we do</Title>

          <CardsWrapper>
            {services.map((service) =>
              <ServiceCard>
                <i className={service.icon} />

                <h3>{service.title}</h3>
                <p>{dummyText}</p>
              </ServiceCard>
            )}
          </CardsWrapper>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}