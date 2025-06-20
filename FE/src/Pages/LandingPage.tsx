import { useState } from "react";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="w-screen px-6 ">
      <Navbar />

      {/* CTA */}
      <div className="mt-48    rounded-xl">
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

        <button className="mt-10  h-12 ml-20 px-10 mb-8 rounded-xl bg-black text-white flex justify-around align-center items-center shadow-xl  hover:cursor-pointer hover:bg-gray-800">
          Write a Story Now
        </button>
      </div>


      {/* Trust */}
      <div className="mt-40 flex flex-col gap-6 rounded-xl  mb-8 p-4">
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


      {/* bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600 */}
      {/* heading */}
      <div className="mt-32 border h-40 hover:h-60 transition-all duration-300 ease-in-out flex items-center gap-1 px-9 py-2 bg-gradient-to-r from-amber-200 via-yellow-400 to-emerald-400">
        <div className="border bg-white rotate-[-5deg] p-2 hover:rotate-[-10deg]">
          <img
            className="h-32 w-32 object-cover rotate-[-2deg] p-1 "
            src="https://i.imgur.com/CL811u4.jpg"
            alt="img1"
          />
          <div className="ml-1 rotate-[-2deg] py-1  font-['Dancing_Script']">
            Curate your ideas
          </div>
        </div>

        <div className="border bg-white rotate-[6deg] p-2 hover:rotate-[12deg] relative">
          <img
            className="h-32 w-32 object-cover rotate-[2deg]"
            src="https://framerusercontent.com/images/EujGrDJENVGOc53dGDFWVGyY.jpeg?scale-down-to=512"
            alt="img2"
          />
          <div className="ml-1 rotate-[2deg] py-1 font-['Dancing_Script']">
            Express your thoughts
          </div>
        </div>
      </div>
      <div className="flex justify-text flex-col items-center justify-center text-4xl  text-center mt-32 font-semibold">
        Others loved it, and we'll make sure you'll love it too.
      </div>

      {/* things to do with Thoughts */}
      <div className="mt-16 flex flex-col gap-6 rounded-xl   p-6 mb-8 bg-white">
        <h1 className="font-bold text-4xl leading-snug tracking-tight text-gray-900">
          Start your journey with <span className="font-['Dancing_Script'] font-bold">Thoughts</span>
        </h1>

        <ul className="flex flex-col gap-4">
          <li className="flex items-start gap-3 text-gray-800">
            <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2a1 1 0 0 1 1 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16Zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002l.002-1.412l7.778-7.778ZM13 12v2H8v-2h5Zm3-4v2H8V8h8Z" />
            </svg>
            <p className="leading-snug tracking-tight">
              <span className="font-semibold">Craft Your Narrative.</span>
            </p>
          </li>

          <li className="flex items-start gap-3 text-gray-800">
            <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
            </svg>
            <p className="leading-snug tracking-tight font-semibold">
              Connect with Kindred Spirits.
            </p>
          </li>

          <li className="flex items-start gap-3 text-gray-800">
            <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
            </svg>
            <p className="leading-snug tracking-tight font-semibold">
              Grow with Meaningful Feedback.
            </p>
          </li>

          <li className="flex items-start gap-3 text-gray-800">
            <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z" />
            </svg>
            <p className="leading-snug tracking-tight font-semibold">
              Publish on Your Terms.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-28  flex flex-col gap-6 rounded-xl p-6 mb-8 bg-white">
        <div className="font-bold text-4xl leading-snug tracking-tight text-gray-900">
          Powerful Features. Effortless Creation.
        </div>

        <ul className="flex flex-col gap-4">
          <li className="flex items-start gap-3 text-gray-800">
            <div className="h-6 w-6 flex-shrink-0 mt-1">
              ✨
            </div>

            <div className="flex-grow leading-snug tracking-tight">
              <span className="font-semibold ">You Own Everything{" "}</span> - A minimalist
              editor designed to let your ideas flow without interruption, turning
              thoughts into compelling stories.
            </div>
          </li>

          <li className="flex items-start gap-3 text-gray-800">
            <div className="h-6 w-6 flex-shrink-0 mt-1">
              💬
            </div>
            <div className="flex-grow leading-snug tracking-tight">
              <span className="font-semibold ">You Own Everything{" "}</span> - Connect
              deeply with your readers through thoughtful comments and express
              appreciation for content with simple likes.
            </div>
          </li>

          <li className="flex items-start gap-3 text-gray-800">
            <div className="h-6 w-6 flex-shrink-0 mt-1">
              📥
            </div>
            <div className="flex-grow leading-snug tracking-tight">
              <span className="font-semibold ">You Own Everything{" "}</span> - You
              decide when your stories go live. Easily publish
              new posts, and manage or delete your work with complete autonomy.
            </div>
          </li>

          <li className="flex items-start gap-3 text-gray-800">
            <div className="h-6 w-6 flex-shrink-0 mt-1">
              🌐
            </div>
            <div className="flex-grow leading-snug tracking-tight">
              <span className="font-semibold ">You Own Everything{" "}</span> - Your
              unique perspectives and content can be discovered by new readers
              exploring a vibrant public feed and individual profiles.
            </div>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-start text-3xl font-medium leading-tight tracking-tight mt-32 space-y-4">


        <h2 className="font-semibold text-left leading-tight text-gray-900 max-w-5xl">
          Now, I think you're ready to truly amplify your <span className="font-['Dancing_Script'] font-bold">Thoughts</span>.
        </h2>
      </div>

      {/* last CTA */}
      <button className="mt-10 h-12 mx-16 px-10 mb-8 rounded-xl bg-black text-white flex justify-around align-center items-center shadow-xl  hover:cursor-pointer hover:bg-gray-800">
        Join Thoughts Today
      </button>

      {/* last words */}
      <div className="flex flex-col items-start leading-tight tracking-tight mt-32 mb-20 space-y-4"> {/* Increased space-y-2 to space-y-4 for better vertical spacing */}
        <h2 className="font-semibold text-left text-3xl leading-tight text-gray-900  max-w-5xl">
          Your Voice, Unfiltered.
        </h2>

        <h2 className="text-[#5a5a5a]  leading-snug tracking-tight mb-6"> {/* Adjusted margin-bottom for better spacing */}
          Have a thought about <span className="font-['Dancing_Script'] font-bold">Thoughts</span>? A suggestion?
          A bug report? Or just want to share what's on your mind?
        </h2>

        <input
          type="text"
          className="w-full h-12 p-3 border border-gray-300 shadow-lg rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
          placeholder="Your Name or Email (Optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="w-full h-32 p-3 border border-gray-300 shadow-lg rounded-md resize-y focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
          placeholder="Share your thoughts, suggestions, or just say hello! (No signup needed)"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>

        <button className="mt-10 h-12 px-10 mb-8 rounded-xl text-white bg-black font-semibold shadow-xl  hover:cursor-pointer hover:bg-gray-800 transition duration-200 ease-in-out mx-auto ">
          Submit
        </button>
      </div>

      {/* footer */}
      <div className="mb-10">
        <span className="font-['Dancing_Script'] font-bold text-4xl leading-snug tracking-tight text-left block">
          Thoughts
        </span>

        <div className="flex justify-between mx-5 mt-4">
          {/* Left column */}
          <div className="space-y-2">
            <div className="font-normal text-lg">Thoughts</div>
            <div className="font-thin text-sm flex flex-col space-y-2">
              <div>About us</div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devarth40@gmail.com" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-2">
            <div className="font-normal text-lg">Connect with me</div>
            <div className="font-thin text-sm flex flex-col space-y-2">
              <a href="https://x.com/KulkarniArth">
                Twitter
              </a>
              <a href="https://github.com/ArthKulkarni93">
                Github
              </a>
              <div>Freelance Services</div>
              <a href="https://arthk.vercel.app/" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}


