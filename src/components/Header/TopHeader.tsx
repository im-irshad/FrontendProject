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
        <Toolbar sx={{ flexDirection: "row-reverse", color: "primary" }}>
          <Tooltip title="Logout" color="inherit">
            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Contact Us">
            <IconButton color="inherit">
              <ContactPageIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="About Us">
            <IconButton color="inherit">
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Login" color="inherit">
            <IconButton>
              <LoginIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
