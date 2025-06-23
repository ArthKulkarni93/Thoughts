import { useState } from "react";
import { useUserStore } from "../store/auth";
import Heading from '../components/ui/Heading';
import { useNavigate } from "react-router-dom";


export default function Signin() {
    const login = useUserStore((s) => s.login);
    const navigate = useNavigate(); // Corrected typo: navigte -> navigate

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); // New state for loading animation

    const handleClick = async () => {
        setIsLoading(true); // Show the loading animation
        try {
            const res = await login(email, password);
            if (res && res.success) { // Check if res exists and has success property
                navigate('/home');
            } else {
                // Handle login failure, e.g., show an error message
                console.error("Login failed:", res ? res.success : "Unknown error");
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
            // Optionally, show a more user-friendly error message
        } finally {
            setIsLoading(false); // Hide the loading animation regardless of success/failure
        }
    };

    return (
        <div className="w-screen h-[96vh] px-6 flex flex-col h-screen justify-center items-center text-center">
            {isLoading ? (
                // Display the circular animation when loading
                <div className="flex flex-col items-center justify-center min-h-screen">
                        value={75} // You can use a fixed value or make it dynamic if you have progress
                        gaugePrimaryColor="#000" // Black color for the active part
                        gaugeSecondaryColor="#e0e0e0" // Light gray for the background part
                        size="size-24" // Adjust size as needed, e.g., size-24, size-32
                        strokeWidth={6} // Adjust stroke thickness
                    <p className="mt-4 text-lg font-medium">Signing in...</p>
                </div>
            ) : (
                // Display the sign-in form when not loading
                <>
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
                            <input
                                type="text"
                                placeholder="John Doe "
                                className=" border text-black w-[75vw] rounded-md px-4 h-8"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <h1>Password</h1>
                            <input
                                type="password" // Changed type to password for security
                                placeholder="12345678"
                                className=" border text-black w-[75vw] rounded-md px-4 h-8"
                                onChange={(e) => setPassword(e.target.value)}
                                name=""
                                id=""
                            />
                        </div>
                    </div>
                    <div
                        className="mt-4 w-[65vw] h-10 flex justify-center items-center bg-black text-white hover:bg-gray-800 rounded-xl "
                        onClick={handleClick}
                    >
                        signin
                    </div>
                </>
            )}
        </div>
    );
}