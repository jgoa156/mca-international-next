import React from "react";

// Styled
import { AlternativeTitleStyled } from "./components";

export default function AlternativeTitle({ children }) {
  return (
    <AlternativeTitleStyled>
      <i className="fas fa-chevron-right" /> {children}
    </AlternativeTitleStyled>
  );
}