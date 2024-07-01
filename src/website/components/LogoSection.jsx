/* eslint-disable no-unused-vars */
import React from "react";

import Lottie from "react-lottie";

import animationData from "../../assets/lotties/logo-animation.json";
import { useMediaQuery, useTheme } from "@mui/material";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function LogoSection() {
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const size = isExtraSmallScreen ? 100 : 200;

  return (
    <div className="log_img_bg sect-width section" align="center">
      <div>
        <Lottie options={defaultOptions} height={size} width={size} />
      </div>
    </div>
  );
}
