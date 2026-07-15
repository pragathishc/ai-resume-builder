const BASE = "https://www.resumehelperai.com";

const blogSlugs = [
  "ats-resume-format-2026",
  "resume-summary-examples",
  "resume-mistakes-to-avoid",
  "resume-length-guide",
  "fresher-resume-no-experience",
  "career-change-resume",
  "executive-resume-guide",
  "employment-gaps-resume",
  "nursing-resume-guide",
  "software-engineer-resume-guide",
  "trades-resume-guide",
  "creative-resume-guide",
  "uae-cv-format-guide",
  "europe-cv-guide",
  "quantify-resume-achievements",
  "resume-keywords-guide",
  "tailor-resume-for-each-job",
  "cover-letter-guide",
  "how-to-make-a-resume-with-ai",
  "free-resume-builder-vs-paid",
];

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/resume-builder`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogSlugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
