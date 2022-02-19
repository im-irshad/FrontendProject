import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../redux/reducers";
import { popAsc, popDsc } from "../../../redux/actions/sortingActions";
import { useState } from "react";

export default function PopWise() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const { filterCountry } = useSelector(
    (state: rootState) => state.countryReducer
  );
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
        Sort: Population
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
            dispatch(popAsc(filterCountry));
          }}
        >
          Ascending Order
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(popDsc(filterCountry));
          }}
        >
          Descending Order
        </MenuItem>
      </Menu>
    </div>
  );
}
