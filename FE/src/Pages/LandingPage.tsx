import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="w-screen px-6 ">
        <Navbar/>

        {/* CTA */}
        <div className="mt-48 border border-l-4 border-indigo-500 rounded-xl">
            <div className="flex flex-col items-center justify-center text-4xl leading-snug tracking-tight text-center mt-10 gap-2">
                <div>
                    <span className="font-bold">Turning your </span>
                    <span className="font-['Dancing_Script'] font-bold">Thoughts</span>
                </div>

                <div>
                    <span className="font-bold">into </span>
                    <span>Stories</span>
                </div>
            </div>

            <div className="mt-2 text-justify px-6 ">
                Transform ideas into compelling narratives. Share voice, find readers, make your thoughts lasting stories.
            </div>

            <button className="mt-10 h-12 mx-16 px-10 mb-8 rounded-xl bg-black text-white flex justify-around align-center items-center shadow-xl  hover:cursor-pointer hover:bg-gray-800">
                Write a Story Now 
            </button>
        </div>


{/* Trust */}
        <div className="mt-40 flex flex-col gap-6 rounded-xl border border-r-4 border-red-500 mb-8 p-4">
            <div className="font-bold items-center justify-center text-4xl leading-snug tracking-tight ">
                Why trust{" "} <span className="font-['Dancing_Script'] font-bold">Thoughts ?{" "}</span> 
            </div>

            <div className=" text-justify "> 
                <li className="flex items-start list-none mb-2"> 

                    <span className="text-xl leading-snug tracking-tight mr-2 text-gray-700 text-black dark:text-white-300">•</span>

                    <div className="flex-grow leading-snug tracking-tight">
                        <span className="font-semibold ">You Own Everything{" "}</span> - Your content,
                        your data, your intellectual property remains unequivocally yours.
                        We stand for transparent rights and absolute control over your creations.
                    </div>
                </li>

                <li className="mt-6 flex items-start list-none mb-2"> 

                    <span className="text-xl leading-snug tracking-tight mr-2 text-gray-700 text-black dark:text-white-300">•</span>

                    <div className="flex-grow leading-snug tracking-tight">
                    <span className="font-semibold ">Built for Stability & Longevity{" "}</span>  
                    - We're committed to providing a secure, reliable, and always on platform. Your 
                    words are safe here, designed to endure and be accessible for years to come.
                    </div>
                </li>

                <li className="mt-6 flex items-start list-none mb-2"> 

                    <span className="text-xl leading-snug tracking-tight mr-2 text-gray-700 text-black dark:text-white-300">•</span>

                    <div className="flex-grow leading-snug tracking-tight">
                    <span className="font-semibold ">A Partnership, Not Just a Platform{" "}</span>  
                    - We believe in clear terms, no hidden agendas, and genuinely supporting your growth. 
                    Focus purely on writing; we handle the rest with integrity.
                    </div>
                </li>
            </div>
        </div>

        {/* heading */}
        <div className="flex justify-text flex-col items-center justify-center text-4xl  text-center mt-10 font-semibold">
            Others loved it, and we'll make sure you'll love it too.
        </div>

        {/* things to do with Thoughts */}
        
        
  <div className="mt-16 flex flex-col gap-6 rounded-xl border-l-4 border-green-500 border p-6 mb-8 bg-white">
  <h1 className="font-bold text-4xl leading-snug tracking-tight text-gray-900">
    Start your journey with <span className="font-['Dancing_Script'] font-bold">Thoughts</span>
  </h1>

  <ul className="flex flex-col gap-4">
    <li className="flex items-start gap-3 text-gray-800">
      <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2a1 1 0 0 1 1 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16Zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002l.002-1.412l7.778-7.778ZM13 12v2H8v-2h5Zm3-4v2H8V8h8Z"/>
      </svg>
      <p className="leading-snug tracking-tight">
        <span className="font-semibold">Craft Your Narrative.</span>
      </p>
    </li>

    <li className="flex items-start gap-3 text-gray-800">
      <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
      </svg>
      <p className="leading-snug tracking-tight font-semibold">
            Connect with Kindred Spirits.
      </p>
    </li>

    <li className="flex items-start gap-3 text-gray-800">
      <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
      </svg>
      <p className="leading-snug tracking-tight font-semibold">
            Grow with Meaningful Feedback.
      </p>
    </li>

    <li className="flex items-start gap-3 text-gray-800">
      <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z"/>
      </svg>
      <p className="leading-snug tracking-tight font-semibold">
            Publish on Your Terms.
      </p>
    </li>
  </ul>
</div>



        
    </div>
  );
}
