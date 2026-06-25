export const metadata = {
  title: "About Us | Resume Helper AI",
  description: "Learn about Resume Helper AI — a free AI-powered resume builder helping job seekers worldwide create professional resumes.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-12">
          <a href="/" className="text-blue-600 hover:underline text-sm mb-8 block">
            ← Back to Resume Helper AI
          </a>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Resume Helper AI
          </h1>
          <p className="text-gray-500">Helping job seekers build better resumes, for free.</p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p>
              Resume Helper AI was built with one simple goal: to help every job seeker —
              whether a fresh graduate, an experienced professional, or someone switching
              careers — create a polished, professional resume without spending money or
              hours of effort.
            </p>
            <p className="mt-3">
              We believe a great resume should not be a privilege. That is why Resume Helper AI
              is completely free to use, requires no sign-up, and gives you a downloadable PDF
              in minutes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>5 Professional Templates</strong> — from clean ATS-friendly designs
                to modern two-column layouts, built to pass automated screening systems used
                by employers.
              </li>
              <li>
                <strong>AI-Powered Writing Assistance</strong> — our AI summary generator
                and skill suggestion tool (powered by Google Gemini) help you write
                compelling resume content, even if you are not sure where to start.
              </li>
              <li>
                <strong>Instant PDF Download</strong> — create your resume and download a
                print-ready PDF instantly, no account needed.
              </li>
              <li>
                <strong>Country-Specific Formats</strong> — resume and CV formats tailored
                for India, UAE, Canada, UK, Germany, Australia, and more.
              </li>
              <li>
                <strong>No Sign-Up Required</strong> — start building your resume immediately.
                Your data stays in your browser and is never stored on our servers.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who We Are Built For</h2>
            <p>
              Resume Helper AI is designed for job seekers everywhere — freshers entering the
              workforce, professionals updating their resume, people relocating internationally,
              and anyone who wants a better resume without the cost of a professional service.
            </p>
            <p className="mt-3">
              We particularly focus on job markets in India, the UAE, Canada, the UK, and
              Australia — providing templates and formats that match local employer expectations
              in each region.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How It Is Free</h2>
            <p>
              Resume Helper AI is supported by display advertising. This allows us to keep
              the tool completely free for everyone, with no hidden charges, premium tiers,
              or paywalled downloads. The tool you see is the full tool — no features locked
              behind a payment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Get in Touch</h2>
            <p>
              Have a question, suggestion, or found a bug? We would love to hear from you.
            </p>
            <div className="mt-4">
              <a href="/contact" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}