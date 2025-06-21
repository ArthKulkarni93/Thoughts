export default function Footer() {
  return (
    <div className="mb-10 px-6">
      <span className="font-['Dancing_Script'] font-bold text-4xl">Thoughts</span>
      <div className="flex justify-between mt-4 text-sm">
        {/* Left Column */}
        <div className="space-y-2">
          <div className="font-normal text-lg">Thoughts</div>
          <div className="font-thin text-sm flex flex-col space-y-2">
            <div>About us</div>
            <a href="mailto:devarth40@gmail.com">Contact</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          <div className="font-normal text-lg">Connect with me</div>
          <div className="font-thin text-sm flex flex-col space-y-2">
            <a href="https://x.com/KulkarniArth" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com/ArthKulkarni93" target="_blank" rel="noopener noreferrer">Github</a>
            {/* Keeping "Freelance Services" as plain text as it was in the original structure */}
            <div>Freelance Services</div>
            <a href="https://arthk.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  );
}