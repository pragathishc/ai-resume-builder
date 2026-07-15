import Link from "next/link";

export const metadata = {
  title: "Resume Keywords: How Matching Actually Works in 2026",
  description: "How ATS keyword matching really works, how to find the right keywords from a job posting, and where to place them without keyword stuffing.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/resume-keywords-guide" },
};

function KeywordsIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f8fafc" rx="12" />
      <rect x="35" y="35" width="130" height="150" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
      <rect x="50" y="52" width="70" height="6" rx="2" fill="#475569" />
      <rect x="50" y="68" width="100" height="4" fill="#e2e8f0" />
      <rect x="50" y="78" width="100" height="4" fill="#e2e8f0" />
      <rect x="50" y="92" width="52" height="12" rx="6" fill="#fde68a" />
      <rect x="108" y="92" width="42" height="12" rx="6" fill="#fde68a" />
      <rect x="50" y="112" width="100" height="4" fill="#e2e8f0" />
      <rect x="50" y="126" width="46" height="12" rx="6" fill="#fde68a" />
      <rect x="50" y="146" width="100" height="4" fill="#e2e8f0" />
      <rect x="50" y="156" width="72" height="4" fill="#e2e8f0" />
      <text x="100" y="205" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="700">JOB POSTING</text>
      <path d="M178 110 L212 110" stroke="#4338ca" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 4" />
      <path d="M202 102 L214 110 L202 118" stroke="#4338ca" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="235" y="35" width="130" height="150" rx="8" fill="#fff" stroke="#4338ca" strokeWidth="2" />
      <rect x="250" y="52" width="70" height="6" rx="2" fill="#4338ca" />
      <rect x="250" y="68" width="100" height="4" fill="#e2e8f0" />
      <rect x="250" y="82" width="52" height="12" rx="6" fill="#bbf7d0" />
      <rect x="308" y="82" width="42" height="12" rx="6" fill="#bbf7d0" />
      <rect x="250" y="102" width="100" height="4" fill="#e2e8f0" />
      <rect x="250" y="112" width="100" height="4" fill="#e2e8f0" />
      <rect x="250" y="126" width="46" height="12" rx="6" fill="#bbf7d0" />
      <rect x="250" y="146" width="100" height="4" fill="#e2e8f0" />
      <rect x="250" y="156" width="72" height="4" fill="#e2e8f0" />
      <text x="300" y="205" textAnchor="middle" fontSize="10" fill="#4338ca" fontWeight="700">YOUR RESUME</text>
    </svg>
  );
}

const faqs = [
  { q: "Do ATS systems really reject resumes automatically?", a: "Mostly they rank rather than reject. The practical effect is similar: a low-ranked resume sits below the candidates a recruiter actually opens. Very few systems auto-reject outright, but few recruiters read past the top of the pile either." },
  { q: "Is there a keyword density I should aim for?", a: "No. That idea comes from old SEO advice and does not apply here. What matters is that each genuinely relevant keyword appears somewhere natural, ideally twice: once in the skills section and once inside a bullet that shows you used it." },
  { q: "Can I put white keywords on a white background to game the system?", a: "Do not. Parsers extract raw text regardless of color, so the hidden words are visible to the system, and recruiters who spot it treat it as deception. It is a fast route to being blacklisted at that company." },
  { q: "What if I have the skill but call it something different?", a: "Use the employer's term if it honestly describes what you did. If a posting says 'stakeholder management' and you have been doing exactly that under a different internal name, adopt their phrasing — that is translation, not exaggeration." },
  { q: "Should I list keywords for skills I am still learning?", a: "Only if you could hold a real conversation about them. Listing a technology you touched once creates an interview you will not survive, and the short-term ranking gain is not worth it." },
];

