function ChildInput({ setImgSrc }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Chuyển file thành URL để xem trước
      const url = URL.createObjectURL(file);
      setImgSrc(url); // Gửi dữ liệu về cha
    }
  };

  return <input type="file" accept="image/*" onChange={handleChange} />;
}

export default ChildInput;
