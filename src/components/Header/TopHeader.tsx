import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function TopHeader() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar sx={{ flexDirection: "row-reverse" }}>
          <Button color="inherit">CustomerService</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">SignUp</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
