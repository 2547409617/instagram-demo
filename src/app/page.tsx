"use client";
import Post from "../components/Post";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Info from "@/components/Info";

interface PostProps {
  url: string;
  id?: number;
  likes: number;
  comments: number;
}
export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchPosts = async () => {
    const limit = 9;
    const url = `/api/photos?page=${page}&limit=${limit}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const rows: PostProps[] = await response.json();
        setPosts([...posts, ...rows]);
        setPage((prev) => prev + 1);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!inView || isLoading) {
      return;
    }

    setIsLoading(true);
    fetchPosts();
  }, [isLoading, page, inView]);

  return (
    <div className="lg:w-8/12 lg:mx-auto mb-8 p-4">
      <Header />

      <main>
        <div >
         
          <Info />
          <div>
            <h2
              className="container mx-auto p-4"
            >
              Top posts
            </h2>
            <div className="grid grid-cols-3 gap-4 ml-20p">
              {posts.map((post) => (
                <Post
                  key={post.id}
                  imageUrl={post.url}
                  likes={post.likes}
                  comments={post.comments}
                />
              ))}
            </div>
            <div ref={ref}>Loading...</div>
          </div>
        </div>
      </main>
    </div>
  );
}
