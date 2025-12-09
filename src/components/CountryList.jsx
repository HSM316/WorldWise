import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

function CountryList() {
  const { cities } = useCities();
  const visited = new Set();

  const countries = cities.filter((city) => {
    if (visited.has(city.country)) return false;
    visited.add(city.country);
    return true;
  });

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
