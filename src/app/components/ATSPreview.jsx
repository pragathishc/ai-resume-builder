export default function ATSPreview({
  name, jobTitle, email, phone, city, linkedin, portfolio,
  degree, college, year, extraEducation, photo,
  skills, languages, certifications, summary,
  projectName, projectDescription, projectTech, extraProjects,
  experience, themeColor = "#1c1c1c",
}) {
  const skillList = skills ? skills.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const certList = certifications ? certifications.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const langList = languages ? languages.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const experienceLines = experience ? experience.split("\n") : [];
  const extraEduList = extraEducation ? extraEducation.split("\n").filter(Boolean) : [];
  const extraProjectList = extraProjects ? extraProjects.split("\n").filter(Boolean) : [];

  const hexToRgb = (hex) => ({ r: parseInt(hex.slice(1,3),16), g: parseInt(hex.slice(3,5),16), b: parseInt(hex.slice(5,7),16) });
  const rgb = hexToRgb(themeColor);
  const lightBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.06)`;

  return (
    <div style={{ fontFamily: "'Calibri','Arial',sans-serif", fontSize: "11px", lineHeight: "1.5", color: "#1a1a1a", background: "#fff", padding: "36px 40px", maxWidth: "720px", margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: "16px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "0.5px", margin: "0 0 2px 0", color: "#111" }}>
          {name || "Your Name"}
        </h1>
        <p style={{ fontSize: "13px", color: themeColor, fontWeight: "600", margin: "0 0 8px 0" }}>
          {jobTitle || "Professional Title"}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", fontSize: "10px", color: "#555" }}>
          {email && <span>✉ {email}</span>}
          {phone && <span>📞 {phone}</span>}
          {city && <span>📍 {city}</span>}
          {linkedin && <span>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/,"")}</span>}
          {portfolio && <span>🌐 {portfolio.replace(/^https?:\/\/(www\.)?/,"")}</span>}
        </div>
      </div>

      <div style={{ borderTop: `2px solid ${themeColor}`, marginBottom: "14px" }} />

      {/* Summary */}
      {summary && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 5px 0", borderBottom: `1px solid ${lightBg}`, paddingBottom: "3px" }}>
            Professional Summary
          </h2>
          <p style={{ margin: 0, color: "#333", lineHeight: "1.6" }}>{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 5px 0", borderBottom: "1px solid #ddd", paddingBottom: "3px" }}>
            Work Experience
          </h2>
          {experienceLines.map((line, i) => {
            const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
            const isHeader = !isBullet && line.trim().length > 0 && !line.startsWith(" ");
            return (
              <p key={i} style={{ margin: isBullet ? "1px 0 1px 12px" : isHeader ? "8px 0 2px 0" : "1px 0", fontWeight: isHeader ? "600" : "normal", color: isHeader ? "#111" : "#333", fontSize: isBullet ? "10.5px" : "11px" }}>
                {line || "\u00A0"}
              </p>
            );
          })}
        </div>
      )}

      {/* Skills */}
      {skillList.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 5px 0", borderBottom: "1px solid #ddd", paddingBottom: "3px" }}>
            Skills
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 8px" }}>
            {skillList.map((skill, i) => (
              <span key={i} style={{ background: lightBg, border: `1px solid ${themeColor}22`, borderRadius: "3px", padding: "2px 8px", fontSize: "10px", color: "#333" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {(degree || college) && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 5px 0", borderBottom: "1px solid #ddd", paddingBottom: "3px" }}>
            Education
          </h2>
          <div style={{ marginBottom: "6px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: "600", color: "#111" }}>{degree || "Degree"}</span>
              <span style={{ color: "#555" }}>{year}</span>
            </div>
            <p style={{ margin: "1px 0 0 0", color: "#555" }}>{college}</p>
          </div>
          {extraEduList.map((edu, i) => (
            <p key={i} style={{ margin: "4px 0 0 0", color: "#555" }}>{edu}</p>
          ))}
        </div>
      )}

      {/* Projects */}
      {projectName && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 5px 0", borderBottom: "1px solid #ddd", paddingBottom: "3px" }}>
            Projects
          </h2>
          <div style={{ marginBottom: "6px" }}>
            <p style={{ fontWeight: "600", margin: "0 0 2px 0", color: "#111" }}>{projectName}</p>
            {projectDescription && <p style={{ margin: "0 0 2px 0", color: "#333" }}>{projectDescription}</p>}
            {projectTech && <p style={{ margin: 0, color: "#666", fontSize: "10px" }}>Tech: {projectTech}</p>}
          </div>
          {extraProjectList.map((proj, i) => (
            <p key={i} style={{ margin: "4px 0 0 0", color: "#555", fontSize: "10.5px" }}>{proj}</p>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certList.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 5px 0", borderBottom: "1px solid #ddd", paddingBottom: "3px" }}>
            Certifications
          </h2>
          <ul style={{ margin: 0, paddingLeft: "14px" }}>
            {certList.map((cert, i) => <li key={i} style={{ color: "#333", marginBottom: "2px" }}>{cert}</li>)}
          </ul>
        </div>
      )}

      {/* Languages */}
      {langList.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 5px 0", borderBottom: "1px solid #ddd", paddingBottom: "3px" }}>
            Languages
          </h2>
          <p style={{ margin: 0, color: "#333" }}>{langList.join(" • ")}</p>
        </div>
      )}

      <div style={{ borderTop: "1px solid #eee", paddingTop: "8px", marginTop: "4px" }}>
        <p style={{ fontSize: "9px", color: "#aaa", margin: 0, textAlign: "center" }}>ATS Professional — Resume Helper AI</p>
      </div>
    </div>
  );
}
