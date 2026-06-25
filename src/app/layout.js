import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resume Helper AI — Free AI Resume Builder",
  description: "Build a professional, ATS-friendly resume for free with AI-powered summaries and skill suggestions. 5 templates, instant PDF download, no sign-up required.",
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
            <div className="grid md:grid-cols-3 gap-8">

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
                  <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                  <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
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

            <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Resume Helper AI. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
