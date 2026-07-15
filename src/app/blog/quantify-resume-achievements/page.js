import Link from "next/link";

export const metadata = {
  title: "How to Quantify Achievements When You Don't Have Numbers",
  description: "How to add measurable impact to your resume bullets, including where to find numbers you already have and what to do when no metric exists.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/quantify-resume-achievements" },
};

function QuantifyIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f8fafc" rx="12" />
      <rect x="40" y="45" width="150" height="130" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="56" y="64" width="80" height="5" rx="2" fill="#94a3b8" />
      <rect x="56" y="82" width="118" height="4" fill="#e2e8f0" />
      <rect x="56" y="92" width="118" height="4" fill="#e2e8f0" />
      <rect x="56" y="102" width="90" height="4" fill="#e2e8f0" />
      <rect x="56" y="122" width="118" height="4" fill="#e2e8f0" />
      <rect x="56" y="132" width="70" height="4" fill="#e2e8f0" />
      <text x="115" y="192" textAnchor="middle" fontSize="9" fill="#94a3b8" fontWeight="700">NO NUMBERS</text>
      <path d="M204 110 L232 110" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
      <path d="M224 103 L234 110 L224 117" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="248" y="45" width="150" height="130" rx="8" fill="#fff" stroke="#86efac" strokeWidth="2" />
      <rect x="264" y="64" width="80" height="5" rx="2" fill="#15803d" />
      <rect x="264" y="82" width="70" height="4" fill="#dcfce7" />
      <rect x="340" y="79" width="34" height="10" rx="5" fill="#16a34a" />
      <text x="357" y="87" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">40%</text>
      <rect x="264" y="98" width="90" height="4" fill="#dcfce7" />
      <rect x="264" y="118" width="60" height="4" fill="#dcfce7" />
      <rect x="330" y="115" width="44" height="10" rx="5" fill="#16a34a" />
      <text x="352" y="123" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">$2.4M</text>
      <rect x="264" y="134" width="80" height="4" fill="#dcfce7" />
      <text x="323" y="192" textAnchor="middle" fontSize="9" fill="#15803d" fontWeight="700">MEASURABLE</text>
    </svg>
  );
}

const faqs = [
  { q: "What if my role genuinely has no metrics?", a: "Almost every role has countable things even when it has no KPIs: how many, how often, how large, how long, how many people. Scale and frequency are measurements even when outcomes are not tracked formally." },
  { q: "Is it acceptable to estimate?", a: "Yes, if the estimate is honest and you can defend it in an interview. 'Approximately 200 tickets per month' is fine if that is genuinely your typical volume. Inventing a precise figure you cannot explain is not." },
  { q: "What if I cannot share exact figures for confidentiality reasons?", a: "Use ranges or relative terms: 'a multi-million dollar portfolio', 'a team of 15+', 'reduced processing time by roughly a third'. Approximation is far better than silence, and employers understand confidentiality." },
  { q: "Should every bullet have a number?", a: "No. A resume where every line ends in a percentage reads as manufactured. Aim for numbers in your strongest two or three bullets per role, and let the others carry context and scope instead." },
  { q: "What if the result was bad or the project failed?", a: "Then measure what you can honestly claim: what you delivered, at what scale, under what constraint. 'Delivered a full migration for 40 services in 6 weeks' is true regardless of what happened to the product afterwards." },
];

