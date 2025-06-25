import { useState } from "react"
import { usePostStore } from "../store/postsZustand"

export default function UserPage() {
    const getUser = usePostStore((state) => state.getUserData)
    const [details, setDetails] = useState<any>("get user");
    const user = usePostStore((state) => state.user)

    const handleClick = async() => {
        await getUser(1);
        console.log(`hello`, user)
        setDetails((user === null) ? details : user)
    }
    
    return (<div>
        <button onClick={ handleClick }>
            {JSON.stringify(details)}
        </button>

    </div>)
}