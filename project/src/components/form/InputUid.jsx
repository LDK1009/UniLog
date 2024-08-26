"use client";

import React, { useState } from "react";
import axios from "axios"; // axios import

export default function InputUid({ handleChange, value, className }) {
  return (
    <input className={className} type="text" name="uid" value={value} onChange={(e) => handleChange(e)} required />
  );
}
