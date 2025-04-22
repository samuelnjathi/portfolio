import { createContext, useCallback, useState } from "react";
import { Book } from "../types/definations";
import { v4 as uuidv4 } from "uuid";

export const BooksContext = createContext<{
    addBook: (newBook: {title: string; author: string; content: string; image: string; date: string}) => void,
    editBook: (id: string, editedBook: {title: string; author: string; content: string; image: string}) => void,
    removeBook: (id: string) => void,
    books: Book[]
}>({
    addBook: () => {},
    editBook: () => {}, 
    removeBook: () => {},
    books: []
})

export const BooksProvider = ({children} :{ children: React.ReactNode} ) => {
    const [books, setBooks] = useState<Book[]>([]);

    const addBook = useCallback((newBook: {title: string; author: string; content: string; image: string; date: string}) => {
        setBooks((prev) => [...prev, {id: uuidv4(), ...newBook}])
    }, []);

    const editBook = useCallback((id: string, editedBook: {title: string; author: string; content: string; image: string}) => {
        setBooks(prev => 
            prev.map(book => book.id === id ? {...book, ...editedBook}: book)
        )
    }, [])

    const removeBook = useCallback((id : string) => {
        setBooks(prev => prev.filter(book => book.id !== id))
    }, [])

    return (
        <BooksContext.Provider value={{books, addBook, editBook, removeBook}}>
            {children}
        </BooksContext.Provider>
    )
}