export default function QuantifyAchievementsGuide() {
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
        <p className="text-sm text-green-700 font-semibold uppercase tracking-wide mb-3">Resume Guides</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          How to Quantify Achievements When You Don&rsquo;t Have Numbers
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          &ldquo;Quantify your achievements&rdquo; is the most repeated resume advice there is, and the least useful, because it never explains what to do when nobody tracked anything. Here is where the numbers actually are.
        </p>

        <div className="mb-10"><QuantifyIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Numbers Work</h2>
          <p>A number converts a claim into evidence. &ldquo;Improved the onboarding process&rdquo; asks the reader to take your word for it and gives them no sense of whether you improved it for five people or five thousand. &ldquo;Cut onboarding time from 3 weeks to 4 days across 200 new hires annually&rdquo; requires no trust at all — it just states what happened.</p>
          <p>This also solves a problem you cannot solve any other way: it establishes scale. Two candidates with identical job titles may have operated in worlds an order of magnitude apart. Only numbers reveal which one you were.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Five Questions That Find Numbers</h2>
          <p>When a bullet has no metric, run it through these:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>How many?</strong> People, clients, projects, tickets, articles, units, systems, students, patients.</li>
            <li><strong>How often?</strong> Daily, weekly, per shift, per quarter. Frequency is a measurement.</li>
            <li><strong>How big?</strong> Budget, revenue, headcount, audience size, data volume, geography.</li>
            <li><strong>How long?</strong> Duration, timeline, how much faster than before, how far ahead of schedule.</li>
            <li><strong>How much better?</strong> Before and after, on any axis you can honestly measure.</li>
          </ul>
          <p>Most bullets that seem unquantifiable answer at least two of these once someone actually asks.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: A Role With No KPIs</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (administrator, &ldquo;nothing to measure&rdquo;)</p>
            <p className="text-gray-700">&ldquo;Managed office operations and supported the team with scheduling and vendor coordination.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (same job, questions answered)</p>
            <p className="text-gray-700">&ldquo;Ran operations for a 45-person office across 2 sites, coordinating 12 vendor contracts worth £180k annually and renegotiating 3 of them to cut recurring costs by 15%.&rdquo;</p>
          </div>
          <p>Nobody handed this person a dashboard. The numbers were already in the job — headcount, sites, contracts, contract value — and simply were not written down.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where to Look for Figures You Forgot</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Old performance reviews.</strong> Managers write down numbers you never noticed.</li>
            <li><strong>Your own calendar and inbox.</strong> Volume, cadence, and scope are recorded there whether you tracked them or not.</li>
            <li><strong>Team dashboards and reports</strong> you contributed to, even if the metric was not &ldquo;yours&rdquo;.</li>
            <li><strong>Project documentation</strong> — scope statements almost always contain a size or a timeline.</li>
            <li><strong>Ask a former colleague.</strong> People remember the scale of shared work surprisingly well.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When Honestly No Number Exists</h2>
          <p>Sometimes there really is nothing to count, and the correct move is scope and constraint instead of a fabricated metric. &ldquo;Rebuilt the compliance process during a regulator audit with a two-week deadline and no downtime&rdquo; contains no percentage and is still concrete, specific, and difficult. Constraint is its own form of evidence.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Line You Should Not Cross</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Do not invent precision.</strong> &ldquo;Increased efficiency by 47.3%&rdquo; when nobody measured anything is a fabrication that a single follow-up question will expose.</li>
            <li><strong>Do not claim team results as solely yours.</strong> &ldquo;Contributed to&rdquo; and &ldquo;led&rdquo; are different words, and interviewers ask which one it was.</li>
            <li><strong>Do not attach a number to a bullet where it does not belong</strong> just to have one. Forced metrics read as forced.</li>
            <li><strong>Do not use a figure you cannot explain.</strong> If you cannot say where it came from and how it was calculated, it should not be on the page.</li>
          </ul>
          <p>The purpose of quantifying is credibility. A number you cannot defend achieves the exact opposite of the thing you were trying to do.</p>

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

        <div className="bg-green-700 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Build a Resume That Proves It</h3>
          <p className="text-green-100 mb-6">Free, no sign up, with AI help turning duties into measurable achievements.</p>
          <Link href="/resume-builder?template=ATS+Professional">
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Building Free →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/resume-mistakes-to-avoid" className="block p-5 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">12 Resume Mistakes to Avoid</p>
              <p className="text-sm text-gray-500 mt-1">Duties instead of achievements is number one.</p>
            </Link>
            <Link href="/blog/executive-resume-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Executive Resume Guide</p>
              <p className="text-sm text-gray-500 mt-1">Where numbers matter most of all.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Quantify Achievements When You Don't Have Numbers", description: "How to add measurable impact to your resume bullets.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
