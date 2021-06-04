import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import db, { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import "./PostFeed.css";
const PostFeed = () => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [user] = useAuthState(auth);
  const userName = user?.displayName.replace(" ", ".").toLowerCase();

  const postHandler = () => {
    if (image && caption) {
      db.collection("post").doc().set({
        imageURL: image,
        captionText: caption,
        sender: userName,
        avatar: user?.photoURL,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setImage("");
    setCaption("");
  };
  return (
    <div className="postfeed">
      <div className="postfeed__avatar">
        <img src={user?.photoURL} alt="" />
      </div>
      <div className="postfeed__input">
        <input
          type="text"
          placeholder="image url"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="caption"
          value={caption}
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        />
      </div>
      <button className="postfeed__btn" onClick={postHandler}>
        Post
      </button>
    </div>
  );
};

export default PostFeed;
