export default function CreativePreview({
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

  const PINK = "#be185d";
  const PINK_LIGHT = "#fdf2f8";
  const PINK_MID = "#fbcfe8";

  const initials = name
    ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "YN";

  return (
    <div
      style={{
        fontFamily: "'Calibri', 'Arial', sans-serif",
        fontSize: "11px",
        lineHeight: "1.5",
        color: "#1a1a1a",
        background: "#fff",
        display: "flex",
        maxWidth: "720px",
        margin: "0 auto",
        minHeight: "900px",
      }}
    >
      {/* LEFT SIDEBAR */}
      <div
        style={{
          width: "33%",
          background: PINK,
          color: "#fff",
          padding: "0",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Photo Header */}
        <div
          style={{
            background: `linear-gradient(160deg, #9d174d, ${PINK})`,
            padding: "28px 18px 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto 12px",
              border: "3px solid rgba(255,255,255,0.5)",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {photo ? (
              <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span style={{ fontSize: "22px", fontWeight: "700", color: "#fff" }}>{initials}</span>
            )}
          </div>
          <h1 style={{ fontSize: "14px", fontWeight: "700", margin: "0 0 4px 0", lineHeight: "1.3" }}>
            {name || "Your Name"}
          </h1>
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)", margin: 0, fontStyle: "italic" }}>
            {jobTitle || "Creative Professional"}
          </p>
        </div>

        {/* Sidebar content */}
        <div style={{ padding: "20px 16px", flex: 1 }}>

          {/* Contact */}
          <div style={{ marginBottom: "18px" }}>
            <h3 style={{
              fontSize: "9px", fontWeight: "700", textTransform: "uppercase",
              letterSpacing: "1.5px", color: PINK_MID, margin: "0 0 8px 0",
              borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "4px"
            }}>
              Contact
            </h3>
            {email && <p style={{ fontSize: "9.5px", margin: "0 0 5px 0", wordBreak: "break-all" }}>✉ {email}</p>}
            {phone && <p style={{ fontSize: "9.5px", margin: "0 0 5px 0" }}>📞 {phone}</p>}
            {city && <p style={{ fontSize: "9.5px", margin: "0 0 5px 0" }}>📍 {city}</p>}
            {linkedin && (
              <p style={{ fontSize: "9px", margin: "0 0 5px 0", wordBreak: "break-all", color: "rgba(255,255,255,0.85)" }}>
                🔗 {linkedin.replace(/^https?:\/\/(www\.)?/, "")}
              </p>
            )}
            {portfolio && (
              <p style={{ fontSize: "9px", margin: "0 0 5px 0", wordBreak: "break-all", color: "rgba(255,255,255,0.85)" }}>
                🌐 {portfolio.replace(/^https?:\/\/(www\.)?/, "")}
              </p>
            )}
          </div>

          {/* Skills */}
          {skillList.length > 0 && (
            <div style={{ marginBottom: "18px" }}>
              <h3 style={{
                fontSize: "9px", fontWeight: "700", textTransform: "uppercase",
                letterSpacing: "1.5px", color: PINK_MID, margin: "0 0 8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "4px"
              }}>
                Skills
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {skillList.map((skill, i) => (
                  <span key={i} style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "20px",
                    padding: "2px 8px",
                    fontSize: "9px",
                    color: "#fff",
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {(degree || college) && (
            <div style={{ marginBottom: "18px" }}>
              <h3 style={{
                fontSize: "9px", fontWeight: "700", textTransform: "uppercase",
                letterSpacing: "1.5px", color: PINK_MID, margin: "0 0 8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "4px"
              }}>
                Education
              </h3>
              <p style={{ fontSize: "10.5px", fontWeight: "700", margin: "0 0 2px 0" }}>{degree}</p>
              <p style={{ fontSize: "9.5px", margin: "0 0 1px 0", color: "rgba(255,255,255,0.85)" }}>{college}</p>
              {year && <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.65)", margin: "0 0 6px 0" }}>{year}</p>}
              {extraEduList.map((edu, i) => (
                <p key={i} style={{ fontSize: "9px", margin: "4px 0 0 0", color: "rgba(255,255,255,0.75)" }}>{edu}</p>
              ))}
            </div>
          )}

          {/* Languages */}
          {langList.length > 0 && (
            <div style={{ marginBottom: "18px" }}>
              <h3 style={{
                fontSize: "9px", fontWeight: "700", textTransform: "uppercase",
                letterSpacing: "1.5px", color: PINK_MID, margin: "0 0 8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "4px"
              }}>
                Languages
              </h3>
              {langList.map((lang, i) => (
                <p key={i} style={{ fontSize: "9.5px", margin: "0 0 4px 0", color: "rgba(255,255,255,0.9)" }}>{lang}</p>
              ))}
            </div>
          )}

          {/* Certifications */}
          {certList.length > 0 && (
            <div style={{ marginBottom: "18px" }}>
              <h3 style={{
                fontSize: "9px", fontWeight: "700", textTransform: "uppercase",
                letterSpacing: "1.5px", color: PINK_MID, margin: "0 0 8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "4px"
              }}>
                Certifications
              </h3>
              {certList.map((cert, i) => (
                <p key={i} style={{ fontSize: "9.5px", margin: "0 0 4px 0", color: "rgba(255,255,255,0.9)" }}>• {cert}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div style={{ flex: 1, padding: "28px 24px" }}>

        {/* Decorative accent line */}
        <div style={{ height: "3px", background: `linear-gradient(90deg, ${PINK}, ${PINK_MID}, transparent)`, marginBottom: "18px", borderRadius: "2px" }} />

        {/* Summary */}
        {summary && (
          <div style={{ marginBottom: "18px" }}>
            <h2 style={{
              fontSize: "11px", fontWeight: "700", textTransform: "uppercase",
              letterSpacing: "1px", color: PINK, margin: "0 0 6px 0"
            }}>
              About Me
            </h2>
            <p style={{ margin: 0, color: "#374151", lineHeight: "1.7", fontSize: "10.5px" }}>
              {summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experience && (
          <div style={{ marginBottom: "18px" }}>
            <h2 style={{
              fontSize: "11px", fontWeight: "700", textTransform: "uppercase",
              letterSpacing: "1px", color: PINK, margin: "0 0 8px 0",
              borderBottom: `2px solid ${PINK_MID}`, paddingBottom: "4px"
            }}>
              Experience
            </h2>
            {experienceLines.map((line, i) => {
              const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
              const isHeader = !isBullet && line.trim().length > 0 && !line.startsWith(" ");
              return (
                <p key={i} style={{
                  margin: isBullet ? "2px 0 2px 14px" : isHeader ? "10px 0 3px 0" : "1px 0",
                  fontWeight: isHeader ? "700" : "normal",
                  color: isHeader ? PINK : "#374151",
                  fontSize: isBullet ? "10px" : "10.5px",
                }}>
                  {line || "\u00A0"}
                </p>
              );
            })}
          </div>
        )}

        {/* Projects */}
        {projectName && (
          <div style={{ marginBottom: "18px" }}>
            <h2 style={{
              fontSize: "11px", fontWeight: "700", textTransform: "uppercase",
              letterSpacing: "1px", color: PINK, margin: "0 0 8px 0",
              borderBottom: `2px solid ${PINK_MID}`, paddingBottom: "4px"
            }}>
              Projects
            </h2>
            <div style={{
              background: PINK_LIGHT, borderLeft: `3px solid ${PINK}`,
              padding: "10px 12px", borderRadius: "0 4px 4px 0", marginBottom: "8px"
            }}>
              <p style={{ fontWeight: "700", margin: "0 0 4px 0", color: PINK, fontSize: "11px" }}>{projectName}</p>
              {projectDescription && <p style={{ margin: "0 0 3px 0", color: "#374151", fontSize: "10.5px" }}>{projectDescription}</p>}
              {projectTech && (
                <p style={{ margin: 0, fontSize: "9.5px", color: "#9d174d" }}>
                  <span style={{ fontWeight: "600" }}>Stack:</span> {projectTech}
                </p>
              )}
            </div>
            {extraProjectList.map((proj, i) => (
              <p key={i} style={{ margin: "4px 0 0 0", color: "#555", fontSize: "10px" }}>{proj}</p>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ borderTop: `1px solid ${PINK_MID}`, paddingTop: "8px", marginTop: "8px" }}>
          <p style={{ fontSize: "9px", color: "#bbb", margin: 0, textAlign: "center" }}>
            Creative Template — Resume Helper AI
          </p>
        </div>
      </div>
    </div>
  );
}
