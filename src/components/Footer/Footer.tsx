import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Copyright Integrify 2022
          </Typography>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
