import React from "react";
import SectionWrapper from "components/shared/SectionWrapper";
import AlternativeTitle from "components/shared/AlternativeTitle";

import {
} from "./components";

export default function Clients() {
  const clients = [
    { img: "", alt: "" }
  ];

  return (
    <SectionWrapper id="clients">
      <div>
        <AlternativeTitle>Our clients</AlternativeTitle>


      </div>
    </SectionWrapper>
  );
}