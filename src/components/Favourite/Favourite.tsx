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

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Country } from "../../types";
import { rootState } from "../../redux/reducers";
import Header from "../Header/Header";
import {
  addToFavourite,
  removeFavourite,
} from "../../redux/actions/favouriteActions";

export default function Favourite() {
  const dispatch = useDispatch();
  const { favouriteCountry } = useSelector(
    (state: rootState) => state.favouriteReducer
  );

  return (
    <div>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Capital City</TableCell>
              <TableCell>Languages</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Remove: Favourtie</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favouriteCountry.map((country: Country) => (
              <TableRow
                key={country.name.common}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Avatar alt="country flags" src={country.flags.png} />
                </TableCell>
                <TableCell>
                  <Link to={`/detail/${country.name.common}`}>
                    {country.name.common}
                  </Link>
                </TableCell>
                <TableCell>{country.capital}</TableCell>
                <TableCell>
                  {country.languages ? (
                    Object.keys(country.languages).map((value, index) => (
                      <p key={index}>{country.languages[value]}</p>
                    ))
                  ) : (
                    <p>None</p>
                  )}
                </TableCell>
                <TableCell>{country.population}</TableCell>
                <TableCell>{country.region}</TableCell>
                <TableCell>
                  <Checkbox
                    checked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 36 } }}
                    onClick={() => {
                      let check = favouriteCountry.includes(country);
                      if (!check) {
                        dispatch(addToFavourite(country));
                      } else {
                        dispatch(removeFavourite(country));
                      }
                    }}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
