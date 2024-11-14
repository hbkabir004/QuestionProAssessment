import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import SelectComponent from "../components/shared/SelectComponent";
import { CardProps } from "../models/card";

const CommentsPage = () => {
    const allComments: CardProps[] = useLoaderData();
    const [filteredComments, setFilteredComments] = useState<CardProps[]>(allComments);
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    const handlePostSelect = (postId: number | null) => {
        setSelectedPostId(postId);
    };

    useEffect(() => {
        if (selectedPostId) {
            setFilteredComments(allComments.filter(comment => comment.postId === selectedPostId));
        } else {
            setFilteredComments(allComments);
        }
    }, [selectedPostId, allComments]);

    return (
        <div className="md:me-[50rem]">
            <div className="my-5 flex justify-between">
                <h1 className="text-2xl font-bold">Comments</h1>

                <SelectComponent
                    dataUrl="https://jsonplaceholder.typicode.com/posts"
                    labelKey="title"
                    valueKey="id"
                    placeholder="Select a post title..."
                    onSelect={handlePostSelect}
                />
            </div>

            <div>
                {filteredComments.map((comment: CardProps) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
};

export default CommentsPage;
