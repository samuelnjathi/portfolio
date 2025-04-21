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