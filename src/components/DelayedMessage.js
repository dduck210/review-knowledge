import React, { useState, useEffect } from "react";

const DelayedMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Sử dụng setTimeout để cập nhật đoạn message sau 5000 mili giây (5s)
    const timeoutId = setTimeout(() => {
      setMessage("Delayed message after 5 seconds!");
    }, 5000);

    // Xoá timeout sau khi component huỷ
    return () => clearTimeout(timeoutId);
  }, []); // Mảng phụ thuộc rỗng đảm bảo effect chỉ chạy một lần

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default DelayedMessage;
