import { React, useState, useEffect } from "react";
import Story from "./Story";
import PostFeed from "./PostFeed";
import Feed from "./Feed";
import db from "../firebase";
import "boxicons";
import "./Body.css";
import { HideUntilLoaded } from "react-animation";

const BodyMain = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();
    console.log(data.results);
    setUsers(data.results);
  };
  useEffect(() => {
    // fetchUser();
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => {
          return { ...doc.data() };
        })
      );
    });
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
  console.log(users);
  return (
    <div className="bodymain">
      <div className="bodymain__stories">
        {users?.map((user) => {
          return <Story {...user}></Story>;
        })}
      </div>

      {posts?.map((post) => {
        return <Feed {...post} key={post.uID}></Feed>;
      })}
    </div>
  );
};

export default BodyMain;
