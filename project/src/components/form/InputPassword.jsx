"use client";

import React from "react";

const InputPassword = ({ handleChange, value, className }) => {
  return (
    <input
      className={className}
      type="password"
      name="password"
      value={value}
      onChange={(e) => handleChange(e)}
      required
    />
  );
};

export default InputPassword;
