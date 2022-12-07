import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Scrollspy from "react-scrollspy";

import {
  HeaderWrapper,
  TitleWrapper,
  LinkWrapper,
  GoToTop,

  Burger,
  Sidenav,
  SidenavBackground
} from "./components";

export default function Header() {
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)"
  });
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showSidenav, setShowSidenav] = useState(false);

  const links = [
    { title: "About us", href: "about" },
    { title: "Sectors & Industries", href: "sectors" },
    { title: "What we supply", href: "supply" },
    { title: "Locations", href: "locations" },
    { title: "Our clients", href: "clients" },
    { title: "Contact us", href: "contact" },
  ];

  // Go to top
  const bannerHeight = isMobile ? 500 : 700;
  useEffect(() => {
    setLoaded(true);
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY >= bannerHeight - 50);
      setShowGoToTop(window.scrollY >= bannerHeight + 50);
    });
  }, []);

  return (
    <HeaderWrapper scrolled={scrolled}>
      <nav>
        <TitleWrapper scrolled={scrolled}>
          <img src={`${process.env.img}/logo-color.png`} />
        </TitleWrapper>

        {loaded
          ? !isTablet
            ? (
              <LinkWrapper scrolled={scrolled}>
                <Scrollspy items={links.map((link) => link.href)} currentClassName={"spy"} offset={-100}>
                  {links.map((link, index) => {
                    return <a key={index} href={`#${link.href}`} data-to-scrollspy-id={link.href}>{link.title}</a>
                  })}
                </Scrollspy>
              </LinkWrapper>
            )
            : (
              <Burger scrolled={scrolled} onClick={() => setShowSidenav(true)} aria-expanded={showSidenav}>
                <i className={"fas fa-bars"} />
              </Burger>
            )
          : null
        }

        <GoToTop href={"#banner"} showGoToTop={showGoToTop} className={"fas fa-arrow-up"} />
      </nav>

      {isTablet
        ? (<>
          <Sidenav show={showSidenav}>
            <div>
              <div className={"buttonWrapper"}>
                <button
                  className={"close"}
                  onClick={() => setShowSidenav(false)}>
                  <i className={"fas fa-times"} />
                </button>
              </div>

              <LinkWrapper scrolled={true}>
                {links.map((link, index) => {
                  return <a key={index} href={`#${link.href}`} data-to-scrollspy-id={link.href}>{link.title}</a>
                })}
              </LinkWrapper>
            </div>
          </Sidenav>

          {showSidenav &&
            <SidenavBackground onClick={() => setShowSidenav(false)} show={showSidenav} />
          }
        </>)
        : null
      }
    </HeaderWrapper>
  );
}