import { useEffect, useState } from "react";

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
      clearInterval(intervalId);
    }, 100);

    // Cleanup tránh memory leak khi unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div>Số giây: {count}</div>;
}

export default TimerComponent;
