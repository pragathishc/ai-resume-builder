import Link from "next/link";

export const metadata = {
  title: "How to Write a Professional Summary (With Examples)",
  description: "How to write the four lines at the top of your resume that decide whether the rest gets read, with before and after examples for different career stages.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/resume-summary-examples" },
};

function SummaryIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f8fafc" rx="12" />
      <rect x="70" y="25" width="260" height="170" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="90" y="44" width="110" height="9" rx="2" fill="#111827" />
      <rect x="90" y="60" width="70" height="5" rx="2" fill="#94a3b8" />
      <rect x="86" y="80" width="228" height="46" rx="5" fill="#eef2ff" stroke="#4338ca" strokeWidth="2" />
      <rect x="86" y="80" width="4" height="46" fill="#4338ca" />
      <rect x="100" y="92" width="196" height="5" rx="2" fill="#a5b4fc" />
      <rect x="100" y="103" width="196" height="5" rx="2" fill="#a5b4fc" />
      <rect x="100" y="114" width="130" height="5" rx="2" fill="#a5b4fc" />
      <rect x="90" y="142" width="60" height="5" rx="2" fill="#cbd5e1" />
      <rect x="90" y="156" width="220" height="4" fill="#e2e8f0" />
      <rect x="90" y="166" width="220" height="4" fill="#e2e8f0" />
      <rect x="90" y="176" width="160" height="4" fill="#e2e8f0" />
      <circle cx="345" cy="103" r="16" fill="#4338ca" />
      <text x="345" y="109" textAnchor="middle" fontSize="14" fill="#fff">👁</text>
    </svg>
  );
}

const faqs = [
  { q: "How long should a professional summary be?", a: "Three to four lines, or roughly 40 to 60 words. Beyond that it stops being a summary and becomes a paragraph nobody reads. If you cannot fit it, the problem is usually clarity about your positioning rather than space." },
  { q: "Summary or objective — which should I use?", a: "A summary if you have work experience, since it describes what you have done. An objective if you are a fresher or career changer, since it states what you are aiming for. Experienced candidates using objectives tend to read as junior." },
  { q: "Should I write in first person?", a: "Neither first person pronouns nor full third person. The convention is implied first person with the pronouns dropped: 'Senior engineer with 8 years...' rather than 'I am a senior engineer...' or 'Alex is a senior engineer...'" },
  { q: "Do I need to rewrite my summary for every application?", a: "Not entirely, but the first line should match the role you are applying for. Changing the target title and one specialization keyword covers most of the benefit without rewriting the whole thing each time." },
  { q: "Can AI write my summary for me?", a: "It can write a strong first draft, which is often the hardest part. But an unedited AI summary tends to read generically, so treat the output as a starting point and cut anything that could describe anyone else in your field." },
];

export default function ResumeSummaryExamples() {
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
          How to Write a Professional Summary (With Examples)
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          The summary occupies the most valuable space on your resume and is where most readers decide whether to continue. Here is how to write four lines that earn the rest of the page, with real examples across career stages.
        </p>

        <div className="mb-10"><SummaryIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What a Summary Is Actually For</h2>
          <p>A recruiter reviewing a stack of applications gives each one a few seconds before deciding to read properly or move on. Your summary is what they spend those seconds on. Its job is not to describe your whole career; it is to establish, immediately, that you are a plausible fit for this specific role.</p>
          <p>That means a good summary is closer to a positioning statement than a biography. Who you are professionally, at what level, in what domain, and the one thing you are known for delivering.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Four Elements</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Title and seniority</strong> — what you are, stated in the language the posting uses.</li>
            <li><strong>Years and domain</strong> — how long, and in what industry or specialization.</li>
            <li><strong>Signature capability</strong> — the thing you do better than the average person with your title.</li>
            <li><strong>One proof point</strong> — a number that makes the claim credible rather than aspirational.</li>
          </ul>
          <p>Four elements, three to four lines. Anything that does not serve one of these is taking space from something that would.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: Experienced Professional</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (adjectives, no scope, could be anyone)</p>
            <p className="text-gray-700">&ldquo;Hardworking and detail-oriented marketing professional with a passion for driving results and a proven track record of success in fast-paced environments.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (specific, positioned, proven)</p>
            <p className="text-gray-700">&ldquo;B2B demand generation marketer with 7 years in SaaS, specializing in paid acquisition and lifecycle campaigns. Built a pipeline engine that generated $4M in qualified opportunities in 18 months while reducing cost per lead by 40%.&rdquo;</p>
          </div>
          <p>Every word in the first version could describe any of a thousand candidates. Every word in the second narrows the field.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: Fresher or Graduate</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (generic objective, no evidence)</p>
            <p className="text-gray-700">&ldquo;Seeking a challenging position in a reputed organization where I can utilize my skills and grow professionally.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (target stated, evidence attached)</p>
            <p className="text-gray-700">&ldquo;Computer Science graduate (CGPA 8.7) seeking an entry-level backend engineering role. Built and deployed a student management system in React and Node.js serving 200+ users, and completed a 6-month internship maintaining production APIs.&rdquo;</p>
          </div>
          <p>The first says nothing about the writer. The second names the target, gives two pieces of evidence, and reads like a specific person.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Leading with adjectives.</strong> Hardworking, passionate, dynamic, and detail-oriented are unverifiable and appear on nearly every resume, which makes them invisible.</li>
            <li><strong>Describing what you want rather than what you offer.</strong> The summary is not the place to explain what you are seeking from an employer; that is the cover letter&rsquo;s job.</li>
            <li><strong>Writing one summary for every application.</strong> A summary that fits every role fits none of them convincingly.</li>
            <li><strong>Using no numbers at all.</strong> A single figure is the difference between a claim and a demonstration.</li>
            <li><strong>Making it a paragraph.</strong> Six or seven lines guarantees the reader skips it entirely, which wastes the best real estate on the page.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">A Test That Works</h2>
          <p>Read your summary and ask whether a competitor for the same job could copy it word for word and have it still be true of them. If yes, it is not a summary — it is a description of your job category. Rewrite until at least one sentence could only have been written by you.</p>

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
          <h3 className="text-2xl font-bold text-white mb-3">Generate Your Summary with AI</h3>
          <p className="text-gray-300 mb-6">Enter your job title and skills, get a recruiter-ready draft in seconds — then make it yours.</p>
          <Link href="/resume-builder?template=ATS+Professional">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Try the AI Summary Generator →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/resume-mistakes-to-avoid" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">12 Resume Mistakes to Avoid</p>
              <p className="text-sm text-gray-500 mt-1">Errors that cost interviews.</p>
            </Link>
            <Link href="/blog/career-change-resume" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Career Change Resume</p>
              <p className="text-sm text-gray-500 mt-1">Where the summary matters most.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Write a Professional Summary (With Examples)", description: "How to write the four lines at the top of your resume.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
