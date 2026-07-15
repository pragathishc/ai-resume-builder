import Link from "next/link";

export const metadata = {
  title: "12 Resume Mistakes That Cost You Interviews",
  description: "The most common resume mistakes recruiters and ATS systems penalize, from formatting errors to weak bullets, with fixes for each one.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/resume-mistakes-to-avoid" },
};

function MistakesIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#fef2f2" rx="12" />
      <rect x="55" y="30" width="145" height="160" rx="8" fill="#fff" stroke="#fca5a5" strokeWidth="2" />
      <rect x="72" y="48" width="80" height="8" rx="2" fill="#94a3b8" />
      <rect x="72" y="66" width="110" height="4" fill="#e5e7eb" />
      <rect x="72" y="76" width="110" height="4" fill="#e5e7eb" />
      <rect x="72" y="96" width="52" height="30" rx="3" fill="#fee2e2" />
      <rect x="130" y="96" width="52" height="30" rx="3" fill="#fee2e2" />
      <rect x="72" y="140" width="110" height="4" fill="#e5e7eb" />
      <rect x="72" y="150" width="80" height="4" fill="#e5e7eb" />
      <circle cx="188" cy="42" r="14" fill="#dc2626" />
      <path d="M183 37 L193 47 M193 37 L183 47" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <rect x="228" y="30" width="145" height="160" rx="8" fill="#fff" stroke="#86efac" strokeWidth="2" />
      <rect x="245" y="48" width="80" height="8" rx="2" fill="#15803d" />
      <rect x="245" y="66" width="110" height="4" fill="#dcfce7" />
      <rect x="245" y="76" width="110" height="4" fill="#dcfce7" />
      <rect x="245" y="96" width="60" height="5" rx="2" fill="#15803d" />
      <rect x="245" y="110" width="110" height="4" fill="#dcfce7" />
      <rect x="245" y="120" width="110" height="4" fill="#dcfce7" />
      <rect x="245" y="140" width="110" height="4" fill="#dcfce7" />
      <rect x="245" y="150" width="80" height="4" fill="#dcfce7" />
      <circle cx="361" cy="42" r="14" fill="#16a34a" />
      <path d="M355 42 L359 46 L367 38" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const faqs = [
  { q: "Does one typo really cost you the job?", a: "Rarely on its own, but it costs you margin. When two candidates are close, a typo becomes the tiebreaker, and for detail-oriented roles it reads as evidence rather than an accident. It is a cheap mistake to eliminate." },
  { q: "Should I include references on my resume?", a: "No, and 'references available upon request' is equally unnecessary. Employers assume both. The line takes space from something that could actually persuade someone." },
  { q: "Is it a mistake to have employment gaps?", a: "The gap itself is not the mistake; concealing it clumsily is. Recruiters see gaps constantly and mostly want to know you are not hiding something. A brief honest note beats a confusing timeline." },
  { q: "Do I need to remove old jobs from 15 years ago?", a: "Not remove, but compress. Roles from early in a long career can be a single line each under 'Early Career' rather than full bullets, which keeps the reader focused on your recent work." },
  { q: "Is it a mistake to use a resume template?", a: "No, as long as the template is ATS-safe. The problem is not templates; it is templates built around multi-column layouts, tables, and graphics that parsers cannot read." },
];

export default function ResumeMistakesToAvoid() {
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
        <p className="text-sm text-red-600 font-semibold uppercase tracking-wide mb-3">Resume Guides</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          12 Resume Mistakes That Cost You Interviews
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Most rejected resumes are not rejected because the candidate was unqualified. They are rejected for reasons that have nothing to do with capability. Here are the twelve most common, and the fix for each.
        </p>

        <div className="mb-10"><MistakesIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Listing Duties Instead of Achievements</h2>
          <p>The single most common problem. &ldquo;Responsible for managing social media accounts&rdquo; describes a job description, not you. Every person who held that title did that. Replace duties with what changed because you were there: &ldquo;Grew Instagram following from 4k to 40k in 11 months, driving 18% of inbound leads.&rdquo;</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. No Numbers Anywhere</h2>
          <p>A resume without a single figure gives a reader nothing to calibrate against. You do not need a number in every bullet, but you need them in the ones that matter. Team size, budget, percentage change, volume handled, timeline — any of these turns a claim into evidence.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Multi-Column Layouts</h2>
          <p>They look organized to you and scramble in an ATS. Most parsers read left to right across the full page width, which means a two-column resume can interleave your skills into the middle of your work history. Single column, always, for anything the parser needs to read.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Contact Details in the Header or Footer</h2>
          <p>A surprising number of ATS parsers ignore header and footer regions entirely. If your phone number and email live there, they may simply never be captured, and a recruiter who wants to reach you cannot. Put contact details in the body of the document.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Creative Section Headings</h2>
          <p>&ldquo;My Journey&rdquo; instead of &ldquo;Experience&rdquo; and &ldquo;What I&rsquo;m Good At&rdquo; instead of &ldquo;Skills&rdquo; feel like personality. To a parser looking for standard section markers, they are unrecognizable, and your entire work history can end up unclassified.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Skill Rating Bars and Star Ratings</h2>
          <p>Rating yourself four out of five stars at Python communicates nothing verifiable — your scale is not the reader&rsquo;s scale. Worse, these are usually rendered as graphics, so the skill name itself may not be parseable text at all.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. One Generic Resume for Every Application</h2>
          <p>You do not need to rewrite from scratch each time, but sending an identical document to every posting means you match none of them well. Adjusting the summary&rsquo;s first line and reordering skills to mirror the posting takes minutes and captures most of the benefit.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Adjective Stacking</h2>
          <p>Hardworking, passionate, dynamic, results-driven, detail-oriented. These appear on nearly every resume ever submitted, which makes them invisible. They are also unverifiable. Cut every one and replace the space with something that happened.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Wrong Length for Your Stage</h2>
          <p>A three-page resume for someone with two years of experience reads as padding. A one-page resume for someone with twenty years reads as though you cut the interesting parts. Match the length to the career, not to a rule you read once.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. An Unprofessional Email Address</h2>
          <p>It is a small thing that costs nothing to fix and reads badly when left unfixed. Firstname.lastname at any standard provider is fine. Anything from your teenage years is not.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Submitting as an Image or Scan</h2>
          <p>A resume saved as a JPEG, or a PDF made by photographing a printed page, contains no readable text at all. Some ATS systems will reject it outright; others will parse it as empty. Always export real text-based files.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Never Reading It Aloud</h2>
          <p>The cheapest quality check available, and the one almost nobody does. Reading your resume out loud catches typos, awkward phrasing, and bullets that sound impressive silently but say nothing when spoken. It takes four minutes.</p>

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
          <h3 className="text-2xl font-bold text-white mb-3">Build One That Avoids All Twelve</h3>
          <p className="text-gray-300 mb-6">ATS-safe formatting by default, with AI help on the bullets and summary.</p>
          <Link href="/resume-builder?template=ATS+Professional">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Building Free →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/ats-resume-format-2026" className="block p-5 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Best Resume Format for ATS Systems</p>
              <p className="text-sm text-gray-500 mt-1">The formatting rules behind half this list.</p>
            </Link>
            <Link href="/blog/resume-length-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">How Long Should a Resume Be?</p>
              <p className="text-sm text-gray-500 mt-1">Getting mistake #9 right.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "12 Resume Mistakes That Cost You Interviews", description: "The most common resume mistakes recruiters and ATS systems penalize.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
