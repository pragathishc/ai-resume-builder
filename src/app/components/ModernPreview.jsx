export default function ModernPreview({
  name, jobTitle, email, phone, city, linkedin, portfolio,
  degree, college, year, extraEducation, photo,
  skills, languages, certifications, summary,
  projectName, projectDescription, projectTech, extraProjects,
  experience, themeColor = "#1e3a5f",
}) {
  const skillList = skills ? skills.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const langList = languages ? languages.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const certList = certifications ? certifications.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const experienceLines = experience ? experience.split("\n") : [];
  const extraEduList = extraEducation ? extraEducation.split("\n").filter(Boolean) : [];
  const extraProjectList = extraProjects ? extraProjects.split("\n").filter(Boolean) : [];

  const initials = name ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0,2) : "YN";

  return (
    <div style={{ fontFamily: "'Calibri','Arial',sans-serif", fontSize: "11px", lineHeight: "1.5", color: "#1a1a1a", background: "#fff", display: "flex", maxWidth: "720px", margin: "0 auto", minHeight: "900px" }}>

      {/* SIDEBAR */}
      <div style={{ width: "32%", background: themeColor, color: "#fff", padding: "0", flexShrink: 0, display: "flex", flexDirection: "column" }}>
        {/* Photo */}
        <div style={{ background: `${themeColor}dd`, padding: "24px 16px 16px", textAlign: "center" }}>
          <div style={{ width: "70px", height: "70px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 10px", border: "3px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {photo ? (
              <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span style={{ fontSize: "20px", fontWeight: "700" }}>{initials}</span>
            )}
          </div>
          <p style={{ fontSize: "12px", fontWeight: "700", margin: "0 0 3px 0" }}>{name || "Your Name"}</p>
          <p style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.75)", margin: 0 }}>{jobTitle || "Professional Title"}</p>
        </div>

        <div style={{ padding: "16px 14px", flex: 1 }}>
          {/* Contact */}
          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "9px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.55)", margin: "0 0 7px 0", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "3px" }}>Contact</h3>
            {email && <p style={{ fontSize: "9.5px", margin: "0 0 4px 0", wordBreak: "break-all" }}>✉ {email}</p>}
            {phone && <p style={{ fontSize: "9.5px", margin: "0 0 4px 0" }}>📞 {phone}</p>}
            {city && <p style={{ fontSize: "9.5px", margin: "0 0 4px 0" }}>📍 {city}</p>}
            {linkedin && <p style={{ fontSize: "9px", margin: "0 0 4px 0", wordBreak: "break-all", color: "rgba(255,255,255,0.85)" }}>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/,"")}</p>}
            {portfolio && <p style={{ fontSize: "9px", margin: "0 0 4px 0", wordBreak: "break-all", color: "rgba(255,255,255,0.85)" }}>🌐 {portfolio.replace(/^https?:\/\/(www\.)?/,"")}</p>}
          </div>

          {/* Skills */}
          {skillList.length > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "9px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.55)", margin: "0 0 7px 0", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "3px" }}>Skills</h3>
              {skillList.map((skill, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
                  <span style={{ fontSize: "9.5px" }}>{skill}</span>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {(degree || college) && (
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "9px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.55)", margin: "0 0 7px 0", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "3px" }}>Education</h3>
              <p style={{ fontSize: "10px", fontWeight: "600", margin: "0 0 2px 0" }}>{degree}</p>
              <p style={{ fontSize: "9.5px", margin: "0 0 1px 0", color: "rgba(255,255,255,0.8)" }}>{college}</p>
              {year && <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", margin: "0 0 6px 0" }}>{year}</p>}
              {extraEduList.map((edu, i) => <p key={i} style={{ fontSize: "9px", margin: "4px 0 0 0", color: "rgba(255,255,255,0.7)" }}>{edu}</p>)}
            </div>
          )}

          {/* Languages */}
          {langList.length > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "9px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.55)", margin: "0 0 7px 0", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "3px" }}>Languages</h3>
              {langList.map((lang, i) => <p key={i} style={{ fontSize: "9.5px", margin: "0 0 3px 0" }}>{lang}</p>)}
            </div>
          )}

          {/* Certifications */}
          {certList.length > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "9px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.55)", margin: "0 0 7px 0", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "3px" }}>Certifications</h3>
              {certList.map((cert, i) => <p key={i} style={{ fontSize: "9.5px", margin: "0 0 3px 0" }}>• {cert}</p>)}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div style={{ flex: 1, padding: "24px 20px" }}>
        <div style={{ marginBottom: "16px", paddingBottom: "12px", borderBottom: `2px solid ${themeColor}` }}>
          <h1 style={{ fontSize: "20px", fontWeight: "700", margin: "0 0 3px 0", color: themeColor }}>{name || "Your Name"}</h1>
          <p style={{ fontSize: "11px", color: "#64748b", fontWeight: "600", margin: 0 }}>{jobTitle || "Professional Title"}</p>
        </div>

        {summary && (
          <div style={{ marginBottom: "14px" }}>
            <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 5px 0" }}>Professional Summary</h2>
            <p style={{ margin: 0, color: "#374151", lineHeight: "1.6", fontSize: "10.5px" }}>{summary}</p>
          </div>
        )}

        {experience && (
          <div style={{ marginBottom: "14px" }}>
            <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 6px 0", borderBottom: "1px solid #e2e8f0", paddingBottom: "3px" }}>Work Experience</h2>
            {experienceLines.map((line, i) => {
              const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
              const isHeader = !isBullet && line.trim().length > 0 && !line.startsWith(" ");
              return (
                <p key={i} style={{ margin: isBullet ? "1px 0 1px 14px" : isHeader ? "8px 0 2px 0" : "1px 0", fontWeight: isHeader ? "600" : "normal", color: isHeader ? themeColor : "#374151", fontSize: isBullet ? "10px" : "10.5px" }}>
                  {line || "\u00A0"}
                </p>
              );
            })}
          </div>
        )}

        {projectName && (
          <div style={{ marginBottom: "14px" }}>
            <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: "0 0 6px 0", borderBottom: "1px solid #e2e8f0", paddingBottom: "3px" }}>Projects</h2>
            <p style={{ fontWeight: "600", margin: "0 0 3px 0", color: themeColor, fontSize: "11px" }}>{projectName}</p>
            {projectDescription && <p style={{ margin: "0 0 2px 0", color: "#374151", fontSize: "10.5px" }}>{projectDescription}</p>}
            {projectTech && <p style={{ margin: 0, fontSize: "9.5px", color: "#64748b" }}><span style={{ fontWeight: "600" }}>Tech:</span> {projectTech}</p>}
            {extraProjectList.map((proj, i) => <p key={i} style={{ margin: "4px 0 0 0", color: "#555", fontSize: "10px" }}>{proj}</p>)}
          </div>
        )}

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "6px", marginTop: "6px" }}>
          <p style={{ fontSize: "9px", color: "#aaa", margin: 0, textAlign: "center" }}>Modern Tech — Resume Helper AI</p>
        </div>
      </div>
    </div>
  );
}
