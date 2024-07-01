import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));

const ContentBox = styled(Box)(({ theme }) => ({
  width: "564px",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  fontFamily: "Orbitron",
  fontWeight: "800",
  textAlign: "center",
  marginBottom: "64px",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    lineHeight: "135%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "125%",
  },
}));

const Content = styled(Typography)(({ theme }) => ({
  // marginTop: "30px",
  color: "#ffffff",
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "150%",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export default function About() {
  return (
    <Container>
      <ContentBox>
        <Title variant="h3" className="adventure_title text-center">
          About Us
        </Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tristique leo et nibh egestas porttitor. Integer condimentum
          scelerisque sapien eget tincidunt. Proin consectetur, nisi eu
          convallis sagittis, nulla ipsum bibendum leo, in interdum magna neque
          in odio. Morbi ut risus eget nulla finibus molestie.
        </Content>
      </ContentBox>
    </Container>
  );
}