// import Navbar from "../components/Navbar";

// export default function LandingPage() {
//   return (
//     <div className="w-screen px-6 ">
//       <Navbar />

//       {/* CTA */}
//       <div className="mt-48 border border-l-4 border-indigo-500 rounded-xl">
//         <div className="flex flex-col items-center justify-center text-4xl leading-snug tracking-tight text-center mt-10 gap-2">
//           <div>
//             <span className="font-bold">Turning your </span>
//             <span className="font-['Dancing_Script'] font-bold">Thoughts</span>
//           </div>

//           <div>
//             <span className="font-bold">into </span>
//             <span>Stories</span>
//           </div>
//         </div>

//         <div className="mt-2 text-justify px-6 ">
//           Transform ideas into compelling narratives. Share voice, find readers, make your thoughts lasting stories.
//         </div>

//         <button className="mt-10 h-12 mx-16 px-10 mb-8 rounded-xl bg-black text-white flex justify-around align-center items-center shadow-xl  hover:cursor-pointer hover:bg-gray-800">
//           Write a Story Now
//         </button>
//       </div>


//       {/* Trust */}
//       <div className="mt-40 flex flex-col gap-6 rounded-xl border border-r-4 border-red-500 mb-8 p-4">
//         <div className="font-bold items-center justify-center text-4xl leading-snug tracking-tight ">
//           Why trust{" "} <span className="font-['Dancing_Script'] font-bold">Thoughts ?{" "}</span>
//         </div>

