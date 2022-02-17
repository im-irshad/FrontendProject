import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Detail from "./components/Detail/Detail";
import Favourite from "./components/Favourite/Favourite";
import CountriesTable from "./components/CountriesTable/CountriesTable";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { rootState } from "./redux/reducers";
import CountryGallery from "./components/CountryGallery/CountryGallery";

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
      primary: {
        main: "#3E497A",
        contrastText: "#F1D00A",
      },
      background: {
        paper: "#F0F0F0",
      },
    },
  });

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:name" element={<Detail />} />
          <Route path="/detail/images/:name" element={<CountryGallery />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/allcountries" element={<CountriesTable />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
