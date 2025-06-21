export default function ImageCards() {
  return (
    <div className="mt-32 border h-40 hover:h-60 transition-all duration-300 ease-in-out flex items-center gap-4 px-6 py-2 bg-gradient-to-r from-amber-200 via-yellow-400 to-emerald-400">
      <div className="border bg-white rotate-[-5deg] p-2 hover:rotate-[-10deg]">
        <img
          className="h-32 w-32 object-cover rotate-[-2deg]"
          src="https://i.imgur.com/CL811u4.jpg"
          alt="img1"
        />
        <div className="ml-1 font-['Dancing_Script']">Curate your ideas</div>
      </div>
      <div className="border bg-white rotate-[6deg] p-2 hover:rotate-[12deg]">
        <img
          className="h-32 w-32 object-cover rotate-[2deg]"
          src="https://framerusercontent.com/images/EujGrDJENVGOc53dGDFWVGyY.jpeg?scale-down-to=512"
          alt="img2"
        />
        <div className="ml-1 font-['Dancing_Script']">Express your thoughts</div>
      </div>
    </div>
  );
}