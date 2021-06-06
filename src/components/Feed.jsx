import React from "react";
import "boxicons";
import "./Feed.css";
import { HeartFilled } from "@ant-design/icons";
const Feed = ({ imageURL, captionText, sender, avatar, createdAt }) => {
  return (
    <div className="feed">
      <div className="feed__top">
        <div className="feed__top__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="feed__top__userinfo">
          <h4>{sender}</h4>
        </div>
        <div className="feed__top__settings">
          <box-icon name="dots-horizontal-rounded"></box-icon>
        </div>
      </div>
      <div className="feed__mid">
        <img src={imageURL} alt="" className="feed__mid__img" />
      </div>
      <div className="feed__bottom">
        <div className="feed__bottom__icons">
          <div className="feed__bottom__icons__left">
            <box-icon
              name="heart"
              type="solid"
              size="30px"
              color="#fb3958"
            ></box-icon>
            <box-icon name="message-rounded" size="30px"></box-icon>
            <box-icon name="send" size="30px"></box-icon>
          </div>
          <div className="feed__bottom__icons__right">
            <box-icon name="bookmark" size="30px"></box-icon>
          </div>
        </div>
        <div className="feed__bottom__likes">
          <p>12,340 likes</p>
        </div>

        <div className="feed__bottom__caption">
          <p>
            <span>{sender}</span> {captionText}
          </p>
          <p>#evening #view #roads</p>
        </div>
        <div className="feed__bottom__comments">
          <p>View all 3,452 comments</p>
          <p>{createdAt}</p>
        </div>

        <div className="feed__bottom__postcomment">
          <div className="feed__bottom__postcomment__left">
            <box-icon name="smile"></box-icon>
            <input type="text" placeholder="Add a comment..." />
          </div>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
