const initialState = {
  count: 0, // biến đếm ban đầu là 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": // nếu action là tăng
      return {
        ...state,
        count: state.count + 1, // tăng biến đếm
      };
    case "DECREMENT": // nếu action là giảm
      return {
        ...state,
        count: state.count - 1, // giảm biến đếm
      };
    default:
      return state; // nếu action khác, giữ nguyên state
  }
};
