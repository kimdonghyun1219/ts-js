interface Contury {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: object;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Global {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CovidSummaryResponse {
  Countries: Contury[];
  Data: string;
  Global: Global;
  Message: string;
  // Date: "2022-07-03T13:09:43.587Z"
  // Global: {NewConfirmed: 238857, TotalConfirmed: 547466141, NewDeaths: 437, TotalDeaths: 6333257,…}
  // Date: "2022-07-03T13:09:43.587Z"
  // NewConfirmed: 238857
  // NewDeaths: 437
  // NewRecovered: 0
  // TotalConfirmed: 547466141
  // TotalDeaths: 6333257
  // TotalRecovered: 0
  // ID: "dce5cf22-77f8-4a39-8466-a976291c4c8c"
  // Message: ""
}

interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: any;
  Status: string;
}

export type CountrySummaryResponse = CountrySummaryInfo[];
