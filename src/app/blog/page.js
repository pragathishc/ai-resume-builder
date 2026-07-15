import Link from "next/link";

export const metadata = {
  title: "Resume Guides & Career Advice",
  description: "Free, in-depth guides on resume writing, ATS formatting, cover letters, and job applications for every career stage and region.",
  alternates: { canonical: "https://www.resumehelperai.com/blog" },
};

const categories = [
  {
    name: "Start Here",
    accent: "text-indigo-600",
    hover: "hover:border-indigo-300",
    posts: [
      { slug: "ats-resume-format-2026", title: "Best Resume Format for ATS Systems in 2026", desc: "The formatting rules every applicant tracking system checks, and the mistakes that break parsing." },
      { slug: "resume-summary-examples", title: "How to Write a Professional Summary", desc: "The four lines at the top of your resume that decide whether the rest gets read." },
      { slug: "resume-mistakes-to-avoid", title: "12 Resume Mistakes That Cost You Interviews", desc: "The errors that get strong candidates filtered out for reasons unrelated to capability." },
      { slug: "resume-length-guide", title: "How Long Should a Resume Be?", desc: "One page, two pages, and how the answer changes by career stage and country." },
    ],
  },
  {
    name: "By Career Stage",
    accent: "text-blue-600",
    hover: "hover:border-blue-300",
    posts: [
      { slug: "fresher-resume-no-experience", title: "Fresher Resume: No Experience, No Problem", desc: "Building a first resume around projects and coursework instead of work history." },
      { slug: "career-change-resume", title: "Career Change Resume: Switching Industries", desc: "How to make experience from another field read as relevant, honestly." },
      { slug: "executive-resume-guide", title: "Executive Resume Guide: C-Suite and Senior Leadership", desc: "Scope, P&L framing, and board-ready structure for CTO, VP, and director searches." },
      { slug: "employment-gaps-resume", title: "Employment Gaps: How to Handle Them Honestly", desc: "What recruiters actually think, and how to close the question in one line." },
    ],
  },
  {
    name: "By Industry",
    accent: "text-teal-600",
    hover: "hover:border-teal-300",
    posts: [
      { slug: "nursing-resume-guide", title: "Nursing Resume Guide: DHA, DOH & Hospital Requirements", desc: "License numbers, BLS/ACLS certifications, and clinical formatting that gets shortlisted." },
      { slug: "software-engineer-resume-guide", title: "Software Engineer Resume Guide", desc: "Stack framing, scale metrics, and writing for both the parser and the interviewer." },
      { slug: "trades-resume-guide", title: "Resume Templates for Electricians, Plumbers & Trades", desc: "Trade licenses, safety records, and presenting hands-on project work." },
      { slug: "creative-resume-guide", title: "Creative Resume Guide: Designers, Writers & Portfolio Roles", desc: "Holding personality and ATS-safety at the same time." },
    ],
  },
  {
    name: "By Region",
    accent: "text-amber-600",
    hover: "hover:border-amber-300",
    posts: [
      { slug: "uae-cv-format-guide", title: "UAE CV Format Guide: What Dubai Employers Expect", desc: "Visa status, nationality, notice period, and MOHRE-compliant structure." },
      { slug: "europe-cv-guide", title: "Europe CV Guide: Europass and EU Applications", desc: "CEFR language levels, photo norms, and country-by-country differences." },
    ],
  },
  {
    name: "Craft & Technique",
    accent: "text-green-700",
    hover: "hover:border-green-300",
    posts: [
      { slug: "quantify-resume-achievements", title: "How to Quantify Achievements When You Don't Have Numbers", desc: "Where the metrics actually are, and what to do when none exist." },
      { slug: "resume-keywords-guide", title: "Resume Keywords: How Matching Actually Works", desc: "What the system is really doing, and where to place terms without stuffing." },
      { slug: "tailor-resume-for-each-job", title: "How to Tailor Your Resume for Each Job (In 10 Minutes)", desc: "A repeatable system that does not require rewriting from scratch." },
      { slug: "cover-letter-guide", title: "Cover Letter Guide: When It Matters and How to Write One", desc: "Doing the one thing a resume structurally cannot." },
    ],
  },
  {
    name: "About the Tool",
    accent: "text-gray-600",
    hover: "hover:border-gray-300",
    posts: [
      { slug: "how-to-make-a-resume-with-ai", title: "How to Make a Resume with AI in 2026", desc: "A step-by-step walkthrough of building a resume with AI assistance." },
      { slug: "free-resume-builder-vs-paid", title: "Free vs Paid Resume Builders", desc: "What the paid tiers actually gate, and whether it is worth it." },
    ],
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">Resume Helper AI</Link>
          <Link href="/resume-builder">
            <button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition text-sm">Get Started</button>
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-violet-50 via-white to-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide mb-3">Resume Guides</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Free Resume &amp; Career Guides
          </h1>
          <p className="text-lg text-gray-600">
            In-depth, practical guides on resume writing, ATS formatting, and job applications — for every career stage, industry, and region. No sign up, no paywall.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {categories.map((cat) => (
          <section key={cat.name} className="mb-14">
            <h2 className={`text-sm font-bold uppercase tracking-widest mb-5 ${cat.accent}`}>{cat.name}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {cat.posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`block p-6 border border-gray-200 rounded-xl transition hover:shadow-lg hover:-translate-y-0.5 ${cat.hover}`}
                >
                  <h3 className="font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{post.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-gray-900 rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Build Yours?</h2>
          <p className="text-gray-300 mb-7">9 ATS-tested templates, AI summaries, instant PDF download. Free, no sign up.</p>
          <Link href="/resume-builder">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Building Free →
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
