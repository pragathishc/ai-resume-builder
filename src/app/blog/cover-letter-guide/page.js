import Link from "next/link";

export const metadata = {
  title: "Cover Letter Guide: When It Matters and How to Write One",
  description: "How to write a cover letter that adds something your resume cannot, including structure, length, a real before and after, and when to skip it entirely.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/cover-letter-guide" },
};

function CoverLetterIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f8fafc" rx="12" />
      <rect x="52" y="42" width="130" height="150" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="68" y="60" width="60" height="6" rx="2" fill="#94a3b8" />
      <rect x="68" y="76" width="98" height="4" fill="#e2e8f0" />
      <rect x="68" y="86" width="98" height="4" fill="#e2e8f0" />
      <rect x="68" y="104" width="44" height="5" rx="2" fill="#cbd5e1" />
      <rect x="68" y="118" width="98" height="4" fill="#e2e8f0" />
      <rect x="68" y="128" width="98" height="4" fill="#e2e8f0" />
      <rect x="68" y="146" width="98" height="4" fill="#e2e8f0" />
      <rect x="68" y="156" width="68" height="4" fill="#e2e8f0" />
      <text x="117" y="208" textAnchor="middle" fontSize="10" fill="#94a3b8" fontWeight="700">RESUME</text>
      <rect x="218" y="30" width="140" height="160" rx="6" fill="#fff" stroke="#4338ca" strokeWidth="2" />
      <rect x="236" y="48" width="76" height="7" rx="2" fill="#4338ca" />
      <rect x="236" y="66" width="50" height="4" rx="2" fill="#a5b4fc" />
      <rect x="236" y="86" width="104" height="4" fill="#e2e8f0" />
      <rect x="236" y="96" width="104" height="4" fill="#e2e8f0" />
      <rect x="236" y="106" width="80" height="4" fill="#e2e8f0" />
      <rect x="236" y="124" width="104" height="4" fill="#e2e8f0" />
      <rect x="236" y="134" width="104" height="4" fill="#e2e8f0" />
      <rect x="236" y="144" width="66" height="4" fill="#e2e8f0" />
      <rect x="236" y="166" width="42" height="5" rx="2" fill="#a5b4fc" />
      <text x="288" y="208" textAnchor="middle" fontSize="10" fill="#4338ca" fontWeight="700">COVER LETTER</text>
    </svg>
  );
}

const faqs = [
  { q: "Does anyone actually read cover letters?", a: "Sometimes. Many recruiters skip them for high-volume roles, but hiring managers frequently read them for competitive positions, smaller companies, and any role where fit is ambiguous. The asymmetry favors writing one: rarely penalized for including it, occasionally decisive." },
  { q: "How long should a cover letter be?", a: "Three to four short paragraphs, under 300 words, on one page. A cover letter that runs the length of a resume will not be read, and length is not what makes it persuasive." },
  { q: "Should I write a new one for every application?", a: "The middle should change every time, since it is where you connect your specific experience to their specific need. The structure and closing can stay stable. A cover letter that could be sent anywhere persuades nowhere." },
  { q: "What if I cannot find the hiring manager's name?", a: "'Dear Hiring Team' or 'Dear [Department] Team' is perfectly acceptable and better than a wrong name. Avoid 'To Whom It May Concern', which reads as a template nobody adapted." },
  { q: "Can AI write my cover letter?", a: "It can draft the structure and get you past the blank page, which is the hardest part. But an unedited AI cover letter reads like every other one, so the specific detail about why this role and this company has to come from you." },
];

