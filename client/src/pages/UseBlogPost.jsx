import { useState, useEffect } from "react";
import axios from "axios";

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const result = await axios("http://localhost:4000/posts");
        setPosts(result.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  return { posts, isLoading, isError };
};

export default useBlogPosts;
