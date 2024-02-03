// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from "@mui/material/Toolbar";
// import { Link } from "react-router-dom";

// function DrawerAppBar() {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             <Link to="/" sx={{ color: "#fff" }}>
//               Home
//             </Link>
//             <Link to="catalog" sx={{ color: "#fff" }}>
//               Catalog
//             </Link>
//             <Link to="favorite" sx={{ color: "#fff" }}>
//               Favorite
//             </Link>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default DrawerAppBar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-router-dom";
import { HeaderLink } from "./Header.styled";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";

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
          <Toolbar sx={{ justifyContent: "center" }}>
            <DirectionsCarFilledOutlinedIcon fontSize="large" />
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
