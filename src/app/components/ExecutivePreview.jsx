export default function ExecutivePreview({
  name, jobTitle, email, phone, city, linkedin, portfolio,
  degree, college, year, extraEducation, photo,
  skills, languages, certifications, summary,
  projectName, projectDescription, projectTech, extraProjects,
  experience, themeColor = "#92700a",
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
  const midBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`;

  return (
    <div style={{ fontFamily: "'Georgia','Calibri',serif", fontSize: "11px", lineHeight: "1.6", color: "#1c1c1c", background: "#fff", maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ height: "5px", background: themeColor }} />

      {/* Header */}
      <div style={{ padding: "24px 36px 18px", borderBottom: `2px solid ${themeColor}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 3px 0", color: "#111", letterSpacing: "1px" }}>{name || "Your Name"}</h1>
            <p style={{ fontSize: "12px", color: themeColor, fontWeight: "600", margin: "0 0 10px 0", fontStyle: "italic" }}>{jobTitle || "Senior Executive"}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 18px", fontSize: "10px", color: "#555" }}>
              {email && <span>✉ {email}</span>}
              {phone && <span>📞 {phone}</span>}
              {city && <span>📍 {city}</span>}
              {linkedin && <span>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/,"")}</span>}
              {portfolio && <span>🌐 {portfolio.replace(/^https?:\/\/(www\.)?/,"")}</span>}
            </div>
          </div>
          {photo && (
            <div style={{ width: "68px", height: "68px", borderRadius: "4px", overflow: "hidden", border: `2px solid ${themeColor}`, flexShrink: 0, marginLeft: "20px" }}>
              <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
        </div>
      </div>

      <div style={{ padding: "18px 36px 28px" }}>
        {/* Summary highlight box */}
        {summary && (
          <div style={{ background: lightBg, borderLeft: `4px solid ${themeColor}`, padding: "12px 14px", marginBottom: "18px", borderRadius: "0 4px 4px 0" }}>
            <h2 style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: themeColor, margin: "0 0 5px 0" }}>Executive Summary</h2>
            <p style={{ margin: 0, color: "#333", lineHeight: "1.7", fontStyle: "italic" }}>{summary}</p>
          </div>
        )}

        <div style={{ display: "flex", gap: "28px" }}>
          {/* Main content */}
          <div style={{ flex: "1 1 65%" }}>
            {experience && (
              <div style={{ marginBottom: "18px" }}>
                <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: themeColor, margin: "0 0 8px 0", borderBottom: `1px solid ${midBg}`, paddingBottom: "4px" }}>Career History</h2>
                {experienceLines.map((line, i) => {
                  const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
                  const isHeader = !isBullet && line.trim().length > 0 && !line.startsWith(" ");
                  return (
                    <p key={i} style={{ margin: isBullet ? "2px 0 2px 14px" : isHeader ? "10px 0 3px 0" : "1px 0", fontWeight: isHeader ? "700" : "normal", color: isHeader ? "#111" : "#444", fontSize: isBullet ? "10px" : "10.5px" }}>
                      {line || "\u00A0"}
                    </p>
                  );
                })}
              </div>
            )}

            {projectName && (
              <div style={{ marginBottom: "18px" }}>
                <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: themeColor, margin: "0 0 8px 0", borderBottom: `1px solid ${midBg}`, paddingBottom: "4px" }}>Key Projects</h2>
                <p style={{ fontWeight: "700", margin: "0 0 3px 0", color: "#111", fontSize: "11px" }}>{projectName}</p>
                {projectDescription && <p style={{ margin: "0 0 3px 0", color: "#444", fontSize: "10.5px" }}>{projectDescription}</p>}
                {projectTech && <p style={{ margin: 0, fontSize: "9.5px", color: "#777" }}>Technologies: {projectTech}</p>}
                {extraProjectList.map((proj, i) => <p key={i} style={{ margin: "5px 0 0 0", color: "#555", fontSize: "10px" }}>{proj}</p>)}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ flex: "0 0 30%", minWidth: "150px" }}>
            {skillList.length > 0 && (
              <div style={{ marginBottom: "16px" }}>
                <h2 style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: themeColor, margin: "0 0 7px 0", borderBottom: `1px solid ${midBg}`, paddingBottom: "3px" }}>Core Competencies</h2>
                {skillList.map((skill, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <div style={{ width: "4px", height: "4px", background: themeColor, flexShrink: 0, borderRadius: "1px" }} />
                    <span style={{ fontSize: "10px", color: "#333" }}>{skill}</span>
                  </div>
                ))}
              </div>
            )}

            {(degree || college) && (
              <div style={{ marginBottom: "16px" }}>
                <h2 style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: themeColor, margin: "0 0 7px 0", borderBottom: `1px solid ${midBg}`, paddingBottom: "3px" }}>Education</h2>
                <p style={{ fontWeight: "700", margin: "0 0 2px 0", fontSize: "10.5px", color: "#111" }}>{degree}</p>
                <p style={{ margin: "0 0 1px 0", fontSize: "10px", color: "#555" }}>{college}</p>
                {year && <p style={{ margin: "0 0 6px 0", fontSize: "9.5px", color: "#888" }}>{year}</p>}
                {extraEduList.map((edu, i) => <p key={i} style={{ margin: "4px 0 0 0", fontSize: "9.5px", color: "#666" }}>{edu}</p>)}
              </div>
            )}

            {certList.length > 0 && (
              <div style={{ marginBottom: "16px" }}>
                <h2 style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: themeColor, margin: "0 0 7px 0", borderBottom: `1px solid ${midBg}`, paddingBottom: "3px" }}>Certifications</h2>
                {certList.map((cert, i) => <p key={i} style={{ margin: "0 0 3px 0", fontSize: "10px", color: "#444" }}>• {cert}</p>)}
              </div>
            )}

            {langList.length > 0 && (
              <div style={{ marginBottom: "16px" }}>
                <h2 style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: themeColor, margin: "0 0 7px 0", borderBottom: `1px solid ${midBg}`, paddingBottom: "3px" }}>Languages</h2>
                {langList.map((lang, i) => <p key={i} style={{ margin: "0 0 3px 0", fontSize: "10px", color: "#444" }}>{lang}</p>)}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ height: "3px", background: themeColor }} />
      <div style={{ padding: "5px", textAlign: "center" }}>
        <p style={{ fontSize: "9px", color: "#bbb", margin: 0 }}>Executive Template — Resume Helper AI</p>
      </div>
    </div>
  );
}
