/* eslint-disable no-unused-vars */
import React from "react";
import { Box, styled } from "@mui/material";

import particlesSvg from "../../assets/svgIcons/particles";

export default function VerticalAnimatedLines(props) {
  return (
    <Main>
      <ParticlesContainer className="image-wrapper">
        {particlesSvg}
      </ParticlesContainer>
    </Main>
  );
}

const Main = styled(Box)(() => ({
  position: "relative",
  height: "100vh",
}));
const ParticlesContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  top: "-50%",
}));
