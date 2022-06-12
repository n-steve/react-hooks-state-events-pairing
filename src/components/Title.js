import React, { useState } from "react";

function Title({ video }) {
  const [counter, setCounter] = useState(0);
  const [newCounter, setNewCounter] = useState(0);

  function increaseLike() {
    setCounter((count) => count + 1);
  }

  function increaseDisLike() {
    setNewCounter((count) => count + 1);
  }

  return (
    <div>
      <h1>{video.title}</h1>

      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <div>
        <p>
          <button className="like" onClick={increaseLike}>
            {counter + video.upvotes}👍
          </button>
          <button className="disLike" onClick={increaseDisLike}>
            {newCounter + video.downvotes} 👎
          </button>
        </p>
      </div>
    </div>
  );
}

export default Title;
