import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const CounterComponent = () => {
  // Lấy giá trị count hiện tại từ redux store
  const count = useSelector((state) => state.count);

  // Lấy hàm dispatch để gửi action lên store
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Bộ đếm: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default CounterComponent;
