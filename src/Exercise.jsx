import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        console.error("[Component] Gagal menampilkan data:", err.message);
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Post Cards
      </h1>

      {error && (
        <p className="text-center text-red-500 mb-4">
          Terjadi kesalahan: {error}
        </p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
