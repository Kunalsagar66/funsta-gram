import React, { useState } from "react";
import "./Header.css";
import "boxicons";
import users from "../users";
import SearchUser from "./SearchUser";
import { auth } from "../firebase";
import PostFeed from "./PostFeed";
const Header = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const searchHandler = () => {
    setTogglePopup(!togglePopup);
  };
  const logoutHandler = () => {
    auth.signOut();
  };
  const postHandler = () => {
    setAddPost(!addPost);
  };
  return (
    <div className="header">
      {togglePopup && (
        <div className="header__popup">
          <div className="header__popup__headings">
            <h2>Recent</h2>
            <h2>Clear All</h2>
          </div>
          {users.map((user, idx) => {
            return <SearchUser {...user} key={idx}></SearchUser>;
          })}
        </div>
      )}

      <div className="header__wrapper">
        <div className="header__post" onClick={postHandler}>
          <box-icon name="message-square-add" size="30px"></box-icon>
        </div>
        <h1 className="header__logo">instaglam</h1>

        <div className="header__searchbox">
          <box-icon name="search" size="24px" color="grey"></box-icon>
          <input
            type="text"
            placeholder={!togglePopup ? "Search" : "Click again to close popup"}
            onClick={searchHandler}
          />
        </div>
        <div className="header__navbar">
          <box-icon name="home" type="solid"></box-icon>
          <box-icon name="message-square-detail"></box-icon>
          <box-icon name="compass"></box-icon>
          <box-icon name="heart"></box-icon>
        </div>
        <div className="header__logout" onClick={logoutHandler}>
          <box-icon
            name="log-out-circle"
            size="30px"
            color="#e62d44"
          ></box-icon>
        </div>
      </div>
      {addPost && <PostFeed></PostFeed>}
    </div>
  );
};

export default Header;
