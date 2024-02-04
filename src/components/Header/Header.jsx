import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { HeaderLink } from "./Header.styled";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar sx={{ justifyContent: "center", background: "#3470ff" }}>
            <HeaderLink to="/" sx={{ color: "#fff" }}>
              Home
            </HeaderLink>
            <HeaderLink to="catalog" sx={{ color: "#fff" }}>
              Catalog
            </HeaderLink>
            <HeaderLink to="favorites" sx={{ color: "#fff" }}>
              Favorites
            </HeaderLink>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
