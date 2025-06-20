export default function Navbar() {

    return <div className="bg-black h-12 mt-5 px-1 rounded-xl text-white flex justify-between items-center">
        <a href="http://localhost:5173" >
            {/* <img className="h-12  ml-1" src="	https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg" alt="" /> */}
            <span className="font-['Dancing_Script'] font-bold text-4xl leading-snug tracking-tight text-left block">
                Thoughts
            </span>
        </a>
        <button className="text-black h-8 rounded-lg text-lg font-medium px-3  border bg-white ">
            <div className="sm:hidden">
                Get Started 
            </div>
            <div className="hidden sm:block">
                Get Started Now
            </div>
        </button>
    </div>
}