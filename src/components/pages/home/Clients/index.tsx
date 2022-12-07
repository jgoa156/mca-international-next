import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import SectionWrapper from "components/shared/SectionWrapper";
import AlternativeTitle from "components/shared/AlternativeTitle";

import {
  LogoWrapper,
  Logo
} from "./components";

export default function Clients() {
  const clients = [
    { img: "andradegutierrez", alt: "Andrade Gutierrez" },
    { img: "braserv", alt: "BRASERV Petróleo", height: "100px" },
    { img: "ccpolymers", alt: "CC Polymers" },
    { img: "cmg", alt: "Cargo Management Group", height: "65px" },
    { img: "cobra", alt: "Cobra Group" },
    { img: "elpaso", alt: "El Paso Energy" },
    { img: "eneva", alt: "Eneva" },
    { img: "generalelectric", alt: "General Electric", height: "65px" },
    { img: "great", alt: "Great Holdings", height: "40px" },
    { img: "higharctic", alt: "High Arctic Energy Services" },
    { img: "maxenergy", alt: "Max Energy Innovation" },
    { img: "na", alt: "N&A Engineering Solutions", height: "85px" },
    { img: "origem", alt: "Origem Energia", height: "30px" },
    { img: "pk", alt: "PK OEM Parts", height: "70px" },
    { img: "prio", alt: "PRIO (Petrorio)", height: "30px" },
    { img: "rps", alt: "RPS Group", height: "40px" },
    { img: "siemens", alt: "Siemens", height: "30px" },
    { img: "tuscany", alt: "Tuscany" },
    { img: "utc", alt: "UTC Overseas", height: "100px" },
  ];

  return (
    <SectionWrapper id="clients">
      <div>
        <AlternativeTitle>Our clients</AlternativeTitle>

        <LogoWrapper>
          {clients.map((client, index) =>
            <OverlayTrigger
              key={"bottom"}
              placement={"bottom"}
              overlay={
                <Tooltip>{client.alt}</Tooltip>
              }>
              <Logo
                key={index}
                alt={client.alt}
                height={client.height ? client.height : undefined}
                src={`${process.env.img}/components/Clients/${client.img}.png`}
              />
            </OverlayTrigger>
          )}

        </LogoWrapper>
      </div>
    </SectionWrapper>
  );
}