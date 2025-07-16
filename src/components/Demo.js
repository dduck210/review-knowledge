import { useState, useEffect } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return <div>{count}</div>;
};

export default Demo;
