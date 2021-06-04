import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div className="story">
      <div className="story__img">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </div>
      <h6 className="story__username">Alex Saprun</h6>
    </div>
  );
};

export default Story;
