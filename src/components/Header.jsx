import React, { useState } from "react";
import "./Header.css";
import "boxicons";
import users from "../users";
import SearchUser from "./SearchUser";
const Header = () => {
  const [togglePopup, setTogglePopup] = useState(false);

  const searchHandler = () => {
    setTogglePopup(!togglePopup);
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
      </div>
    </div>
  );
};

export default Header;
