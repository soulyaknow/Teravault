import React, { useState } from "react";
import Article from "./ArticleContent/Article";
export default function Comment() {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log(comment);
  };

  return (
    <>
      <div className="flex flex-col w-full mb-10">
        <div className="w-full border shadow-md bg-gray-50">
          <div className="bg-white">
            <textarea
              id="comment"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 pl-2 text-custom-text-black bg-white"
              placeholder="Write a comment..."
              required
            />
          </div>
          <div className="flex items-center justify-end px-3 py-2 border-t border-b">
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Post comment
            </button>
          </div>
          <div className="py-2 divide-y-2">
            <Article />
          </div>
        </div>
      </div>
    </>
  );
}
