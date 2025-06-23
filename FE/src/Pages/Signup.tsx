import { useState } from "react";
import { useUserStore } from "../store/auth";
import Heading from '../components/ui/Heading';
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const signup = useUserStore((s) => s.signup);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const res = await signup(email, password, username);
            if (res && res.success) {
                navigate('/home');
            } else {
                console.error("Signup failed:", res ? res.msg : "Unknown error or missing success property");
            }
        } catch (error) {
            console.error("An error occurred during signup:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-screen h-[96vh] px-6 flex flex-col h-screen justify-center items-center text-center">
            {isLoading ? (
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <p className="mt-4 text-lg font-medium">Signing up...</p>
                </div>
            ) : (
                <>
                    <div>
                        <Heading className="font-['Fira_Sans']">
                            Sign Up & Start Your <span className="font-['Dancing_Script'] font-bold">Thoughts</span> Flowing
                        </Heading>
                        <div className="my-6 text-lg font-medium">
                            Create your account to continue.
                        </div>
                    </div>
                    <div className=" text-left  space-y-4   ">
                        <div className="space-y-2">
                            <h1>Username</h1>
                            <input
                                type="text"
                                placeholder="AliceMarieJohnson"
                                className=" border text-black w-[75vw] rounded-md px-4 h-8"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <h1>Email</h1>
                            <input
                                type="text"
                                placeholder="alice.johnson@example.com"
                                className=" border text-black w-[75vw] rounded-md px-4 h-8"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <h1>Password</h1>
                            <input
                                type="password"
                                placeholder="********"
                                className=" border text-black w-[75vw] rounded-md px-4 h-8"
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                id="password"
                            />
                        </div>
                    </div>
                    <div
                        className="mt-4 w-[65vw] h-10 flex justify-center items-center bg-black text-white hover:bg-gray-800 rounded-xl "
                        onClick={handleClick}
                    >
                        signup
                    </div>
                </>
            )}
        </div>
    );
}