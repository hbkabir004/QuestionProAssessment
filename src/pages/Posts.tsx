import { useLoaderData } from "react-router-dom";
import PostCard from "../components/PostCard";
import { CardProps } from "../models/card";

const Posts = () => {
    const allPosts: CardProps[] = useLoaderData();

    return (
        <div>
            <h1 className="my-5 text-2xl font-bold">Posts</h1>

            <div className="md:me-[50rem]">
                {
                    allPosts.map((post: CardProps) => (
                        <PostCard
                            key={post.id}
                            post={post}
                        />))
                }
            </div>

        </div>
    );
};

export default Posts;