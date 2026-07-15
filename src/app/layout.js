import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Basic
  title: {
    default: "Free AI Resume Builder — No Sign Up, No Paywall | Resume Helper AI",
    template: "%s | Resume Helper AI",
  },
  description:
    "Build a professional, ATS-friendly resume in minutes with AI-powered summaries and smart skill suggestions. 9 templates including UAE CV. Free, no sign up, no watermark.",

  // Canonical
  metadataBase: new URL("https://www.resumehelperai.com"),
  alternates: {
    canonical: "/",
  },

  // Keywords
  keywords: [
    "free AI resume builder",
    "free resume builder no sign up",
    "ATS resume builder free",
    "AI resume generator",
    "resume builder no watermark",
    "free resume maker",
    "UAE CV builder",
    "resume builder Dubai",
    "professional resume builder",
    "AI resume writer free",
  ],

  // Authors
  authors: [{ name: "Resume Helper AI", url: "https://www.resumehelperai.com" }],
  creator: "Resume Helper AI",
  publisher: "Resume Helper AI",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.resumehelperai.com",
    siteName: "Resume Helper AI",
    title: "Free AI Resume Builder — No Sign Up, No Paywall",
    description:
      "Build a professional, ATS-friendly resume in minutes with AI-powered summaries. 9 templates, free PDF download, no watermark, no sign up required.",
    images: [
      {
        url: "https://www.resumehelperai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resume Helper AI — Free AI Resume Builder",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Free AI Resume Builder — No Sign Up, No Paywall",
    description:
      "Build a professional ATS-friendly resume in minutes. AI summaries, 9 templates, free PDF. No sign up required.",
    images: ["https://www.resumehelperai.com/og-image.png"],
    creator: "@resumehelperai",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // Verification
  verification: {
    google: "google-site-verification=", // add your verification code here
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8095568223295307"
          crossOrigin="anonymous"
        />
      </head>
      <GoogleAnalytics gaId="G-GZQE8ME4CL" />
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Resume Helper AI</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Build a professional, ATS-friendly resume for free. AI-powered summaries,
                  skill suggestions, and instant PDF download — no sign-up required.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="hover:text-white transition">Home</a></li>
                  <li><a href="/resume-builder" className="hover:text-white transition">Resume Builder</a></li>
                  <li><a href="/blog" className="hover:text-white transition">Resume Guides</a></li>
                  <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                  <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Popular Guides</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/blog/ats-resume-format-2026" className="hover:text-white transition">ATS Resume Format</a></li>
                  <li><a href="/blog/resume-summary-examples" className="hover:text-white transition">Writing a Summary</a></li>
                  <li><a href="/blog/resume-mistakes-to-avoid" className="hover:text-white transition">12 Resume Mistakes</a></li>
                  <li><a href="/blog/uae-cv-format-guide" className="hover:text-white transition">UAE CV Format</a></li>
                  <li><a href="/blog/nursing-resume-guide" className="hover:text-white transition">Nursing Resume</a></li>
                  <li><a href="/blog/cover-letter-guide" className="hover:text-white transition">Cover Letters</a></li>
                  <li>
                    <a href="/blog" className="text-indigo-400 hover:text-indigo-300 transition font-medium">
                      View all 20 guides →
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Resume Helper AI. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
