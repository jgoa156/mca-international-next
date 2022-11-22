import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import FadeIn from "components/shared/Animations/FadeIn";

import {
  SectionWrapper,

  BackgroundWrapper,
  Background,

  Intro
} from "./components";

export default function Banner() {
  const [parallaxY, setParallaxY] = useState("50%");
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)"
  });

  const bannerHeight = isTablet ? 400 : 500;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= bannerHeight) {
        let y = (window.scrollY / bannerHeight) * 100;
        setParallaxY(`calc(50% - ${y / 10}%)`);
      }
    });
  }, []);

  return (
    <SectionWrapper id="banner">
      <BackgroundWrapper>
        <Background parallaxY={parallaxY} src={`${process.env.img}/components/Banner/bg.jpg`} />
      </BackgroundWrapper>

      <div>
        <FadeIn showOnLoad={true}>
          <Intro>
            <h1>
              Lorem ipsum dolor sit<br />
              ametconsectetur adipiscing elit
            </h1>
          </Intro>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}