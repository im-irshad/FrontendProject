import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../redux/reducers";
import {
  sortingAtoZ,
  sortingZtoA,
} from "../../../redux/actions/countryActions";

export default function AlphaWise() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const { countries } = useSelector((state: rootState) => state.countryReducer);
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
      >
        Countries Alphabatically
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            dispatch(sortingAtoZ(countries));
          }}
        >
          Sort A-Z
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(sortingZtoA(countries));
          }}
        >
          Sort Z-A
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/sort">Sort A-Z</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/sortr">Sort Z-A</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
