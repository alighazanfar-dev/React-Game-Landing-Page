/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import videoSrc from "../../assets/images/video.mp4";
import arrow from "../../assets/images/arrow.png";
import useInViewPort from "../../hooks/useInViewPort";

export default function Adventure({ nextScreen, onVideoLoaded }) {
  const [isAdventure, setIsAdventure] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [videoClicked, setVideoClicked] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const titleRef = useRef(null);

  const onEnterViewPort = (dir) => {
    const title = titleRef.current;
    if (title) title.style.opacity = 1;
  };
  const onLeaveViewPort = (dir) => {
    const title = titleRef.current;
    if (title) title.style.opacity = 0;
  };

  const sectionRef = useInViewPort(onEnterViewPort, onLeaveViewPort);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log("Video is successfully loaded and ready to play");
    onVideoLoaded();
  };

  useEffect(() => {
    let index = 0;
    const fullText = "A" + (isAdventure ? "ADVENTURE" : "RULES");
    const typingDuration = 1000; // 1 second
    const typingInterval = typingDuration / fullText.length; // Calculate interval based on text length

    setDisplayedText("");

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, typingInterval);

    return () => clearInterval(intervalId);
  }, [isAdventure]);

  useEffect(() => {
    const toggleText = () => {
      setIsAdventure((prev) => !prev);
    };

    const intervalId = setInterval(toggleText, 3500); // 1 second typing + 2.5 seconds pause

    return () => clearInterval(intervalId);
  }, []);

  const handleVideoClick = () => {
    nextScreen();
    // setVideoClicked((prev) => !prev);
  };

  return (
    <>
      <SectionBox className="section2">
        <StyledContainer videoClicked={videoClicked}>
          <AdventureTitle
            ref={titleRef}
            variant="h3"
            className="adventure_title"
          >
            YOUR
            <Box
              component="span"
              height={48}
              marginBottom={1}
              sx={{ display: "block" }}
            >
              {displayedText}
            </Box>
          </AdventureTitle>
          <ArrowIcon
            src={arrow}
            alt="arrow"
            width={32}
            height={32}
            className="arrow_icon"
            onClick={handleVideoClick}
          />
        </StyledContainer>
      </SectionBox>

      <BackgroundVideo
        id="background-video"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
      />
    </>
  );
}

const SectionBox = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "100vh",
  minWidth: "100vw",
  textAlign: "center",
  display: "flex",
  alignItems: "end",
  background: "transparent",
  zIndex: 1,
}));

const StyledContainer = styled(Container)(({ videoClicked }) => ({
  position: "relative",
  zIndex: 2,
  ...(videoClicked && {
    position: "relative",
    right: "-11%",
  }),
}));

const AdventureTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  position: "fixed",
  bottom: "10vh",
  fontFamily: "Orbitron",
  whiteSpace: "pre-line",
  fontWeight: "800",
  left: "50%",
  transform: "translateX(-50%)",
  transition: "opacity 0.5s ease",
  opacity: 1,
}));

const ArrowIcon = styled("img")({
  color: "#fff",
  position: "relative",
  zIndex: 3,
  cursor: "pointer",
});

const BackgroundVideo = styled("video")({
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  opacity: 1,
  zIndex: -1,
});