//         <div className=" text-justify ">
//           <li className="flex items-start list-none mb-2">

//             <span className="text-xl leading-snug tracking-tight mr-2 text-gray-700 text-black ?:text-white-300">•</span>

//             <div className="flex-grow leading-snug tracking-tight">
//               <span className="font-semibold ">You Own Everything{" "}</span> - Your content,
//               your data, your intellectual property remains unequivocally yours.
//               We stand for transparent rights and absolute control over your creations.
//             </div>
//           </li>

//           <li className="mt-6 flex items-start list-none mb-2">

//             <span className="text-xl leading-snug tracking-tight mr-2 text-gray-700 text-black dark:text-white-300">•</span>

//             <div className="flex-grow leading-snug tracking-tight">
//               <span className="font-semibold ">Built for Stability & Longevity{" "}</span>
//               - We're committed to providing a secure, reliable, and always on platform. Your
//               words are safe here, designed to endure and be accessible for years to come.
//             </div>
//           </li>

//           <li className="mt-6 flex items-start list-none mb-2">

//             <span className="text-xl leading-snug tracking-tight mr-2 text-gray-700 text-black dark:text-white-300">•</span>

//             <div className="flex-grow leading-snug tracking-tight">
//               <span className="font-semibold ">A Partnership, Not Just a Platform{" "}</span>
//               - We believe in clear terms, no hidden agendas, and genuinely supporting your growth.
//               Focus purely on writing; we handle the rest with integrity.
//             </div>
//           </li>
//         </div>
//       </div>


// {/* bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600 */}
//       {/* heading */}
//       <div className="mt-32 border h-40 hover:h-60 transition-all duration-300 ease-in-out flex items-center gap-1 px-9 py-2 bg-gradient-to-r from-amber-200 via-yellow-400 to-emerald-400">
//         <div className="border bg-white rotate-[-5deg] p-2 hover:rotate-[-10deg]">
//           <img
//             className="h-32 w-32 object-cover rotate-[-2deg] p-1 "
//             src="https://i.imgur.com/CL811u4.jpg"
//             alt="img1"
//           />
//           <div className="ml-1 rotate-[-2deg] py-1  font-['Dancing_Script']">
//             Curate your ideas
//           </div>
//         </div>

//         <div className="border bg-white rotate-[6deg] p-2 hover:rotate-[12deg] relative">
//           <img
//             className="h-32 w-32 object-cover rotate-[2deg]"
//             src="https://framerusercontent.com/images/EujGrDJENVGOc53dGDFWVGyY.jpeg?scale-down-to=512"
//             alt="img2"
//           />
//           <div className="ml-1 rotate-[2deg] py-1 font-['Dancing_Script']">
//             Express your thoughts
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-text flex-col items-center justify-center text-4xl  text-center mt-32 font-semibold">
//         Others loved it, and we'll make sure you'll love it too.
//       </div>

//       {/* things to do with Thoughts */}
//       <div className="mt-16 flex flex-col gap-6 rounded-xl border-l-4 border-green-500 border p-6 mb-8 bg-white">
//         <h1 className="font-bold text-4xl leading-snug tracking-tight text-gray-900">
//           Start your journey with <span className="font-['Dancing_Script'] font-bold">Thoughts</span>
//         </h1>

//         <ul className="flex flex-col gap-4">
//           <li className="flex items-start gap-3 text-gray-800">
//             <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M20 2a1 1 0 0 1 1 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16Zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002l.002-1.412l7.778-7.778ZM13 12v2H8v-2h5Zm3-4v2H8V8h8Z" />
//             </svg>
//             <p className="leading-snug tracking-tight">
//               <span className="font-semibold">Craft Your Narrative.</span>
//             </p>
//           </li>

//           <li className="flex items-start gap-3 text-gray-800">
//             <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
//             </svg>
//             <p className="leading-snug tracking-tight font-semibold">
//               Connect with Kindred Spirits.
//             </p>
//           </li>

//           <li className="flex items-start gap-3 text-gray-800">
//             <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
//             </svg>
//             <p className="leading-snug tracking-tight font-semibold">
//               Grow with Meaningful Feedback.
//             </p>
//           </li>

//           <li className="flex items-start gap-3 text-gray-800">
//             <svg className="h-6 w-6 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z" />
//             </svg>
//             <p className="leading-snug tracking-tight font-semibold">
//               Publish on Your Terms.
//             </p>
//           </li>
//         </ul>
//       </div>




//     </div>
//   );
// }
