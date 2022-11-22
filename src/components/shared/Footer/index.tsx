import React from "react";

import { SectionWrapper, FooterText } from "./components";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <SectionWrapper>
      <div>
        <FooterText>
          MCA International, {year}
        </FooterText>
      </div>
    </SectionWrapper>
  );
}