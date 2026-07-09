import Link from "next/link";

export const metadata = {
  title: "UAE CV Format Guide: What Dubai Employers Expect in 2026",
  description: "A complete guide to UAE CV formatting including visa status, nationality, notice period, and MOHRE-compliant structure that Dubai recruiters expect.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/uae-cv-format-guide" },
};

function UAEIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#fffbeb" rx="12" />
      <rect x="40" y="30" width="200" height="160" rx="8" fill="#fff" stroke="#b8860b" strokeWidth="2" />
      <rect x="0" y="30" width="6" height="160" fill="#b8860b" />
      <rect x="55" y="48" width="110" height="9" rx="2" fill="#111827" />
      <rect x="55" y="65" width="80" height="6" rx="2" fill="#b8860b" />
      <rect x="55" y="85" width="70" height="16" rx="8" fill="#fef3c7" />
      <text x="90" y="96" textAnchor="middle" fontSize="8" fill="#92700a" fontWeight="700">🌍 Nationality</text>
      <rect x="130" y="85" width="90" height="16" rx="8" fill="#fef3c7" />
      <text x="175" y="96" textAnchor="middle" fontSize="8" fill="#92700a" fontWeight="700">📋 Visa Status</text>
      <rect x="55" y="110" width="90" height="16" rx="8" fill="#fef3c7" />
      <text x="100" y="121" textAnchor="middle" fontSize="8" fill="#92700a" fontWeight="700">⏱ Notice Period</text>
      <rect x="55" y="140" width="150" height="4" fill="#e5e7eb" />
      <rect x="55" y="150" width="150" height="4" fill="#e5e7eb" />
      <circle cx="310" cy="100" r="60" fill="#fef3c7" />
      <text x="310" y="108" textAnchor="middle" fontSize="34">🇦🇪</text>
    </svg>
  );
}

export default function UAECVGuide() {
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
        <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide mb-3">International Careers</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          UAE CV Format Guide: What Dubai Employers Expect in 2026
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Hiring in the UAE follows different conventions than the US or UK. Missing fields like visa status or nationality can get an otherwise strong CV overlooked. Here is what to include.
        </p>

        <div className="mb-10">
          <UAEIllustration />
        </div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Fields UAE Recruiters Expect to See</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Nationality</strong> — routinely required for visa sponsorship planning.</li>
            <li><strong>Visa status</strong> — whether you hold a visit visa, employment visa, or are outside the UAE entirely.</li>
            <li><strong>Notice period</strong> — how quickly you can join, which matters heavily for local hiring timelines.</li>
            <li><strong>Date of birth</strong> — commonly included on UAE CVs, unlike US resumes where it is typically omitted.</li>
            <li><strong>Driving license</strong> — relevant for many roles given the region's driving-dependent commute culture.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Company Descriptions Matter More Here</h2>
          <p>Unlike US resumes that assume the reader knows major employers, UAE CVs benefit from a brief company description under each role, particularly for companies less globally recognized. A line like "largest telecom provider in UAE, 5000+ employees" gives instant context to a recruiter screening dozens of applications from different markets.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">MOHRE-Compliant Structure</h2>
          <p>Ministry of Human Resources and Emiratisation (MOHRE) standards influence what UAE employers expect structurally: clear visa and nationality fields, a professional photo (common practice regionally, unlike the US), and straightforward reverse-chronological work history.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Notice Period Signals Hiring Speed</h2>
          <p>Many UAE employers prioritize candidates who can start quickly. If you are an immediate joiner or on a short notice period, make this visible near the top rather than buried at the end of your CV.</p>
        </div>

        <div className="bg-amber-600 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Build Your UAE CV</h3>
          <p className="text-amber-50 mb-6">Includes dedicated fields for visa status, nationality, and notice period.</p>
          <Link href="/resume-builder?template=UAE+CV">
            <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Use the UAE CV Template →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/nursing-resume-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Nursing Resume Guide</p>
              <p className="text-sm text-gray-500 mt-1">DHA, DOH, and hospital hiring requirements.</p>
            </Link>
            <Link href="/blog/trades-resume-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Resume Templates for Skilled Trades</p>
              <p className="text-sm text-gray-500 mt-1">Trade licenses and safety certifications, UAE and beyond.</p>
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
            headline: "UAE CV Format Guide: What Dubai Employers Expect in 2026",
            description: "A complete guide to UAE CV formatting and MOHRE-compliant structure.",
            author: { "@type": "Organization", name: "Resume Helper AI" },
            publisher: { "@type": "Organization", name: "Resume Helper AI" },
          }),
        }}
      />
    </main>
  );
}
