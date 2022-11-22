import React from "react";
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import SectionWrapper from "components/shared/SectionWrapper";

import {
  Card
} from "./components";

export default function About() {
  const p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar nunc eget leo vehicula, eu imperdiet sapien vehicula. " +
    "Nulla vehicula sapien non augue molestie eleifend. Vivamus a est lorem. Morbi elit lectus, iaculis nec ullamcorper gravida, dapibus quis ipsum. " +
    "Nam dapibus elementum lacus, at facilisis metus. Donec sed dui ligula. Nam porttitor maximus ligula, non ultrices quam sollicitudin at. " +
    "Aenean sollicitudin dapibus felis. Morbi ac ligula libero. Proin vitae sem lectus. Proin non eros in nulla vulputate scelerisque. " +
    "In id odio nisi. Maecenas at ullamcorper risus, non porta leo. Nunc vitae ultricies nisi, et tincidunt felis. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

  const p2 = "Praesent venenatis sodales consectetur. Donec finibus at mi quis faucibus. Sed hendrerit dolor in viverra ullamcorper. Aliquam at lobortis metus. " +
    "Fusce vestibulum faucibus metus, et dictum felis laoreet nec. Nunc nec volutpat enim, eu vestibulum tellus. Donec tempus sollicitudin erat";

  return (
    <SectionWrapper id="about-us">
      <div>
        <FadeIn>
          <Title>About us</Title>
        </FadeIn>

        <Card>
          <div>
            <h2><i className="fa-solid fa-chevron-right"></i> Our mission</h2>

            <p>{p1}</p>
            <p>{p2}</p>
          </div>

          <div>
            <h2><i className="fa-solid fa-chevron-right"></i> Our mission</h2>

            <p>{p1}</p>
            <p>{p2}</p>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}