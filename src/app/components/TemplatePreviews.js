"use client";

import Link from "next/link";

const templatePreviews = [
  {
    name: "ATS Professional",
    href: "/resume-builder?template=ATS+Professional",
    badge: "Most Popular",
    badgeColor: "bg-blue-600",
    desc: "Single column, max ATS score",
    accentColor: "#1e3a5f",
  },
  {
    name: "Modern Tech",
    href: "/resume-builder?template=Modern+Tech",
    badge: "For Tech",
    badgeColor: "bg-purple-600",
    desc: "Sidebar layout, skills-first",
    accentColor: "#4338ca",
  },
  {
    name: "Executive",
    href: "/resume-builder?template=Executive",
    badge: "C-Suite",
    badgeColor: "bg-amber-600",
    desc: "Gold accents, C-suite style",
    accentColor: "#92700a",
  },
  {
    name: "Creative",
    href: "/resume-builder?template=Creative",
    badge: "For Designers",
    badgeColor: "bg-pink-600",
    desc: "Bold colors, portfolio-ready",
    accentColor: "#be185d",
  },
  {
    name: "Europe CV",
    href: "/resume-builder?template=Europe+CV",
    badge: "EU/UK/UAE",
    badgeColor: "bg-green-600",
    desc: "Europass format, photo included",
    accentColor: "#15803d",
  },
  {
    name: "UAE CV",
    href: "/resume-builder?template=UAE+CV",
    badge: "🇦🇪 Dubai",
    badgeColor: "bg-yellow-600",
    desc: "MOHRE compliant, Dubai Gold",
    accentColor: "#b8860b",
  },
];

function ATSThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", padding: "10px", background: "#fff", height: "168px", overflow: "hidden" }}>
      <div style={{ borderBottom: "2px solid #1e3a5f", paddingBottom: "5px", marginBottom: "5px" }}>
        <div style={{ fontSize: "12px", fontWeight: "700", color: "#111" }}>Alex Morgan</div>
        <div style={{ fontSize: "8px", color: "#1e3a5f", fontWeight: "600" }}>Senior Software Engineer</div>
        <div style={{ fontSize: "6px", color: "#555", marginTop: "2px" }}>✉ alex@email.com · 📞 +1 555 123 · 📍 New York</div>
      </div>
      <div style={{ marginBottom: "5px" }}>
        <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", borderBottom: "1px solid #eee", paddingBottom: "2px", marginBottom: "3px" }}>Professional Summary</div>
        <div style={{ fontSize: "6.5px", color: "#444", lineHeight: "1.4" }}>Experienced engineer with 8+ years building scalable web applications used by millions of users globally.</div>
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
  );
}

function ModernTechThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden", display: "flex" }}>
      <div style={{ width: "36%", background: "#1e3a5f", color: "#fff", padding: "8px 7px" }}>
        <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", border: "2px solid rgba(255,255,255,0.3)" }}>AM</div>
        <div style={{ fontSize: "7.5px", fontWeight: "700", textAlign: "center", marginBottom: "1px" }}>Alex Morgan</div>
        <div style={{ fontSize: "6px", textAlign: "center", color: "rgba(255,255,255,0.75)", marginBottom: "7px" }}>Software Engineer</div>
        <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "3px", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "2px" }}>Contact</div>
        <div style={{ fontSize: "6px", marginBottom: "2px" }}>✉ alex@email.com</div>
        <div style={{ fontSize: "6px", marginBottom: "7px" }}>📍 New York, USA</div>
        <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "4px", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "2px" }}>Skills</div>
        {["React", "Node.js", "Python", "AWS"].map(s => (
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
        <div style={{ fontSize: "6.5px", color: "#444", lineHeight: "1.4", marginBottom: "5px" }}>Engineer with 8+ years building scalable applications for global teams worldwide.</div>
        <div style={{ fontSize: "6.5px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", borderBottom: "1px solid #e2e8f0", paddingBottom: "2px", marginBottom: "3px" }}>Work Experience</div>
        <div style={{ fontSize: "6.5px", fontWeight: "600", color: "#1e3a5f" }}>Google — Senior Engineer (2020–Present)</div>
        <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Led 8-person engineering team</div>
        <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Reduced load time by 40%</div>
      </div>
    </div>
  );
}

function ExecutiveThumbnail() {
  return (
    <div style={{ fontFamily: "Georgia, serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
      <div style={{ height: "3px", background: "linear-gradient(90deg, #92700a, #c9a84c)" }} />
      <div style={{ padding: "8px 10px 6px", borderBottom: "2px solid #92700a", background: "#fdf8ee" }}>
        <div style={{ fontSize: "13px", fontWeight: "700", color: "#111", letterSpacing: "0.5px" }}>Alexandra Morgan</div>
        <div style={{ fontSize: "8px", color: "#92700a", fontStyle: "italic", fontWeight: "600" }}>Chief Technology Officer</div>
        <div style={{ fontSize: "6px", color: "#555", marginTop: "3px" }}>✉ alex@corp.com · 📞 +1 555 123 4567 · 🔗 linkedin.com/in/alex</div>
      </div>
      <div style={{ padding: "6px 10px" }}>
        <div style={{ background: "#fdf8ee", borderLeft: "3px solid #92700a", padding: "4px 7px", marginBottom: "5px" }}>
          <div style={{ fontSize: "6.5px", fontStyle: "italic", color: "#333", lineHeight: "1.4" }}>Visionary technology leader with 15+ years driving digital transformation across Fortune 500 companies.</div>
        </div>
        <div style={{ display: "flex", gap: "14px" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#92700a", borderBottom: "1px solid #e8d5a0", paddingBottom: "2px", marginBottom: "3px" }}>Career History</div>
            <div style={{ fontSize: "7px", fontWeight: "700", color: "#111" }}>Google Inc. — VP Engineering</div>
            <div style={{ fontSize: "6px", color: "#666", marginBottom: "2px" }}>2018 – Present</div>
            <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Managed $50M annual tech budget</div>
            <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Led 200+ person engineering org</div>
          </div>
          <div style={{ flex: "0 0 36%" }}>
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
  );
}

function CreativeThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden", display: "flex" }}>
      <div style={{ width: "35%", background: "#be185d", color: "#fff", padding: "8px 7px" }}>
        <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 5px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", border: "2px solid rgba(255,255,255,0.4)" }}>AM</div>
        <div style={{ fontSize: "7.5px", fontWeight: "700", textAlign: "center", marginBottom: "1px" }}>Alex Morgan</div>
        <div style={{ fontSize: "6px", textAlign: "center", color: "rgba(255,255,255,0.8)", marginBottom: "7px", fontStyle: "italic" }}>UX/UI Designer</div>
        <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "3px", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "2px" }}>Skills</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2px", marginBottom: "6px" }}>
          {["Figma", "UX", "CSS", "React"].map(s => (
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
        <div style={{ fontSize: "6.5px", fontWeight: "600", color: "#be185d" }}>Airbnb — Sr. UX Designer (2021–Now)</div>
        <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Redesigned booking flow +32% CVR</div>
        <div style={{ background: "#fdf2f8", borderLeft: "2px solid #be185d", padding: "4px 6px", marginTop: "5px", borderRadius: "0 3px 3px 0" }}>
          <div style={{ fontSize: "6.5px", fontWeight: "700", color: "#be185d" }}>E-Commerce Redesign</div>
          <div style={{ fontSize: "6px", color: "#444" }}>Stack: Figma, React, Framer</div>
        </div>
      </div>
    </div>
  );
}

function EuropeThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
      <div style={{ background: "#15803d", padding: "8px 10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#fff" }}>Alex Morgan</div>
            <div style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.85)", fontWeight: "600" }}>Product Manager</div>
            <div style={{ fontSize: "6px", color: "rgba(255,255,255,0.8)", marginTop: "3px" }}>✉ alex@email.com · 📍 London, UK</div>
          </div>
          <div style={{ width: "28px", height: "34px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: "2px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>👤</div>
        </div>
      </div>
      <div style={{ padding: "6px 10px" }}>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "3px" }}>
              <div style={{ width: "3px", height: "12px", background: "#15803d", borderRadius: "1px" }} />
              <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#15803d" }}>Experience</div>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#15803d", flexShrink: 0, marginTop: "1px" }} />
              <div>
                <div style={{ fontSize: "6.5px", fontWeight: "700" }}>Amazon — Product Manager</div>
                <div style={{ fontSize: "6px", color: "#666" }}>2021 – Present</div>
                <div style={{ fontSize: "6px", color: "#444" }}>• Launched 3 products, €2M revenue</div>
              </div>
            </div>
          </div>
          <div style={{ flex: "0 0 36%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "3px" }}>
              <div style={{ width: "3px", height: "12px", background: "#15803d", borderRadius: "1px" }} />
              <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#15803d" }}>Skills</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2px", marginBottom: "5px" }}>
              {["Strategy", "Agile", "SQL", "Figma"].map(s => (
                <span key={s} style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "2px", padding: "1px 4px", fontSize: "5.5px", color: "#15803d", fontWeight: "600" }}>{s}</span>
              ))}
            </div>
            <div style={{ fontSize: "6px", color: "#444" }}>🗣 English · French</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UAEThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
      <div style={{ height: "3px", background: "linear-gradient(90deg, #b8860b, #d4a84b, #b8860b)" }} />
      <div style={{ padding: "7px 10px 6px", background: "rgba(184,134,11,0.07)", borderBottom: "2px solid #b8860b" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: "700", color: "#111" }}>Ahmed Al Rashid</div>
            <div style={{ fontSize: "7.5px", color: "#b8860b", fontWeight: "700" }}>Senior Finance Manager</div>
            <div style={{ fontSize: "6px", color: "#555", marginTop: "2px" }}>✉ ahmed@email.com · 📞 +971 50 123 4567</div>
            <div style={{ display: "flex", gap: "3px", marginTop: "3px", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 5px", borderRadius: "2px", fontWeight: "600" }}>🌍 Indian</span>
              <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 5px", borderRadius: "2px", fontWeight: "600" }}>📋 Employment Visa</span>
              <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 5px", borderRadius: "2px", fontWeight: "600" }}>⏱ 1 Month Notice</span>
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
            <div style={{ fontSize: "6.5px", fontWeight: "700" }}>Emirates NBD — Finance Manager</div>
            <div style={{ fontSize: "6px", color: "#b8860b", fontStyle: "italic" }}>Largest bank in UAE · AED 200B+ assets</div>
            <div style={{ fontSize: "6px", color: "#444" }}>• Managed AED 50M investment portfolio</div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
          {["ACCA", "CFA", "SAP", "Risk Mgmt"].map(s => (
            <span key={s} style={{ background: "rgba(184,134,11,0.08)", border: "1px solid rgba(184,134,11,0.25)", borderRadius: "2px", padding: "1px 4px", fontSize: "5.5px", color: "#333" }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const thumbnailComponents = [
  ATSThumbnail,
  ModernTechThumbnail,
  ExecutiveThumbnail,
  CreativeThumbnail,
  EuropeThumbnail,
  UAEThumbnail,
];

export default function TemplatePreviews() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {templatePreviews.map((template, idx) => {
        const ThumbnailComponent = thumbnailComponents[idx];
        return (
          <Link key={template.name} href={template.href}>
            <div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Real Resume Preview Thumbnail */}
              <div className="border-b border-gray-100 overflow-hidden relative">
                <ThumbnailComponent />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-xs opacity-0 group-hover:opacity-100 transition-all bg-gray-900 bg-opacity-80 px-3 py-1.5 rounded-full">
                    Use Template →
                  </span>
                </div>
              </div>
              {/* Card footer */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-xs text-gray-900 group-hover:text-gray-700">
                    {template.name}
                  </h3>
                  <span className={`text-white text-xs px-1.5 py-0.5 rounded-full ${template.badgeColor} whitespace-nowrap`} style={{ fontSize: "9px" }}>
                    {template.badge}
                  </span>
                </div>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: "10px" }}>
                  {template.desc}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
