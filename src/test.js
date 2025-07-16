import { useEffect, useState } from "react";

const DisplayName = () => {
  //   const [name, setName] = useState("");
  //   const [userId, setUserId] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <button>
      <p>Count: {count}</p>
    </button>
  );
};

export default DisplayName;
