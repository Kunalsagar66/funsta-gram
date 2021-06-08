import { React } from "react";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import "./SearchUser.css";

const SearchUser = ({ photoURL, userName, displayName }) => {
  return (
    <div className="searchuser">
      <div className="searchuser__avatar">
        <img src={photoURL} alt={name} />
      </div>
      <div className="searchuser__name">
        <h3>{userName}</h3>
        <h3>{displayName}</h3>
      </div>
      <CloseIcon></CloseIcon>
    </div>
  );
};

export default SearchUser;
