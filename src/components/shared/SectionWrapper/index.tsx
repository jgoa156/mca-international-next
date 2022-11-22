import React from "react";

import { SectionWrapperComponent } from "./components";

export default function SectionWrapper({ ...props }) {
  return (
    <SectionWrapperComponent {...props}>
      {props.children}
    </SectionWrapperComponent>
  )
}