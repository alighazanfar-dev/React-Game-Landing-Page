/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";

import VerticalAnimatedLines from "./VerticalAnimatedLines";
import useInViewPort from "../../hooks/useInViewPort";

export default function AdventurePaste({ permanentOverlay = false }) {
  const backdropRef = useRef(null);

  const onEnterViewPort = (dir) => {
    const backdrop = backdropRef.current;
    if (backdrop) backdrop.style.transition = "all 3s ease";
    if (backdrop) backdrop.style.background = "rgba(0,0,0,0.7)";
  };
  const onLeaveViewPort = (dir) => {
    console.log("AdventurePaste leave dir", dir);
    const backdrop = backdropRef.current;
    if (backdrop && dir === "top" && !permanentOverlay) {
      if (backdrop) backdrop.style.transition = "none";
      backdrop.style.background = "transparent";
    }
  };

  const sectionRef = useInViewPort(onEnterViewPort, onLeaveViewPort);

  return (
    <Main className="section2" ref={sectionRef}>
      <Backdrop
        ref={backdropRef}
        style={permanentOverlay ? { background: "rgba(0,0,0,0.7)" } : {}}
      />
      <VerticalLinesWrapper>
        <VerticalAnimatedLines />
      </VerticalLinesWrapper>
    </Main>
  );
}

const Main = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  height: "100vh",
  width: "100vw",
  background: "transparent",
}));

const Backdrop = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  transitionDelay: "1s",
}));

const VerticalLinesWrapper = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1,
}));
