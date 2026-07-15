import Link from "next/link";

export const metadata = {
  title: "Creative Resume Guide: Designers, Writers & Portfolio Roles",
  description: "How to write a creative resume for design, UX, and content roles, balancing visual personality with ATS parsing, plus portfolio framing and common mistakes.",
  alternates: { canonical: "https://www.resumehelperai.com/blog/creative-resume-guide" },
};

function CreativeIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto">
      <rect width="400" height="220" fill="#fdf2f8" rx="12" />
      <rect x="40" y="30" width="140" height="160" rx="8" fill="#be185d" />
      <circle cx="110" cy="64" r="18" fill="rgba(255,255,255,0.25)" />
      <rect x="72" y="92" width="76" height="7" rx="2" fill="#fff" />
      <rect x="60" y="112" width="40" height="5" rx="2" fill="rgba(255,255,255,0.5)" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={60 + i * 32} y="128" width="28" height="12" rx="6" fill="rgba(255,255,255,0.2)" />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={60 + i * 32} y="146" width="28" height="12" rx="6" fill="rgba(255,255,255,0.2)" />
      ))}
      <rect x="190" y="30" width="170" height="160" rx="8" fill="#fff" stroke="#fbcfe8" strokeWidth="2" />
      <rect x="206" y="48" width="138" height="3" rx="1.5" fill="#be185d" />
      <rect x="206" y="62" width="70" height="7" rx="2" fill="#be185d" />
      <rect x="206" y="80" width="138" height="4" fill="#fce7f3" />
      <rect x="206" y="90" width="138" height="4" fill="#fce7f3" />
      <rect x="206" y="100" width="90" height="4" fill="#fce7f3" />
      <rect x="206" y="122" width="60" height="6" rx="2" fill="#be185d" />
      <rect x="206" y="138" width="138" height="4" fill="#fce7f3" />
      <rect x="206" y="148" width="110" height="4" fill="#fce7f3" />
      <circle cx="330" cy="172" r="10" fill="#fbcfe8" />
    </svg>
  );
}

const faqs = [
  { q: "Can a creative resume have color and personality?", a: "Yes, within limits. Color, a distinctive header, and considered typography are fine and often expected. What breaks things is putting your actual content into multi-column layouts, text boxes, or images, which ATS parsers cannot read reliably." },
  { q: "Should my resume look like my portfolio?", a: "No. They do different jobs. Your portfolio proves your craft; your resume proves your track record and gets you to the stage where someone opens the portfolio. Treating the resume as another portfolio piece often makes it harder to read." },
  { q: "Where should my portfolio link go?", a: "In your contact header, near your email, not buried at the bottom. For design and content roles it is often the single most important line on the page, so it should be visible in the first two seconds." },
  { q: "Do creative roles even use ATS?", a: "Frequently, yes. Agencies and in-house teams at mid-size and large companies use the same applicant tracking systems as every other department. Assuming creative roles are exempt is a common and costly mistake." },
  { q: "How do I show impact when my work is subjective?", a: "Tie work to business outcomes wherever they exist: conversion lift, engagement change, redesign adoption, or reduced support tickets. Where no number exists, describe scope and constraint instead — audience size, timeline, stakeholders." },
];

