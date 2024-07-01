import React from "react";
import { Box, Typography } from "@mui/material";
import indicator from "../../../assets/images/indicator.png";
import Sindicator from "../../../assets/images/Sindicator.png";
import lightning from "../../../assets/images/lightning.png";
import lastBorder from "../../../assets/images/lastBorder.png";

export default function RoadmapSection() {
  const roadmapItems = [
    { date: "January, 2024", event: "Company founded" },
    { date: "April, 2024", event: "Launched 1st game" },
    { date: "June, 2024", event: "2 millions fundraised" },
    { date: "July, 2024", event: "Ship 2nd game" },
    { date: "September, 2024", event: "Ship 3rd game" },
  ];

  return (
    <>
      {/* Desktop view */}
      <Box display={{ xs: "none", md: "block" }} justifyContent="center">
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontFamily: "Orbitron",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "48px",
            }}
            className="adventure_title"
          >
            Roadmap
          </Typography>

          {/* roadmap slugs */}
          {roadmapItems.map((item, index) => (
            <Box
              key={index}
              display="flex"
              sx={{
                gap: "40px",
                marginBottom: "20px",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: { xs: "center", md: "stretch" },
              }}
            >
              <Typography
                color={item.event === "Ship 2nd game" ? "#FF4F17" : "#fff"}
                fontFamily="Poppins"
                width="200px"
                position="relative"
                top="11px"
                fontSize="16px"
                fontWeight="800"
                textAlign="end"
              >
                {item.date}
              </Typography>

              <Box position="relative">
                {index === roadmapItems.length - 1 ? (
                  <img
                    src={Sindicator}
                    alt="Sindicator"
                    className="Sindicator"
                  />
                ) : (
                  <img
                    component="img"
                    src={item.event === "Ship 2nd game" ? lightning : indicator}
                    alt="indicator"
                    width="48px"
                    sx={{ marginBottom: "20px" }}
                    className={
                      item.event === "Ship 2nd game" ? "lightningImg" : ""
                    }
                  />
                )}

                {index === roadmapItems.length - 1 ? (
                  <img
                    src={lastBorder}
                    alt="lastBorder"
                    className="lastBorder"
                  />
                ) : (
                  <span className="indicator_border"></span>
                )}
              </Box>
              <Typography
                color={item.event === "Ship 2nd game" ? "#FF4F17" : "#fff"}
                fontFamily="Poppins"
                position="relative"
                top="5px"
                fontSize="24px"
                fontWeight="400"
                textAlign="start"
              >
                {item.event}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Mobile view */}
      <Box display={{ xs: "block", md: "none" }}>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontFamily: "Orbitron",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "48px",
            }}
            className="adventure_title"
          >
            Roadmap
          </Typography>

          {/* Mobile-friendly roadmap */}
          {roadmapItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
               <Box position="relative">
                {index === roadmapItems.length - 1 ? (
                 <img style={{position: 'absolute', right: "270px"}}
                 component="img"
                 src={item.event === "Ship 2nd game" ? lightning : indicator}
                 alt="indicator"
                 width="48px"
                 sx={{ marginBottom: "20px" }}
                 className={
                   item.event === "Ship 2nd game" ? "lightningImg" : ""
                 }
               />
                ) : (
                  <img style={{position: 'absolute', right: "270px"}}
                    component="img"
                    src={item.event === "Ship 2nd game" ? lightning : indicator}
                    alt="indicator"
                    width="48px"
                    sx={{ marginBottom: "20px" }}
                    className={
                      item.event === "Ship 2nd game" ? "lightningImg" : ""
                    }
                  />
                )}

                {index === roadmapItems.length - 1 ? (
                   <span className="indicator_borders"></span>
                ) : (
                  <span className="indicator_border"></span>
                )}
              </Box>
              <Typography
                color={item.event === "Ship 2nd game" ? "#FF4F17" : "#fff"}
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="800"
                mb="8px"
              >
                {item.date}
              </Typography>
              
              <Typography
                color={item.event === "Ship 2nd game" ? "#FF4F17" : "#fff"}
                fontFamily="Poppins"
                fontSize="24px"
                fontWeight="400"
              >
                {item.event}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
 
