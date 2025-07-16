import { useState } from "react";
import ChildrenComponent from "./ChildrenComponent";

const ParentComponent = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h2>Xin chào {name || "bạn"}!</h2>
      <ChildrenComponent name={name} setName={setName} />
    </div>
  );
};

export default ParentComponent;
