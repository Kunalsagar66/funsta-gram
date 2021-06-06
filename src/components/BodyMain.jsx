import { React, useState, useEffect } from "react";
import Story from "./Story";
import PostFeed from "./PostFeed";
import Feed from "./Feed";
import db from "../firebase";
import "boxicons";
import "./Body.css";
const BodyMain = () => {
  const [posts, setPosts] = useState([]);

  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    fetchUser();
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { ...doc.data() };
          })
        );
      });
  }, []);
  console.log(posts);
  return (
    <div className="bodymain">
      <div className="bodymain__stories">
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
      </div>

      {posts?.map((post) => {
        return <Feed {...post} key={post.uID}></Feed>;
      })}
    </div>
  );
};

export default BodyMain;
