import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../redux/actions/countryActions";
import { rootState } from "../../redux/reducers/";
import BottomHeader from "../Header/BottomHeader";

import { useEffect } from "react";
import TableC from "./MainTable";

export default function CountriesTable() {
  const { loading, countries, filterCountry } = useSelector(
    (state: rootState) => state.countryReducer
  );

  return (
    <div>
      {loading ? <div>loading ...</div> : <TableC countries={filterCountry} />}
    </div>
  );
}
