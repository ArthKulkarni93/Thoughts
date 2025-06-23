import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getPost } from "../Api";
import { useUserStore } from "../store/auth";
import Posts from "../components/Blocks/Posts";

interface PostAuthor {
    id: number;
    username: string;
}

interface PostCounts {
    like: number; 
    comments: number;
}

interface commentData {
    commentor: PostAuthor,
    commentorId: number,
    content: string,
    id: number,
    postId: number
}

interface PostData {
    author: PostAuthor;
    authorId: number;
    comments: commentData[]; 
    createdAt: string; 
    description: string;
    id: number;
    picture: string | null; 
    title: string;
    _count: PostCounts;
}


interface CreatePostResponse {
    msg: string;
    post: PostData;
    success: boolean;
}

export default function PostPage() {
  const { postId } = useParams();
  const token = useUserStore((state) => state.token);
  const [createdPost, setCreatedPost] = useState<PostData | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${getPost}/${postId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data)
        if (res.data.success) {
          setCreatedPost(res.data.post);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };

    fetchPost();
  }, [postId, token]);

  return (
    <div>
      {createdPost && (
        <div className="px-4 mt-4 flex flex-col">
          <Posts posts={[createdPost]} />
          <div>
            {createdPost.comments.map((comment) => (
                <div key={comment.id} className="p-4 ">
                    <div className="font-thin text-sm">{comment.commentor.username}</div>
                    <div>{comment.content}</div>
                </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
