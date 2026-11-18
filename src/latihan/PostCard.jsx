import React, { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle atau set true sesuai kebutuhan
  };

  return (
    <div
      onClick={handleClick}
      className={`p-6 rounded-lg shadow cursor-pointer transition-colors ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{body}</p>
    </div>
  );
}

export default PostCard;
