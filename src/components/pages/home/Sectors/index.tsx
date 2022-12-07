import React from "react";
import SectionWrapper from "components/shared/SectionWrapper";
import AlternativeTitle from "components/shared/AlternativeTitle";

import {
  CardsWrapper,
  Card
} from "./components";

export default function Sectors() {
  const cards = [
    { img: "production", title: "Production" },
    { img: "power", title: "Power generation" },
    { img: "renewable", title: "Renewable energy" },
    { img: "supply", title: "Supply chain" },
    { img: "midstream", title: "midstream" },
    { img: "exploration", title: "Exploration" },
  ];

  return (
    <SectionWrapper id="sectors">
      <div>
        <AlternativeTitle>Sectors {"&"} industries</AlternativeTitle>

        <CardsWrapper>
          {cards.map((card, index) =>
            <Card key={index}>
              <img src={`${process.env.img}/components/Sectors/${card.img}.jpg`} />

              <div>
                <h3>{card.title}</h3>
              </div>
            </Card>
          )}
        </CardsWrapper>
      </div>
    </SectionWrapper>
  );
}