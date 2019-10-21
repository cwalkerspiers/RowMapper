import React from "react";
import ReactSelect from "react-select";

const customStyles = {
  container: provided => ({
    ...provided,
    width: 150,
    // height: "1.5rem"
    padding: 0
  }),
  option: provided => ({
    ...provided,
    fontWeight: "normal"
    // padding: 10
    // width: 500
  }),
  singleValue: provided => ({
    ...provided,
    fontWeight: "normal"
  })
};

const Select = props => {
  let { options, onChange, value } = props;

  if (!options) {
    return null;
  }

  return (
    <ReactSelect
      styles={customStyles}
      options={options}
      onChange={onChange}
      value={value}
    />
  );
};

export default Select;
