import React, { useState } from "react";
import "./BodyAside.css";
import PostFeed from "./PostFeed";
import "boxicons";
import { auth } from "./../firebase";
const BodyAside = () => {
  const [modal, setModal] = useState(false);

  const logOutHandlder = () => {
    setTimeout(() => {
      auth.signOut();
    });
  };
  return (
    <div className="bodyaside">
      <div className="bodyaside__user">
        <div className="bodyaside__avatar">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
        </div>
        <div className="bodyaside__text">
          <div className="bodyaside__text__top">
            <h3>ayush.maurya</h3>

            <p onClick={logOutHandlder}>Log out</p>
            {/* <box-icon name="log-out-circle"></box-icon> */}
          </div>
          <div className="bodyaside__text__mid">
<<<<<<< HEAD
            <p>
              <span>200</span> posts
            </p>
            <p>
              <span>200</span> followers
            </p>
            <p>
              <span>20</span> following
            </p>
=======
            <div className="bodyaside__text__mid__posts">
              <h4>200</h4>
              <p>posts</p>
            </div>
            <div className="bodyaside__text__mid__following">
              <h4>1000</h4>
              <p>following</p>
            </div>
            <div className="bodyaside__text__mid__followers">
              <h4>10</h4>
              <p>followers</p>
            </div>
>>>>>>> 9437499cacd4c19c0ff795f534c63313d7ff6905
          </div>
          <div className="bodyaside__text__bottom">
            <h3>Ayush Maurya</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              atque.
            </p>
          </div>
        </div>

        {modal && <PostFeed handleModal={() => setModal(!modal)}></PostFeed>}
      </div>
      <PostFeed></PostFeed>
      {/* <button onClick={() => setModal(!modal)}>post</button> */}
    </div>
  );
};

export default BodyAside;
