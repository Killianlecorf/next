import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
}

export default async function Posts() {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-gray-100 p-4 rounded shadow-md">
            <h2 className="font-semibold text-black">{post.title}</h2>
            <p className="font-semibold text-black">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
