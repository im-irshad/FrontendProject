import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Detail from "./components/Detail/Detail";
import Favourite from "./components/Favourite/Favourite";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { rootState } from "./redux/reducers";
import CountryGallery from "./components/CountryGallery/CountryGallery";
import { CssBaseline } from "@mui/material";
import MainTable from "./components/CountriesTable/MainTable";
import LandingPage1 from "./components/LandingPage/LandingPage1";

function App() {
  const { filterCountry } = useSelector(
    (state: rootState) => state.countryReducer
  );
  const { sorted } = useSelector((state: rootState) => state.sortingReducer);
  const { mode } = useSelector((state: rootState) => state.themeReducer);
  console.log(sorted);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#3C415C",
        contrastText: "#B4A5A5",
      },
      background: {
        default: "#423F3E",
      },
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#3E497A",
        contrastText: "#F1D00A",
      },
      secondary: {
        main: "#F0F0F0",
      },
      text: {
        primary: "#3E497A",
      },
      background: {
        paper: "#F0F0F0",
      },
    },
  });

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage1 />} />
          <Route path="/detail/:name" element={<Detail />} />
          <Route path="/detail/images/:name" element={<CountryGallery />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route
            path="/allcountries"
            element={<MainTable countries={filterCountry} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
