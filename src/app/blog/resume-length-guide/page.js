import Link from "next/link";

export const metadata = {
  title: "How Long Should a Resume Be? One Page vs Two",
  description: "How many pages a resume should be at each career stage, when two pages is correct, and how length expectations change by country and industry.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/resume-length-guide" },
};

function LengthIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f8fafc" rx="12" />
      <rect x="60" y="40" width="105" height="140" rx="6" fill="#fff" stroke="#4338ca" strokeWidth="2" />
      <rect x="74" y="56" width="60" height="7" rx="2" fill="#4338ca" />
      <rect x="74" y="72" width="78" height="4" fill="#e2e8f0" />
      <rect x="74" y="82" width="78" height="4" fill="#e2e8f0" />
      <rect x="74" y="100" width="45" height="5" rx="2" fill="#a5b4fc" />
      <rect x="74" y="114" width="78" height="4" fill="#e2e8f0" />
      <rect x="74" y="124" width="78" height="4" fill="#e2e8f0" />
      <rect x="74" y="142" width="45" height="5" rx="2" fill="#a5b4fc" />
      <rect x="74" y="156" width="60" height="4" fill="#e2e8f0" />
      <text x="112" y="200" textAnchor="middle" fontSize="11" fill="#4338ca" fontWeight="700">1 PAGE</text>
      <rect x="225" y="34" width="105" height="140" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
      <rect x="235" y="46" width="105" height="140" rx="6" fill="#fff" stroke="#4338ca" strokeWidth="2" />
      <rect x="249" y="62" width="60" height="7" rx="2" fill="#4338ca" />
      <rect x="249" y="78" width="78" height="4" fill="#e2e8f0" />
      <rect x="249" y="88" width="78" height="4" fill="#e2e8f0" />
      <rect x="249" y="106" width="45" height="5" rx="2" fill="#a5b4fc" />
      <rect x="249" y="120" width="78" height="4" fill="#e2e8f0" />
      <rect x="249" y="130" width="78" height="4" fill="#e2e8f0" />
      <rect x="249" y="148" width="45" height="5" rx="2" fill="#a5b4fc" />
      <rect x="249" y="162" width="60" height="4" fill="#e2e8f0" />
      <text x="287" y="205" textAnchor="middle" fontSize="11" fill="#4338ca" fontWeight="700">2 PAGES</text>
    </svg>
  );
}

const faqs = [
  { q: "Is the one-page rule real?", a: "It is real for early-career candidates in the US, and increasingly treated as a myth beyond that. For anyone with roughly a decade of relevant experience, forcing one page usually means deleting the evidence that would have earned the interview." },
  { q: "Does a longer resume get read less?", a: "Not exactly. Recruiters skim regardless of length, so what matters is whether the first half page earns the skim. A well-structured two-page resume gets more read than a cramped one-page one with 8pt font." },
  { q: "Do ATS systems penalize longer resumes?", a: "No. Parsers do not score on length. The length question is entirely about human readers, which is why the answer changes by career stage and region rather than being technical." },
  { q: "What about academic CVs?", a: "Entirely different rules. Academic CVs list full publication histories, grants, and teaching records and routinely run to many pages. Nothing in this guide applies to them." },
  { q: "Should I shrink margins and font to fit one page?", a: "No. A page of 9pt text with quarter-inch margins is harder to read than two comfortable pages and signals that you could not edit. If it does not fit at normal settings, it does not fit." },
];

export default function ResumeLengthGuide() {
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
        <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide mb-3">Resume Guides</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          How Long Should a Resume Be? One Page vs Two
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          The one-page rule is repeated so often that people follow it past the point where it helps them. Here is what length actually depends on: your career stage, your region, and whether the words are earning their space.
        </p>

        <div className="mb-10"><LengthIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Short Answer by Career Stage</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fresher or under 3 years:</strong> one page. There is genuinely not enough material for two, and padding is obvious.</li>
            <li><strong>3 to 10 years:</strong> one page if it fits comfortably, two if it does not. Do not force either.</li>
            <li><strong>10+ years:</strong> two pages. Compressing a decade of leadership into one usually deletes the scope and figures that differentiate you.</li>
            <li><strong>Executive:</strong> two pages, occasionally three for very senior or board-level candidates.</li>
            <li><strong>Academic CV:</strong> as long as it needs to be — different document, different rules entirely.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where the One-Page Rule Came From</h2>
          <p>It originated in an era of physical paper and a genuine constraint: a recruiter holding a stack of documents wanted one sheet per candidate. It persisted because it encodes something useful — brevity forces editing, and most resumes are too long for their content.</p>
          <p>But the useful part was never &ldquo;one page&rdquo;. It was &ldquo;cut anything not earning its space&rdquo;. Applied to someone with fifteen years of experience, the literal rule produces a worse document, not a tighter one.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Region Changes the Answer</h2>
          <p>Length expectations are not universal, and applying one country&rsquo;s norm elsewhere backfires in both directions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>US and Canada:</strong> one page is the strong default early on; two is accepted with real seniority.</li>
            <li><strong>UK:</strong> two pages is standard and expected for most professionals.</li>
            <li><strong>Continental Europe:</strong> two pages is normal; Europass CVs often run longer without penalty.</li>
            <li><strong>UAE and the Gulf:</strong> one to two pages, though the additional personal and visa fields expected regionally naturally add length.</li>
            <li><strong>India:</strong> two pages is common and unremarkable, even at mid-level.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Real Test</h2>
          <p>Forget page counts for a moment and ask a different question of each line: would removing this reduce the chance of an interview? If no, cut it. Run that pass and the correct length usually appears on its own.</p>
          <p>Things that almost never survive this test: the objective statement that says you want a challenging role, &ldquo;references available upon request&rdquo;, unrelated hobbies, a skills section listing Microsoft Word, and any role over fifteen years old described in four bullets.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Bad Length Actually Signals</h2>
          <p>Length is read as a proxy for judgment, which is why it matters at all. Three pages at two years of experience signals that you cannot distinguish important from unimportant. One page at twenty years signals either that you followed a rule without thinking, or that there was less to say than the title suggested. Either way the reader is drawing a conclusion about you, not about the document.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Do Not Cheat the Layout</h2>
          <p>Shrinking to 9pt font and quarter-inch margins to hit one page defeats the purpose entirely. The goal was never the page count; it was a document someone can absorb quickly. A dense, cramped single page is harder to read than a comfortable two-page one, and recruiters recognize the compression instantly.</p>

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
          <h3 className="text-2xl font-bold text-white mb-3">Build a Resume That Fits</h3>
          <p className="text-gray-300 mb-6">Preview in full screen and see exactly how it lays out before you download.</p>
          <Link href="/resume-builder?template=ATS+Professional">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Building Free →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/executive-resume-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Executive Resume Guide</p>
              <p className="text-sm text-gray-500 mt-1">Why two pages is right at senior level.</p>
            </Link>
            <Link href="/blog/europe-cv-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Europe CV Guide</p>
              <p className="text-sm text-gray-500 mt-1">Where length rules differ entirely.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How Long Should a Resume Be? One Page vs Two", description: "How many pages a resume should be at each career stage.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
