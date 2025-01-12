'use client';
import React, { useState } from "react";

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );
  const [name, setName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (name.trim() !== "" && newComment.trim() !== "") {
      setComments([...comments, { name, comment: newComment }]);
      setName("");
      setNewComment("");
    }
  };

  return (
    <div id="comment" className="flex justify-center items-center min-h-screen text-white">
      <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Comments</h2>

        <div className="space-y-6 mb-6">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-md shadow-md"
            >
              <p className="text-lg font-semibold text-blue-400">
                {comment.name}
              </p>
              <p className="text-gray-300">{comment.comment}</p>
            </div>
          ))}
          {comments.length === 0 && (
            <p className="text-gray-400 text-center">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>

        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your Comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={handleAddComment}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
