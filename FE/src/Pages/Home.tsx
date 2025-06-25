import { useEffect, useState } from "react";
import axios from "axios";
import { getPosts, createPost } from "../Api";
import { useUserStore } from "../store/auth";
import Posts from "../components/Blocks/PostsList";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../store/postsZustand";
import Leftbar from "../components/Blocks/Leftbar";
import Footer from "../components/Blocks/Footer";

export default function Home() {
  const posts = usePostStore(state => state.posts);
  const postType = usePostStore(state => state.postType);
  const setPostType = usePostStore(state => state.setPostType);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const token = useUserStore((state) => state.token);
  const navigate = useNavigate();
  const fetchPosts = usePostStore(state => state.fetchPosts)

  useEffect(() => {
    fetchPosts();
  }, [postType]);

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
    <div className="">
      <Leftbar classname="fixed" />
      <div className="bg h-[48px]  mx-[5%] px-2 rounded-xl">

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

        <div className=" bottom-20 right-10 h-[35vh] w-[40vh] border border-black p-4 rounded-xl">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter Title"
              className="border text-black placeholder-black px-2 py-1 rounded"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Enter Description"
              className="border text-black placeholder-black px-2 py-1 h-[20vh] rounded"
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





        {/* render all post using PostList/tsx */}
        <div className="mt-4 ">
          {posts.length > 0 ? (
            <Posts />
          ) : (
            <div className="text-white text-sm mt-4">Loading posts...</div>
          )}
        </div>
      </div>
      
    </div>
  );
}
