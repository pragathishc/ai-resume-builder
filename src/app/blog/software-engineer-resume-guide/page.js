import Link from "next/link";

export const metadata = {
  title: "Software Engineer Resume Guide: Tech Roles in 2026",
  description: "How to write a software engineer resume that passes ATS and impresses hiring managers, with tech stack framing, sample bullets, and common mistakes.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/software-engineer-resume-guide" },
};

function TechIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f1f5f9" rx="12" />
      <rect x="40" y="30" width="150" height="160" rx="8" fill="#1e3a5f" />
      <circle cx="115" cy="62" r="16" fill="rgba(255,255,255,0.2)" />
      <rect x="80" y="88" width="70" height="6" rx="2" fill="#fff" />
      <rect x="62" y="108" width="50" height="5" rx="2" fill="rgba(255,255,255,0.5)" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="66" cy={128 + i * 14} r="3" fill="#60a5fa" />
          <rect x="76" y={125 + i * 14} width={70 - i * 8} height="4" rx="2" fill="rgba(255,255,255,0.65)" />
        </g>
      ))}
      <rect x="200" y="30" width="160" height="160" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="216" y="50" width="100" height="8" rx="2" fill="#1e3a5f" />
      <rect x="216" y="66" width="70" height="5" rx="2" fill="#94a3b8" />
      <rect x="216" y="88" width="128" height="4" fill="#e2e8f0" />
      <rect x="216" y="98" width="128" height="4" fill="#e2e8f0" />
      <rect x="216" y="120" width="60" height="6" rx="2" fill="#1e3a5f" />
      <rect x="216" y="136" width="128" height="4" fill="#e2e8f0" />
      <rect x="216" y="146" width="100" height="4" fill="#e2e8f0" />
      <rect x="216" y="166" width="38" height="14" rx="7" fill="#dbeafe" />
      <rect x="260" y="166" width="44" height="14" rx="7" fill="#dbeafe" />
      <rect x="310" y="166" width="34" height="14" rx="7" fill="#dbeafe" />
    </svg>
  );
}

const faqs = [
  { q: "Should I list every technology I have ever touched?", a: "No. A wall of forty technologies signals shallow exposure rather than depth. List what you could confidently be interviewed on, grouped by category, and let your project bullets demonstrate the rest in context." },
  { q: "Do side projects belong on a senior engineer resume?", a: "Only if they add something your work history does not. For juniors they are essential. For senior engineers with strong professional experience, a side project section can dilute the page unless it demonstrates a genuinely different capability or scale." },
  { q: "Should I include a GitHub or portfolio link?", a: "Yes, if it is active and represents you well. A GitHub link with three empty repos from 2021 does more harm than omitting it. Make sure whatever you link is something you would be happy to have opened during an interview." },
  { q: "How do I describe work covered by an NDA?", a: "Describe the problem shape, scale, and outcome without naming the product or exposing specifics: 'Built a real-time pricing service handling 40k requests/second for a fintech client.' This stays truthful without breaching confidentiality." },
  { q: "Does a computer science degree still matter?", a: "It helps but is rarely decisive on its own. Demonstrated shipping experience, clear technical bullets, and evidence of scale generally weigh more heavily than the degree line for anyone past their first role." },
];

export default function SoftwareEngineerResumeGuide() {
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
        <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide mb-3">Tech Careers</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Software Engineer Resume Guide: Tech Roles in 2026
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Engineering resumes get screened twice: once by software matching keywords, once by an engineer deciding whether you have solved problems like theirs. Here is how to write for both, with a real before-and-after and the mistakes that sink otherwise strong candidates.
        </p>

        <div className="mb-10"><TechIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Name the Stack, Then Prove It</h2>
          <p>An ATS scans for exact technology names, so a dedicated skills section is non-negotiable. But a hiring engineer discounts a skills list almost entirely; what they trust is the technology appearing inside a bullet that describes something you actually built. Do both: list it for the parser, then demonstrate it in context for the human.</p>
          <p>Group your skills rather than dumping them in one line. Languages, frameworks, infrastructure, and databases as separate clusters makes the page scannable and signals that you understand the difference between depth and breadth.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: A Real Example</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (task list, no scale, no stack)</p>
            <p className="text-gray-700">&ldquo;Worked on the backend team building APIs and fixing bugs for the company&rsquo;s main product.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (stack named, scale stated, outcome measured)</p>
            <p className="text-gray-700">&ldquo;Designed and shipped a Node.js/PostgreSQL API serving 2M daily requests; cut p95 latency from 800ms to 120ms by introducing Redis caching and query batching.&rdquo;</p>
          </div>
          <p>The second version gives an interviewer three things to ask about and gives the ATS four keywords to match. The first gives neither.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Numbers Engineers Actually Care About</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Traffic or throughput handled (requests per second, daily active users)</li>
            <li>Latency or performance improvements, with before and after figures</li>
            <li>Scale of data processed or stored</li>
            <li>Team size and your role within it, particularly for senior candidates</li>
            <li>Reliability outcomes, such as reduced incidents or improved uptime</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes on Engineering Resumes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Listing responsibilities instead of shipped work.</strong> &ldquo;Participated in code reviews&rdquo; is table stakes; it tells a reader nothing about your judgment or output.</li>
            <li><strong>Technology soup in the skills section.</strong> Forty listed technologies with no grouping suggests you are padding rather than specialized.</li>
            <li><strong>No mention of scale anywhere.</strong> The same API at 100 requests per day and 100k per second are entirely different engineering problems. Say which one you solved.</li>
            <li><strong>Multi-column layouts and skill rating bars.</strong> Both break ATS parsing, and rating your own React ability at &ldquo;4/5 stars&rdquo; means nothing to an interviewer.</li>
            <li><strong>Burying impact under implementation detail.</strong> The technology is the how; lead with what changed because of it.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tailoring Without Rewriting Everything</h2>
          <p>You do not need a bespoke resume per application. Keep one strong master version, then adjust the skills ordering and the top two or three bullets of your most recent role to mirror the posting&rsquo;s language. That covers most of the ATS keyword benefit for a fraction of the effort, and it keeps your claims honest rather than contorted to fit.</p>

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

        <div className="bg-indigo-700 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Build Your Tech Resume</h3>
          <p className="text-indigo-100 mb-6">A sidebar, skills-first layout designed for engineering roles.</p>
          <Link href="/resume-builder?template=Modern+Tech">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Use the Modern Tech Template →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/resume-keywords-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Resume Keywords That Actually Matter</p>
              <p className="text-sm text-gray-500 mt-1">How keyword matching really works.</p>
            </Link>
            <Link href="/blog/fresher-resume-no-experience" className="block p-5 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Fresher Resume: No Experience</p>
              <p className="text-sm text-gray-500 mt-1">For engineers writing their first resume.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Software Engineer Resume Guide: Tech Roles in 2026", description: "How to write a software engineer resume that passes ATS and impresses hiring managers.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
