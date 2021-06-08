import React, { useState, useEffect } from "react";
import "./BodyAside.css";
import PostFeed from "./PostFeed";
import "boxicons";
import { auth } from "./../firebase";
import db from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const BodyAside = () => {
  const [user] = useAuthState(auth);
  const [modal, setModal] = useState(false);
  const [quote, setQuote] = useState("");

  // https://api.quotable.io/random
  const logOutHandlder = () => {
    setTimeout(() => {
      auth.signOut();
    });
  };
  const getRandom = async () => {
    const res = await fetch("https://api.quotable.io/random?maxLength=60");
    const data = await res.json();
    setQuote(data.content);
  };
  useEffect(() => {
    getRandom();
  }, []);
  
  return (
    <div className="bodyaside">
      <div className="bodyaside__user">
        <div className="bodyaside__avatar">
          <img src={user?.photoURL} alt="user" />
        </div>
        <div className="bodyaside__text">
          <div className="bodyaside__text__top">
            <h3>{user?.displayName.replace(" ", ".").toLowerCase()}</h3>

            <p onClick={logOutHandlder}>Log out</p>
            {/* <box-icon name="log-out-circle"></box-icon> */}
          </div>
          <div className="bodyaside__text__mid">
            <div className="bodyaside__text__mid__posts">
              <h4>200</h4>
              <p>posts</p>
            </div>
            <div className="bodyaside__text__mid__following">
              <h4>100</h4>
              <p>following</p>
            </div>
            <div className="bodyaside__text__mid__followers">
              <h4>10</h4>
              <p>followers</p>
            </div>
          </div>
          <div className="bodyaside__text__bottom">
            <h3>{user?.displayName}</h3>
            <p>{quote}</p>
          </div>
        </div>
      </div>
      <PostFeed></PostFeed>
      {/* <button onClick={() => setModal(!modal)}>post</button> */}
    </div>
  );
};

export default BodyAside;
