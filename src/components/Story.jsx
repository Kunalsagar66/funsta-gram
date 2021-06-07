import { PayCircleFilled } from "@ant-design/icons";
import React from "react";
import "./Story.css";

const Story = ({ photoURL, userName }) => {
  // console.log(name, picture);
  // const uName = (name?.first + "." + name?.last).toLowerCase();
  return (
    <div className="story">
      <div className="story__img">
        <img src={photoURL} alt="" />
      </div>
      <h6 className="story__username">{userName}</h6>
    </div>
  );
};

export default Story;
