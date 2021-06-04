import React from "react";
import BodyMain from "./BodyMain";
import BodyAside from "./BodyAside";
import "./Body.css";
const Body = () => {
  return (
    <div className="body">
      <BodyMain></BodyMain>
      <BodyAside />
    </div>
  );
};

export default Body;
