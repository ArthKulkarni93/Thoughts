import { useEffect, useState } from "react";
import axios from "axios";
import { getPosts, createPost } from "../Api";
import { useUserStore } from "../store/auth";
import Posts from "../components/Blocks/Posts";
import { useNavigate } from "react-router-dom";

interface PostAuthor {
    id: number;
    username: string;
}

interface PostCounts {
    like: number; 
    comments: number;
}

interface PostData {
    author: PostAuthor;
    authorId: number;
    comments: any[]; 
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

export default function Home() {
  const [postType, setPostType] = useState<"new" | "trending">("new");
  const [posts, setPosts] = useState<PostData[]>([]);
  const [page] = useState(1);
  const [pageSize] = useState(10);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const token = useUserStore((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Fetching posts for type:', postType)
        const res = await axios.get(
          `${getPosts}?page=${page}&pageSize=${pageSize}&type=${postType}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data);
        setPosts(res.data.posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, [postType, page, pageSize, token]);

  const handleCreatePost = async () => {
    try {
      const res = await axios.post(
        createPost,
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        navigate(`/post/${res.data.post.id}`);
      }
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  return (
    <div className="bg h-[48px] mx-[5%] px-2 rounded-xl">
      <div className="mt-6 px-2 flex justify-between items-center text-sm text-black">
        <button
          onClick={() => {
            setPostType("trending")
            // console.log(postType)
            }
          }
          className={postType === "trending" ? "font-bold" : "font-light"}
        >
          Trending Posts
        </button>
        <button
          onClick={() => {
            setPostType("new")
            // console.log(postType)
          }
          }
          className={postType === "new" ? "font-bold" : "font-light"}
        >
          New Posts
        </button>
      </div>

      <button
        className="fixed bottom-10 right-10 bg-black text-white w-10 h-10 rounded-full text-xl"
        onClick={() => setIsFormOpen((prev) => !prev)}
      >
        +
      </button>

      {isFormOpen && (
        <div className="fixed bottom-20 right-10 h-[45vh] w-[40vh] bg-indigo-800 border border-black p-4 rounded-xl">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter Title"
              className="border text-black bg-indigo-300 placeholder-black px-2 py-1 rounded"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Enter Description"
              className="border text-black bg-indigo-300 placeholder-black px-2 py-1 h-[20vh] rounded"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className="bg-white text-black py-1 rounded hover:bg-gray-200"
              onClick={handleCreatePost}
            >
              Post
            </button>
          </div>
        </div>
      )}

      <div className="mt-4">
        {posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <div className="text-white text-sm mt-4">Loading posts...</div>
        )}
      </div>
    </div>
  );
}
