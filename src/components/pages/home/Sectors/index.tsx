import React from "react";
import SectionWrapper from "components/shared/SectionWrapper";
import AlternativeTitle from "components/shared/AlternativeTitle";

import {
  CardsWrapper,
  //Card
  CardAlt
} from "./components";

export default function Sectors() {
  /*const cards = [
    { img: "production", title: "Production" },
    { img: "power", title: "Power generation" },
    { img: "renewable", title: "Renewable energy" },
    { img: "supply", title: "Supply chain" },
    { img: "midstream", title: "Midstream" },
    { img: "exploration", title: "Exploration" },
  ];*/

  const cards = [
    { icon: "gear", title: "Production" },
    { icon: "battery-full", title: "Power generation" },
    { icon: "leaf", title: "Renewable energy" },
    { icon: "boxes-packing", title: "Supply chain" },
    { icon: "wind", title: "Midstream" },
    { icon: "oil-well", title: "Exploration" },
  ];

  return (
    <SectionWrapper id="sectors">
      <div>
        <AlternativeTitle>Sectors {"&"} Industries</AlternativeTitle>

        <CardsWrapper>
          {cards.map((card, index) =>
            <>
              {/*<Card key={index}>
                <img src={`${process.env.img}/components/Sectors/${card.img}.jpg`} />

                <div>
                  <h3>{card.title}</h3>
                </div>
              </Card>*/}
              <CardAlt key={index}>
                <h3><i className={`fa-solid fa-${card.icon}`} /> {card.title}</h3>
              </CardAlt>
            </>
          )}
        </CardsWrapper>
      </div>
    </SectionWrapper>
  );
}