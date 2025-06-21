// Remaining -->
// waitlist, feedbackMsg, navbar(animation + designing + fixed), colorfull, adding interfaces to show how it looks inside

import Navbar from "../components/layout/Navbar";
import CTA from "../components/Blocks/CTA";     
import TrustPoints from "../components/Blocks/TrustPoints";
import ImageCards from "../components/Blocks/ImageCards";
import Footer from "../components/Blocks/Footer";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import Feature from "../components/Blocks/Features"

export default function LandingPage() {
  return (
    <main className="w-screen px-6">
      <Navbar />
      <CTA />
      <TrustPoints />
      <ImageCards />

      <div className="mt-32 text-center font-semibold text-3xl">
        Others loved it, and we'll make sure you'll love it too.
      </div>

      <section className="mt-16 px-6">
        <Heading>
          Start your journey with <span className="font-['Dancing_Script']">Thoughts</span>
        </Heading>
        <ul className="mt-6 space-y-4 text-gray-800">
          <li>Craft Your Narrative.</li>
          <li>Connect with Kindred Spirits.</li>
          <li>Grow with Meaningful Feedback.</li>
          <li>Publish on Your Terms.</li>
        </ul>
      </section>

      <Feature/>
      {/* <section className="mt-28 px-6">
        <Heading>Powerful Features. Effortless Creation.</Heading>
        <ul className="mt-6 space-y-4 text-gray-800">
          <li>✨ <strong>You Own Everything</strong> - A minimalist editor designed to let your ideas flow without interruption.</li>
          <li>💬 <strong>You Own Everything</strong> - Connect with your readers through thoughtful comments and likes.</li>
          <li>📥 <strong>You Own Everything</strong> - You decide when to publish and manage your posts freely.</li>
          <li>🌐 <strong>You Own Everything</strong> - Get discovered by readers through profiles and the public feed.</li>
        </ul>
      </section> */}

      <section className="mt-32 px-6">
        <Heading level={2}>Now, I think you're ready to truly amplify your <span className="font-['Dancing_Script']">Thoughts</span>.</Heading>
        <div className="mt-8">
          <Button onClick={() => {}}>Join Thoughts Today</Button>
        </div>
      </section>

      <section className="mt-32 px-6 space-y-4 mb-20">
        <Heading level={2}>Your Voice, Unfiltered.</Heading>
        <p className="text-gray-600">
          Have a thought about <span className="font-['Dancing_Script']">Thoughts</span>? A suggestion? A bug report? Or just want to share what's on your mind?
        </p>
        <input
          type="text"
          placeholder="Your Name or Email (Optional)"
          className="w-full p-3 border rounded-md shadow focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Share your thoughts, suggestions, or just say hello! (No signup needed)"
          className="w-full p-3 border rounded-md shadow resize-y focus:ring-2 focus:ring-green-500 h-32"
        />
        <div className="text-center">
          <Button onClick={() => {}}>Submit</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
