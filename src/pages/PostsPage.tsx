// PostsPage.tsx
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "../components/PostCard";
import SelectComponent from "../components/shared/SelectComponent";
import { CardProps } from "../models/card";

const PostsPage = () => {
    const allPosts = useLoaderData() as CardProps[];
    const [filteredPosts, setFilteredPosts] = useState<CardProps[]>(allPosts);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    const handleUserSelect = (userId: number | null) => {
        setSelectedUserId(userId);
    };

    useEffect(() => {
        if (selectedUserId) {
            setFilteredPosts(allPosts.filter(post => post.userId === selectedUserId));
        } else {
            setFilteredPosts(allPosts);
        }
    }, [selectedUserId, allPosts]);

    return (
        <div className="md:me-[50rem]">
            <div className="my-5 flex justify-between">
                <h1 className="text-2xl font-bold">Posts</h1>
                <SelectComponent
                    dataUrl="https://jsonplaceholder.typicode.com/users"
                    labelKey="username"
                    valueKey="id"
                    placeholder="Select a user..."
                    onSelect={handleUserSelect}
                />
            </div>


            {filteredPosts.map((post: CardProps) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsPage;
