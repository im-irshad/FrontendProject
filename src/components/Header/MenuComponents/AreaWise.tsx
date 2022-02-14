import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../redux/reducers";
import { areaAsc, areaDsc } from "../../../redux/actions/countryActions";

export default function AreaWise() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { loading, sorted, countries } = useSelector(
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
        AreaWise
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
            dispatch(areaAsc(countries));
          }}
        >
          Ascending Order
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(areaDsc(countries));
          }}
        >
          Descending Order
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/area-asc">Ascending Order</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/area-dsc">Descending Order</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
