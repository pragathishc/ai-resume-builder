import Link from "next/link";

export const metadata = {
  title: "Executive Resume Guide: C-Suite and Senior Leadership",
  description: "How to write an executive resume for CTO, VP, and director roles, with board-ready formatting, P&L framing, sample bullets, and common mistakes.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/executive-resume-guide" },
};

function ExecutiveIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#fdf8ee" rx="12" />
      <rect x="40" y="30" width="200" height="160" rx="8" fill="#fff" stroke="#92700a" strokeWidth="2" />
      <rect x="40" y="30" width="200" height="5" fill="#92700a" />
      <rect x="58" y="52" width="120" height="10" rx="2" fill="#111827" />
      <rect x="58" y="70" width="85" height="6" rx="2" fill="#92700a" />
      <rect x="58" y="92" width="164" height="26" rx="4" fill="#fdf8ee" />
      <rect x="58" y="92" width="4" height="26" fill="#92700a" />
      <rect x="70" y="100" width="140" height="4" fill="#d6c08a" />
      <rect x="70" y="108" width="110" height="4" fill="#d6c08a" />
      <rect x="58" y="132" width="90" height="6" rx="2" fill="#92700a" />
      <rect x="58" y="148" width="164" height="4" fill="#e5e7eb" />
      <rect x="58" y="158" width="164" height="4" fill="#e5e7eb" />
      <rect x="58" y="168" width="120" height="4" fill="#e5e7eb" />
      <circle cx="315" cy="110" r="55" fill="#fdf3dd" />
      <text x="315" y="124" textAnchor="middle" fontSize="36">🏛</text>
    </svg>
  );
}

const faqs = [
  { q: "Should an executive resume be one page or two?", a: "Two pages is standard and expected at executive level. Compressing 15-20 years of leadership into one page usually means cutting the scope and financial context that actually differentiates senior candidates." },
  { q: "Do I need to include every role from my career?", a: "No. Detail your last three roles fully, then summarize earlier positions in a brief 'Early Career' block with titles, companies, and dates only. Depth on recent leadership matters far more than completeness." },
  { q: "How much financial detail should I include?", a: "As much as you can share without breaching confidentiality. Budget owned, revenue influenced, headcount managed, and cost savings delivered are the metrics boards and CEOs actually screen on. Use approximations if exact figures are sensitive." },
  { q: "Is a professional summary still needed at executive level?", a: "Yes, and it matters more here than anywhere else. A recruiter or board member reads three or four lines before deciding whether to continue. Lead with scope, sector, and the outcome you are known for." },
  { q: "Do executives still need to worry about ATS?", a: "Yes. Even senior searches routed through executive recruiters often pass through an ATS first. Clean formatting and standard section headings still matter, regardless of seniority." },
];

export default function ExecutiveResumeGuide() {
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
        <p className="text-sm text-amber-700 font-semibold uppercase tracking-wide mb-3">Senior Leadership</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Executive Resume Guide: C-Suite and Senior Leadership
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          An executive resume is judged on scope, judgment, and financial impact, not task lists. Here is how to structure one for CTO, VP, and director-level searches, with a real before-and-after and the mistakes that quietly cost senior candidates interviews.
        </p>

        <div className="mb-10"><ExecutiveIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lead With Scope, Not Duties</h2>
          <p>The first thing a board member or CEO wants to know is the size of the world you have operated in. Headcount, budget, revenue influenced, geography, and sector all establish whether you are a plausible fit before anyone reads a single achievement. Put this in your opening summary rather than making the reader assemble it from your work history.</p>
          <p>A director managing a 12-person team with a $3M budget and a VP managing 200 people across four countries may describe their responsibilities using nearly identical language. Scope is what separates them, and it should be explicit within the first four lines of the page.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: A Real Example</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (duty-based, no scope, no outcome)</p>
            <p className="text-gray-700">&ldquo;Responsible for overseeing the engineering department and making sure projects were delivered on schedule.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (scope, judgment, quantified result)</p>
            <p className="text-gray-700">&ldquo;Led a 200-person engineering organization across 4 countries with a $50M annual budget; restructured delivery model to reduce time-to-release by 35% while cutting infrastructure spend by $4M annually.&rdquo;</p>
          </div>
          <p>The second version tells a reader the scale you operate at, the decision you made, and what it produced. That is the unit of information executive searches run on.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Structure That Works at Senior Level</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Executive summary</strong> — three to four lines covering sector, scope, and signature outcome.</li>
            <li><strong>Core competencies</strong> — a short scannable band of leadership domains (P&amp;L ownership, M&amp;A integration, digital transformation).</li>
            <li><strong>Career history</strong> — last three roles in depth, each opening with a one-line scope statement before achievements.</li>
            <li><strong>Early career</strong> — titles, companies, dates only.</li>
            <li><strong>Board and advisory roles</strong> — separate section if applicable; these signal peer-level credibility.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes on Executive Resumes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Reading like a senior individual contributor.</strong> If your bullets describe what you personally built rather than what your organization delivered under your direction, you are positioning yourself a level below your target.</li>
            <li><strong>Omitting financial context entirely.</strong> Confidentiality concerns are legitimate, but approximations are better than silence. &ldquo;Multi-million dollar portfolio&rdquo; beats no figure at all.</li>
            <li><strong>Listing every role at equal depth.</strong> A reader spends most of their attention on your last two positions; giving a role from 2009 the same four bullets dilutes your recent story.</li>
            <li><strong>Burying the transformation.</strong> Most executives are hired to change something. If you led a turnaround, integration, or restructure, that should be visible in the summary, not discovered on page two.</li>
            <li><strong>Over-designing the document.</strong> Heavy graphics, charts, and columns read as junior at senior level, and still break ATS parsing.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Write for Two Readers</h2>
          <p>Executive resumes are typically read twice: once by a recruiter screening for scope and sector match, and once by a hiring principal reading for judgment. The first reader needs numbers visible in seconds. The second needs to see the reasoning behind a decision, not just its outcome. A well-built executive bullet serves both by pairing the action with its measurable result in a single line.</p>

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

        <div className="bg-amber-700 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Build Your Executive Resume</h3>
          <p className="text-amber-50 mb-6">A serif, gold-accented layout built for senior leadership searches.</p>
          <Link href="/resume-builder?template=Executive">
            <button className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Use the Executive Template →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/resume-summary-examples" className="block p-5 border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">How to Write a Professional Summary</p>
              <p className="text-sm text-gray-500 mt-1">The four lines that decide whether you get read.</p>
            </Link>
            <Link href="/blog/ats-resume-format-2026" className="block p-5 border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Best Resume Format for ATS Systems</p>
              <p className="text-sm text-gray-500 mt-1">Senior searches get parsed too.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Executive Resume Guide: C-Suite and Senior Leadership", description: "How to write an executive resume for CTO, VP, and director roles.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
