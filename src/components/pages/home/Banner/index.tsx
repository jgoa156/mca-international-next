import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ButtonLink from "components/shared/ButtonLink";

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
  }, [bannerHeight]);

  return (
    <SectionWrapper id="banner">
      <BackgroundWrapper>
        <Background parallaxY={parallaxY} src={`${process.env.img}/components/Banner/bg.jpg`} />
      </BackgroundWrapper>

      <div>
        <div>
          <Intro>
            <img src={`${process.env.img}/logo-full.png`} />

            <h1>
              We supply all your industrial needs,
              <br />all from one single source
            </h1>

            <div>
              <ButtonLink href="#contact">
                <i className="fas fa-envelope" />
                Contact us
              </ButtonLink>
            </div>
          </Intro>
        </div>
      </div>
    </SectionWrapper>
  );
}