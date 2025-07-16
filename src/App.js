import { useEffect, useState } from "react";
import ParentComponent from "./components/ParentComponent";
import ParentImageComponent from "./components/ParentImageComponent";
import Unmount from "./Unmount";
import DelayedMessage from "./components/DelayedMessage";
import SetIntervalComponent from "./components/setInterval";
import Demo from "./components/Demo";
// import ChildrenComponent from "./components/ChildrenComponent";
// import CounterComponent from "./CounterComponent";
// import DisplayName from "./test";

function App() {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Ban co dang lap vo han day!");
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  // MOUNTING PHASE
  useEffect(() => {
    console.log("MOUNTING PHASE");
  }, []);

  // UPDATING PHASE
  useEffect(() => {
    console.log("UPDATING PHASE");
  }, [count]);

  // UNMOUNTING PHASE
  useEffect(() => {
    return () => {
      console.log("UNMOUNTING PHASE");
    };
  }, []);
  return (
    <div className="App">
      {/* <h1>Demo Redux Counter</h1>
      <CounterComponent />
      <DisplayName /> */}
      <button onClick={() => incrementCount()}>Increment Count</button>
      <h2>{count}</h2>
      <Unmount />
      <ParentComponent />
      {/* <ChildrenComponent /> */}
      <ParentImageComponent />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <DelayedMessage />
      <SetIntervalComponent />
      <Demo />
    </div>
  );
}

export default App;
