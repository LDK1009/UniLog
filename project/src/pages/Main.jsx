"use client";

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill 기본 스타일

const Main = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"], // 이미지 삽입 기능 추가
      ["clean"], // 포맷 초기화
    ],
  };

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div>
      <h1>메인 페이지</h1>
      <ReactQuill value={value} onChange={setValue} modules={modules} placeholder="여기에 텍스트를 입력하세요..." />
    </div>
  );
};

export default Main;
