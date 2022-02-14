type DarkMode = {
  type: "DARK_MODE";
  payload: Boolean;
};

export type Country = {
  name: { common: string };
  flags: { png: string };
  capital: string;
  languages: MyLang;
  population: number;
  region: string;
  area: number;
};

type MyLang = {
  [key: string]: string;
};

type GetCountries = {
  type: "GET_COUNTRIES";
  payload: {
    countries: Country[];
  };
};
type SortingZtoA = {
  type: "SORTING_Z_TO_A";
  payload: {
    countries: Country[];
  };
};
type SortingAtoZ = {
  type: "SORTING_A_TO_Z";
  payload: {
    countries: Country[];
  };
};

type GetCountry = {
  type: "GET_COUNTRY";
  payload: {
    country: Country[];
  };
};

type SearchCountries = {
  type: "SEARCH_COUNTRY";
  payload: string;
};

type Loading = {
  type: "LOADING";
};

type Loading1 = {
  type: "LOADING1";
};

type AddToFavourite = {
  type: "ADD_FAVOURITE";
  payload: {
    addCountry: Country;
  };
};

type RemoveFavourite = {
  type: "REMOVE_FAVOURITE";
  payload: {
    rmvCountry: Country;
  };
};

type RegionEuro = {
  type: "REGION_EURO";
  payload: {
    countries: Country[];
  };
};

type AreaAsc = {
  type: "AREA_ASC";
  payload: {
    countries: Country[];
  };
};

type AreaDsc = {
  type: "AREA_DSC";
  payload: {
    countries: Country[];
  };
};

type LangEng = {
  type: "LANG_ENG";
  payload: {
    countries: Country[];
  };
};

type PopAsc = {
  type: "POP_ASC";
  payload: {
    countries: Country[];
  };
};

type PopDsc = {
  type: "POP_DSC";
  payload: {
    countries: Country[];
  };
};

export type AllActions =
  | DarkMode
  | GetCountries
  | GetCountry
  | SearchCountries
  | Loading
  | Loading1
  | AddToFavourite
  | RemoveFavourite
  | SortingZtoA
  | SortingAtoZ
  | PopDsc
  | PopAsc
  | LangEng
  | AreaDsc
  | AreaAsc
  | RegionEuro;
