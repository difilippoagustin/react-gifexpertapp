import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategorie = ({ setCategories }) => {
  const [valueInput, setvalueInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueInput.length > 3) {
      setCategories((categories) => [valueInput, ...categories]);
      setvalueInput("");
    }
  };
  const handleInputChange = (e) => {
    setvalueInput(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{valueInput}</p>
      <input type="text" value={valueInput} onChange={handleInputChange} />
    </form>
  );
};
AddCategorie.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
