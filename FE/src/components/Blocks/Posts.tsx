import { useEffect, useState, useCallback } from "react";
import Heading from "../ui/Heading";
import { useUserStore } from "../../store/auth";
import axios from "axios";
import { like } from "../../Api";
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


export default function Posts({ posts: initialPosts }: { posts: PostData[] }) {
    const token = useUserStore(state => state.token)
    const [posts, setPosts] = useState<PostData[]>(initialPosts);
    const navigate = useNavigate()

    useEffect(() => {
        setPosts(initialPosts);
    }, [initialPosts])

    const handleLikeToggle = useCallback(async (postId: number) => {
        try {
            const res = await axios.post(`${like}/${postId}`, {}, { 
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.data.success) {
                if (res.data.action === "liked") {
                    setPosts(prevPosts =>
                        prevPosts.map(p =>
                            p.id === postId
                                ? { ...p, _count: { ...p._count, like: p._count.like + 1 } }
                                : p
                        )
                    );
                } else if (res.data.action === "unliked") {
                    setPosts(prevPosts =>
                        prevPosts.map(p =>
                            p.id === postId
                                ? { ...p, _count: { ...p._count, like: p._count.like - 1 } }
                                : p
                        )
                    );
                }
            } else {
                console.log('problem in liking/disliking');
            }
        } catch (error) {
            console.error(error, "error in catch like"); 
        }
    }, [token]);

    

    return (
        <div className="">
            <div className="text-white text-sm space-y-2">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white text-black p-2 flex-col rounded-md border hover:cursor-pointer" 
                    onClick={() => navigate(`/post/${post.id}`)}>
                        <div>
                            {post.author.username}
                        </div>
                        <Heading children={post.title} level={2} />
                        <div className="space-y-2">
                            {post.description.slice(0, 12) + "..."}
                        </div>
                        <div className="w-[25vw] flex justify-between ">
                            <button onClick={() => handleLikeToggle(post.id)}>{post._count.like}</button>
                            <div>{post._count.comments}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}