export default function CoverLetterGuide() {
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
          Cover Letter Guide: When It Matters and How to Write One
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Most cover letters fail because they restate the resume in paragraph form. A useful one does something the resume structurally cannot. Here is what that is, when it is worth the effort, and how to write one in under 300 words.
        </p>

        <div className="mb-10"><CoverLetterIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What a Cover Letter Is For</h2>
          <p>A resume is a structured record. It is very good at showing what you did and how much of it, and structurally incapable of explaining why. It cannot tell someone why you are applying to this company specifically, why you left an industry, why a two-year gap exists, or why a candidate with an unusual background is the right risk.</p>
          <p>That gap is the cover letter&rsquo;s entire job. Anything in your letter that your resume already communicates is wasted space, which is why the most common cover letter — a prose summary of the attached resume — persuades nobody.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When It Actually Matters</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Career changes</strong> — where the connection between your history and the role is not self-evident.</li>
            <li><strong>Employment gaps</strong> — where a brief, unembarrassed explanation removes a question mark.</li>
            <li><strong>Smaller companies</strong> — where a founder or hiring manager reads every application personally.</li>
            <li><strong>Competitive roles</strong> — where dozens of candidates have comparable resumes and something has to break the tie.</li>
            <li><strong>Relocation</strong> — where an employer needs to know you are serious about moving, not speculatively applying.</li>
          </ul>
          <p>When a posting explicitly requests one, it is not optional. Skipping it is often read as an inability to follow instructions before anyone assesses your fit.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">A Structure That Works</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Opening (2-3 sentences):</strong> the role you want and the single most relevant thing about you. No throat-clearing.</li>
            <li><strong>Middle (1-2 paragraphs):</strong> one specific example connecting your experience to their stated need. This is the whole letter.</li>
            <li><strong>Why them (2-3 sentences):</strong> something specific about the company that could not be copy-pasted to a competitor.</li>
            <li><strong>Close (1-2 sentences):</strong> a plain statement of interest. No elaborate sign-off.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: The Opening</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (says nothing, could be any applicant)</p>
            <p className="text-gray-700">&ldquo;I am writing to express my strong interest in the Marketing Manager position advertised on your website. I believe my skills and experience make me an excellent candidate for this role.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (specific, earns the next paragraph)</p>
            <p className="text-gray-700">&ldquo;Your posting mentions rebuilding demand generation from scratch after a pivot. I did exactly that at a Series B SaaS company last year, taking pipeline from $0 to $4M in 18 months — and I would like to do it again here.&rdquo;</p>
          </div>
          <p>The second version proves in two sentences that the writer read the posting and has done the specific thing being asked for. Nothing else in the letter needs to work as hard.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Restating the resume in prose.</strong> The reader already has the resume. Duplicating it wastes the one chance to add something.</li>
            <li><strong>Writing about what you want from them.</strong> &ldquo;This role would help me grow&rdquo; centers you rather than the problem they are hiring to solve.</li>
            <li><strong>Generic praise of the company.</strong> &ldquo;Your commitment to innovation&rdquo; could be pasted into any letter to any employer and means nothing.</li>
            <li><strong>Excessive length.</strong> Past one page it stops being read, which makes the extra words worse than useless.</li>
            <li><strong>Apologizing for gaps in experience.</strong> Naming a weakness and then arguing against yourself does the reader&rsquo;s screening for them.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Only Test That Matters</h2>
          <p>Read your letter and ask whether it could be sent to a different company for a different role with only the names changed. If yes, it is a template, and it will be read as one. At least one paragraph should be impossible to reuse anywhere else.</p>

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
          <h3 className="text-2xl font-bold text-white mb-3">Start With Your Resume</h3>
          <p className="text-gray-300 mb-6">Build an ATS-ready resume free, then use it as the foundation for your letter.</p>
          <Link href="/resume-builder?template=ATS+Professional">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Building Free →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/career-change-resume" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Career Change Resume</p>
              <p className="text-sm text-gray-500 mt-1">Where a cover letter earns its place.</p>
            </Link>
            <Link href="/blog/resume-summary-examples" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">How to Write a Professional Summary</p>
              <p className="text-sm text-gray-500 mt-1">The resume&rsquo;s version of the same job.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Cover Letter Guide: When It Matters and How to Write One", description: "How to write a cover letter that adds something your resume cannot.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
