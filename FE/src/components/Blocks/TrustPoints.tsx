import Heading from "../ui/Heading";

export default function TrustPoints() {
  const points = [
    {
      title: "You Own Everything",
      desc: "Your content, data, and IP are unequivocally yours. Transparent rights, absolute control.",
    },
    {
      title: "Built for Stability & Longevity",
      desc: "Secure, reliable, and always-on. Your words are safe, designed to endure for years.",
    },
    {
      title: "A Partnership, Not Just a Platform",
      desc: "Clear terms, no hidden agendas. We support your growth, handling the rest with integrity.",
    },
]

  return (
    <section className="mt-32 px-6">
      <Heading className="text-center">
        Why Trust <span className="font-['Dancing_Script']">Thoughts?</span>
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