import Link from "next/link";

export const metadata = {
  title: "Nursing Resume Guide: DHA, DOH & Hospital Requirements",
  description: "How to write a nursing resume that hospitals in the US, UK, and UAE actually shortlist, including license numbers, certifications, sample bullets, and common mistakes.",
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

const faqs = [
  { q: "Should I include my nursing license number on my resume?", a: "Yes, always. Hospital recruiters, particularly in the UAE and other Gulf countries, need to verify your DHA, DOH, or MOHAP license before shortlisting. Omitting it can cause your application to be filtered out even if you are fully qualified." },
  { q: "What if my certifications have expired?", a: "List the certification with its expiry date honestly. Some employers will still consider you if you commit to renewing before your start date, but concealing an expired certification and having it discovered later can end an offer immediately." },
  { q: "How do I handle multiple hospital placements or short contracts?", a: "List each placement separately with exact dates, rather than grouping them, since recruiters specifically look for continuity and breadth of clinical exposure. Short-term or agency placements are common in nursing and do not need justification." },
  { q: "Should I list every skill I have, or focus on my specialty?", a: "Focus on skills relevant to your target specialty first, then include broader clinical competencies after. A resume for an ICU role should lead with critical care skills, not general ward experience, even if you have both." },
  { q: "Is a photo required on a nursing resume?", a: "It depends on the region. UAE and many Gulf employers commonly expect a professional photo. US and UK employers typically do not, and including one can sometimes work against you due to anti-discrimination hiring norms. Match the format to where you are applying." },
];

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
          Hospital recruiters scan nursing resumes differently than corporate ones. License numbers, certifications, and clinical specialty need to be visible in seconds. Here is exactly what to include, a sample bullet you can adapt, and the mistakes that cost qualified nurses interviews.
        </p>

        <div className="mb-10">
          <NursingIllustration />
        </div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">License Information Comes First</h2>
          <p>Unlike most resumes, a nursing resume should surface your license number and expiry date near the top, not buried in a certifications section. Hospitals in the UAE require DHA, DOH, or MOHAP license numbers to be visible immediately, since unlicensed applications are often filtered out before review by a human. In the US, state licensure (RN, compact license status) should appear just as prominently.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Certifications That Matter</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>BLS (Basic Life Support)</strong> — expected for nearly every clinical role, regardless of specialty.</li>
            <li><strong>ACLS (Advanced Cardiac Life Support)</strong> — required for ICU, ER, and critical care positions specifically.</li>
            <li><strong>PALS (Pediatric Advanced Life Support)</strong> — essential for pediatric or NICU roles.</li>
            <li><strong>CCRN or specialty board certification</strong> — strengthens applications for critical care and specialized units considerably.</li>
            <li>Always list the certifying body, such as AHA, and the date, since expired certifications are often treated by systems as equivalent to missing ones.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: A Real Example</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (vague, no outcomes, no specialty signal)</p>
            <p className="text-gray-700">"Responsible for taking care of patients and helping doctors with their work in the hospital."</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (specialty-specific, measurable, credential-forward)</p>
            <p className="text-gray-700">"Provided critical care to 8-10 ICU patients per shift, administered IV medications and monitored vital signs, maintaining a 98% patient satisfaction score across 18 months at Cleveland Clinic Abu Dhabi."</p>
          </div>
          <p>The rewritten version names the unit, patient load, specific clinical duties, and a measurable outcome, all of which give a recruiter immediate confidence in your fit for a similar role elsewhere.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Structuring Clinical Experience</h2>
          <p>List the facility name, your unit or specialty, patient ratio if relevant, and two to three measurable outcomes such as patient satisfaction scores or process improvements. Recruiters skim for specialty keywords like ICU, ER, NICU, OR, or Oncology, so make sure yours are unmistakable near the top of each role rather than mentioned only in passing.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes on Nursing Resumes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Burying the license number at the bottom.</strong> If a recruiter cannot find it within the first few seconds, some will move on rather than search for it.</li>
            <li><strong>Listing certifications without dates.</strong> An "ACLS Certified" line with no date raises the question of whether it is current, which slows down or stalls your review.</li>
            <li><strong>Generic descriptions of patient care.</strong> "Cared for patients" says nothing that differentiates you from any other applicant with the same job title.</li>
            <li><strong>Omitting patient ratios or unit size.</strong> These numbers directly signal the intensity and complexity of the environment you are used to working in.</li>
            <li><strong>Not tailoring specialty keywords per application.</strong> A resume built for ICU roles should look different from one built for pediatric roles, even if the underlying experience overlaps.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Formatting for Fast Scanning</h2>
          <p>Hospital HR teams often review dozens of applications per shift opening. A clean layout with your license, certifications, and specialty visible in the first few seconds significantly increases the odds of a callback compared to a dense, generic template built for corporate roles.</p>

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
