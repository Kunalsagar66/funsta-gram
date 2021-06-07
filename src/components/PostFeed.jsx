import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import db, { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import "./PostFeed.css";
import moment from "moment";
import FadeIn from "react-fade-in";
const PostFeed = ({ hideAddBtn }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#0095f6",
      },
    },

    typography: {
      fontFamily: "Source Sans Pro",
    },
  });

  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [user] = useAuthState(auth);
  const userName = user?.displayName.replace(" ", ".").toLowerCase();

  const postHandler = () => {
    if (image) {
      hideAddBtn(false);
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
    <ThemeProvider theme={theme}>
      <div className="modal">
        <FadeIn>
          <div className="postfeed">
            {/* <div className="postfeed__avatar">
            <img src={user?.photoURL} alt="" />
          </div> */}

            <div className="postfeed__input">
              <TextField
                id="standard-basic"
                label="Image URL"
                size="small"
                style={{ width: "100%" }}
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
              <TextField
                id="filled-basic"
                label="Caption"
                multiline
                size="small"
                style={{ marginTop: "0.75em", width: "100%" }}
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
              />
            </div>
            {/* <button onClick={handleModal}>Close</button> */}

            <button className="postfeed__btn" onClick={postHandler}>
              Post
            </button>
          </div>
        </FadeIn>
      </div>
    </ThemeProvider>
  );
};

export default PostFeed;
