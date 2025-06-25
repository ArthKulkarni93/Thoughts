import { usePostStore } from "../store/postsZustand";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../components/ui/Heading";

export default function PostPage() {
  const { postId } = useParams();
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [commentString, setCommentString] = useState<string>("");
  const singlePost = usePostStore((state) => state.singlePost);
  const fetchSinglePost = usePostStore((state) => state.fetchSinglePost);
  const toggleLike = usePostStore((state) => state.toggleLike);
  const commentOnPost = usePostStore((state) => state.commentOnPost);

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
          <button onClick={() => toggleLike(Number(postId))}>{singlePost._count?.like}</button>
          <button onClick={() => {
            // console.log('clicked2')
            (isFormOpen === true) ? setIsFormOpen(false) : setIsFormOpen(true)
            console.log(isFormOpen)
          }}>{singlePost._count?.comments}</button>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed bottom-20 right-10 h-[45vh] w-[40vh] bg-indigo-800 border border-black p-4 rounded-xl">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter Title"
              value={commentString}
              className="border text-black bg-indigo-300 placeholder-black px-2 py-1 rounded"
              onChange={(e) => setCommentString(e.target.value)}
              required
            />
            <button
              className="bg-white text-black py-1 rounded hover:bg-gray-200"
              onClick={() => {
                console.log(commentString)
                commentOnPost(Number(postId), commentString)
                setCommentString('');
              }
              }
            >
              Post
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 ">
        {singlePost.comments?.map((comment) => (
          <div key={comment.id} className="p-4 border-t border-gray-700">
            <div className="font-thin text-sm text-black">{comment.commentor.username}</div>
            <div className="text-black">{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
