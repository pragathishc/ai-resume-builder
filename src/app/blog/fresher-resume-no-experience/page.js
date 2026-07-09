import Link from "next/link";

export const metadata = {
  title: "Fresher Resume: How to Write One With No Experience",
  description: "A practical guide for students and recent graduates on building a strong first resume using projects, coursework, and skills instead of work history.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/fresher-resume-no-experience" },
};

function FresherIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#eff6ff" rx="12" />
      <rect x="150" y="30" width="120" height="30" rx="6" fill="#2563eb" />
      <text x="210" y="50" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="700">Graduate 🎓</text>
      <circle cx="90" cy="140" r="45" fill="#dbeafe" />
      <path d="M70 140 L85 155 L115 120" stroke="#2563eb" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="180" y="90" width="180" height="100" rx="8" fill="#fff" stroke="#2563eb" strokeWidth="2" />
      <rect x="195" y="105" width="90" height="7" rx="2" fill="#2563eb" />
      <rect x="195" y="120" width="150" height="4" fill="#cbd5e1" />
      <rect x="195" y="130" width="150" height="4" fill="#cbd5e1" />
      <rect x="195" y="150" width="60" height="16" rx="8" fill="#dbeafe" />
      <text x="225" y="161" textAnchor="middle" fontSize="8" fill="#2563eb" fontWeight="700">React</text>
      <rect x="260" y="150" width="70" height="16" rx="8" fill="#dbeafe" />
      <text x="295" y="161" textAnchor="middle" fontSize="8" fill="#2563eb" fontWeight="700">Node.js</text>
    </svg>
  );
}

const faqs = [
  { q: "How long should a fresher resume be?", a: "One page. With no extensive work history to fill space, a fresher resume that runs longer than one page usually means the content is unfocused rather than genuinely comprehensive. Prioritize your strongest projects and most relevant coursework." },
  { q: "Should I include a photo on a fresher resume?", a: "Only if applying in a region where it is customary, such as parts of the Middle East or continental Europe. For US, UK, and most tech roles globally, omit it, since it is not expected and can occasionally introduce unconscious bias in screening." },
  { q: "What if I have no projects at all?", a: "Coursework assignments, hackathon entries, and even significant class presentations can be framed as projects if you describe the problem, your approach, and the outcome. The key is demonstrating applied thinking, not the source of the project." },
  { q: "Should I list my GPA?", a: "Include it if it is 7.5/10, 3.5/4.0, or higher, or if the employer specifically requests it. Below that threshold, coursework and projects carry more weight, and a low GPA line can draw attention away from stronger parts of your resume." },
  { q: "Can I apply for roles outside my degree field?", a: "Yes, especially early in your career. Emphasize transferable skills and any relevant self-directed learning, such as online courses or personal projects, that demonstrate genuine interest and applied capability in the new direction." },
];

export default function FresherResumeGuide() {
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
        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-3">Students & Graduates</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Fresher Resume: How to Write One With No Experience
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Every recruiter knows fresh graduates do not have years of work history. What they are actually screening for is potential, evidenced through projects, coursework, and a clear objective. Here is how to structure that, with a real before-and-after example.
        </p>

        <div className="mb-10">
          <FresherIllustration />
        </div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lead With a Career Objective, Not a Summary</h2>
          <p>A professional summary assumes work history to summarize. A career objective instead states what role you are targeting and what you bring to it. Keep it to two sentences: your degree and focus area, followed by the specific type of role you are seeking, mentioning one or two standout skills.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Projects Are Your Experience Section</h2>
          <p>Academic and personal projects do the job that work history normally does for experienced candidates. For each project, include what you built, the tools or technologies used, and one measurable outcome or technical challenge you solved. Two to three strong projects, described in detail, consistently outperform a long list of shallow ones.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: A Real Example</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (vague, no technical detail, no outcome)</p>
            <p className="text-gray-700">"Made a project for college where students could see their marks and attendance online."</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (specific, technical, outcome-driven)</p>
            <p className="text-gray-700">"Built a Student Management System using React, Node.js, and MongoDB that allowed 200+ students to track grades and attendance in real time, reducing manual record requests to the administration office by an estimated 60%."</p>
          </div>
          <p>The rewritten version names the exact stack, which an ATS scans for directly, states the scale of usage, and estimates a measurable impact, all of which make the project feel real and consequential rather than a generic classroom exercise.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Education Moves Up, Not Down</h2>
          <p>Unlike experienced professionals who place education near the bottom, freshers should list it directly under the objective, including your CGPA if it is strong, relevant coursework, and any academic honors or scholarships.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes on Fresher Resumes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Listing every course you took.</strong> Only include coursework directly relevant to your target role; a long list dilutes your strongest points.</li>
            <li><strong>Using a career objective that could apply to anyone.</strong> "Seeking a challenging role in a growing company" says nothing about your skills or the role you want.</li>
            <li><strong>Omitting the tech stack or tools used in projects.</strong> Recruiters and ATS systems both scan specifically for named technologies, not general descriptions.</li>
            <li><strong>Padding with irrelevant extracurriculars.</strong> Leadership roles and clubs can help, but only when tied to a skill or trait relevant to the job you are applying for.</li>
            <li><strong>Formatting inconsistently across sections.</strong> Freshers often copy formatting from multiple templates, leading to mismatched fonts, spacing, or date styles that look unpolished.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Skills Should Match the Job Posting</h2>
          <p>Since ATS software filters on keywords, mirror the specific technologies or skills listed in the job description, provided you can genuinely speak to them in an interview. Internships, coursework, and personal projects are all valid places to have practiced these skills, and it is completely acceptable to list them even without formal work experience behind them.</p>

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

        <div className="bg-blue-700 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Build Your First Resume</h3>
          <p className="text-blue-100 mb-6">A template designed around projects and education, not work history.</p>
          <Link href="/resume-builder?template=Fresher">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Use the Fresher Template →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/ats-resume-format-2026" className="block p-5 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Best Resume Format for ATS Systems</p>
              <p className="text-sm text-gray-500 mt-1">Make sure your first resume actually gets seen.</p>
            </Link>
            <Link href="/blog/trades-resume-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Resume Templates for Skilled Trades</p>
              <p className="text-sm text-gray-500 mt-1">For apprentices and hands-on career starters.</p>
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
            headline: "Fresher Resume: How to Write One With No Experience",
            description: "A practical guide for students and recent graduates on building a strong first resume.",
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
