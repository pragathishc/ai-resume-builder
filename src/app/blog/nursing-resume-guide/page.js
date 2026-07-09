import Link from "next/link";

export const metadata = {
  title: "Nursing Resume Guide: DHA, DOH & Hospital Requirements",
  description: "How to write a nursing resume that hospitals in the US, UK, and UAE actually shortlist, including license numbers, BLS/ACLS certifications, and clinical formatting.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/nursing-resume-guide" },
};

function NursingIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f0fdfa" rx="12" />
      <circle cx="120" cy="100" r="60" fill="#ccfbf1" />
      <rect x="95" y="65" width="50" height="70" rx="6" fill="#fff" stroke="#0d7377" strokeWidth="2" />
      <rect x="115" y="80" width="10" height="30" fill="#0d7377" />
      <rect x="105" y="90" width="30" height="10" fill="#0d7377" />
      <rect x="200" y="40" width="160" height="140" rx="8" fill="#fff" stroke="#0d7377" strokeWidth="2" />
      <rect x="215" y="55" width="100" height="8" rx="2" fill="#0d7377" />
      <rect x="215" y="72" width="70" height="5" rx="2" fill="#94a3b8" />
      <rect x="215" y="95" width="130" height="4" fill="#cbd5e1" />
      <rect x="215" y="105" width="130" height="4" fill="#cbd5e1" />
      <rect x="215" y="115" width="90" height="4" fill="#cbd5e1" />
      <rect x="215" y="140" width="60" height="18" rx="9" fill="#0d7377" />
      <text x="245" y="152" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">BLS ✓</text>
      <rect x="285" y="140" width="60" height="18" rx="9" fill="#0d7377" />
      <text x="315" y="152" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">ACLS ✓</text>
    </svg>
  );
}

export default function NursingResumeGuide() {
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
        <p className="text-sm text-teal-600 font-semibold uppercase tracking-wide mb-3">Healthcare Careers</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Nursing Resume Guide: DHA, DOH & Hospital Requirements
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Hospital recruiters scan nursing resumes differently than corporate ones. License numbers, certifications, and clinical specialty need to be visible in seconds. Here is exactly what to include.
        </p>

        <div className="mb-10">
          <NursingIllustration />
        </div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">License Information Comes First</h2>
          <p>Unlike most resumes, a nursing resume should surface your license number and expiry date near the top, not buried in a certifications section. Hospitals in the UAE require DHA, DOH, or MOHAP license numbers to be visible immediately, since unlicensed applications are often filtered out before review.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Certifications That Matter</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>BLS (Basic Life Support)</strong> — expected for nearly every clinical role.</li>
            <li><strong>ACLS (Advanced Cardiac Life Support)</strong> — required for ICU, ER, and critical care positions.</li>
            <li><strong>PALS (Pediatric Advanced Life Support)</strong> — essential for pediatric or NICU roles.</li>
            <li>Always list the certifying body (AHA) and the date, since expired certifications are treated as missing ones.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Structuring Clinical Experience</h2>
          <p>List the facility name, your unit or specialty, patient ratio if relevant, and 2-3 measurable outcomes such as patient satisfaction scores or process improvements. Recruiters skim for specialty keywords like ICU, ER, NICU, OR, or Oncology, so make sure yours are unmistakable near the top of each role.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Formatting for Fast Scanning</h2>
          <p>Hospital HR teams often review dozens of applications per shift opening. A clean layout with your license, certifications, and specialty visible in the first few seconds significantly increases the odds of a callback compared to a dense, generic template.</p>
        </div>

        <div className="bg-teal-700 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Build Your Nursing Resume</h3>
          <p className="text-teal-100 mb-6">Includes dedicated fields for license number, BLS/ACLS dates, and clinical specialty.</p>
          <Link href="/resume-builder?template=Nursing">
            <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Use the Nursing Template →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/uae-cv-format-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">UAE CV Format Guide</p>
              <p className="text-sm text-gray-500 mt-1">Visa status, MOHRE compliance, and Dubai hiring norms.</p>
            </Link>
            <Link href="/blog/ats-resume-format-2026" className="block p-5 border border-gray-200 rounded-lg hover:border-teal-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Best Resume Format for ATS Systems</p>
              <p className="text-sm text-gray-500 mt-1">The formatting rules every applicant tracking system checks.</p>
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
            headline: "Nursing Resume Guide: DHA, DOH & Hospital Requirements",
            description: "How to write a nursing resume that hospitals actually shortlist.",
            author: { "@type": "Organization", name: "Resume Helper AI" },
            publisher: { "@type": "Organization", name: "Resume Helper AI" },
          }),
        }}
      />
    </main>
  );
}
