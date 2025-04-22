export type Blog = {
    id: string;
    title: string;
    content: string;
    image: string;
    date: string;
}

export interface BlogCardProps {
    blog: Blog;
}

export type Book = {
    id: string;
    title: string;
    author: string;
    content: string
    image: string;
    date: string;
}
export interface BooksCardProps {
    book: Book
}