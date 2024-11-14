import { CardProps } from "../models/card";

const PostCard = ({ post }: { post: CardProps }) => {
    return (
        <div className="border border-2 rounded-lg mb-2 p-5">
            <p className="text-blue-700 text-lg font-bold">{post.title}</p>
            <p className="font-semibold">{post.body}</p>
        </div>
    );
};

export default PostCard;
