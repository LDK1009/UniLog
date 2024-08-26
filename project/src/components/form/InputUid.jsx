"use client";

import React from "react";

export default function InputUid({ handleChange, value, className }) {
  return (
    <input className={className} type="text" name="uid" value={value} onChange={(e) => handleChange(e)} required />
  );
}