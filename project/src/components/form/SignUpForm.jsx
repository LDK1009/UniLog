"use client";

import React, { useEffect, useState } from "react";
import InputId from "./InputUid";
import InputPassword from "./InputPassword";
import InputNickname from "./InputNickname";
import style from "@/styles/components/SignUpForm.module.scss";

const SignUpForm = () => {
  // 여러 개의 인풋 필드를 상태로 관리
  const [formData, setFormData] = useState({
    nickname: "",
    uid: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Input Value:", value); // 여기서 전달된 값이 올바른지 확인
    setFormData((prev) => ({
      ...prev,
      [name]: value, // 해당 인풋 필드의 값을 업데이트
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <h1>SignUp Form</h1>
      <div className={style["container"]}>
        <InputNickname className={style["input-nickname"]} value={formData.nickname} handleChange={handleChange} />
        <InputId className={style["input-uid"]} value={formData.uid} handleChange={handleChange} />
        <InputPassword className={style["input-password"]} value={formData.password} handleChange={handleChange} />
      </div>
    </>
  );
};

export default SignUpForm;
