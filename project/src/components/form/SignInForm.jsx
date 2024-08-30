"use client";

import React, { useState } from "react";
import InputId from "./InputUid";
import InputPassword from "./InputPassword";
import InputNickname from "./InputNickname";
import style from "@/styles/components/SignInForm.module.scss";
import axios from "axios";

const SignInForm = () => {
  // 여러 개의 인풋 필드를 상태로 관리
  const [formData, setFormData] = useState({
    uid: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // 해당 인풋 필드의 값을 업데이트
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/sign-in`, formData);
      console.log(res);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <>
      <h1>SignUp Form</h1>
      <form onSubmit={handleSubmit}>
      <div className={style["container"]}>
        <InputId className={style["input-uid"]} value={formData.uid} handleChange={handleChange} />
        <InputPassword className={style["input-password"]} value={formData.password} handleChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignInForm;
