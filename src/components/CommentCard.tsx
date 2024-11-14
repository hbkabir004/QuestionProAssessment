import { CardProps } from "../models/card";

const CommentCard = ({ comment }: { comment: CardProps }) => {
    return (
        <div className="border border-2 rounded-lg mb-2 p-5">
            <p className="text-blue-700 text-lg font-bold">{comment.name}</p>
            <p className="font-semibold">{comment.body}</p>
        </div>
    );
};

export default CommentCard;
