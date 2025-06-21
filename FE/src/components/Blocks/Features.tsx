import Heading from "../ui/Heading";

export default function TrustPoints() {
  const points = [
    {
      title: "Your Ideas, Your Control", 
      desc: "A minimalist editor designed to let your ideas flow without interruption, turning thoughts into compelling stories.",
    },
    {
      title: "Foster Community & Connection", 
      desc: "Connect deeply with your readers through thoughtful comments and express appreciation for content with simple likes.",
    },
    {
      title: "Publish with Confidence & Control",
      desc: "You decide when your stories go live. Easily publish new posts, and manage or delete your work with complete autonomy.",
    },
    {
      title: "Discoverability Through Community", 
      desc: "Your unique perspectives and content can be discovered by new readers exploring a vibrant public feed and individual profiles.",
    },
]

  return (
    <section className="mt-32 px-6">
      <Heading className="text-center">
        Powerful Features. Effortless Creation.
      </Heading>
      <ul className="mt-6 space-y-6 text-left">
        {points.map(({ title, desc }) => (
          <li key={title} className="flex gap-3 items-start">
            <span className="text-xl leading-snug">•</span>
            <div>
              <span className="font-semibold">{title}</span> - {desc}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}