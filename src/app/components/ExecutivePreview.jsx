export default function ExecutivePreview({
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
}) {
  const skillList = skills ? skills.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const certList = certifications ? certifications.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const langList = languages ? languages.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const experienceLines = experience ? experience.split("\n") : [];
  const extraEduList = extraEducation ? extraEducation.split("\n").filter(Boolean) : [];
  const extraProjectList = extraProjects ? extraProjects.split("\n").filter(Boolean) : [];

  const GOLD = "#92700a";
  const DARK = "#1c1c1c";
  const LIGHT_GOLD = "#f9f3e3";

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Calibri', serif",
        fontSize: "11px",
        lineHeight: "1.6",
        color: DARK,
        background: "#fff",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      {/* Gold top bar */}
      <div style={{ height: "5px", background: `linear-gradient(90deg, ${GOLD}, #c9a84c)` }} />

      {/* Header */}
      <div style={{ padding: "28px 40px 20px", borderBottom: `2px solid ${GOLD}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "26px", fontWeight: "700", margin: "0 0 4px 0", color: DARK, letterSpacing: "1px" }}>
              {name || "Your Name"}
            </h1>
            <p style={{ fontSize: "13px", color: GOLD, fontWeight: "600", margin: "0 0 12px 0", fontStyle: "italic", letterSpacing: "0.5px" }}>
              {jobTitle || "Senior Executive"}
            </p>
            {/* Contact row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 20px", fontSize: "10px", color: "#555" }}>
              {email && <span>✉ {email}</span>}
              {phone && <span>📞 {phone}</span>}
              {city && <span>📍 {city}</span>}
              {linkedin && <span>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/, "")}</span>}
              {portfolio && <span>🌐 {portfolio.replace(/^https?:\/\/(www\.)?/, "")}</span>}
            </div>
          </div>
          {/* Photo */}
          {photo && (
            <div style={{
              width: "72px", height: "72px", borderRadius: "4px",
              overflow: "hidden", border: `2px solid ${GOLD}`, flexShrink: 0, marginLeft: "20px"
            }}>
              <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
        </div>
      </div>

      <div style={{ padding: "20px 40px 32px" }}>

        {/* Executive Summary — highlighted box */}
        {summary && (
          <div style={{ background: LIGHT_GOLD, border: `1px solid #e8d5a0`, borderLeft: `4px solid ${GOLD}`, padding: "14px 16px", marginBottom: "20px", borderRadius: "2px" }}>
            <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: GOLD, margin: "0 0 6px 0" }}>
              Executive Summary
            </h2>
            <p style={{ margin: 0, color: "#333", lineHeight: "1.7", fontStyle: "italic" }}>
              {summary}
            </p>
          </div>
        )}

        {/* Two column layout: main left, sidebar right */}
        <div style={{ display: "flex", gap: "32px" }}>

          {/* LEFT — main content */}
          <div style={{ flex: "1 1 65%" }}>

            {/* Experience */}
            {experience && (
              <div style={{ marginBottom: "20px" }}>
                <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: GOLD, margin: "0 0 10px 0", borderBottom: `1px solid #e8d5a0`, paddingBottom: "4px" }}>
                  Career History
                </h2>
                {experienceLines.map((line, i) => {
                  const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
                  const isHeader = !isBullet && line.trim().length > 0 && !line.startsWith(" ");
                  return (
                    <p key={i} style={{
                      margin: isBullet ? "2px 0 2px 14px" : isHeader ? "10px 0 3px 0" : "1px 0",
                      fontWeight: isHeader ? "700" : "normal",
                      color: isHeader ? DARK : "#444",
                      fontSize: isBullet ? "10px" : "10.5px",
                      fontStyle: isHeader ? "normal" : "normal",
                    }}>
                      {line || "\u00A0"}
                    </p>
                  );
                })}
              </div>
            )}

            {/* Projects */}
            {projectName && (
              <div style={{ marginBottom: "20px" }}>
                <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: GOLD, margin: "0 0 10px 0", borderBottom: `1px solid #e8d5a0`, paddingBottom: "4px" }}>
                  Key Projects
                </h2>
                <div style={{ marginBottom: "8px" }}>
                  <p style={{ fontWeight: "700", margin: "0 0 3px 0", color: DARK, fontSize: "11px" }}>{projectName}</p>
                  {projectDescription && <p style={{ margin: "0 0 3px 0", color: "#444", fontSize: "10.5px" }}>{projectDescription}</p>}
                  {projectTech && <p style={{ margin: 0, fontSize: "9.5px", color: "#777" }}>Technologies: {projectTech}</p>}
                </div>
                {extraProjectList.map((proj, i) => (
                  <p key={i} style={{ margin: "6px 0 0 0", color: "#555", fontSize: "10px" }}>{proj}</p>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — sidebar */}
          <div style={{ flex: "0 0 30%", minWidth: "160px" }}>

            {/* Core Competencies / Skills */}
            {skillList.length > 0 && (
              <div style={{ marginBottom: "18px" }}>
                <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: GOLD, margin: "0 0 8px 0", borderBottom: `1px solid #e8d5a0`, paddingBottom: "4px" }}>
                  Core Competencies
                </h2>
                {skillList.map((skill, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <div style={{ width: "4px", height: "4px", background: GOLD, flexShrink: 0, borderRadius: "1px" }} />
                    <span style={{ fontSize: "10px", color: "#333" }}>{skill}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {(degree || college) && (
              <div style={{ marginBottom: "18px" }}>
                <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: GOLD, margin: "0 0 8px 0", borderBottom: `1px solid #e8d5a0`, paddingBottom: "4px" }}>
                  Education
                </h2>
                <p style={{ fontWeight: "700", margin: "0 0 2px 0", fontSize: "10.5px", color: DARK }}>{degree}</p>
                <p style={{ margin: "0 0 1px 0", fontSize: "10px", color: "#555" }}>{college}</p>
                {year && <p style={{ margin: "0 0 8px 0", fontSize: "9.5px", color: "#888" }}>{year}</p>}
                {extraEduList.map((edu, i) => (
                  <p key={i} style={{ margin: "4px 0 0 0", fontSize: "9.5px", color: "#666" }}>{edu}</p>
                ))}
              </div>
            )}

            {/* Certifications */}
            {certList.length > 0 && (
              <div style={{ marginBottom: "18px" }}>
                <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: GOLD, margin: "0 0 8px 0", borderBottom: `1px solid #e8d5a0`, paddingBottom: "4px" }}>
                  Certifications
                </h2>
                {certList.map((cert, i) => (
                  <p key={i} style={{ margin: "0 0 4px 0", fontSize: "10px", color: "#444" }}>• {cert}</p>
                ))}
              </div>
            )}

            {/* Languages */}
            {langList.length > 0 && (
              <div style={{ marginBottom: "18px" }}>
                <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: GOLD, margin: "0 0 8px 0", borderBottom: `1px solid #e8d5a0`, paddingBottom: "4px" }}>
                  Languages
                </h2>
                {langList.map((lang, i) => (
                  <p key={i} style={{ margin: "0 0 4px 0", fontSize: "10px", color: "#444" }}>{lang}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gold bottom bar */}
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${GOLD}, #c9a84c)` }} />

      <div style={{ padding: "6px", textAlign: "center" }}>
        <p style={{ fontSize: "9px", color: "#bbb", margin: 0 }}>Executive Template — Resume Helper AI</p>
      </div>
    </div>
  );
}
