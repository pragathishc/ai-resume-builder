import Link from "next/link";
import ScrollAnimationClient from "./components/ScrollAnimationClient";
import TemplatePreviews from "./components/TemplatePreviews";
export default function Home() {

  const features = [
    {
      icon: "✨",
      title: "AI-Powered Professional Summary",
      desc: "Enter your job title and skills, and our AI writes a compelling professional summary in seconds. Trained on thousands of successful resumes across industries.",
    },
    {
      icon: "🎯",
      title: "Smart Skill Suggestions",
      desc: "Our AI analyzes your target role and recommends the exact skills recruiters search for. Click to add them instantly — no guesswork, no missed keywords.",
    },
    {
      icon: "🤖",
      title: "ATS-Optimized Formatting",
      desc: "Every template uses clean headings, standard fonts, and single-column parsing so your resume passes Applicant Tracking Systems used by 99% of Fortune 500 companies.",
    },
    {
      icon: "🎨",
      title: "6 Industry-Specific Templates",
      desc: "From ATS-strict formats for corporate roles to UAE-compliant CVs for Dubai jobs — pick the template that matches your industry, career level, and target country.",
    },
    {
      icon: "📄",
      title: "Instant PDF Export",
      desc: "Download your finished resume as a print-ready PDF with one click. No watermarks, no branding, no limits on how many times you download.",
    },
    {
      icon: "🔓",
      title: "No Sign Up, No Paywall",
      desc: "Start building immediately. We never ask for your email, credit card, or account creation. Your resume is yours — we do not store your data on our servers.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Template",
      desc: "Browse six professionally designed resume templates. Each one is ATS-tested and optimized for different industries. Preview them all before you start — switch anytime without losing your data.",
    },
    {
      step: "2",
      title: "Add Your Details with AI Assistance",
      desc: "Fill in your experience, education, and skills. Stuck on your summary? Click 'Generate with AI' and get a recruiter-ready professional summary instantly. Need skill ideas? Our AI suggests role-specific skills you can add with one tap.",
    },
    {
      step: "3",
      title: "Download and Apply",
      desc: "Preview your resume in full screen, switch between templates to compare, and download as a clean PDF. No watermark, no sign-up wall, no paywall. Your resume is ready to send to employers immediately.",
    },
  ];

  const whoIsThisFor = [
    {
      title: "Fresh Graduates",
      desc: "Just finished your degree and writing your first resume? Our AI fills in the gaps — generating professional summaries and suggesting relevant skills even when you have limited work experience. The ATS Professional template is designed to highlight education, projects, and certifications.",
    },
    {
      title: "Career Changers",
      desc: "Switching industries is hard enough without worrying about your resume format. Our AI helps translate your existing skills into the language your new industry expects. Use the skill suggestion feature to discover transferable skills recruiters actually search for.",
    },
    {
      title: "Working Professionals",
      desc: "Need to update your resume quickly for a new opportunity? Import your details, let AI polish your summary, and download a formatted PDF in under five minutes. Compare templates side by side to find the best fit for your target role.",
    },
    {
      title: "International Job Seekers",
      desc: "Applying for jobs in the US, Canada, UK, Europe, UAE, or India? Our UAE CV template is MOHRE-compliant for Dubai jobs, Europe CV follows Europass standards, and ATS Professional matches North American hiring conventions.",
    },
  ];

  const faqs = [
    {
      q: "Is Resume Helper AI really free?",
      a: "Yes, Resume Helper AI is 100% free with no hidden charges. You can create unlimited resumes, use all six templates, generate AI summaries, get skill suggestions, and download as many PDFs as you need. There is no premium tier, no trial period, and no credit card required.",
    },
    {
      q: "Do I need to create an account or sign up?",
      a: "No. You can start building your resume the moment you open the page. We do not ask for your email address, phone number, or any registration. Your resume data stays in your browser and is never uploaded to our servers.",
    },
    {
      q: "Are the resume templates ATS-friendly?",
      a: "Absolutely. All six templates are designed to pass Applicant Tracking Systems used by major employers including those using Workday, Greenhouse, Lever, and Taleo. They use clean formatting, standard section headings, and readable fonts that ATS parsers handle without errors.",
    },
    {
      q: "How does the AI summary generator work?",
      a: "Enter your target job title and your key skills, then click 'Generate with AI.' Our system creates a tailored professional summary based on your input. The summary is fully editable — use it as a starting point and customize it to match your voice and experience.",
    },
    {
      q: "Can I switch templates after filling in my details?",
      a: "Yes. All your data is preserved when you switch templates. Click any template tab at the top of the builder to instantly preview your resume in a different design. This lets you compare layouts and pick the one that presents your experience best.",
    },
    {
      q: "What file format is the download?",
      a: "Your resume downloads as a PDF file. PDFs are the standard format accepted by employers and job boards worldwide. The downloaded file has no watermark, no Resume Helper AI branding, and is ready to submit directly to employers or upload to job portals.",
    },
    {
      q: "Which countries and resume formats do you support?",
      a: "Resume Helper AI supports resume formats used in the United States, Canada, United Kingdom, Europe, the Middle East, and India. We have a dedicated UAE CV template that is MOHRE-compliant with visa status and nationality fields required by Dubai employers.",
    },
    {
      q: "Is my personal data safe?",
      a: "Yes. Your resume data is processed entirely in your browser. We do not store your personal information, work history, or contact details on our servers. When you close the page, your data is gone. We never sell or share user information with third parties.",
    },
  ];

  // Template preview components
  const templatePreviews = [
    {
      name: "ATS Professional",
      href: "/resume-builder?template=ATS+Professional",
      badge: "Most Popular",
      badgeColor: "bg-blue-600",
      desc: "Single column, max ATS score",
      preview: (
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", padding: "10px", background: "#fff", height: "168px", overflow: "hidden" }}>
          <div style={{ borderBottom: "2px solid #1e3a5f", paddingBottom: "5px", marginBottom: "5px" }}>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#111" }}>Alex Morgan</div>
            <div style={{ fontSize: "8px", color: "#1e3a5f", fontWeight: "600" }}>Senior Software Engineer</div>
            <div style={{ fontSize: "6px", color: "#555", marginTop: "2px" }}>✉ alex@email.com · 📞 +1 555 123 4567 · 📍 New York, USA</div>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", borderBottom: "1px solid #eee", paddingBottom: "2px", marginBottom: "3px" }}>Professional Summary</div>
            <div style={{ fontSize: "6.5px", color: "#444", lineHeight: "1.4" }}>Experienced software engineer with 8+ years building scalable web applications used by millions of users.</div>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", borderBottom: "1px solid #eee", paddingBottom: "2px", marginBottom: "3px" }}>Work Experience</div>
            <div style={{ fontSize: "7px", fontWeight: "600", color: "#111" }}>Google LLC — Senior Engineer (2020–Present)</div>
            <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Led team of 8 engineers delivering 3 major products</div>
            <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Reduced page load time by 40% via optimization</div>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", borderBottom: "1px solid #eee", paddingBottom: "2px", marginBottom: "3px" }}>Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
              {["React", "Node.js", "Python", "AWS", "SQL", "TypeScript"].map(s => (
                <span key={s} style={{ background: "#f0f4ff", border: "1px solid #dde", borderRadius: "2px", padding: "1px 4px", fontSize: "6px" }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", borderBottom: "1px solid #eee", paddingBottom: "2px", marginBottom: "3px" }}>Education</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: "6.5px", fontWeight: "600", color: "#111" }}>B.S. Computer Science — MIT</div>
              <div style={{ fontSize: "6px", color: "#888" }}>2016</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Modern Tech",
      href: "/resume-builder?template=Modern+Tech",
      badge: "For Tech",
      badgeColor: "bg-purple-600",
      desc: "Sidebar layout, skills-first",
      preview: (
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden", display: "flex" }}>
          <div style={{ width: "36%", background: "#1e3a5f", color: "#fff", padding: "8px 7px" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", border: "2px solid rgba(255,255,255,0.3)" }}>AM</div>
            <div style={{ fontSize: "7.5px", fontWeight: "700", textAlign: "center", marginBottom: "1px" }}>Alex Morgan</div>
            <div style={{ fontSize: "6px", textAlign: "center", color: "rgba(255,255,255,0.75)", marginBottom: "7px" }}>Software Engineer</div>
            <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "4px", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "2px" }}>Contact</div>
            <div style={{ fontSize: "6px", marginBottom: "2px" }}>✉ alex@email.com</div>
            <div style={{ fontSize: "6px", marginBottom: "2px" }}>📞 +1 555 123 4567</div>
            <div style={{ fontSize: "6px", marginBottom: "7px" }}>📍 New York, USA</div>
            <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "4px", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "2px" }}>Skills</div>
            {["React", "Node.js", "Python", "AWS", "SQL"].map(s => (
              <div key={s} style={{ fontSize: "6px", marginBottom: "3px", display: "flex", alignItems: "center", gap: "3px" }}>
                <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#60a5fa", flexShrink: 0 }} />{s}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, padding: "8px 8px" }}>
            <div style={{ borderBottom: "2px solid #1e3a5f", paddingBottom: "5px", marginBottom: "5px" }}>
              <div style={{ fontSize: "11px", fontWeight: "700", color: "#1e3a5f" }}>Alex Morgan</div>
              <div style={{ fontSize: "7px", color: "#64748b", fontWeight: "600" }}>Senior Software Engineer</div>
            </div>
            <div style={{ fontSize: "6.5px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", marginBottom: "3px" }}>Professional Summary</div>
            <div style={{ fontSize: "6px", color: "#444", lineHeight: "1.4", marginBottom: "5px" }}>Engineer with 8+ years building scalable applications for global teams.</div>
            <div style={{ fontSize: "6.5px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", borderBottom: "1px solid #e2e8f0", paddingBottom: "2px", marginBottom: "3px" }}>Work Experience</div>
            <div style={{ fontSize: "6.5px", fontWeight: "600", color: "#1e3a5f" }}>Google — Senior Engineer (2020–Present)</div>
            <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Led 8-person engineering team</div>
            <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Reduced load time by 40%</div>
          </div>
        </div>
      ),
    },
    {
      name: "Executive",
      href: "/resume-builder?template=Executive",
      badge: "C-Suite",
      badgeColor: "bg-amber-600",
      desc: "Gold accents, C-suite style",
      preview: (
        <div style={{ fontFamily: "Georgia, serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
          <div style={{ height: "3px", background: "linear-gradient(90deg, #92700a, #c9a84c)" }} />
          <div style={{ padding: "8px 10px 6px", borderBottom: "2px solid #92700a", background: "#fdf8ee" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#111", letterSpacing: "0.5px" }}>Alexandra Morgan</div>
                <div style={{ fontSize: "8px", color: "#92700a", fontStyle: "italic", fontWeight: "600" }}>Chief Technology Officer</div>
                <div style={{ fontSize: "6px", color: "#555", marginTop: "3px" }}>✉ alex@corp.com · 📞 +1 555 123 4567 · 🔗 linkedin.com/in/alex</div>
              </div>
            </div>
          </div>
          <div style={{ padding: "6px 10px" }}>
            <div style={{ background: "#fdf8ee", borderLeft: "3px solid #92700a", padding: "4px 7px", marginBottom: "5px" }}>
              <div style={{ fontSize: "6.5px", fontStyle: "italic", color: "#333", lineHeight: "1.4" }}>Visionary technology leader with 15+ years driving digital transformation across Fortune 500 companies generating $2B+ revenue.</div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#92700a", borderBottom: "1px solid #e8d5a0", paddingBottom: "2px", marginBottom: "3px" }}>Career History</div>
                <div style={{ fontSize: "7px", fontWeight: "700", color: "#111" }}>Google Inc. — VP Engineering</div>
                <div style={{ fontSize: "6px", color: "#666" }}>2018 – Present</div>
                <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Managed $50M annual tech budget</div>
                <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Led 200+ person engineering org</div>
              </div>
              <div style={{ flex: "0 0 38%" }}>
                <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#92700a", borderBottom: "1px solid #e8d5a0", paddingBottom: "2px", marginBottom: "3px" }}>Core Skills</div>
                {["Strategy", "Leadership", "P&L", "M&A", "Cloud"].map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                    <div style={{ width: "3px", height: "3px", background: "#92700a", flexShrink: 0 }} />
                    <span style={{ fontSize: "6px", color: "#333" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Creative",
      href: "/resume-builder?template=Creative",
      badge: "For Designers",
      badgeColor: "bg-pink-600",
      desc: "Bold colors, portfolio-ready",
      preview: (
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden", display: "flex" }}>
          <div style={{ width: "35%", background: "#be185d", color: "#fff", padding: "8px 7px" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 5px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", border: "2px solid rgba(255,255,255,0.4)" }}>AM</div>
            <div style={{ fontSize: "7.5px", fontWeight: "700", textAlign: "center", marginBottom: "1px" }}>Alex Morgan</div>
            <div style={{ fontSize: "6px", textAlign: "center", color: "rgba(255,255,255,0.8)", marginBottom: "7px", fontStyle: "italic" }}>UX/UI Designer</div>
            <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "3px", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "2px" }}>Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2px", marginBottom: "6px" }}>
              {["Figma", "UX", "Prototyping", "CSS", "React"].map(s => (
                <span key={s} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", padding: "1px 4px", fontSize: "5.5px" }}>{s}</span>
              ))}
            </div>
            <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "3px", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "2px" }}>Education</div>
            <div style={{ fontSize: "6px" }}>B.Des — NIFT</div>
            <div style={{ fontSize: "5.5px", color: "rgba(255,255,255,0.7)" }}>2018</div>
          </div>
          <div style={{ flex: 1, padding: "8px 8px" }}>
            <div style={{ height: "2px", background: "linear-gradient(90deg, #be185d, #fbcfe8, transparent)", marginBottom: "6px", borderRadius: "1px" }} />
            <div style={{ fontSize: "6.5px", fontWeight: "700", textTransform: "uppercase", color: "#be185d", marginBottom: "4px" }}>About Me</div>
            <div style={{ fontSize: "6px", color: "#444", lineHeight: "1.4", marginBottom: "5px" }}>Creative UX designer with 6 years crafting beautiful digital experiences for global brands.</div>
            <div style={{ fontSize: "6.5px", fontWeight: "700", textTransform: "uppercase", color: "#be185d", borderBottom: "2px solid #fbcfe8", paddingBottom: "2px", marginBottom: "3px" }}>Experience</div>
            <div style={{ fontSize: "6.5px", fontWeight: "600", color: "#be185d" }}>Airbnb — Sr. UX Designer (2021–Present)</div>
            <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Redesigned core booking flow +32% CVR</div>
            <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Led design system for 50+ components</div>
            <div style={{ background: "#fdf2f8", borderLeft: "2px solid #be185d", padding: "4px 6px", marginTop: "5px", borderRadius: "0 3px 3px 0" }}>
              <div style={{ fontSize: "6.5px", fontWeight: "700", color: "#be185d" }}>E-Commerce Redesign</div>
              <div style={{ fontSize: "6px", color: "#444" }}>Stack: Figma, React, Framer</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Europe CV",
      href: "/resume-builder?template=Europe+CV",
      badge: "EU/UK/UAE",
      badgeColor: "bg-green-600",
      desc: "Europass format, photo included",
      preview: (
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
          <div style={{ background: "#15803d", padding: "8px 10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#fff" }}>Alex Morgan</div>
                <div style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.85)", fontWeight: "600" }}>Product Manager</div>
                <div style={{ fontSize: "6px", color: "rgba(255,255,255,0.8)", marginTop: "3px" }}>✉ alex@email.com · 📞 +44 7700 900123</div>
                <div style={{ fontSize: "6px", color: "rgba(255,255,255,0.8)" }}>📍 London, UK · 🔗 linkedin.com/in/alex</div>
              </div>
              <div style={{ width: "28px", height: "34px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: "2px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>👤</div>
            </div>
          </div>
          <div style={{ padding: "6px 10px" }}>
            <div style={{ display: "flex", gap: "14px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
                  <div style={{ width: "3px", height: "12px", background: "#15803d", borderRadius: "1px" }} />
                  <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#15803d" }}>Experience</div>
                </div>
                <div style={{ display: "flex", gap: "5px", marginBottom: "3px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#15803d", flexShrink: 0, marginTop: "1px" }} />
                  <div>
                    <div style={{ fontSize: "6.5px", fontWeight: "700" }}>Amazon — Product Manager</div>
                    <div style={{ fontSize: "6px", color: "#666" }}>2021 – Present</div>
                    <div style={{ fontSize: "6px", color: "#444" }}>• Launched 3 products, €2M revenue</div>
                    <div style={{ fontSize: "6px", color: "#444" }}>• Managed cross-functional team of 15</div>
                  </div>
                </div>
              </div>
              <div style={{ flex: "0 0 36%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
                  <div style={{ width: "3px", height: "12px", background: "#15803d", borderRadius: "1px" }} />
                  <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#15803d" }}>Skills</div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                  {["Strategy", "Analytics", "Agile", "SQL", "Figma"].map(s => (
                    <span key={s} style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "2px", padding: "1px 4px", fontSize: "5.5px", color: "#15803d", fontWeight: "600" }}>{s}</span>
                  ))}
                </div>
                <div style={{ marginTop: "5px", fontSize: "6px", color: "#444" }}>🗣 English (C2) · French (B2)</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "UAE CV",
      href: "/resume-builder?template=UAE+CV",
      badge: "🇦🇪 Dubai",
      badgeColor: "bg-yellow-600",
      desc: "MOHRE compliant, Dubai Gold",
      preview: (
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
          <div style={{ height: "3px", background: "linear-gradient(90deg, #b8860b, #d4a84b, #b8860b)" }} />
          <div style={{ padding: "7px 10px 6px", background: "rgba(184,134,11,0.07)", borderBottom: "2px solid #b8860b" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#111" }}>Ahmed Al Rashid</div>
                <div style={{ fontSize: "7.5px", color: "#b8860b", fontWeight: "700" }}>Senior Finance Manager</div>
                <div style={{ fontSize: "6px", color: "#555", marginTop: "2px" }}>✉ ahmed@email.com · 📞 +971 50 123 4567 · 📍 Dubai, UAE</div>
                <div style={{ display: "flex", gap: "3px", marginTop: "3px", flexWrap: "wrap" }}>
                  <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 5px", borderRadius: "2px", fontWeight: "600" }}>🌍 Indian</span>
                  <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 5px", borderRadius: "2px", fontWeight: "600" }}>📋 Employment Visa</span>
                  <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 5px", borderRadius: "2px", fontWeight: "600" }}>⏱ 1 Month Notice</span>
                  <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 5px", borderRadius: "2px", fontWeight: "600" }}>🚗 UAE License</span>
                </div>
              </div>
              <div style={{ width: "26px", height: "32px", border: "2px solid #b8860b", borderRadius: "2px", background: "rgba(184,134,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>👤</div>
            </div>
          </div>
          <div style={{ padding: "5px 10px" }}>
            <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#b8860b", marginBottom: "3px" }}>Work Experience</div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "5px", marginBottom: "4px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b8860b", flexShrink: 0, marginTop: "1px" }} />
              <div>
                <div style={{ fontSize: "6.5px", fontWeight: "700" }}>Emirates NBD — Finance Manager (2020–Present)</div>
                <div style={{ fontSize: "6px", color: "#b8860b", fontStyle: "italic" }}>Largest bank in UAE · AED 200B+ assets</div>
                <div style={{ fontSize: "6px", color: "#444" }}>• Managed AED 50M investment portfolio</div>
                <div style={{ fontSize: "6px", color: "#444" }}>• Reduced operational costs by 18%</div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2px", marginTop: "3px" }}>
              {["ACCA", "CFA", "Excel", "SAP", "Risk Mgmt"].map(s => (
                <span key={s} style={{ background: "rgba(184,134,11,0.08)", border: "1px solid rgba(184,134,11,0.25)", borderRadius: "2px", padding: "1px 4px", fontSize: "5.5px", color: "#333" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <ScrollAnimationClient />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Resume Helper AI
          </Link>
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#templates" className="hover:text-gray-900 transition">Templates</a>
            <a href="#how" className="hover:text-gray-900 transition">How it works</a>
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
          </nav>
          <Link href="/resume-builder">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-violet-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-scroll">
              <div className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
                Free Online Resume Builder — No Sign Up Required
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free AI Resume Builder — No Sign Up, No Paywall
              </h1>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Build a professional, ATS-friendly resume in minutes with AI-powered summaries and smart skill suggestions. Choose from six expert-designed templates, fill in your details, and download a clean PDF — completely free.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                No account creation. No email required. No credit card. No watermark on your download. Resume Helper AI is the free AI resume builder that actually means free.
              </p>
              <Link href="/resume-builder">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg">
                  Build Your Resume Free
                </button>
              </Link>
            </div>
            <div className="fade-in-scroll md:flex justify-center hidden">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm transform hover:shadow-3xl transition-shadow duration-300">
                <div className="flex">
                  <div className="w-1/3 bg-gray-900 text-white p-6 flex flex-col">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 mx-auto mb-4 flex-shrink-0" />
                    <h3 className="text-sm font-bold mb-6 text-center">Contact</h3>
                    <p className="text-xs text-gray-300 mb-3">alex@email.com</p>
                    <p className="text-xs text-gray-300 mb-6">+1 (555) 123-4567</p>
                    <h3 className="text-sm font-bold mb-2">Profile</h3>
                    <p className="text-xs text-gray-300 mb-6 leading-tight">Product Designer with 5+ years creating user-centered experiences.</p>
                    <h3 className="text-sm font-bold mb-2">Languages</h3>
                    <p className="text-xs text-gray-300">English, Spanish</p>
                  </div>
                  <div className="w-2/3 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Alex Morgan</h2>
                    <p className="text-sm text-gray-600 mb-4">Product Designer</p>
                    <div className="mb-4">
                      <h3 className="text-xs font-bold text-gray-900 mb-2">Experience</h3>
                      <p className="text-xs text-gray-700 mb-2"><strong>Sr. Product Designer</strong></p>
                      <p className="text-xs text-gray-600">2022 - Present</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-xs font-bold text-gray-900 mb-2">Education</h3>
                      <p className="text-xs text-gray-700"><strong>B.A. Design</strong></p>
                      <p className="text-xs text-gray-600">University · 2019</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 mb-2">Skills</h3>
                      <p className="text-xs text-gray-700">Figma, UX Research, Prototyping</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="fade-in-scroll">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="font-semibold text-gray-900 mb-1">100% Free, No Hidden Costs</h3>
              <p className="text-sm text-gray-600">No credit card, no trial period, no premium tier. Build unlimited resumes at zero cost forever.</p>
            </div>
            <div className="fade-in-scroll">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-1">Your Data Stays Private</h3>
              <p className="text-sm text-gray-600">Resume data is processed in your browser. We never store, sell, or share your personal information.</p>
            </div>
            <div className="fade-in-scroll">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-1">ATS-Tested Templates</h3>
              <p className="text-sm text-gray-600">Six professionally designed templates tested against Workday, Greenhouse, Lever, and other major ATS platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space 1 */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
          <p className="text-sm font-semibold">Advertisement</p>
        </div>
      </section>

      {/* What Is a Free AI Resume Builder */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 fade-in-scroll">
            What Is a Free AI Resume Builder?
          </h2>
          <div className="fade-in-scroll space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>A free AI resume builder is an online tool that uses artificial intelligence to help you create a professional resume without paying for subscriptions or premium features. Unlike traditional resume builders that charge for PDF downloads or hide AI features behind a paywall, a genuinely free AI resume builder gives you full access to templates, AI writing assistance, and export options at no cost.</p>
            <p>Resume Helper AI is built on this principle. Most resume builders advertise as &ldquo;free&rdquo; but require you to sign up with an email, lock your PDF download behind a $20-per-month subscription, or add a watermark to your finished document. We do none of that. You open the page, build your resume, use AI to generate your professional summary and skills, and download a clean PDF — all without creating an account.</p>
            <p>Our AI analyzes your target job title and current skills to generate recruiter-ready professional summaries and suggest role-specific skills that improve your chances with Applicant Tracking Systems. The result is a resume that reads like it was written by a career coach, formatted in a layout that passes automated screening — and it costs you nothing.</p>
          </div>
        </div>
      </section>

      {/* Templates Showcase — Real Previews */}
      <section id="templates" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 fade-in-scroll">
            6 Professional Resume Templates
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto fade-in-scroll">
            Every template is tested against real Applicant Tracking Systems. Pick the design that matches your industry and career level — switch between them anytime without re-entering your information.
          </p>
          <TemplatePreviews /
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 fade-in-scroll">
            How to Build a Resume with AI in 3 Steps
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto fade-in-scroll">
            Go from blank page to a polished, ATS-optimized resume in under five minutes. No sign up needed — just open the builder and start.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="fade-in-scroll bg-gray-50 rounded-lg p-8 border border-gray-200" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space 2 */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
          <p className="text-sm font-semibold">Advertisement</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 fade-in-scroll">
            Why Job Seekers Choose Resume Helper AI
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto fade-in-scroll">
            Other resume builders charge $20 or more per month for features we offer free. Here is what you get without paying or signing up.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="fade-in-scroll bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-md transition" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 fade-in-scroll">
            Who Is This Resume Builder For?
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto fade-in-scroll">
            Whether you are writing your first resume or updating one for a senior role, our free AI resume builder adapts to your career stage and target market.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {whoIsThisFor.map((item, idx) => (
              <div key={idx} className="fade-in-scroll bg-gray-50 border border-gray-200 rounded-lg p-8" style={{ transitionDelay: `${idx * 100}ms` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 fade-in-scroll">
            What Is ATS and Why Does Your Resume Need It?
          </h2>
          <div className="fade-in-scroll space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>An Applicant Tracking System (ATS) is software that employers use to filter resumes before a human recruiter ever sees them. Most large companies, and many mid-size ones, use platforms like Workday, Greenhouse, Lever, or Taleo to automatically scan and rank incoming applications. If your resume uses complex formatting, tables, images in the wrong places, or non-standard section headings, the ATS may fail to parse your content — and your application gets rejected before anyone reads it.</p>
            <p>Resume Helper AI solves this by giving you templates that are designed from the ground up to be ATS-compatible. Every template uses standard section headings like &ldquo;Experience,&rdquo; &ldquo;Education,&rdquo; and &ldquo;Skills&rdquo; that ATS parsers expect. The layouts use clean single-column or structured two-column formatting that renders correctly across every major ATS platform. And our AI skill suggestion feature helps you include the exact keywords recruiters and their ATS systems search for.</p>
            <p>The result: your resume gets through automated screening and onto a recruiter&apos;s desk, where your experience and qualifications can speak for themselves.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 fade-in-scroll">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="fade-in-scroll bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-gray-300 cursor-pointer transition group" style={{ transitionDelay: `${idx * 50}ms` }}>
                <summary className="font-semibold text-lg text-gray-900 group-hover:text-gray-700 transition flex justify-between items-center">
                  {faq.q}
                  <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center fade-in-scroll">
        <div className="bg-gray-900 rounded-lg p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Next Interview Starts with a Better Resume</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands of job seekers using Resume Helper AI to build professional resumes — free, no sign up, no paywall, no watermark.</p>
          <Link href="/resume-builder">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg">
              Create Your Resume Now
            </button>
          </Link>
        </div>
      </section>

      {/* Ad Space 3 */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
          <p className="text-sm font-semibold">Advertisement</p>
        </div>
      </section>
    </main>
  );
}
