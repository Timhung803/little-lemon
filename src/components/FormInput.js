import React, { useState } from "react";
import "./FormInput.css";

function FormInput(props) {
  const [clicked, setClicked] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleChicked = (e) => {
    setClicked(true);
  };

  return (
    <>
      <div className="formInput">
        <label htmlFor={label} aria-label={label}>
          {label}
        </label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={() => inputProps.name !== "lastname" && handleChicked()}
          onFocus={() => inputProps.name === "lastname" && setClicked(false)}
          clicked={clicked.toString()}
        />
        <span className="error">{errorMessage}</span>
      </div>
    </>
  );
}

export default FormInput;
