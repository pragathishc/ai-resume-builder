import Link from "next/link";

export const metadata = {
  title: "Europe CV Guide: Europass Format and EU Job Applications",
  description: "How to write a CV for jobs in Europe, including Europass conventions, photo and personal data norms, language levels, and country-by-country differences.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/europe-cv-guide" },
};

function EuropeIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#f0fdf4" rx="12" />
      <rect x="40" y="30" width="200" height="160" rx="8" fill="#fff" stroke="#15803d" strokeWidth="2" />
      <rect x="40" y="30" width="200" height="44" rx="8" fill="#15803d" />
      <rect x="58" y="44" width="90" height="9" rx="2" fill="#fff" />
      <rect x="58" y="58" width="60" height="5" rx="2" fill="rgba(255,255,255,0.75)" />
      <rect x="196" y="40" width="28" height="26" rx="3" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <text x="210" y="60" textAnchor="middle" fontSize="14">👤</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="64" cy={94 + i * 30} r="4" fill="#15803d" />
          <rect x="78" y={90 + i * 30} width={110 - i * 20} height="5" rx="2" fill="#111827" />
          <rect x="78" y={101 + i * 30} width="140" height="4" rx="2" fill="#dcfce7" />
        </g>
      ))}
      <circle cx="315" cy="110" r="55" fill="#dcfce7" />
      <text x="315" y="124" textAnchor="middle" fontSize="36">🇪🇺</text>
    </svg>
  );
}

const faqs = [
  { q: "Do I have to use the official Europass template?", a: "No. Europass is widely recognized across the EU, and some public-sector roles request it specifically, but private employers accept well-formatted standard CVs. What matters is following European conventions, not the exact template file." },
  { q: "Should I include a photo on a European CV?", a: "It depends heavily on the country. Germany, France, Spain, and much of Southern and Eastern Europe commonly expect one. The UK and Ireland generally do not, and including one can work against you there. Match the norm of the country you are applying to." },
  { q: "How do I describe my language levels?", a: "Use the CEFR scale (A1 through C2) rather than vague words like 'fluent' or 'conversational'. European recruiters read CEFR levels precisely, and 'B2 German' communicates far more than 'good German'." },
  { q: "Is personal data like date of birth expected?", a: "It is common in many EU countries and generally harmless to include, though it is not legally required anywhere and GDPR gives you the right to omit it. If you are unsure, follow the convention of the specific country." },
  { q: "How long should a European CV be?", a: "Two pages is the widely accepted norm across most of the EU, which is more generous than the one-page US expectation. Europass CVs in particular often run to two or three pages without issue." },
];

export default function EuropeCVGuide() {
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
        <p className="text-sm text-green-700 font-semibold uppercase tracking-wide mb-3">International Careers</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Europe CV Guide: Europass Format and EU Job Applications
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          A US resume submitted in Europe often reads as thin and incomplete, while a European CV submitted in the US reads as oversharing. Here is what actually differs, how Europass fits in, and where the conventions change country by country.
        </p>

        <div className="mb-10"><EuropeIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">CV, Not Resume</h2>
          <p>The vocabulary difference is real. In Europe the standard document is a CV, and the expectation is a fuller account of your background than the compressed one-page US resume. Two pages is normal. Education stays more prominent for longer into a career. Personal details that Americans deliberately omit are routinely included.</p>
          <p>None of this makes one approach better. It means submitting an unmodified US resume to a German or French employer will read as though you left sections out.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Europass Actually Is</h2>
          <p>Europass is a standardized CV format created by the European Union to make qualifications comparable across member states. Its value is recognizability: a recruiter in any EU country knows immediately where to find your language levels, education, and work history. Its cost is that it looks identical to every other Europass CV, which can work against you in competitive private-sector roles.</p>
          <p>Use Europass when a posting requests it, when applying to EU institutions or public sector roles, or when your qualifications come from a country the employer may not know well. For most private-sector applications, a clean CV following European conventions serves you better.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Language Levels Are Not Optional</h2>
          <p>This is the field most non-European applicants get wrong. Europe runs on the CEFR scale, and recruiters read it literally:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>A1–A2</strong> — basic user; enough for daily interaction, not for work.</li>
            <li><strong>B1–B2</strong> — independent user; B2 is the usual threshold for working in a language.</li>
            <li><strong>C1–C2</strong> — proficient user; C2 is near-native.</li>
          </ul>
          <p>Writing &ldquo;fluent French&rdquo; forces a recruiter to guess. Writing &ldquo;French — C1&rdquo; tells them exactly whether you can attend a meeting in it.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: A Real Example</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (US conventions, vague languages, no context)</p>
            <p className="text-gray-700">&ldquo;Languages: English, Spanish, some German. Product Manager, Amazon, 2021–Present.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (CEFR levels, European structure, quantified)</p>
            <p className="text-gray-700">&ldquo;Languages: English (C2), Spanish (C1), German (B1). Amazon — Product Manager, Madrid (Mar 2021 – Present): launched 3 products across EU markets generating €2M first-year revenue.&rdquo;</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes on European CVs</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Applying one country&rsquo;s norms across the whole continent.</strong> Europe is not a single hiring culture. A photo expected in Munich is a liability in London.</li>
            <li><strong>Compressing to one page.</strong> Cutting to US length signals you have less experience than you do.</li>
            <li><strong>Using vague language descriptors.</strong> &ldquo;Conversational Italian&rdquo; is unreadable to a recruiter working with CEFR.</li>
            <li><strong>Omitting nationality or work authorization.</strong> For non-EU applicants especially, whether you need visa sponsorship is the first thing an employer needs to know.</li>
            <li><strong>Ignoring date format conventions.</strong> European CVs typically use day/month/year; writing 03/04/2026 without clarity creates genuine ambiguity.</li>
          </ul>

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
          <h3 className="text-2xl font-bold text-white mb-3">Build Your Europe CV</h3>
          <p className="text-green-100 mb-6">Europass-aligned structure with photo support and language fields.</p>
          <Link href="/resume-builder?template=Europe+CV">
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Use the Europe CV Template →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/uae-cv-format-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">UAE CV Format Guide</p>
              <p className="text-sm text-gray-500 mt-1">How Gulf conventions differ again.</p>
            </Link>
            <Link href="/blog/resume-length-guide" className="block p-5 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">How Long Should a Resume Be?</p>
              <p className="text-sm text-gray-500 mt-1">One page, two pages, and when it changes.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Europe CV Guide: Europass Format and EU Job Applications", description: "How to write a CV for jobs in Europe.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
