import Link from "next/link";

export const metadata = {
  title: "How to Tailor Your Resume for Each Job (In 10 Minutes)",
  description: "A practical system for tailoring your resume per application without rewriting it, including what to change, what to leave alone, and how long it should take.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/tailor-resume-for-each-job" },
};

function TailorIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f8fafc" rx="12" />
      <rect x="35" y="60" width="100" height="120" rx="6" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
      <rect x="49" y="76" width="56" height="6" rx="2" fill="#475569" />
      <rect x="49" y="92" width="72" height="4" fill="#e2e8f0" />
      <rect x="49" y="102" width="72" height="4" fill="#e2e8f0" />
      <rect x="49" y="118" width="72" height="4" fill="#e2e8f0" />
      <rect x="49" y="128" width="52" height="4" fill="#e2e8f0" />
      <text x="85" y="196" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="700">MASTER</text>
      <path d="M148 120 L176 120" stroke="#4338ca" strokeWidth="3" strokeLinecap="round" />
      <path d="M168 113 L178 120 L168 127" stroke="#4338ca" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={192 + i * 70} y={35 + i * 32} width="88" height="82" rx="6" fill="#fff" stroke="#4338ca" strokeWidth="2" opacity={1 - i * 0.15} />
          <rect x={204 + i * 70} y={48 + i * 32} width="48" height="5" rx="2" fill="#4338ca" />
          <rect x={204 + i * 70} y={61 + i * 32} width="30" height="9" rx="4" fill="#c7d2fe" />
          <rect x={240 + i * 70} y={61 + i * 32} width="26" height="9" rx="4" fill="#c7d2fe" />
          <rect x={204 + i * 70} y={78 + i * 32} width="64" height="4" fill="#e2e8f0" />
          <rect x={204 + i * 70} y={88 + i * 32} width="48" height="4" fill="#e2e8f0" />
        </g>
      ))}
    </svg>
  );
}

const faqs = [
  { q: "Do I really need a different resume for every application?", a: "Not a different resume — a slightly adjusted one. Rewriting from scratch each time is unsustainable and unnecessary. Changing the summary's first line, reordering skills, and adjusting two or three bullets captures most of the benefit in about ten minutes." },
  { q: "Is it dishonest to change my resume per job?", a: "No, provided everything stays true. Tailoring is emphasis, not invention: the same career foregrounded differently depending on what the reader needs. It becomes dishonest only when you start claiming things that did not happen." },
  { q: "How do I keep track of which version I sent where?", a: "Save each tailored version with the company name in the filename and keep a simple spreadsheet of role, company, date, and version. Interviews are far easier when you know exactly what the interviewer is holding." },
  { q: "What if the job posting is vague?", a: "Then tailoring has less to grip. Fall back on the company's own language — their careers page, recent announcements, product pages — and mirror how they describe the work rather than guessing at the posting's intent." },
  { q: "Should I tailor for recruiters and job boards too?", a: "Keep one broad master version on job boards where you cannot know who is reading, and use tailored versions for direct applications. The two serve genuinely different purposes." },
];

export default function TailorResumeGuide() {
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
        <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide mb-3">Job Search</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          How to Tailor Your Resume for Each Job (In 10 Minutes)
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Everyone says tailor your resume. Almost nobody says what to actually change, so most people either rewrite the whole thing and burn out after four applications, or send the same document everywhere. Here is the middle path.
        </p>

        <div className="mb-10"><TailorIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why the Generic Resume Loses</h2>
          <p>A resume written to fit every role fits none of them convincingly. It has to stay vague enough to cover several possible jobs, and vagueness is exactly what fails both readers: the ATS finds fewer matching terms, and the recruiter finds nothing that speaks to their specific opening.</p>
          <p>The candidate with slightly less experience who obviously read the posting frequently beats the stronger candidate who obviously did not. That is the whole argument for tailoring, and it is worth ten minutes.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Build a Master First</h2>
          <p>Before you tailor anything, write one comprehensive master version containing everything: every role, every achievement, every skill, every number. This document is never sent to anyone. It is the source you cut from.</p>
          <p>Having this makes tailoring subtractive rather than creative, which is why it takes ten minutes instead of two hours. You are choosing what to include, not inventing what to say.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Ten-Minute Pass</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Minutes 1-3: Read the posting twice.</strong> Highlight every named skill, tool, and qualification. Note anything mentioned more than once — that is what the hiring manager actually cares about.</li>
            <li><strong>Minutes 4-5: Rewrite the summary&rsquo;s first line.</strong> Match the role title and the single most relevant thing you bring. This is the highest-leverage change on the page.</li>
            <li><strong>Minutes 6-7: Reorder your skills section.</strong> Put the ones the posting names first. Cut anything irrelevant to this role. Do not add anything untrue.</li>
            <li><strong>Minutes 8-9: Adjust the top two bullets of your most recent role.</strong> Foreground the work closest to what they are hiring for, using their vocabulary where it honestly applies.</li>
            <li><strong>Minute 10: Compress what does not matter here.</strong> A role irrelevant to this application drops from four bullets to one line.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: Same Person, Two Jobs</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Generic summary sent to both</p>
            <p className="text-gray-700">&ldquo;Marketing professional with 7 years of experience across content, paid media, email, events, and brand strategy.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">Tailored for a demand generation role</p>
            <p className="text-gray-700">&ldquo;B2B demand generation marketer with 7 years in SaaS paid acquisition. Built a pipeline engine generating $4M in qualified opportunities in 18 months at 40% lower cost per lead.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">Tailored for a content lead role</p>
            <p className="text-gray-700">&ldquo;B2B content marketer with 7 years in SaaS. Built an organic content program from zero to 120k monthly sessions, driving 30% of inbound pipeline.&rdquo;</p>
          </div>
          <p>Same career, same seven years, nothing invented. Two different foregrounds because two different readers need two different things.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Not to Change</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Your dates and job titles.</strong> These are verifiable in background checks. Never adjust them to fit.</li>
            <li><strong>Your numbers.</strong> If you grew traffic 30%, it is 30% in every version.</li>
            <li><strong>Your overall structure.</strong> Rebuilding the layout per application wastes the time that should go into the content.</li>
            <li><strong>The core of your strongest bullets.</strong> Reorder and reframe them; do not dilute the ones that are already working.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Emphasis Is Not Invention</h2>
          <p>It is worth being precise about where tailoring stops. Foregrounding the two years of your career most relevant to this role is emphasis. Describing your work in the employer&rsquo;s vocabulary is translation. Claiming a technology you have never used, or inflating a supporting role into a leading one, is neither — it is fabrication, and it produces interviews you cannot survive and offers that get withdrawn during reference checks. The whole system above works precisely because everything in it is true.</p>

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

        <div className="bg-gray-900 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Tailor Without Starting Over</h3>
          <p className="text-gray-300 mb-6">Switch templates and adjust content without re-entering anything. Free, no sign up.</p>
          <Link href="/resume-builder?template=ATS+Professional">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Building Free →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/resume-keywords-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Resume Keywords Guide</p>
              <p className="text-sm text-gray-500 mt-1">How to find the terms worth mirroring.</p>
            </Link>
            <Link href="/blog/resume-summary-examples" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">How to Write a Professional Summary</p>
              <p className="text-sm text-gray-500 mt-1">The line you change every time.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Tailor Your Resume for Each Job (In 10 Minutes)", description: "A practical system for tailoring your resume per application.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
