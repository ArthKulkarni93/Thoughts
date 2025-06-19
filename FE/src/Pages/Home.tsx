import { useEffect, useState } from "react"
import axios from "axios"
export default function Home() {
    const [postType, setPostType] = useState("trending")
    const [posts, setPosts] = useState<any[]>()

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const res = await axios.get("http://localhost:4001/api/v1/get/bulkposts", {});
            console.log(res.data); 
            setPosts(res.data)
        } catch (err) {
            console.error("Error fetching posts:", err);
            }
        };

        fetchPosts();
    }, [postType]);

    return <div className="bg-black h-12 mt-5 mx-10 px-1 rounded-xl  ">
        <div className="flex justify-between items-center text-white">
            <a href="http://localhost:5173" >
                <img className="h-12 ml-1 " src="	https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg" alt="" />
            </a>

            <div className="flex justify-between items-center">
                <a href="">
                    <svg
                        className="h-12 ml-auto p-0 m-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z"
                            fill="#ffffff"
                        />
                    </svg>

                </a>
               
                <a href="http://localhost:5173" >
                    <img className="h-12 mr-1 " src="	https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg" alt="" />
                </a>
            </div>
        </div>

        <div className="mt-10 px-1 flex justify-between items-center text-sm">
            <button
                onClick={() => setPostType("trending")}
                className={postType === "trending" ? "font-bold" : "font-light"}
            >
                Trending Posts
            </button>

            <button
                onClick={() => setPostType("new")}
                className={postType === "new" ? "font-bold" : "font-light"}
            >
                New Posts
            </button>
        </div>

        <div>
            {
                // posts.map((value, idx) => {
                //     return <div key={idx}>
                //         {value}
                //     </div>
                // })
            }   
        </div>
    </div>
}