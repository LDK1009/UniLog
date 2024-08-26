"use client";

import React from "react";

const InputNickname = ({ handleChange, value, className }) => {
  return (
    <input className={className} type="text" name="nickname" value={value} onChange={(e) => handleChange(e)} required />
  );
};

export default InputNickname;
