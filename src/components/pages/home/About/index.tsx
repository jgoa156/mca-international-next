import React from "react";
import SectionWrapper from "components/shared/SectionWrapper";
import AlternativeTitle from "components/shared/AlternativeTitle";

import {
  CardsWrapper,
  Card
} from "./components";

export default function About() {
  const cards = [
    { icon: "fa-solid fa-rocket", title: "Our mission", description: "To exceed our customer's expectations providing high quality products and services to help ensure a sustainable and healthy environment for current and future generations." },
    { icon: "fa-solid fa-eye", title: "Our vision", description: "To become the number one choice of our Clients, Employees, Community, Suppliers and Investors as the reference point for excellence in Products, Services and Business Relationships." },
    { icon: "fa-solid fa-heart", title: "Our values", description: "Ethics, Compliance, Teamwork, Integrity, Excellence and Sustainability." },
  ];

  return (
    <SectionWrapper id="about">
      <div>
        <AlternativeTitle>About Us</AlternativeTitle>

        <CardsWrapper>
          {cards.map((card, index) =>
            <Card key={index}>
              {/*<i className={card.icon} />*/}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Card>
          )}
        </CardsWrapper>
      </div>
    </SectionWrapper>
  );
}