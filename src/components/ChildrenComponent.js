const ChildrenComponent = ({ name, setName }) => {
  // gọi setName từ component cha để cập nhật giá trị name
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)} // phần gửi data vào component cha
        placeholder="Nhập tên của bạn"
      />
    </div>
  );
};

export default ChildrenComponent;
