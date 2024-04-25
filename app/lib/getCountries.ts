import countries from "world-countries";

const countriesFormatted = countries.map((item) => ({
  value: item.cca2,
  label: item.name.common,
  flag: item.flag,
  latLong: item.latlng,
  region: item.region,
}));

export const useCountries = () => {
  const getAllCountries = countriesFormatted;
  const getCountByValue = (value: string) => {
    return countriesFormatted.find((item) => item.value === value);
  };

  return {
    getAllCountries,
    getCountByValue,
  };
};
