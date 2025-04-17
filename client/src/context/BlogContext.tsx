import React, { createContext, useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Blog } from '../types/definations';



export const BlogContext = createContext<{
  addBlog: (newBlog: { title: string; content: string; image: string; date: string }) => void;
  deleteBlog: (id: string) => void;
  blogs: Blog[];
}>({
  addBlog: () => {},
  deleteBlog: () => {},
  blogs: [],
});

export const BlogProvider = ({children}: {children: React.ReactNode}) => {
    
    const [blogs, setBlogs] = useState<Blog[]>(() => {
      try {
        const storedBlogs = localStorage.getItem("blogs");
        return storedBlogs ? JSON.parse(storedBlogs) : []
      } catch (error) {
        console.error("Error reading from blogs from local storage", error);
        return [];
      }
    });

    useEffect(() => {
      try {
        localStorage.setItem("blogs", JSON.stringify(blogs))
      } catch (error) {
        console.error("Error writing blogs to local storage")
      } 
    }, [blogs])
    

    const addBlog = useCallback((newBlog: {title: string; content: string;  image: string; date: string }) => {
        setBlogs((prev) => [...prev, {id: uuidv4(), ...newBlog}]);  
    }, []);

    const deleteBlog = useCallback((id: string) => {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    }, []);
    
  return (
    <BlogContext.Provider value={{addBlog, deleteBlog, blogs}}>
      {children}
    </BlogContext.Provider>
  )
}

