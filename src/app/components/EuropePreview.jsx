export default function EuropePreview({
  name,
  jobTitle,
  email,
  phone,
  city,
  linkedin,
  portfolio,
  degree,
  college,
  year,
  extraEducation,
  photo,
  skills,
  languages,
  certifications,
  summary,
  projectName,
  projectDescription,
  projectTech,
  extraProjects,
  experience,
  themeColor = "#003399",
}) {
  const skillList = skills ? skills.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const certList = certifications ? certifications.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const langList = languages ? languages.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const experienceLines = experience ? experience.split("\n") : [];
  const extraEduList = extraEducation ? extraEducation.split("\n").filter(Boolean) : [];
  const extraProjectList = extraProjects ? extraProjects.split("\n").filter(Boolean) : [];

  // Derive light version of theme color for backgrounds
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };
  const rgb = hexToRgb(themeColor);
  const lightBg = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.07)`;
  const midBg = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`;

  const SectionTitle = ({ children }) => (
    <div style={{
      display: "flex", alignItems: "center", gap: "0",
      margin: "0 0 10px 0", background: lightBg,
      borderLeft: `4px solid ${themeColor}`, padding: "5px 10px",
    }}>
      <h2 style={{
        fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase",
        letterSpacing: "1px", color: themeColor, margin: 0,
      }}>
        {children}
      </h2>
    </div>
  );

  // Parse experience into structured entries
  const parseExperienceEntries = () => {
    if (!experience) return [];
    const entries = [];
    let current = null;
    experienceLines.forEach((line) => {
      const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
      const isEmpty = line.trim() === "";
      const isHeader = !isBullet && !isEmpty;
      if (isHeader) {
        if (current) entries.push(current);
        current = { header: line, bullets: [] };
      } else if (isBullet && current) {
        current.bullets.push(line);
      }
    });
    if (current) entries.push(current);
    return entries;
  };

  const expEntries = parseExperienceEntries();

  return (
    <div
      style={{
        fontFamily: "'Calibri', 'Arial', sans-serif",
        fontSize: "11px",
        lineHeight: "1.5",
        color: "#1a1a1a",
        background: "#fff",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      {/* Europass-style Header */}
      <div style={{ background: themeColor, padding: "20px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
          {/* Name + Title */}
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: "22px", fontWeight: "700", color: "#fff",
              margin: "0 0 4px 0", letterSpacing: "0.5px"
            }}>
              {name || "Your Name"}
            </h1>
            <p style={{
              fontSize: "12px", color: "rgba(255,255,255,0.85)",
              margin: "0 0 14px 0", fontWeight: "500"
            }}>
              {jobTitle || "Professional Title"}
            </p>
            {/* Contact row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 16px", fontSize: "9.5px", color: "rgba(255,255,255,0.9)" }}>
              {email && <span>✉ {email}</span>}
              {phone && <span>📞 {phone}</span>}
              {city && <span>📍 {city}</span>}
              {linkedin && <span>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/, "")}</span>}
              {portfolio && <span>🌐 {portfolio.replace(/^https?:\/\/(www\.)?/, "")}</span>}
            </div>
          </div>

          {/* Photo — standard in Europass */}
          <div style={{
            width: "80px", height: "96px", flexShrink: 0,
            border: "3px solid rgba(255,255,255,0.5)",
            borderRadius: "2px", overflow: "hidden",
            background: "rgba(255,255,255,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {photo ? (
              <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "28px" }}>👤</div>
                <p style={{ fontSize: "8px", color: "rgba(255,255,255,0.7)", margin: "2px 0 0 0" }}>Photo</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "18px 28px 28px" }}>

        {/* Personal Statement */}
        {summary && (
          <div style={{ marginBottom: "16px" }}>
            <SectionTitle>Personal Statement</SectionTitle>
            <p style={{ margin: "0 0 0 4px", color: "#333", lineHeight: "1.7", fontSize: "10.5px" }}>
              {summary}
            </p>
          </div>
        )}

        {/* Work Experience — Europass timeline style */}
        {experience && (
          <div style={{ marginBottom: "16px" }}>
            <SectionTitle>Work Experience</SectionTitle>
            {expEntries.length > 0 ? expEntries.map((entry, i) => (
              <div key={i} style={{
                display: "flex", gap: "14px",
                marginBottom: "12px", paddingBottom: "12px",
                borderBottom: i < expEntries.length - 1 ? "1px dashed #e5e7eb" : "none"
              }}>
                {/* Left timeline dot */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: themeColor, flexShrink: 0 }} />
                  {i < expEntries.length - 1 && (
                    <div style={{ width: "1px", flex: 1, background: midBg, marginTop: "4px" }} />
                  )}
                </div>
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: "700", fontSize: "11px", margin: "0 0 4px 0", color: "#111" }}>
                    {entry.header}
                  </p>
                  {entry.bullets.map((bullet, j) => (
                    <p key={j} style={{ margin: "2px 0 2px 8px", fontSize: "10px", color: "#444" }}>
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
            )) : (
              <p style={{ margin: "0 0 0 4px", color: "#555", fontSize: "10.5px" }}>{experience}</p>
            )}
          </div>
        )}

        {/* Education — Europass timeline style */}
        {(degree || college) && (
          <div style={{ marginBottom: "16px" }}>
            <SectionTitle>Education and Training</SectionTitle>
            <div style={{ display: "flex", gap: "14px", marginBottom: "10px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: themeColor, flexShrink: 0 }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <p style={{ fontWeight: "700", fontSize: "11px", margin: "0 0 2px 0", color: "#111" }}>{degree}</p>
                  {year && <p style={{ fontSize: "10px", color: "#888", margin: 0, flexShrink: 0 }}>{year}</p>}
                </div>
                {college && <p style={{ margin: "0", color: "#555", fontSize: "10px" }}>{college}</p>}
              </div>
            </div>
            {extraEduList.map((edu, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "8px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: midBg, border: `1px solid ${themeColor}`, flexShrink: 0 }} />
                </div>
                <p style={{ margin: 0, fontSize: "10px", color: "#555" }}>{edu}</p>
              </div>
            ))}
          </div>
        )}

        {/* Two column: Skills + Languages */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "16px" }}>
          {skillList.length > 0 && (
            <div style={{ flex: 1 }}>
              <SectionTitle>Skills</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", padding: "0 0 0 4px" }}>
                {skillList.map((skill, i) => (
                  <span key={i} style={{
                    background: lightBg, border: `1px solid ${midBg}`,
                    borderRadius: "3px", padding: "2px 8px",
                    fontSize: "9.5px", color: themeColor, fontWeight: "600",
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {langList.length > 0 && (
            <div style={{ flex: "0 0 32%" }}>
              <SectionTitle>Languages</SectionTitle>
              {langList.map((lang, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px", paddingLeft: "4px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: themeColor, flexShrink: 0 }} />
                  <span style={{ fontSize: "10.5px", color: "#333" }}>{lang}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Projects */}
        {projectName && (
          <div style={{ marginBottom: "16px" }}>
            <SectionTitle>Projects</SectionTitle>
            <div style={{ paddingLeft: "4px" }}>
              <div style={{ display: "flex", gap: "14px", marginBottom: "8px" }}>
                <div style={{ paddingTop: "2px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: themeColor, flexShrink: 0 }} />
                </div>
                <div>
                  <p style={{ fontWeight: "700", margin: "0 0 3px 0", color: "#111", fontSize: "11px" }}>{projectName}</p>
                  {projectDescription && <p style={{ margin: "0 0 2px 0", color: "#444", fontSize: "10.5px" }}>{projectDescription}</p>}
                  {projectTech && <p style={{ margin: 0, fontSize: "9.5px", color: themeColor }}>Technologies: {projectTech}</p>}
                </div>
              </div>
              {extraProjectList.map((proj, i) => (
                <p key={i} style={{ margin: "4px 0 0 24px", color: "#555", fontSize: "10px" }}>{proj}</p>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certList.length > 0 && (
          <div style={{ marginBottom: "16px" }}>
            <SectionTitle>Certifications</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px", paddingLeft: "4px" }}>
              {certList.map((cert, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "4px", height: "4px", background: themeColor, flexShrink: 0, borderRadius: "1px" }} />
                  <span style={{ fontSize: "10px", color: "#444" }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div style={{ height: "4px", background: themeColor }} />
      <div style={{ padding: "5px", textAlign: "center" }}>
        <p style={{ fontSize: "9px", color: "#bbb", margin: 0 }}>Europe CV Template — Resume Helper AI</p>
      </div>
    </div>
  );
}
