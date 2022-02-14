import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { popAsc, popDsc } from "../../../redux/actions/countryActions";
import { rootState } from "../../../redux/reducers";

export default function PopWise() {
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
        PopulationWise
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
            dispatch(popAsc(countries));
          }}
        >
          Ascending Order
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(popDsc(countries));
          }}
        >
          Descending Order
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/pop-asc">Ascending Order</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/pop-dsc">Descending Order</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
