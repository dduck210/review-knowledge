import { useState } from "react";
import ChildInputImage from "./ChildInputImage";

function ParentImageComponent() {
  const [imgSrc, setImgSrc] = useState(""); // quản lý đường dẫn ảnh tải lên/chọn

  return (
    <div>
      <h2>Ảnh của bạn:</h2>
      <img
        src={
          imgSrc ||
          "https://techvccloud.mediacdn.vn/280518386289090560/2024/9/17/reactjs-1726545361892465400796-6-0-465-817-crop-17265453645351178455990.jpg"
        }
        alt=""
        width={200}
      />
      <div>
        <ChildInputImage setImgSrc={setImgSrc} />
      </div>
    </div>
  );
}

export default ParentImageComponent;
