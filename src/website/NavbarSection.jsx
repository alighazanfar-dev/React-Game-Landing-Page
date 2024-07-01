import React, { useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as MuiLink, styled } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

import logoImg from "../assets/images/logoImg.png";
import menuClose from "../assets/images/Close.png";

import "../assets/navbar.css";
import { SvgIcon } from "../assets/svgIcons";

const navItems = ["Home", "About", "News"];

const NavbarSection = () => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const goToHome = () => {
    setClickedButton("Home");
    navigate("/");
  };

  const handleButtonClick = (item) => {
    setClickedButton(item);
    if (item === "Home") {
      navigate("/");
    } else {
      navigate(`/${item.toLowerCase()}`);
    }
  };
const CloseIcon = styled("img")({
    color: "#fff",
    fontSize: "24px",
    position: "absolute",
    right: "20px",
    top: "20px",
    cursor: "pointer",
  });
  const drawer = (
    <DrawerMain onClick={handleDrawerToggle}>
      <Box py={6} sx={{ flex: 1 }}>
        <CloseIcon src={menuClose} alt="closeIcone" />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <DrawerItemText onClick={() => handleButtonClick(item)}>
                  {item}
                </DrawerItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <DrawerFooter>
        {/* icons */}
        <DrawerFooterIconsRow>
          {/* discord */}
          <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.3618 28.79C15.3907 28.79 13.768 26.9809 13.768 24.7605C13.768 22.5401 15.3598 20.7289 17.3618 20.7289C19.3637 20.7289 20.9885 22.555 20.9566 24.7605C20.9566 26.982 19.3648 28.79 17.3618 28.79ZM30.6329 28.79C32.604 28.79 34.2266 26.9809 34.2266 24.7605C34.2266 22.5401 32.6349 20.7289 30.6329 20.7289C28.6309 20.7289 27.0061 22.555 27.0381 24.7605C27.0381 26.982 28.6309 28.79 30.6329 28.79ZM28.5691 10.1437C25.5465 9.68238 22.4492 9.68238 19.4266 10.1437C19.1538 9.48953 18.7511 8.68832 18.3974 8.06078C18.3345 7.95317 18.1694 8.01709 18.0692 8.03734C16.5265 8.35271 10.4694 9.91465 10.0731 10.571C5.69731 17.1074 4.00219 23.5065 4.00006 29.8309C3.99793 30.9188 4.04907 32.0034 4.14177 33.0869C4.1684 33.3735 4.113 33.3533 4.33674 33.5163C7.71526 35.9775 10.9883 37.4776 14.2038 38.4781C14.2549 38.493 14.3114 38.4759 14.3434 38.4323C15.1116 37.3817 15.7988 36.2747 16.3869 35.1091C16.421 35.0399 16.389 34.96 16.3176 34.9333C15.2298 34.52 14.1953 34.0171 13.198 33.446C13.1192 33.4012 13.1117 33.2883 13.1852 33.234C13.3951 33.0752 13.604 32.9133 13.8043 32.7481C13.8415 32.7183 13.8906 32.713 13.9342 32.7311C20.4484 35.7069 27.5506 35.7069 34.0658 32.7311C34.1084 32.7119 34.1585 32.7183 34.1947 32.7481C34.395 32.9133 34.6038 33.0763 34.8148 33.234C34.8883 33.2883 34.8798 33.4012 34.8009 33.446C33.8047 34.0171 32.7691 34.52 31.6813 34.9333C31.611 34.96 31.578 35.0399 31.612 35.1091C32.2002 36.2747 32.8863 37.3817 33.6556 38.4323C33.6886 38.4749 33.7451 38.493 33.7962 38.4781C37.0117 37.4787 40.2847 35.9775 43.6633 33.5163C43.887 33.3533 43.8316 33.3735 43.8582 33.0869C43.9509 32.0034 44.0021 30.9188 43.9999 29.8309C43.9967 23.5065 42.3016 17.1074 37.9259 10.571C37.5284 9.91465 31.4725 8.35271 29.9297 8.03734C29.8296 8.01816 29.6634 7.95423 29.6005 8.06078C29.2468 8.68726 28.844 9.48847 28.5713 10.1437H28.5691Z"
              fill="white"
            />
          </svg>

          {/* twitter */}
          <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7441 21.983L25.466 20.1304L17.0988 8H8L20.3755 26.1056L21.6514 27.9719L29.8721 39.9995H39.1711L26.7436 21.9825L26.7441 21.983ZM23.0122 26.3721L21.7379 24.5069L11.8403 10.026H16.0357L24.1064 21.7264L25.3851 23.5806L35.3127 37.9729H30.9423L23.0127 26.3715L23.0122 26.3721Z"
              fill="white"
            />
            <path
              d="M21.7379 24.5068L23.0122 26.372L21.652 27.9724L11.4261 39.9999H8.54004L20.3761 26.1055L21.7379 24.5068Z"
              fill="white"
            />
            <path
              d="M38.6327 8L26.7442 21.983L25.3851 23.5812L24.1064 21.7269L25.4661 20.1304L35.7997 8H38.6327Z"
              fill="white"
            />
          </svg>
        </DrawerFooterIconsRow>

        {/* copyright text */}
        <Typography>© Neureal {new Date().getFullYear()}</Typography>

        {/* quick links  */}
        <Box>
          <Typography variant="body2" color="inherit">
            <MuiLink
              component={Link}
              href="/terms-of-conditions"
              color="inherit"
              underline="always"
            >
              Terms of conditions
            </MuiLink>
            {" | "}
            <MuiLink
              component={Link}
              href="/privacy-policy"
              color="inherit"
              underline="always"
            >
              Privacy policy
            </MuiLink>
          </Typography>
        </Box>
      </DrawerFooter>
    </DrawerMain>
  );

  return (
    <Box
      sx={{
        display: "flex",
        background: "transparent",
        fontFamily: "  Poppins, sans-serif",
      }}
    >
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{
          background: "transparent",
          textAlign: "start",
          boxShadow: "none",
          zIndex: "1500 !important",
        }}
      >
        <Toolbar
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.6)",
          }}
          >
          <Box onClick={goToHome} sx={{ cursor: "pointer"}}>
            <img src={logoImg} alt="Logo" width={33} height={40} />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleButtonClick(item)}
                sx={{
                  color: clickedButton === item ? "#218AFF" : "#fff",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "  16px",
                  fontWeight: "700",
                  px: "24px",
                  textTransform: "capitalize",
                }}
                className={clickedButton === item ? "clicked" : ""}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100vw",
            },
            zIndex: "1505 !important",
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavbarSection;

const DrawerItemText = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(3),
  fontWeight: "700",
  color: "#fff",
  textTransform: "capitalize",
  textAlign: "center",
  fontFamily: "  Poppins, sans-serif",
}));
const DrawerMain = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: "#000",
  color: "#fff",
  flex: 1,
}));
const DrawerFooter = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  "& *": { fontFamily: "  Poppins, sans-serif" },
}));
const DrawerFooterIconsRow = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
}));
