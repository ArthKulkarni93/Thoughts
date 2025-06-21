import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="mt-48 px-6 text-center">
      <h1 className="text-4xl font-bold leading-snug tracking-tight">
        Turning your <span className="font-['Dancing_Script']">Thoughts</span> into Stories
      </h1>
      <p className="mt-4 text-base text-gray-700">
        Transform ideas into compelling narratives. Share voice, find readers, make your thoughts lasting stories.
      </p>
      <div className="mt-10">
        <Button onClick={() => {}}>Write a Story Now</Button>
      </div>
    </section>
  );
}