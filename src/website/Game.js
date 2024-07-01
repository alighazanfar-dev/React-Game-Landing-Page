"use client";
import React, { useState, useEffect } from "react";
import LogoSection from "./components/LogoSection";
import Adventure from "./components/Adventure";
import Jerry from "./components/Jerry";
import Battlegrounds from "./components/Battlegrounds";
import JerryGrounds from "./components/JerryGrounds";
import Tower from "./components/Tower";
import JoinUs from "./components/JoinUs";
import AdventurePaste from "./components/AdventurePaste";
import useCustomCursor from "../hooks/useCustomCursor";
import SnapScroll from "./components/SnapScrolling";

import "../assets/game.css";
import "../assets/jerry.css";

function Section({ id, component: Component, ...rest }) {
  return (
    <div id={id} className="section">
      <Component {...rest} />
    </div>
  );
}

const nextScreen = () => {
  const sections = document.querySelectorAll(".section");
  const sectionCount = sections.length;
  let currentSectionIndex = Array.from(sections).findIndex(
    (section) => Math.abs(section.getBoundingClientRect().top) < 1
  );

  if (currentSectionIndex < sectionCount - 1) {
    sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth" });
  }
};

export default function Game() {
  // useScrollSnap();
  useCustomCursor();

  const [isLoaded, setIsLoaded] = useState(false);
  const [minDelayPassed, setMinDelayPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinDelayPassed(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOnVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="">
      {(!isLoaded || !minDelayPassed) && (
        <div className="loader-animation-overlay">
          <Section id="section1" className="section1" component={LogoSection} />
        </div>
      )}
      <SnapScroll>
        <Section
          id="section2"
          component={Adventure}
          onVideoLoaded={handleOnVideoLoad}
          nextScreen={nextScreen}
        />
        <Section id="section3" component={AdventurePaste} />
        <Section id="section4" component={Jerry} />
        <Section id="section5" component={Battlegrounds} />
        <Section id="section6" component={JerryGrounds} />
        <Section id="section7" component={Tower} />
        <Section id="section8" component={JoinUs} />
      </SnapScroll>
    </div>
  );
}
