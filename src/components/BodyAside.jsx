import React, { useState } from "react";
import "./BodyAside.css";
import PostFeed from "./PostFeed";
import "boxicons";
const BodyAside = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="bodyaside">
      <div className="bodyaside__avatar">
        <img src="" alt="" />
      </div>
      <div className="bodyaside__text">
        <div className="bodyaside__text__top">
          <h3>username</h3>
          <div>
            <p>Log out</p>
            <box-icon name="log-out-circle"></box-icon>
          </div>
        </div>
        <div className="bodyaside__text__mid">
          <p>
            <span>0</span>posts
          </p>
          <p>
            <span>0</span>followers
          </p>
          <p>
            <span>0</span>following
          </p>
        </div>
        <div className="bodyaside__text__bottom">
          <h3>displayName</h3>
          <p>hola amigos</p>
        </div>
      </div>
      <button onClick={() => setModal(!modal)}>post</button>
      {modal && <PostFeed handleModal={() => setModal(!modal)}></PostFeed>}
    </div>
  );
};

export default BodyAside;
