import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AllCountriesMenu from "./MenuComponents/AllCountriesMenu";
import AlphaWise from "./MenuComponents/AlphaWise";
import AreaWise from "./MenuComponents/AreaWise";
import LangWise from "./MenuComponents/LangWise";
import PopWise from "./MenuComponents/PopWise";
import RegionWise from "./MenuComponents/RegionWise";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <AllCountriesMenu />
          <AlphaWise />
          <AreaWise />
          <LangWise />
          <PopWise />
          <RegionWise />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
