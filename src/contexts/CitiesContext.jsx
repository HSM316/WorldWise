import { createContext, useContext } from "react";

const cities = [
  {
    cityName: "Madrid",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2027-07-15T08:22:53.976Z",
    notes: "",
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    id: 17806751,
  },
  {
    cityName: "Berlin",
    country: "Germany",
    emoji: "🇩🇪",
    date: "2027-02-12T09:24:11.863Z",
    notes: "Amazing 😃",
    position: {
      lat: 52.53586782505711,
      lng: 13.376933665713324,
    },
    id: 98443197,
  },
  {
    cityName: "Castello de la Plana",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2025-10-29T07:16:07.029Z",
    notes: "",
    position: {
      lat: "40.026825750639496",
      lng: "-0.029525756835937503",
    },
    id: 98443198,
  },
  {
    cityName: "Castello de la Plana",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2025-12-08T12:46:02.810Z",
    notes: "",
    position: {
      lat: "40.0186754526281",
      lng: "-0.01699447631835938",
    },
    id: 98443199,
  },
];

const CitiesContext = createContext();

export function CitiesProvider({ children }) {
  return (
    <CitiesContext.Provider value={{ cities }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of the CitiesProvider.");
  return context;
}
