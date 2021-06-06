import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core";
import db, { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import "./PostFeed.css";
import moment from "moment";

const PostFeed = () => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [user] = useAuthState(auth);
  const userName = user?.displayName.replace(" ", ".").toLowerCase();

  const postHandler = () => {
    if (image && caption) {
      db.collection("posts")
        .doc()
        .set({
          imageURL: image,
          captionText: caption,
          sender: userName,
          avatar: user?.photoURL,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          createdAt: moment().format("LLL"),
          uID: Date.now(),
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
        <TextField
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          size="small"
          style={{ width: "100%" }}
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Caption"
          variant="outlined"
          multiline
          size="small"
          style={{ marginTop: "0.75em", width: "100%" }}
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
