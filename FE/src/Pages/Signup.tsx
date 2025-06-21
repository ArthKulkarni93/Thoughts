import { useState } from "react";
import { useUserStore } from "../store/auth"
import Heading  from '../components/ui/Heading'
export default function Signin() {
    const login = useUserStore((s) => s.login);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async() => {
        await login(email, password)
    }

    return <div className="px-6 flex flex-col h-screen justify-center items-center text-center">
        <div>
            <Heading className="font-['Fira_Sans']">
                Sign In & Keep Your <span className="font-['Dancing_Script'] font-bold">Thoughts</span> Flowing
            </Heading>
            <div className="my-6 text-lg font-medium">
                It's time to pick up where you left off.
            </div>
        </div>
        <div className=" text-left  space-y-4   ">
            <div className="space-y-2">
                <h1>Email</h1>
                <input type="text" placeholder="John Doe " className = " border text-black w-[65vw] rounded-md px-4 h-8" onChange={(e) => setEmail(e.target.value)}  />
            </div>
            <div className="space-y-2">
                <h1>Password</h1>
                <input type="text" placeholder="12345678" className = " border text-black w-[65vw] rounded-md px-4 h-8"  onChange={(e) => setPassword(e.target.value)} name="" id="" />
            </div>
        </div>
        <div className="mt-4 w-[65vw] h-10 flex justify-center items-center bg-black text-white hover:bg-gray-800 rounded-xl " onClick={handleClick}>signin</div>
    </div>
}