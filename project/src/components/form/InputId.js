"use client";

import React, { useState } from 'react';
import axios from 'axios';  // axios import

export default function InputId() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // axios로 POST 요청
      const response = await axios.post('http://localhost:3001/submit', { name });
      
      // 서버 응답 처리
      alert(`서버 응답: ${response.data.message}`);
    } catch (error) {
      console.error('Error:', error);
      alert('서버와의 통신 중 에러 발생');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">이름 입력: </label>
      <input
        type="text"
        id="userName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">제출</button>
    </form>
  );
}
