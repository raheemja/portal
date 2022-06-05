import React, { Component } from "react";
import { Select, FormLabel } from "@chakra-ui/react";

class CountrySelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: require("../data/countries.json"),
    };
  }

  render() {
    const {
      id,
      name,
      value,
      selected,
      isReadOnly,
      isRequired,
      size,
    } = this.props;

    return (
      <>
        {isReadOnly ? <FormLabel htmlFor="country">Country</FormLabel> : null}
        <Select
          value={value}
          id={id}
          name={name}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          size={size}
          disabled={!isReadOnly}
        >
          {this.state.countries.map((country, i) => (
            <option
              selected={selected === country.name}
              key={i}
              value={country.name}
            >
              {country.name}
            </option>
          ))}
        </Select>
      </>
    );
  }
}

export default CountrySelector;
