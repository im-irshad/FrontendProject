import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import AllCountriesMenu from "./MenuComponents/AllCountriesMenu";
import AlphaWise from "./MenuComponents/AlphaWise";
import AreaWise from "./MenuComponents/AreaWise";
import PopWise from "./MenuComponents/PopWise";
import RegionWise from "./MenuComponents/RegionWise";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <AllCountriesMenu />
          <AlphaWise />
          <AreaWise />
          <PopWise />
          <RegionWise />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