export default function CreativeResumeGuide() {
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
        <p className="text-sm text-pink-600 font-semibold uppercase tracking-wide mb-3">Design & Content</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Creative Resume Guide: Designers, Writers &amp; Portfolio Roles
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Creative resumes carry a contradiction: they need enough personality to signal taste, and enough structure to survive an ATS. Here is how to hold both, with a real before-and-after and the mistakes that keep good designers out of interviews.
        </p>

        <div className="mb-10"><CreativeIllustration /></div>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Resume Is Not Your Portfolio</h2>
          <p>This is the most common misunderstanding in creative hiring. The portfolio proves you can do the work. The resume proves you have done it professionally, at some scale, with some result, and it is what gets someone to open the portfolio in the first place. When designers treat the resume as another canvas, it usually becomes harder to read and does its actual job worse.</p>
          <p>The practical implication: put your craft into the portfolio, and put your judgment into the resume. A restrained, well-typeset resume with a strong portfolio link demonstrates more taste than an elaborate one that buries the link.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where Personality Is Safe, and Where It Is Not</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Safe:</strong> a colored header band, considered type choices, an accent color, generous whitespace, a distinctive but readable hierarchy.</li>
            <li><strong>Safe:</strong> a short first-person &ldquo;About&rdquo; line that sounds like a person rather than a job description.</li>
            <li><strong>Not safe:</strong> your work history inside a table, text boxes, or a multi-column grid — parsers scramble or skip these.</li>
            <li><strong>Not safe:</strong> text rendered as part of an image, infographic timelines, or skill rating bars.</li>
            <li><strong>Not safe:</strong> unconventional section headings. &ldquo;Where I&rsquo;ve Made Things&rdquo; is charming and unparseable; use &ldquo;Experience&rdquo;.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before and After: A Real Example</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Before (process description, no outcome, no scope)</p>
            <p className="text-gray-700">&ldquo;Redesigned the booking flow, working closely with the product team and iterating on designs based on feedback.&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
            <p className="text-sm font-semibold text-green-700 mb-2">After (constraint, method, measured result)</p>
            <p className="text-gray-700">&ldquo;Redesigned the end-to-end booking flow for 4M monthly users; ran 12 usability sessions and shipped in 3 iterations, lifting checkout conversion 32% and cutting drop-off at payment by half.&rdquo;</p>
          </div>
          <p>The second version still describes process, but anchors it to audience size, method, and a business result. That is what makes a creative bullet legible to a non-designer in the hiring loop.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes on Creative Resumes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Portfolio link buried at the bottom.</strong> For most creative roles it is the most valuable line on the page and belongs in the header.</li>
            <li><strong>Describing process without outcome.</strong> &ldquo;Iterated based on feedback&rdquo; describes every designer alive; it does not differentiate you.</li>
            <li><strong>Skill rating bars.</strong> A four-fifths-filled bar next to &ldquo;Figma&rdquo; communicates nothing verifiable and breaks parsing.</li>
            <li><strong>Assuming creative roles skip ATS.</strong> Agencies and large in-house teams use the same systems as finance departments do.</li>
            <li><strong>A portfolio link that goes somewhere stale.</strong> An outdated or half-finished site actively costs you; either update it or link somewhere current.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">One Line That Does a Lot of Work</h2>
          <p>Creative hiring involves people outside the creative team — recruiters, product managers, sometimes founders. A single opening line that states what you design, for whom, and at what scale gives every one of those readers a foothold. &ldquo;UX designer focused on consumer fintech, most recently for products serving 4M monthly users&rdquo; does more than a paragraph of adjectives.</p>

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

        <div className="bg-pink-700 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Build Your Creative Resume</h3>
          <p className="text-pink-100 mb-6">Bold, portfolio-ready design that still parses cleanly.</p>
          <Link href="/resume-builder?template=Creative">
            <button className="bg-white text-pink-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Use the Creative Template →
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/ats-resume-format-2026" className="block p-5 border border-gray-200 rounded-lg hover:border-pink-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Best Resume Format for ATS Systems</p>
              <p className="text-sm text-gray-500 mt-1">Where design choices break parsing.</p>
            </Link>
            <Link href="/blog/resume-mistakes-to-avoid" className="block p-5 border border-gray-200 rounded-lg hover:border-pink-300 hover:shadow-md transition">
              <p className="font-semibold text-gray-900">12 Resume Mistakes to Avoid</p>
              <p className="text-sm text-gray-500 mt-1">The errors that cost interviews.</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Creative Resume Guide: Designers, Writers & Portfolio Roles", description: "How to write a creative resume for design, UX, and content roles.", author: { "@type": "Organization", name: "Resume Helper AI" }, publisher: { "@type": "Organization", name: "Resume Helper AI" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </main>
  );
}
