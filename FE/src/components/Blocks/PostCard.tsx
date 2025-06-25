import { useNavigate } from "react-router-dom";
import Heading from "../ui/Heading";
import { usePostStore } from "../../store/postsZustand";

interface PostCardProps {
  post: {
    id: number;
    author: { id: number; username: string };
    title: string;
    description: string;
    _count: { like: number; comments: number };
  };
}

export default function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate();
  const toggleLike = usePostStore((state) => state.toggleLike);

  return (
    <div className="bg-white text-black p-2 flex-col rounded-md border hover:cursor-pointer">
      <div>{post.author.username}</div>

      <div onClick={() => navigate(`/post/${post.id}`)}>
        <Heading level={2}>{post.title}</Heading>
      </div>

      <div className="space-y-2" onClick={() => navigate(`/post/${post.id}`)}>
        {post.description.slice(0, 12) + "..."}
      </div>

      <div className="w-[25vw] flex justify-between  ">
        <button onClick={() => toggleLike(post.id)}>{post._count.like}</button>
        <div>{post._count.comments}</div>
      </div>
    </div>
  );
}
