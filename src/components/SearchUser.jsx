import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import "./SearchUser.css";

const SearchUser = ({ image_URL, name, username, story }) => {
  return (
    <div className="searchuser">
      <div className="searchuser__avatar">
        <img src={image_URL} alt={name} />
      </div>
      <div className="searchuser__name">
        <h3>{username}</h3>
        <h3>{name}</h3>
      </div>
      <CloseIcon></CloseIcon>
    </div>
  );
};

export default SearchUser;
