import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../redux/reducers";
import { areaAsc, areaDsc } from "../../../redux/actions/sortingActions";

export default function AreaWise() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { filterCountry } = useSelector(
    (state: rootState) => state.countryReducer
  );
  const dispatch = useDispatch();
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
        Sort By Area
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
            dispatch(areaAsc(filterCountry));
          }}
        >
          Ascending Order
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(areaDsc(filterCountry));
          }}
        >
          Descending Order
        </MenuItem>
      </Menu>
    </div>
  );
}
