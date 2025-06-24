import { usePostStore } from "../store/postsZustand";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Heading from "../components/ui/Heading";

export default function PostPage() {
  const { postId } = useParams();
  const singlePost = usePostStore((state) => state.singlePost);
  const fetchSinglePost = usePostStore((state) => state.fetchSinglePost);

  useEffect(() => {
    if (postId) fetchSinglePost(Number(postId));
  }, [postId]);

  if (!singlePost) return <div className="text-white">Loading...</div>;

  return (
    <div className="text-white px-4 mt-4 flex flex-col">
      <div className="bg-white text-black p-4 rounded-md">
        <div>{singlePost.author?.username}</div>
        <Heading children={singlePost.title || ""} level={2} />
        <div>{singlePost.description}</div>
        <div className="mt-2 flex gap-4 text-sm">
          <div>❤️ {singlePost._count?.like}</div>
          <div>💬 {singlePost._count?.comments}</div>
        </div>
      </div>

      <div className="mt-6">
        {singlePost.comments?.map((comment) => (
          <div key={comment.id} className="p-4 border-t border-gray-700">
            <div className="font-thin text-sm">{comment.commentor.username}</div>
            <div>{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
