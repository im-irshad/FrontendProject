import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourite,
  fetchCountries,
  removeFavourite,
} from "../../redux/actions/countryActions";
import { Country } from "../../types";
import { rootState } from "../../redux/reducers/";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useEffect } from "react";
import TableC from "./TableC";

export default function CountriesTable() {
  const { loading, countries, filterCountry } = useSelector(
    (state: rootState) => state.countryReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  console.log("countries", countries);
  console.log("filter country ", filterCountry);
  return (
    <div>
      {loading ? (
        <div>loading ...</div>
      ) : filterCountry.length === 0 ? (
        <TableC countries={countries} />
      ) : (
        <TableC countries={filterCountry} />
      )}
    </div>
  );
}
