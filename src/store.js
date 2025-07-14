import { createStore } from "redux";
import { counterReducer } from "./reducers";

// Tạo redux store với reducer đã định nghĩa
export const store = createStore(counterReducer);
