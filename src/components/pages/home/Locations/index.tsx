import React from "react";
import SectionWrapper from "components/shared/SectionWrapper";
import AlternativeTitle from "components/shared/AlternativeTitle";
import ButtonLink from "components/shared/ButtonLink";

import {
  CardsWrapper,
  Card
} from "./components";

export default function Locations() {
  const locations = [
    { img: "boca", title: "Corporate Office", subtitle: "Boca Raton, FL (USA)", address: "4700 NW 2nd AVE.\nSuite #202\nBoca Raton, FL 33431", link: "https://goo.gl/maps/tTgwdNU4CedS5fXD8" },
    { img: "miami", title: "Warehouse", subtitle: "Miami, FL (USA)", address: "1400 NW 121 Avenue\nSuite #100\nMiami, FL 33182", link: "https://goo.gl/maps/1tZHTj629hRGfhEm6" },
    { img: "houston", title: "Warehouse", subtitle: "Houston, TX (USA)", address: "14320 Interdrive E,\nHouston, TX 77032", link: "https://goo.gl/maps/ptQTreC5Nz9RRwJP9" },
    { img: "manaus", title: "International Office", subtitle: "Manaus, AM (Brazil)", address: "Av. Dr. Theom. Costa, 811\nSuite #1215\nManaus, AM 69050-055", link: "https://goo.gl/maps/VL5hutbNepvceXAj7" },
  ];

  function parseLinebreak(string) {
    const lines = string.split("\n");
    return lines.map((line, index) =>
      <>
        {line}
        {index != lines.length - 1 && <br />}
      </>
    );
  }

  return (
    <SectionWrapper id="locations">
      <div>
        <AlternativeTitle>Locations</AlternativeTitle>

        <CardsWrapper>
          {locations.map((location, index) =>

            <Card key={index}>
              <img src={`${process.env.img}/components/Locations/${location.img}.jpg`} />

              <div>
                <h4>
                  <a href={location.link} target="_blank" rel="noreferrer">
                    {location.title} - {location.subtitle}<i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </h4>

                <p>{parseLinebreak(location.address)}</p>
              </div>

              <div className="hover">
                <ButtonLink href={location.link} target="_blank" rel="noreferrer">
                  <i className="fas fa-location-dot" />
                  View in Maps
                </ButtonLink>
              </div>
            </Card>
          )}
        </CardsWrapper>
      </div>
    </SectionWrapper>
  );
}