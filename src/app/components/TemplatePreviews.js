"use client";

import Link from "next/link";

const templatePreviews = [
  { name: "ATS Professional", href: "/resume-builder?template=ATS+Professional", badge: "Most Popular", badgeColor: "bg-blue-600", desc: "Single column, max ATS score" },
  { name: "Modern Tech", href: "/resume-builder?template=Modern+Tech", badge: "For Tech", badgeColor: "bg-purple-600", desc: "Sidebar layout, skills-first" },
  { name: "Executive", href: "/resume-builder?template=Executive", badge: "C-Suite", badgeColor: "bg-amber-600", desc: "Gold accents, senior style" },
  { name: "Creative", href: "/resume-builder?template=Creative", badge: "Designers", badgeColor: "bg-pink-600", desc: "Bold colors, portfolio-ready" },
  { name: "Europe CV", href: "/resume-builder?template=Europe+CV", badge: "EU/UK", badgeColor: "bg-green-600", desc: "Europass, photo included" },
  { name: "UAE CV", href: "/resume-builder?template=UAE+CV", badge: "🇦🇪 Dubai", badgeColor: "bg-yellow-600", desc: "MOHRE compliant, Dubai Gold" },
  { name: "Nursing", href: "/resume-builder?template=Nursing", badge: "Healthcare", badgeColor: "bg-teal-600", desc: "License, BLS/ACLS, clinical" },
  { name: "Fresher", href: "/resume-builder?template=Fresher", badge: "Students", badgeColor: "bg-blue-500", desc: "Projects-first, no exp needed" },
  { name: "Trades", href: "/resume-builder?template=Trades", badge: "Blue Collar", badgeColor: "bg-slate-700", desc: "Skills-grid, trade license" },
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
        <div style={{ fontSize: "6.5px", color: "#444", lineHeight: "1.4" }}>Experienced engineer with 8+ years building scalable web applications used by millions globally.</div>
      </div>
      <div style={{ marginBottom: "5px" }}>
        <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", borderBottom: "1px solid #eee", paddingBottom: "2px", marginBottom: "3px" }}>Work Experience</div>
        <div style={{ fontSize: "7px", fontWeight: "600", color: "#111" }}>Google LLC — Senior Engineer (2020–Present)</div>
        <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Led team of 8 engineers delivering 3 products</div>
        <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Reduced page load time by 40%</div>
      </div>
      <div>
        <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", borderBottom: "1px solid #eee", paddingBottom: "2px", marginBottom: "3px" }}>Skills</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
          {["React", "Node.js", "Python", "AWS", "SQL"].map(s => (
            <span key={s} style={{ background: "#f0f4ff", border: "1px solid #dde", borderRadius: "2px", padding: "1px 4px", fontSize: "6px" }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ModernTechThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden", display: "flex" }}>
      <div style={{ width: "36%", background: "#1e3a5f", color: "#fff", padding: "8px 7px" }}>
        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>AM</div>
        <div style={{ fontSize: "7px", fontWeight: "700", textAlign: "center", marginBottom: "6px" }}>Alex Morgan</div>
        <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "3px" }}>Skills</div>
        {["React", "Node.js", "Python", "AWS"].map(s => (
          <div key={s} style={{ fontSize: "6px", marginBottom: "3px", display: "flex", alignItems: "center", gap: "3px" }}>
            <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#60a5fa", flexShrink: 0 }} />{s}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: "8px" }}>
        <div style={{ borderBottom: "2px solid #1e3a5f", paddingBottom: "4px", marginBottom: "5px" }}>
          <div style={{ fontSize: "10px", fontWeight: "700", color: "#1e3a5f" }}>Alex Morgan</div>
          <div style={{ fontSize: "7px", color: "#64748b" }}>Software Engineer</div>
        </div>
        <div style={{ fontSize: "6.5px", color: "#444", marginBottom: "4px" }}>8+ years building scalable applications.</div>
        <div style={{ fontSize: "6.5px", fontWeight: "700", textTransform: "uppercase", color: "#1e3a5f", marginBottom: "3px" }}>Experience</div>
        <div style={{ fontSize: "6.5px", fontWeight: "600", color: "#1e3a5f" }}>Google — Senior Engineer</div>
        <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Led 8-person team</div>
        <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Reduced load time 40%</div>
      </div>
    </div>
  );
}

function ExecutiveThumbnail() {
  return (
    <div style={{ fontFamily: "Georgia, serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
      <div style={{ height: "3px", background: "linear-gradient(90deg, #92700a, #c9a84c)" }} />
      <div style={{ padding: "7px 10px 5px", borderBottom: "2px solid #92700a", background: "#fdf8ee" }}>
        <div style={{ fontSize: "12px", fontWeight: "700", color: "#111" }}>Alexandra Morgan</div>
        <div style={{ fontSize: "7.5px", color: "#92700a", fontStyle: "italic", fontWeight: "600" }}>Chief Technology Officer</div>
        <div style={{ fontSize: "6px", color: "#555", marginTop: "2px" }}>✉ alex@corp.com · 📞 +1 555 123 4567</div>
      </div>
      <div style={{ padding: "5px 10px" }}>
        <div style={{ background: "#fdf8ee", borderLeft: "3px solid #92700a", padding: "3px 6px", marginBottom: "4px" }}>
          <div style={{ fontSize: "6.5px", fontStyle: "italic", color: "#333" }}>Visionary leader with 15+ years driving digital transformation.</div>
        </div>
        <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#92700a", borderBottom: "1px solid #e8d5a0", marginBottom: "3px" }}>Career History</div>
        <div style={{ fontSize: "7px", fontWeight: "700", color: "#111" }}>Google — VP Engineering</div>
        <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Managed $50M annual tech budget</div>
        <div style={{ fontSize: "6.5px", color: "#444", marginLeft: "6px" }}>• Led 200+ person engineering org</div>
      </div>
    </div>
  );
}

function CreativeThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden", display: "flex" }}>
      <div style={{ width: "35%", background: "#be185d", color: "#fff", padding: "8px 7px" }}>
        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", margin: "0 auto 5px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>AM</div>
        <div style={{ fontSize: "7px", fontWeight: "700", textAlign: "center", marginBottom: "6px" }}>Alex Morgan</div>
        <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "3px" }}>Skills</div>
        {["Figma", "UX", "CSS", "React"].map(s => (
          <span key={s} style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "1px 4px", fontSize: "5.5px", margin: "1px" }}>{s}</span>
        ))}
      </div>
      <div style={{ flex: 1, padding: "8px" }}>
        <div style={{ height: "2px", background: "linear-gradient(90deg, #be185d, #fbcfe8)", marginBottom: "5px" }} />
        <div style={{ fontSize: "6.5px", fontWeight: "700", textTransform: "uppercase", color: "#be185d", marginBottom: "3px" }}>About Me</div>
        <div style={{ fontSize: "6px", color: "#444", lineHeight: "1.4", marginBottom: "4px" }}>Creative UX designer with 6 years crafting beautiful experiences.</div>
        <div style={{ fontSize: "6.5px", fontWeight: "600", color: "#be185d" }}>Airbnb — Sr. UX Designer</div>
        <div style={{ fontSize: "6px", color: "#444", marginLeft: "4px" }}>• Redesigned booking +32% CVR</div>
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
            <div style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.85)" }}>Product Manager</div>
            <div style={{ fontSize: "6px", color: "rgba(255,255,255,0.8)", marginTop: "2px" }}>✉ alex@email.com · 📍 London, UK</div>
          </div>
          <div style={{ width: "26px", height: "32px", border: "2px solid rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>👤</div>
        </div>
      </div>
      <div style={{ padding: "6px 10px" }}>
        <div style={{ display: "flex", gap: "5px", marginBottom: "4px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#15803d", flexShrink: 0, marginTop: "1px" }} />
          <div>
            <div style={{ fontSize: "6.5px", fontWeight: "700" }}>Amazon — Product Manager</div>
            <div style={{ fontSize: "6px", color: "#666" }}>2021 – Present</div>
            <div style={{ fontSize: "6px", color: "#444" }}>• Launched 3 products, €2M revenue</div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2px", marginTop: "4px" }}>
          {["Strategy", "Agile", "SQL", "Figma"].map(s => (
            <span key={s} style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "2px", padding: "1px 4px", fontSize: "5.5px", color: "#15803d" }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function UAEThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
      <div style={{ height: "3px", background: "linear-gradient(90deg, #b8860b, #d4a84b, #b8860b)" }} />
      <div style={{ padding: "6px 10px", background: "rgba(184,134,11,0.07)", borderBottom: "2px solid #b8860b" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "10px", fontWeight: "700", color: "#111" }}>Ahmed Al Rashid</div>
            <div style={{ fontSize: "7px", color: "#b8860b", fontWeight: "700" }}>Finance Manager</div>
            <div style={{ fontSize: "6px", color: "#555", marginTop: "2px" }}>📞 +971 50 123 4567 · 📍 Dubai</div>
            <div style={{ display: "flex", gap: "3px", marginTop: "3px", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 4px", borderRadius: "2px", fontWeight: "600" }}>🌍 Indian</span>
              <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 4px", borderRadius: "2px", fontWeight: "600" }}>📋 Employment Visa</span>
              <span style={{ background: "rgba(184,134,11,0.18)", color: "#b8860b", fontSize: "5.5px", padding: "1px 4px", borderRadius: "2px", fontWeight: "600" }}>⏱ 1 Month</span>
            </div>
          </div>
          <div style={{ width: "24px", height: "30px", border: "2px solid #b8860b", background: "rgba(184,134,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px" }}>👤</div>
        </div>
      </div>
      <div style={{ padding: "5px 10px" }}>
        <div style={{ fontSize: "7px", fontWeight: "700", textTransform: "uppercase", color: "#b8860b", marginBottom: "3px" }}>Work Experience</div>
        <div style={{ fontSize: "6.5px", fontWeight: "700" }}>Emirates NBD — Finance Manager</div>
        <div style={{ fontSize: "6px", color: "#b8860b", fontStyle: "italic" }}>Largest bank in UAE · AED 200B+ assets</div>
        <div style={{ fontSize: "6px", color: "#444" }}>• Managed AED 50M portfolio</div>
      </div>
    </div>
  );
}

function NursingThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
      <div style={{ background: "#0d7377", padding: "8px 10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: "700", color: "#fff" }}>Sarah Johnson, RN</div>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.85)", fontWeight: "600" }}>Registered Nurse — ICU</div>
            <div style={{ fontSize: "6px", color: "rgba(255,255,255,0.8)", marginTop: "2px" }}>📞 +971 55 123 4567 · 📍 Dubai, UAE</div>
          </div>
          <div style={{ width: "26px", height: "32px", border: "2px solid rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>👤</div>
        </div>
      </div>
      <div style={{ background: "rgba(13,115,119,0.08)", borderBottom: "1px solid rgba(13,115,119,0.2)", padding: "4px 10px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "6px", fontWeight: "700", color: "#0d7377" }}>🏥 DHA-RN-12345 | Exp: Dec 2026</span>
        <span style={{ background: "rgba(13,115,119,0.15)", color: "#0d7377", fontSize: "6px", fontWeight: "600", padding: "1px 5px", borderRadius: "2px" }}>✓ BLS 2025</span>
        <span style={{ background: "rgba(13,115,119,0.15)", color: "#0d7377", fontSize: "6px", fontWeight: "600", padding: "1px 5px", borderRadius: "2px" }}>✓ ACLS 2025</span>
      </div>
      <div style={{ padding: "5px 10px" }}>
        <div style={{ borderLeft: "3px solid #0d7377", paddingLeft: "7px", marginBottom: "4px" }}>
          <div style={{ fontSize: "6.5px", fontWeight: "700" }}>Cleveland Clinic Abu Dhabi — Staff Nurse ICU</div>
          <div style={{ fontSize: "6px", color: "#444" }}>• Provided critical care to 8-10 ICU patients/shift</div>
          <div style={{ fontSize: "6px", color: "#444" }}>• 98% patient satisfaction score</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2px", marginTop: "4px" }}>
          {["ICU Care", "IV Therapy", "Epic EHR", "PALS"].map(s => (
            <span key={s} style={{ background: "rgba(13,115,119,0.08)", border: "1px solid rgba(13,115,119,0.2)", borderRadius: "2px", padding: "1px 4px", fontSize: "5.5px", color: "#333" }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FresherThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
      <div style={{ height: "4px", background: "linear-gradient(90deg, #2563eb, #60a5fa)" }} />
      <div style={{ padding: "7px 10px", background: "rgba(37,99,235,0.06)" }}>
        <div style={{ fontSize: "11px", fontWeight: "700", color: "#111" }}>Priya Sharma</div>
        <div style={{ fontSize: "7.5px", color: "#2563eb", fontWeight: "700" }}>B.Tech CS | Seeking Software Engineer Role</div>
        <div style={{ fontSize: "6px", color: "#555", marginTop: "2px" }}>✉ priya@email.com · 📍 Chennai, India</div>
      </div>
      <div style={{ padding: "5px 10px" }}>
        <div style={{ background: "rgba(37,99,235,0.06)", borderLeft: "3px solid #2563eb", padding: "3px 6px", marginBottom: "5px" }}>
          <div style={{ fontSize: "6px", fontWeight: "700", textTransform: "uppercase", color: "#2563eb", marginBottom: "2px" }}>Career Objective</div>
          <div style={{ fontSize: "6px", color: "#333" }}>Motivated CS graduate seeking entry-level role to apply my skills in web development...</div>
        </div>
        <div style={{ fontSize: "6.5px", fontWeight: "700", color: "#2563eb", marginBottom: "2px" }}>EDUCATION</div>
        <div style={{ fontSize: "6.5px", fontWeight: "600" }}>B.Tech Computer Science — Anna University</div>
        <div style={{ fontSize: "6px", color: "#888", marginBottom: "4px" }}>2024 | CGPA: 8.7</div>
        <div style={{ fontSize: "6.5px", fontWeight: "700", color: "#2563eb", marginBottom: "2px" }}>PROJECTS</div>
        <div style={{ border: "1px solid rgba(37,99,235,0.2)", borderRadius: "4px", padding: "3px 5px", background: "rgba(37,99,235,0.04)" }}>
          <div style={{ fontSize: "6.5px", fontWeight: "700", color: "#2563eb" }}>Student Management System</div>
          <div style={{ display: "flex", gap: "2px", marginTop: "2px" }}>
            {["React", "Node.js", "MongoDB"].map(s => (
              <span key={s} style={{ background: "rgba(37,99,235,0.15)", color: "#2563eb", fontSize: "5px", padding: "1px 4px", borderRadius: "2px", fontWeight: "600" }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TradesThumbnail() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "7px", background: "#fff", height: "168px", overflow: "hidden" }}>
      <div style={{ background: "#1e293b", padding: "8px 10px" }}>
        <div style={{ fontSize: "11px", fontWeight: "700", color: "#fff" }}>Mohammed Hassan</div>
        <div style={{ fontSize: "7.5px", color: "#f97316", fontWeight: "700" }}>Master Electrician | 12 Years Experience</div>
        <div style={{ fontSize: "6px", color: "rgba(255,255,255,0.8)", marginTop: "2px" }}>📞 +971 55 987 6543 · 📍 Dubai, UAE</div>
      </div>
      <div style={{ background: "#f97316", padding: "3px 10px", display: "flex", gap: "8px" }}>
        <span style={{ fontSize: "6px", color: "#fff", fontWeight: "600" }}>✓ UAE Trade License</span>
        <span style={{ fontSize: "6px", color: "#fff", fontWeight: "600" }}>✓ OSHA Certified</span>
        <span style={{ fontSize: "6px", color: "#fff", fontWeight: "600" }}>✓ First Aid</span>
      </div>
      <div style={{ padding: "5px 10px" }}>
        <div style={{ fontSize: "6.5px", fontWeight: "700", textTransform: "uppercase", color: "#111", borderBottom: "2px solid #f97316", paddingBottom: "2px", marginBottom: "4px" }}>Trade Skills</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", marginBottom: "5px" }}>
          {["HV Wiring", "Panel Install", "Blueprint Read", "Solar PV", "Safety Comply", "CAD"].map(s => (
            <div key={s} style={{ background: "rgba(249,115,22,0.1)", borderRadius: "2px", padding: "2px 4px", fontSize: "5.5px", color: "#333" }}>▸ {s}</div>
          ))}
        </div>
        <div style={{ borderLeft: "3px solid #f97316", paddingLeft: "6px" }}>
          <div style={{ fontSize: "6.5px", fontWeight: "700" }}>DEWA Approved Contractor — Sr. Electrician</div>
          <div style={{ fontSize: "6px", color: "#444" }}>• Completed 200+ commercial installations</div>
        </div>
      </div>
    </div>
  );
}

const thumbnailComponents = [
  ATSThumbnail, ModernTechThumbnail, ExecutiveThumbnail, CreativeThumbnail,
  EuropeThumbnail, UAEThumbnail, NursingThumbnail, FresherThumbnail, TradesThumbnail,
];

export default function TemplatePreviews() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {templatePreviews.map((template, idx) => {
        const ThumbnailComponent = thumbnailComponents[idx];
        return (
          <Link key={template.name} href={template.href}>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="border-b border-gray-100 overflow-hidden relative">
                <ThumbnailComponent />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-xs opacity-0 group-hover:opacity-100 transition-all bg-gray-900 bg-opacity-80 px-3 py-1.5 rounded-full">
                    Use Template →
                  </span>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-xs text-gray-900 group-hover:text-gray-700">{template.name}</h3>
                  <span className={`text-white text-xs px-1.5 py-0.5 rounded-full ${template.badgeColor} whitespace-nowrap`} style={{ fontSize: "9px" }}>
                    {template.badge}
                  </span>
                </div>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: "10px" }}>{template.desc}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
