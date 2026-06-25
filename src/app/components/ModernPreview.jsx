export default function ModernPreview({
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
  const langList = languages ? languages.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const certList = certifications ? certifications.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const experienceLines = experience ? experience.split("\n") : [];
  const extraEduList = extraEducation ? extraEducation.split("\n").filter(Boolean) : [];
  const extraProjectList = extraProjects ? extraProjects.split("\n").filter(Boolean) : [];

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
          width: "32%",
          background: "#1e3a5f",
          color: "#fff",
          padding: "28px 18px",
          flexShrink: 0,
        }}
      >
        {/* Photo / Initials */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 16px",
            border: "3px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {photo ? (
            <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#fff" }}>{initials}</span>
          )}
        </div>

        {/* Name + Title in sidebar */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p style={{ fontSize: "13px", fontWeight: "700", margin: "0 0 3px 0", lineHeight: "1.3" }}>
            {name || "Your Name"}
          </p>
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", margin: 0 }}>
            {jobTitle || "Professional Title"}
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", marginBottom: "16px" }} />

        {/* Contact */}
        <div style={{ marginBottom: "18px" }}>
          <h3 style={{ fontSize: "9.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px 0" }}>
            Contact
          </h3>
          {email && <p style={{ fontSize: "10px", margin: "0 0 5px 0", wordBreak: "break-all" }}>✉ {email}</p>}
          {phone && <p style={{ fontSize: "10px", margin: "0 0 5px 0" }}>📞 {phone}</p>}
          {city && <p style={{ fontSize: "10px", margin: "0 0 5px 0" }}>📍 {city}</p>}
          {linkedin && (
            <p style={{ fontSize: "9.5px", margin: "0 0 5px 0", wordBreak: "break-all", color: "rgba(255,255,255,0.85)" }}>
              🔗 {linkedin.replace(/^https?:\/\/(www\.)?/, "")}
            </p>
          )}
          {portfolio && (
            <p style={{ fontSize: "9.5px", margin: "0 0 5px 0", wordBreak: "break-all", color: "rgba(255,255,255,0.85)" }}>
              🌐 {portfolio.replace(/^https?:\/\/(www\.)?/, "")}
            </p>
          )}
        </div>

        {/* Skills */}
        {skillList.length > 0 && (
          <div style={{ marginBottom: "18px" }}>
            <h3 style={{ fontSize: "9.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px 0" }}>
              Skills
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {skillList.map((skill, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#60a5fa", flexShrink: 0 }} />
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.9)" }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {langList.length > 0 && (
          <div style={{ marginBottom: "18px" }}>
            <h3 style={{ fontSize: "9.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px 0" }}>
              Languages
            </h3>
            {langList.map((lang, i) => (
              <p key={i} style={{ fontSize: "10px", margin: "0 0 4px 0", color: "rgba(255,255,255,0.9)" }}>
                {lang}
              </p>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certList.length > 0 && (
          <div style={{ marginBottom: "18px" }}>
            <h3 style={{ fontSize: "9.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px 0" }}>
              Certifications
            </h3>
            {certList.map((cert, i) => (
              <p key={i} style={{ fontSize: "10px", margin: "0 0 4px 0", color: "rgba(255,255,255,0.9)" }}>
                • {cert}
              </p>
            ))}
          </div>
        )}

        {/* Education in sidebar */}
        {(degree || college) && (
          <div style={{ marginBottom: "18px" }}>
            <h3 style={{ fontSize: "9.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px 0" }}>
              Education
            </h3>
            <p style={{ fontSize: "10.5px", fontWeight: "600", margin: "0 0 2px 0" }}>{degree}</p>
            <p style={{ fontSize: "10px", margin: "0 0 1px 0", color: "rgba(255,255,255,0.8)" }}>{college}</p>
            {year && <p style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.6)", margin: 0 }}>{year}</p>}
            {extraEduList.map((edu, i) => (
              <p key={i} style={{ fontSize: "9.5px", margin: "6px 0 0 0", color: "rgba(255,255,255,0.75)" }}>{edu}</p>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT CONTENT */}
      <div style={{ flex: 1, padding: "28px 24px" }}>

        {/* Name + Title */}
        <div style={{ marginBottom: "18px", paddingBottom: "14px", borderBottom: "2px solid #1e3a5f" }}>
          <h1 style={{ fontSize: "22px", fontWeight: "700", margin: "0 0 3px 0", color: "#1e3a5f" }}>
            {name || "Your Name"}
          </h1>
          <p style={{ fontSize: "12px", color: "#64748b", fontWeight: "600", margin: 0 }}>
            {jobTitle || "Professional Title"}
          </p>
        </div>

        {/* Summary */}
        {summary && (
          <div style={{ marginBottom: "16px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1e3a5f", margin: "0 0 6px 0" }}>
              Professional Summary
            </h2>
            <p style={{ margin: 0, color: "#374151", lineHeight: "1.6", fontSize: "10.5px" }}>
              {summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experience && (
          <div style={{ marginBottom: "16px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1e3a5f", margin: "0 0 8px 0", borderBottom: "1px solid #e2e8f0", paddingBottom: "3px" }}>
              Work Experience
            </h2>
            {experienceLines.map((line, i) => {
              const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
              const isHeader = !isBullet && line.trim().length > 0 && !line.startsWith(" ");
              return (
                <p key={i} style={{
                  margin: isBullet ? "1px 0 1px 14px" : isHeader ? "8px 0 2px 0" : "1px 0",
                  fontWeight: isHeader ? "600" : "normal",
                  color: isHeader ? "#1e3a5f" : "#374151",
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
          <div style={{ marginBottom: "16px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#1e3a5f", margin: "0 0 8px 0", borderBottom: "1px solid #e2e8f0", paddingBottom: "3px" }}>
              Projects
            </h2>
            <div style={{ marginBottom: "8px" }}>
              <p style={{ fontWeight: "600", margin: "0 0 3px 0", color: "#1e3a5f", fontSize: "11px" }}>{projectName}</p>
              {projectDescription && <p style={{ margin: "0 0 2px 0", color: "#374151", fontSize: "10.5px" }}>{projectDescription}</p>}
              {projectTech && (
                <p style={{ margin: 0, fontSize: "9.5px", color: "#64748b" }}>
                  <span style={{ fontWeight: "600" }}>Tech:</span> {projectTech}
                </p>
              )}
            </div>
            {extraProjectList.map((proj, i) => (
              <p key={i} style={{ margin: "4px 0 0 0", color: "#555", fontSize: "10px" }}>{proj}</p>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "8px", marginTop: "8px" }}>
          <p style={{ fontSize: "9px", color: "#aaa", margin: 0, textAlign: "center" }}>
            Modern Tech Template — Resume Helper AI
          </p>
        </div>
      </div>
    </div>
  );
}
