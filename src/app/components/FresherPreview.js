export default function FresherPreview({
  name, jobTitle, email, phone, city, linkedin, portfolio,
  degree, college, year, extraEducation, photo,
  skills, languages, certifications, summary,
  projectName, projectDescription, projectTech, extraProjects,
  experience, themeColor = "#2563eb",
}) {
  const skillList = skills ? skills.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const certList = certifications ? certifications.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const langList = languages ? languages.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const experienceLines = experience ? experience.split("\n") : [];
  const extraEduList = extraEducation ? extraEducation.split("\n").filter(Boolean) : [];
  const extraProjectList = extraProjects ? extraProjects.split("\n").filter(Boolean) : [];

  const hexToRgb = (hex) => ({ r: parseInt(hex.slice(1,3),16), g: parseInt(hex.slice(3,5),16), b: parseInt(hex.slice(5,7),16) });
  const rgb = hexToRgb(themeColor);
  const lightBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.07)`;
  const midBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`;

  const SectionTitle = ({ children }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0 0 8px 0" }}>
      <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: 0, whiteSpace: "nowrap" }}>
        {children}
      </h2>
      <div style={{ flex: 1, height: "1.5px", background: midBg }} />
    </div>
  );

  return (
    <div style={{ fontFamily: "'Calibri','Arial',sans-serif", fontSize: "11px", lineHeight: "1.5", color: "#1a1a1a", background: "#fff", maxWidth: "720px", margin: "0 auto" }}>

      {/* Colorful top bar */}
      <div style={{ height: "6px", background: `linear-gradient(90deg, ${themeColor}, ${themeColor}88, ${themeColor})` }} />

      {/* Header */}
      <div style={{ padding: "18px 28px 14px", background: lightBg }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 2px 0", color: "#111" }}>
              {name || "Your Name"}
            </h1>
            <p style={{ fontSize: "12px", color: themeColor, fontWeight: "700", margin: "0 0 8px 0" }}>
              {jobTitle || "Fresh Graduate | Seeking Entry-Level Opportunity"}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 14px", fontSize: "9.5px", color: "#555" }}>
              {email && <span>✉ {email}</span>}
              {phone && <span>📞 {phone}</span>}
              {city && <span>📍 {city}</span>}
              {linkedin && <span>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/,"")}</span>}
              {portfolio && <span>🌐 {portfolio.replace(/^https?:\/\/(www\.)?/,"")}</span>}
            </div>
          </div>
          {photo && (
            <div style={{ width: "60px", height: "60px", flexShrink: 0, borderRadius: "50%", overflow: "hidden", border: `3px solid ${themeColor}`, marginLeft: "16px" }}>
              <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "14px 28px 24px" }}>

        {/* Career Objective — key for freshers */}
        {summary && (
          <div style={{ marginBottom: "14px", background: lightBg, borderLeft: `4px solid ${themeColor}`, padding: "10px 12px", borderRadius: "0 6px 6px 0" }}>
            <p style={{ fontSize: "9px", fontWeight: "700", textTransform: "uppercase", color: themeColor, margin: "0 0 4px 0", letterSpacing: "1px" }}>Career Objective</p>
            <p style={{ margin: 0, color: "#333", lineHeight: "1.6", fontSize: "10.5px" }}>{summary}</p>
          </div>
        )}

        {/* Education — FIRST for freshers */}
        {(degree || college) && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle>Education</SectionTitle>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
              <p style={{ fontWeight: "700", margin: 0, fontSize: "11px", color: "#111" }}>{degree}</p>
              {year && <p style={{ margin: 0, fontSize: "10px", color: "#888" }}>{year}</p>}
            </div>
            {college && <p style={{ margin: "0 0 6px 0", fontSize: "10px", color: "#555" }}>{college}</p>}
            {extraEduList.map((edu, i) => <p key={i} style={{ margin: "3px 0 0 0", fontSize: "10px", color: "#666" }}>{edu}</p>)}
          </div>
        )}

        {/* Projects — PROMINENT for freshers */}
        {projectName && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle>Academic Projects</SectionTitle>
            <div style={{ border: `1px solid ${midBg}`, borderRadius: "6px", padding: "10px 12px", marginBottom: "8px", background: lightBg }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontWeight: "700", margin: "0 0 3px 0", color: themeColor, fontSize: "11px" }}>{projectName}</p>
              </div>
              {projectDescription && <p style={{ margin: "0 0 3px 0", color: "#444", fontSize: "10.5px" }}>{projectDescription}</p>}
              {projectTech && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "3px", marginTop: "4px" }}>
                  {projectTech.split(",").map((t, i) => (
                    <span key={i} style={{ background: midBg, color: themeColor, fontSize: "9px", fontWeight: "600", padding: "1px 6px", borderRadius: "3px" }}>
                      {t.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {extraProjectList.map((proj, i) => (
              <p key={i} style={{ margin: "4px 0 0 0", color: "#555", fontSize: "10px" }}>{proj}</p>
            ))}
          </div>
        )}

        {/* Skills */}
        {skillList.length > 0 && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle>Skills</SectionTitle>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {skillList.map((skill, i) => (
                <span key={i} style={{ background: lightBg, border: `1px solid ${midBg}`, borderRadius: "4px", padding: "3px 10px", fontSize: "10px", color: themeColor, fontWeight: "600" }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Internship / Experience if any */}
        {experience && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle>Internship / Experience</SectionTitle>
            {experienceLines.map((line, i) => {
              const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
              const isEmpty = line.trim() === "";
              const isHeader = !isBullet && !isEmpty;
              return (
                <p key={i} style={{
                  margin: isBullet ? "2px 0 2px 14px" : isHeader ? "8px 0 2px 0" : "1px 0",
                  fontWeight: isHeader ? "700" : "normal",
                  color: isHeader ? themeColor : "#444",
                  fontSize: isBullet ? "10px" : "10.5px",
                }}>
                  {line || "\u00A0"}
                </p>
              );
            })}
          </div>
        )}

        {/* Certifications */}
        {certList.length > 0 && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle>Certifications & Courses</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 16px" }}>
              {certList.map((cert, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <div style={{ width: "5px", height: "5px", background: themeColor, flexShrink: 0, borderRadius: "50%" }} />
                  <span style={{ fontSize: "10px", color: "#444" }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {langList.length > 0 && (
          <div style={{ marginBottom: "8px" }}>
            <SectionTitle>Languages</SectionTitle>
            <p style={{ margin: 0, fontSize: "10.5px", color: "#444" }}>{langList.join(" · ")}</p>
          </div>
        )}
      </div>

      <div style={{ height: "4px", background: `linear-gradient(90deg, ${themeColor}, ${themeColor}88, ${themeColor})` }} />
      <div style={{ padding: "4px", textAlign: "center" }}>
        <p style={{ fontSize: "9px", color: "#bbb", margin: 0 }}>Fresher / Student Template — Resume Helper AI</p>
      </div>
    </div>
  );
}