export default function ResumeKeywordsGuide() {
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
          Resume Keywords: How Matching Actually Works in 2026
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Keyword advice is full of myths — density targets, hidden white text, stuffing a skills section with everything you have heard of. Here is what actually happens when a system reads your resume, and how to work with it honestly.
        </p>

        <div className="mb-10"><KeywordsIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What the System Is Doing</h2>
          <p>When you submit an application, the ATS parses your resume into structured fields and then compares it against the requisition. Depending on the platform, that comparison ranges from simple term matching to more nuanced scoring that weights where a term appears and how recent the experience is.</p>
          <p>The practical upshot is the same across systems: terms that appear in the job description and also in your resume raise your rank. Terms that appear only in the job description do not. That is the entire mechanic, and everything else is detail.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where to Find Your Keywords</h2>
          <p>You do not need a tool for this. The job posting contains almost all of them, and they cluster in predictable places:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>The job title itself</strong> — often the single highest-weighted term.</li>
            <li><strong>The requirements list</strong> — usually the densest source of hard skills and tools.</li>
            <li><strong>Repeated phrases</strong> — anything the posting says twice is something the hiring manager cares about.</li>
            <li><strong>Certifications and qualifications</strong> — named explicitly and matched exactly.</li>
            <li><strong>Methodology names</strong> — Agile, Scrum, Six Sigma, and their equivalents in your field.</li>
          </ul>
          <p>Read the posting twice and highlight every noun that names a skill, tool, or qualification. That list is your target set.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: A Real Example</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (right experience, wrong vocabulary)</p>
            <p className="text-gray-700">&ldquo;Handled the money side of projects and made sure everyone stayed in the loop about how things were going.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (same work, employer&rsquo;s terms, quantified)</p>
            <p className="text-gray-700">&ldquo;Owned budget forecasting and stakeholder management across 6 concurrent projects totaling $2.4M, delivering monthly reporting to senior leadership.&rdquo;</p>
          </div>
          <p>Nothing was fabricated. The candidate did exactly this. The first version simply used vocabulary no system was searching for and no recruiter was scanning for.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where to Place Them</h2>
          <p>The strongest pattern is twice, in two different roles: once in a dedicated skills section, where the parser reliably finds it, and once inside a bullet, where a human sees you actually applied it. A skill that appears only in the list looks claimed. A skill that appears only in a bullet may be missed by the parser. Both places, and you have covered each reader.</p>
          <p>Recency matters too on more sophisticated platforms. A keyword sitting in a role from 2014 carries less weight than the same term in your current position, which is another reason to make sure your most recent role covers the terms that matter most.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Stuffing a skills section with forty terms.</strong> It reads as padding to a human and dilutes the terms that actually matter.</li>
            <li><strong>Copying the job description verbatim.</strong> Recruiters notice immediately, and a resume that mirrors the posting sentence for sentence reads as dishonest rather than well-matched.</li>
            <li><strong>Hidden white text.</strong> Parsers read it, recruiters find it, and it ends the application.</li>
            <li><strong>Only using acronyms, or only using full terms.</strong> Some systems match one and not the other. &ldquo;Search Engine Optimization (SEO)&rdquo; covers both at the cost of three words.</li>
            <li><strong>Listing skills you cannot discuss.</strong> The keyword gets you into a room where the gap becomes obvious within two questions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Line That Matters</h2>
          <p>There is a real distinction between translation and exaggeration, and it is worth being clear about it. Translating means describing genuine experience in the vocabulary your target field uses. Exaggerating means claiming experience you do not have. The first is basic communication. The second creates interviews you cannot survive and offers that get withdrawn. Everything in this guide is about the first.</p>

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
          <h3 className="text-2xl font-bold text-white mb-3">Find Your Keywords with AI</h3>
          <p className="text-gray-300 mb-6">Enter your target job title and get the role-specific skills recruiters search for.</p>
          <Link href="/resume-builder?template=ATS+Professional">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Try Skill Suggestions →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/ats-resume-format-2026" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Best Resume Format for ATS Systems</p>
              <p className="text-sm text-gray-500 mt-1">Formatting so your keywords get read at all.</p>
            </Link>
            <Link href="/blog/software-engineer-resume-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Software Engineer Resume Guide</p>
              <p className="text-sm text-gray-500 mt-1">Keyword strategy for technical roles.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Resume Keywords: How Matching Actually Works in 2026", description: "How ATS keyword matching really works.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
