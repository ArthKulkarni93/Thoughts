import { usePostStore } from "../../store/postsZustand";
import PostCard from "./PostCard";

export default function Posts() {
    const posts = usePostStore(state => state.posts);

    return (
        <div className="text-white text-sm space-y-2">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
