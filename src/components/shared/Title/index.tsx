import React from "react";

import { TitleComponent } from "./components";

export default function Title({ ...props }) {
  return <TitleComponent {...props}>
    {props.children}
  </TitleComponent>;
}