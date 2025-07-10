--> Custom Hooks
- Custom hook là một hàm bắt đầu bằng từ use, tái sử dụng logic liên quan đến state/life cycle mà nhiều component đều có thể dùng chung, giả sử các bài toán đếm số lần nhấn, fetch dữ liệu, debounce input 
- hook cần phải tách file riêng để dễ dàng quản lý, tìm kiếm và tái sử dụng cho các component khác nhau, không bị lẫn với logic hiển thị UI giảm trùng lặp code và code bị dài
- Giả sử đây là file useCounter.js chẳng hạn
`import { useState } from "react";
export default function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const inc = () => setCount(c => c + 1);
  const dec = () => setCount(c => c - 1);
  return { count, inc, dec };
}`
được đặt ở src/hook, bây giờ nếu muốn tái sử dụng hook này chỉ cần import nó ở trong bất cứ 1 file component nào giả sử đây là file Counter.js:

`import useCounter from "../hooks/useCounter";
const Counter = () => {
  const { count, increment, decrement } = useCounter(5);
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;`

--> useContext
- useContext đc useđể lưu user login
- Provider phải bọc component cần dùng context, nếu k bọc sẽ báo error hoặc context = undefined
- Các component khi dùng chung 1 context, component con cũng sẽ re-render khi context thay đổi
- Có thể truyền vào Provider bất kỳ state/hàm/giá trị nào làm value
- useContext giúp component con lấy data từ context mà không cần truyền props nhiều cấp
- Luôn phải có Provider bọc ngoài cùng
- Cách setup 1 context là tạo context sau đó viết provider rồi bọc app useContext ở component con hoặc viết custom hook bọc gọn