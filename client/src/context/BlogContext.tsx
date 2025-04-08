import React, { createContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Blog } from '../types/definations';


export const BlogContext = createContext<{
  addBlog: (newBlog: { title: string; content: string; image: string; date: string }) => void;
  blogs: Blog[];
}>({
  addBlog: () => {},
  blogs: [],
});

export const BlogProvider = ({children}: {children: React.ReactNode}) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    

    const addBlog = useCallback((newBlog: {title: string; content: string;  image: string; date: string }) => {
        setBlogs((prev) => [...prev, {id: uuidv4(), ...newBlog}]);
      
    }, []);
    
  return (
    <BlogContext.Provider value={{addBlog, blogs}}>
      {children}
    </BlogContext.Provider>
  )
}

