import React from "react";

function Title({ video }) {
  // console.log(video.upvotes + 1);

  function handleAddLike(add) {
    console.log("Click +", add);
  }

  function handleDisLikeClick(add) {
    console.log("click -", add);
  }
  return (
    <div>
      <h1>{video.title}</h1>

      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <p>
        <button className="like" onClick={handleAddLike}>
          {video.upvotes} 👍
        </button>
        <button className="disLike" onClick={handleDisLikeClick}>
          {video.downvotes} 👎
        </button>
      </p>
      <p>
        <button>Hide Comments</button>
      </p>
    </div>
  );
}

export default Title;
