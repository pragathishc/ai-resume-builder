import Link from "next/link";
export const metadata = {
  title: "Resume Templates for Electricians, Plumbers & Skilled Trades",
  description: "How to write a resume for skilled trades roles, including trade licenses, safety certifications, and how to present hands-on project experience.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/trades-resume-guide" },
};

function TradesIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f8fafc" rx="12" />
      <rect x="40" y="30" width="220" height="160" rx="8" fill="#1e293b" opacity="0.05" />
      <rect x="40" y="30" width="220" height="40" rx="8" fill="#1e293b" />
      <rect x="55" y="45" width="130" height="9" rx="2" fill="#fff" />
      <rect x="55" y="80" width="90" height="7" rx="2" fill="#f97316" />
      <rect x="55" y="100" width="60" height="30" rx="4" fill="#fed7aa" />
      <text x="85" y="119" textAnchor="middle" fontSize="9" fill="#9a3412" fontWeight="700">Wiring</text>
      <rect x="125" y="100" width="60" height="30" rx="4" fill="#fed7aa" />
      <text x="155" y="119" textAnchor="middle" fontSize="9" fill="#9a3412" fontWeight="700">Safety</text>
      <rect x="195" y="100" width="55" height="30" rx="4" fill="#fed7aa" />
      <text x="222" y="119" textAnchor="middle" fontSize="9" fill="#9a3412" fontWeight="700">CAD</text>
      <rect x="55" y="145" width="190" height="4" fill="#cbd5e1" />
      <rect x="55" y="155" width="150" height="4" fill="#cbd5e1" />
      <circle cx="330" cy="110" r="45" fill="#ffedd5" />
      <text x="330" y="122" textAnchor="middle" fontSize="30">🔧</text>
    </svg>
  );
}

export default function TradesResumeGuide() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">Resume Helper AI</Link>
          <Link href="/resume-builder">
            <button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition text-sm">Get Started</button>
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-3">Skilled Trades</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Resume Templates for Electricians, Plumbers & Skilled Trades
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Trade employers hire on proof of hands-on competence and valid licensing, not corporate polish. Here is how to structure a trades resume that gets you called for an interview.
        </p>

        <div className="mb-10">
          <TradesIllustration />
        </div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lead With Certifications, Not a Summary</h2>
          <p>Trade licenses, safety certifications like OSHA, and first aid training are often the first filter employers apply. Place these prominently near the top, ideally with certifying bodies and dates, rather than burying them at the bottom of the page.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Use a Skills Grid, Not Paragraphs</h2>
          <p>Employers scanning trades resumes look for specific competencies fast: wiring, plumbing systems, blueprint reading, welding types, or equipment operated. A grid or tag-style skills section is far easier to scan than a paragraph description of your capabilities.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quantify Your Project Work</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Number of installations, units, or projects completed</li>
            <li>Project scale (residential, commercial, industrial)</li>
            <li>Safety record, such as zero incidents over a stated period</li>
            <li>Efficiency improvements, like reduced completion time</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tools and Equipment Section</h2>
          <p>Unlike office roles, trades resumes benefit from a dedicated line for tools and equipment you are proficient with. This helps employers quickly confirm you can operate what their job site requires without needing additional training.</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Build Your Trades Resume</h3>
          <p className="text-slate-300 mb-6">A skills-grid layout built for licenses, safety certifications, and hands-on project work.</p>
          <Link href="/resume-builder?template=Trades">
            <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Use the Trades Template →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/uae-cv-format-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-slate-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">UAE CV Format Guide</p>
              <p className="text-sm text-gray-500 mt-1">Trade license and visa fields for Dubai employers.</p>
            </Link>
            <Link href="/blog/fresher-resume-no-experience" className="block p-5 border border-gray-200 rounded-lg hover:border-slate-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Fresher Resume: No Experience</p>
              <p className="text-sm text-gray-500 mt-1">For apprentices just starting their trade career.</p>
            </Link>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Resume Templates for Electricians, Plumbers & Skilled Trades",
            description: "How to write a resume for skilled trades roles.",
            author: { "@type": "Organization", name: "Resume Helper AI" },
            publisher: { "@type": "Organization", name: "Resume Helper AI" },
          }),
        }}
      />
    </main>
  );
}
