import _ from "lodash";

export default function getCurrency(countryName) {
  const countries = require("../data/countries.json");

  const country = _.find(countries, { countryName: countryName });

  return country.currencyCode;
}
