import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { combine, persist } from "zustand/middleware";
import { useUserStore } from "./auth";
import axios from "axios";
import { createPost, getPosts, getPost, like, comment, getUser } from "../Api";

type PostAuthor = {
    id: number;
    username: string;
};

type PostCounts = {
    like: number;
    comments: number;
};

type commentData = {
    commentor: PostAuthor;
    commentorId: number;
    content: string;
    id: number;
    postId: number;
};

type PostData = {
    author: PostAuthor | null;
    authorId: number | null;
    comments: commentData[] | null;
    createdAt: string | null;
    description: string | null;
    id: number | null;
    picture: string | null;
    title: string | null;
    _count: PostCounts | null;
};

type userData = {
    id: number | null,
    username: string | null,
    email: string | null,
    comments: commentData[] | null,
    posts: PostData[] | null,
}

type State = {
    posts: PostData[];
    postType: "new" | "trending";
    page: number;
    pageSize: number;
    totalPosts: number;
    totalPages: number;
    singlePost: PostData | null;
    loading: boolean;
    error: string | null;
    commentString: string | null;
    user: userData | null,
};

type Actions = {
    fetchPosts: () => Promise<void>;
    fetchSinglePost: (postId: number) => Promise<void>;
    createNewPost: (title: string, description: string) => Promise<void>;
    toggleLike: (postId: number) => Promise<void>;
    setPostType: (type: "new" | "trending") => void;
    clearSinglePost: () => void;
    commentOnPost: (postId: number, commentString: string) => Promise<void>;
    clearCommentString: () => void;
    getUserData: (userId: number) => Promise<void>; 
};

export const usePostStore = create(
    persist(
        immer(
            combine<State, Actions>(
                {
                    posts: [],
                    postType: "new",
                    page: 1,
                    pageSize: 10,
                    totalPosts: 0,
                    totalPages: 0,
                    singlePost: null,
                    loading: false,
                    error: null,
                    commentString: null,
                    user: null,
                },
                (set, get) => ({
                    fetchPosts: async () => {
                        const token = useUserStore.getState().token;
                        const { page, pageSize, postType } = get();
                        set((state) => ({
                            loading: true,
                            error: null,
                        }))
                        try {
                            const res = await axios.get(`${getPosts}?page=${page}&pageSize=${pageSize}&type=${postType}`, {
                                headers: { Authorization: `Bearer ${token}` },
                            });
                            if (res.data.success) {
                                set((state) => ({
                                    posts: res.data.posts,
                                    totalPosts: res.data.pagination.totalPosts,
                                    totalPages: res.data.pagination.totalPages,
                                    loading: false,
                                }))
                            }
                        } catch (error) {
                            set((state) => ({
                                loading: false,
                                error: "Failed to fetch posts",
                            }))
                        }
                    },
                    fetchSinglePost: async (postId) => {
                        const token = useUserStore.getState().token;
                        set((state) => ({
                            loading: true,
                            error: null,
                        }))
                        try {
                            const res = await axios.get(`${getPost}/${postId}`, {
                                headers: { Authorization: `Bearer ${token}` },
                            });
                            if (res.data.success) {
                                set((state) => ({
                                    singlePost: res.data.post,
                                    loading: false,
                                }))
                            }
                        } catch (error) {
                            set((state) => ({
                                loading: false,
                                error: "Failed to fetch post",
                            }))
                        }
                    },
                    createNewPost: async (title, description) => {
                        const token = useUserStore.getState().token;
                        set((state) => ({
                            loading: true,
                            error: null,
                        }))
                        try {
                            const res = await axios.post(createPost, { title, description }, {
                                headers: { Authorization: `Bearer ${token}` },
                            });
                            if (res.data.success) {
                                set((state) => ({
                                    singlePost: res.data.post,
                                    loading: false,
                                }))
                            }
                        } catch (error) {
                            set((state) => ({
                                loading: false,
                                error: "Failed to create post",
                            }))
                        }
                    },
                    toggleLike: async (postId) => {
                        const token = useUserStore.getState().token;
                        try {
                            const res = await axios.post(`${like}/${postId}`, {}, {
                                headers: { Authorization: `Bearer ${token}` },
                            });
                            if (res.data.success) {
                                set((state) => ({
                                    posts: state.posts.map((post) => {
                                        if (post.id === postId && post._count) {
                                            return {
                                                ...post,
                                                _count: {
                                                    ...post._count,
                                                    like:
                                                        res.data.action === "liked"
                                                            ? post._count.like + 1
                                                            : post._count.like - 1,
                                                },
                                            };
                                        }
                                        return post;
                                    }),
                                    singlePost: state.singlePost?.id === postId && state.singlePost._count
                                        ? {
                                            ...state.singlePost,
                                            _count: {
                                                ...state.singlePost._count,
                                                like:
                                                    res.data.action === "liked"
                                                        ? state.singlePost._count.like + 1
                                                        : state.singlePost._count.like - 1,
                                            },
                                        }
                                        : state.singlePost,
                                }));

                            }
                        } catch (error) {
                            console.log("Error in liking post:", error);
                        }
                    },
                    setPostType: (type) => {
                        set((state) => ({
                            postType: type
                        }))
                    },
                    clearSinglePost: () => {
                        set((state) => ({
                            singlePost: null
                        }))
                    },
                    commentOnPost: async (postId, commentString) => {
                        const token = useUserStore.getState().token;
                        // const { commentString } = get()
                        set({ loading: true, error: null })

                        try {
                            const res = await axios.post(`${comment}/${postId}`, { commentString }, {
                                headers: { Authorization: `Bearer ${token}` }
                            })

                            if (res.data.success) {
                                set((state) => ({
                                    singlePost: state.singlePost && state.singlePost.comments
                                        ? {
                                            ...state.singlePost,
                                            comments: [...state.singlePost.comments, res.data.comment],
                                            _count: state.singlePost._count
                                                ? {
                                                    ...state.singlePost._count,
                                                    comments: state.singlePost._count.comments + 1
                                                }
                                                : state.singlePost._count
                                        }
                                        : state.singlePost,
                                    loading: false,
                                    commentString: null
                                }))
                            } else {
                                console.log(`problem in commenting`)
                                set({ loading: false, error: "Failed to comment" })
                            }
                        } catch (error) {
                            set({ loading: false, error: "Failed to comment" })
                        }
                    }, 
                    getUserData: async(userId) => {
                        const token = useUserStore.getState().token;
                        set({ loading: true, error: null })
                        try {
                            const res = await axios.get(`${getUser}/${userId}`, {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            })
                            if(res.data.success) {
                                set((state) => ({
                                    // id: userId,
                                    user: res.data.user
                                }))
                            } else {
                                console.log(`problem in getting user`)
                                set({ loading: false, error: "Failed to get user" })
                            }
                            console.log(res.data)
                        } catch (error) {
                            set({ loading: false, error: "Failed to get user" })
                        }
                    },
                    clearCommentString: () => {
                        set((state) => ({
                            commentString: null
                        }))
                    }
                })
            )
        ),
        {
            name: "post-store",
            partialize: (state) => ({
                posts: state.posts,
                postType: state.postType,
                singlePost: state.singlePost,
            }),
        }
    )
);
