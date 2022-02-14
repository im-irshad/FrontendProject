import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Detail from "./components/Detail/Detail";
import Favourite from "./components/Favourite/Favourite";
import CountriesTable from "./components/CountriesTable/CountriesTable";
import AlphaSort from "./components/Sorting/SortingByName/AlphaSort";
import SortZA from "./components/Sorting/SortingByName/SortZA";
import AreaDesc from "./components/Sorting/SortingByArea/AreaDesc";
import AreaAsc from "./components/Sorting/SortingByArea/AreaAsc";
import PopAsc from "./components/Sorting/SortingByPopulation/PopAsc";
import PopDsc from "./components/Sorting/SortingByPopulation/PopDsc";
import LangEng from "./components/Sorting/SortingByLanguage/LangEng";
import RegionEuro from "./components/Sorting/SortingByRegion/RegionEuro";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { rootState } from "./redux/reducers";

function App() {
  const { mode } = useSelector((state: rootState) => state.countryReducer);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:name" element={<Detail />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/allcountries" element={<CountriesTable />} />
          <Route path="/sort" element={<AlphaSort />} />
          <Route path="/sortr" element={<SortZA />} />
          <Route path="/area-dsc" element={<AreaDesc />} />
          <Route path="/area-asc" element={<AreaAsc />} />
          <Route path="/pop-asc" element={<PopAsc />} />
          <Route path="/pop-dsc" element={<PopDsc />} />
          <Route path="/eng-lang" element={<LangEng />} />
          <Route path="/euro-region" element={<RegionEuro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
