export default function TradesPreview({
  name, jobTitle, email, phone, city, linkedin, portfolio,
  degree, college, year, extraEducation, photo,
  skills, languages, certifications, summary,
  projectName, projectDescription, projectTech, extraProjects,
  experience, themeColor = "#1e293b",
}) {
  const skillList = skills ? skills.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const certList = certifications ? certifications.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const langList = languages ? languages.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const experienceLines = experience ? experience.split("\n") : [];
  const extraEduList = extraEducation ? extraEducation.split("\n").filter(Boolean) : [];

  const hexToRgb = (hex) => ({ r: parseInt(hex.slice(1,3),16), g: parseInt(hex.slice(3,5),16), b: parseInt(hex.slice(5,7),16) });
  const rgb = hexToRgb(themeColor);
  const lightBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.06)`;
  const midBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`;

  // Accent color — orange for trades
  const ACCENT = "#f97316";
  const ACCENT_LIGHT = "rgba(249,115,22,0.1)";

  const SectionTitle = ({ children }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0 0 8px 0", paddingBottom: "4px", borderBottom: `2px solid ${ACCENT}` }}>
      <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "#111", margin: 0 }}>
        {children}
      </h2>
    </div>
  );

  // Build skill rows for grid display
  const skillRows = [];
  for (let i = 0; i < skillList.length; i += 3) {
    skillRows.push(skillList.slice(i, i + 3));
  }

  return (
    <div style={{ fontFamily: "'Calibri','Arial',sans-serif", fontSize: "11px", lineHeight: "1.5", color: "#1a1a1a", background: "#fff", maxWidth: "720px", margin: "0 auto" }}>

      {/* Header — dark industrial style */}
      <div style={{ background: themeColor, padding: "18px 28px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#fff", margin: "0 0 2px 0", letterSpacing: "0.5px" }}>
              {name || "Your Name"}
            </h1>
            <p style={{ fontSize: "12px", color: ACCENT, fontWeight: "700", margin: "0 0 10px 0" }}>
              {jobTitle || "Skilled Tradesperson"}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 14px", fontSize: "9.5px", color: "rgba(255,255,255,0.85)" }}>
              {email && <span>✉ {email}</span>}
              {phone && <span>📞 {phone}</span>}
              {city && <span>📍 {city}</span>}
              {linkedin && <span>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/,"")}</span>}
            </div>
          </div>
          {photo && (
            <div style={{ width: "64px", height: "72px", flexShrink: 0, border: `2px solid ${ACCENT}`, borderRadius: "4px", overflow: "hidden", marginLeft: "16px" }}>
              <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
        </div>
      </div>

      {/* Orange accent bar with key stats */}
      <div style={{ background: ACCENT, padding: "6px 28px", display: "flex", flexWrap: "wrap", gap: "4px 24px" }}>
        {certList.slice(0, 3).map((cert, i) => (
          <span key={i} style={{ fontSize: "9.5px", color: "#fff", fontWeight: "600" }}>✓ {cert}</span>
        ))}
        {certList.length === 0 && (
          <span style={{ fontSize: "9.5px", color: "#fff", fontWeight: "600" }}>✓ Add Your Trade License / Certifications Above</span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "14px 28px 24px" }}>

        {/* Skills Grid — FIRST for trades */}
        {skillList.length > 0 && (
          <div style={{ marginBottom: "16px" }}>
            <SectionTitle>Trade Skills & Expertise</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5px" }}>
              {skillList.map((skill, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", background: ACCENT_LIGHT, borderRadius: "4px", padding: "4px 8px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                  <span style={{ fontSize: "9.5px", color: "#333", fontWeight: "500" }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Summary — short for trades */}
        {summary && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle>Professional Profile</SectionTitle>
            <p style={{ margin: 0, color: "#333", lineHeight: "1.6", fontSize: "10.5px" }}>{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle>Work Experience</SectionTitle>
            {experienceLines.map((line, i) => {
              const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
              const isEmpty = line.trim() === "";
              const isHeader = !isBullet && !isEmpty;
              return (
                <p key={i} style={{
                  margin: isBullet ? "2px 0 2px 14px" : isHeader ? "8px 0 2px 0" : "1px 0",
                  fontWeight: isHeader ? "700" : "normal",
                  color: isHeader ? "#111" : "#444",
                  fontSize: isBullet ? "10px" : "10.5px",
                  borderLeft: isHeader ? `3px solid ${ACCENT}` : "none",
                  paddingLeft: isHeader ? "7px" : "0",
                }}>
                  {line || "\u00A0"}
                </p>
              );
            })}
          </div>
        )}

        {/* Projects / Major Works */}
        {projectName && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle>Key Projects / Works</SectionTitle>
            <div style={{ border: `1px solid rgba(249,115,22,0.25)`, borderRadius: "6px", padding: "10px 12px", background: ACCENT_LIGHT }}>
              <p style={{ fontWeight: "700", margin: "0 0 3px 0", color: "#111", fontSize: "11px" }}>{projectName}</p>
              {projectDescription && <p style={{ margin: "0 0 3px 0", color: "#444", fontSize: "10.5px" }}>{projectDescription}</p>}
              {projectTech && <p style={{ margin: 0, fontSize: "9.5px", color: "#666" }}>Tools / Equipment: {projectTech}</p>}
            </div>
          </div>
        )}

        {/* Bottom row — Education + Licenses + Languages */}
        <div style={{ display: "flex", gap: "20px" }}>

          {/* Education */}
          {(degree || college) && (
            <div style={{ flex: 1 }}>
              <SectionTitle>Education & Training</SectionTitle>
              <p style={{ fontWeight: "700", margin: "0 0 2px 0", fontSize: "10.5px", color: "#111" }}>{degree}</p>
              {college && <p style={{ margin: "0 0 2px 0", fontSize: "10px", color: "#555" }}>{college}</p>}
              {year && <p style={{ margin: "0 0 6px 0", fontSize: "9.5px", color: "#888" }}>{year}</p>}
              {extraEduList.map((edu, i) => <p key={i} style={{ margin: "3px 0 0 0", fontSize: "9.5px", color: "#666" }}>{edu}</p>)}
            </div>
          )}

          {/* All certifications */}
          {certList.length > 0 && (
            <div style={{ flex: 1 }}>
              <SectionTitle>Licenses & Certifications</SectionTitle>
              {certList.map((cert, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                  <div style={{ width: "5px", height: "5px", background: ACCENT, flexShrink: 0, borderRadius: "1px" }} />
                  <span style={{ fontSize: "10px", color: "#333" }}>{cert}</span>
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {langList.length > 0 && (
            <div style={{ flex: "0 0 28%" }}>
              <SectionTitle>Languages</SectionTitle>
              {langList.map((lang, i) => (
                <p key={i} style={{ margin: "0 0 3px 0", fontSize: "10px", color: "#444" }}>{lang}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ height: "4px", background: themeColor }} />
      <div style={{ padding: "4px", textAlign: "center" }}>
        <p style={{ fontSize: "9px", color: "#bbb", margin: 0 }}>Trades / Blue Collar Template — Resume Helper AI</p>
      </div>
    </div>
  );
}
