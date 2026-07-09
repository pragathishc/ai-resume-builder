 import Link from "next/link";

export const metadata = {
  title: "Resume Templates for Electricians, Plumbers & Skilled Trades",
  description: "How to write a resume for skilled trades roles, including trade licenses, safety certifications, sample bullets, common mistakes, and how to present project experience.",
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

const faqs = [
  { q: "Do I need a resume at all for trades work, or just references?", a: "A resume still matters, especially for larger contractors, commercial projects, or roles requiring formal applications through HR systems. Smaller residential jobs may rely more on references and word of mouth, but having a strong resume widens the roles you can access." },
  { q: "How do I list apprenticeship experience?", a: "Treat it as real experience with its own entry: the company or program name, duration, and specific skills or systems you worked on under supervision. Do not undervalue it simply because it was unpaid or supervised." },
  { q: "Should I include soft skills like teamwork or communication?", a: "Briefly, but they should not dominate the resume. Trade employers weight certifications, hands-on skills, and safety record far more heavily than soft skill claims, which are harder to verify and less differentiating." },
  { q: "What if I have experience across multiple trades?", a: "List your primary trade prominently in the headline, then group secondary skills separately. Being a jack of several trades can be valuable, but a resume that does not clearly state your main specialty can confuse recruiters about which roles to consider you for." },
  { q: "How important are safety certifications compared to years of experience?", a: "Both matter, but missing safety certifications can disqualify you before experience is even considered on many commercial and industrial job sites, where compliance is a legal requirement, not a preference." },
];

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
          Trade employers hire on proof of hands-on competence and valid licensing, not corporate polish. Here is how to structure a trades resume that gets you called for an interview, with a real example and the mistakes that hold experienced tradespeople back.
        </p>

        <div className="mb-10">
          <TradesIllustration />
        </div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lead With Certifications, Not a Summary</h2>
          <p>Trade licenses, safety certifications like OSHA, and first aid training are often the first filter employers apply, sometimes before a resume is even read in full. Place these prominently near the top, ideally with certifying bodies and dates, rather than burying them at the bottom of the page where they can be missed entirely.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Use a Skills Grid, Not Paragraphs</h2>
          <p>Employers scanning trades resumes look for specific competencies fast: wiring, plumbing systems, blueprint reading, welding types, or equipment operated. A grid or tag-style skills section is far easier to scan in a few seconds than a paragraph description of your capabilities buried in prose.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: A Real Example</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (vague, no scale, no safety record)</p>
            <p className="text-gray-700">"Did electrical work on different buildings and made sure everything was installed correctly."</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (quantified, scoped, safety-forward)</p>
            <p className="text-gray-700">"Completed 200+ commercial electrical installations as a DEWA-approved contractor, maintaining zero safety incidents over 3 years while reducing average project completion time by 20% through improved scheduling."</p>
          </div>
          <p>The rewritten version states scale, credentials, safety record, and a measurable efficiency gain, which together tell an employer far more about reliability and competence than a general description of duties.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quantify Your Project Work</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Number of installations, units, or projects completed</li>
            <li>Project scale, such as residential, commercial, or industrial</li>
            <li>Safety record, such as zero incidents over a stated period</li>
            <li>Efficiency improvements, like reduced completion time or cost savings</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes on Trades Resumes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Listing certifications without expiry or renewal dates.</strong> Employers on regulated job sites need to confirm your certifications are current, not just that you once held them.</li>
            <li><strong>Vague duty descriptions instead of measurable outcomes.</strong> "Responsible for maintenance" tells an employer far less than a specific number of units or systems maintained.</li>
            <li><strong>No mention of safety record.</strong> A clean safety history is a genuine selling point on commercial and industrial sites, and omitting it wastes a strong credential.</li>
            <li><strong>Missing tools and equipment proficiency.</strong> Employers often need to confirm you can operate specific machinery without additional training before hiring.</li>
            <li><strong>Underselling apprenticeship or supervised work.</strong> Early-career tradespeople sometimes omit apprenticeship experience entirely, when it should be listed with the same structure as any other role.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tools and Equipment Section</h2>
          <p>Unlike office roles, trades resumes benefit from a dedicated line for tools and equipment you are proficient with. This helps employers quickly confirm you can operate what their job site requires without needing additional training, which can be a deciding factor between two similarly qualified candidates.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5 mt-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-5">
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
