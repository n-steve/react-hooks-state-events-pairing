import React, { useState } from "react";

function Comments({ video }) {
  const [hidden, setHidden] = useState(true);
  const displayComments = video.comments.map((comment) => (
    <div key={comment.id} user={comment.user} comment={comment.comment}>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
    </div>
  ));

  return (
    <div>
      <button className="hideBtn" onClick={() => setHidden(!hidden)}>
        Hide Comments
      </button>
      {hidden && (
        <div>
          <h2>{displayComments.length} Comments</h2>
          {displayComments}
        </div>
      )}
    </div>
  );
}

export default Comments;
