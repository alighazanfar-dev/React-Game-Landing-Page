"use client";
import React from "react";

import About from "./About";
import RoadmapSection from "./RoadmapSection";
import TeamSection from "./TeamSection";
import JoinUs from "../../components/JoinUs";
import SnapScroll from "../../components/SnapScrolling";

import "../../../assets/About/about.css";

function SectionAbout({ id, component: Component, ...rest }) {
  return (
    <div id={id} className="section" style={{marginTop: '10px', marginBottom: "10px"}}>
      <Component {...rest} />
    </div>
  );
}

export default function MainSection() {
  // useScrollSnap();
  return (
    <SnapScroll>
      <SectionAbout id="sectionAbout1" component={About} />
      <SectionAbout
        id="sectionAbout2"
        className="section2bg"
        component={TeamSection}
      />
      <SectionAbout id="sectionAbout3" component={RoadmapSection} />
      <SectionAbout id="sectionAbout4" component={JoinUs} />
    </SnapScroll>
  );
}
