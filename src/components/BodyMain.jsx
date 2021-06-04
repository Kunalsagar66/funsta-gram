import React from "react";
import Story from "./Story";
import PostFeed from "./PostFeed";
import "boxicons";
import "./Body.css";
const BodyMain = () => {
  return (
    <div className="bodymain">
      <div className="bodymain__stories">
        {/* <div className="overlay">
          <div className="bodymain__arrow">
            <box-icon name="right-arrow-alt" color="white"></box-icon>
          </div>
        </div> */}
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
      </div>
      <PostFeed></PostFeed>
      {/* <div className="bodymain__feeds">
        <Feed></Feed>
        <Feed></Feed>
        <Feed></Feed>
        <Feed></Feed>
        <Feed></Feed>
        <Feed></Feed>
        <Feed></Feed>
      </div> */}
      {/* stories wrapper contianer hozi scroll - circle image */}
      {/* Feeds */}
    </div>
  );
};

export default BodyMain;
