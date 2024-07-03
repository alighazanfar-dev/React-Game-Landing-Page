import React from "react";
import Box from "@mui/material/Box";

import jerry from "../../assets/images/hero.png";

import "../../assets/cursor.css";
import "../../assets/jerry.css";

import VerticalAnimatedLines from "./VerticalAnimatedLines";
import useInViewPort from "../../hooks/useInViewPort";

export default function Jerry({ fadeRightAnimation }) {
  const verticalAnimatedLinesRef = React.useRef(null);
  const logoContainerRef = React.useRef(null);

  const onEnterViewPort = (dir) => {
    console.log("Jerry section is visible", dir);

    const logoContainer = logoContainerRef.current;
    const verticalAnimatedLines = verticalAnimatedLinesRef.current;

    logoContainer.style.opacity = 1;
    logoContainer.style.top = "50%";
    // verticalAnimatedLines.style.left = "50%";
    // verticalAnimatedLines.style.opacity = 1;
  };

  const onLeaveViewPort = (dir) => {
    const logoContainer = logoContainerRef.current;
    const verticalAnimatedLines = verticalAnimatedLinesRef.current;

    if (dir === "bottom") {
      logoContainer.style.top = "130%";
      // verticalAnimatedLines.style.left = "20%";
      // verticalAnimatedLines.style.opacity = 0.6;
    } else {
      logoContainer.style.opacity = 0;
    }
  };

  const sectionRef = useInViewPort(onEnterViewPort, onLeaveViewPort);

  return (
    <div ref={sectionRef}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        className={`jerry_main`}
      >
        <Box
          ref={verticalAnimatedLinesRef}
          className="gamePreviewSection2VerticalLinesCont"
        >
          <VerticalAnimatedLines />
        </Box>

        <Box
          ref={logoContainerRef}
          className="gamePreviewSectionLogoContainer"
          sx={{ opacity: 0 }}
        >
          <img
            src={jerry}
            alt="jerry"
            className="gamePreviewSection1Logo box up-down transition3s "
          />
        </Box>
      </Box>
    </div>
  );
}
