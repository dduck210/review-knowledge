import useCounter from "../hooks/useCounter";

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

export default Counter;
