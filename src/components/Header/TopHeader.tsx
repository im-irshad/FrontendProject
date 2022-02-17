import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton, Tooltip } from "@mui/material";

export default function TopHeader() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar sx={{ flexDirection: "row-reverse", color: "#F1D00A" }}>
          <Tooltip title="Contact Us">
            <ContactPageIcon />
          </Tooltip>
          <Tooltip title="About Us">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Login">
            <IconButton>
              <LoginIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
