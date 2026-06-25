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
}) {
  const skillList = skills ? skills.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const certList = certifications ? certifications.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const langList = languages ? languages.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const experienceLines = experience ? experience.split("\n") : [];
  const extraEduList = extraEducation ? extraEducation.split("\n").filter(Boolean) : [];
  const extraProjectList = extraProjects ? extraProjects.split("\n").filter(Boolean) : [];

  const GREEN = "#15803d";
  const GREEN_LIGHT = "#f0fdf4";
  const GREEN_MID = "#86efac";

  const SectionTitle = ({ children }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "0 0 10px 0" }}>
      <div style={{ width: "4px", height: "18px", background: GREEN, borderRadius: "2px", flexShrink: 0 }} />
      <h2 style={{
        fontSize: "11px", fontWeight: "700", textTransform: "uppercase",
        letterSpacing: "1.5px", color: GREEN, margin: 0,
      }}>
        {children}
      </h2>
      <div style={{ flex: 1, height: "1px", background: GREEN_MID }} />
    </div>
  );

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
      {/* Green top bar */}
      <div style={{ height: "6px", background: `linear-gradient(90deg, ${GREEN}, #22c55e)` }} />

      {/* Header */}
      <div style={{ padding: "24px 36px 18px", background: GREEN_LIGHT, borderBottom: `1px solid ${GREEN_MID}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>

          {/* Left: Name + contact */}
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: "24px", fontWeight: "700", margin: "0 0 3px 0",
              color: "#111", letterSpacing: "0.5px"
            }}>
              {name || "Your Name"}
            </h1>
            <p style={{
              fontSize: "13px", color: GREEN, fontWeight: "600",
              margin: "0 0 12px 0", letterSpacing: "0.3px"
            }}>
              {jobTitle || "Professional Title"}
            </p>

            {/* Contact grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 20px", fontSize: "10px", color: "#444" }}>
              {email && <span>✉ {email}</span>}
              {phone && <span>📞 {phone}</span>}
              {city && <span>📍 {city}</span>}
              {linkedin && <span style={{ wordBreak: "break-all" }}>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/, "")}</span>}
              {portfolio && <span style={{ wordBreak: "break-all" }}>🌐 {portfolio.replace(/^https?:\/\/(www\.)?/, "")}</span>}
            </div>
          </div>

          {/* Right: Photo — standard in European CVs */}
          <div style={{
            width: "80px", height: "96px", flexShrink: 0,
            border: `2px solid ${GREEN}`, borderRadius: "4px", overflow: "hidden",
            background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            {photo ? (
              <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ fontSize: "24px", marginBottom: "4px" }}>👤</div>
                <p style={{ fontSize: "8px", color: "#888", margin: 0 }}>Photo</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 36px 32px" }}>

        {/* Professional Summary */}
        {summary && (
          <div style={{ marginBottom: "18px" }}>
            <SectionTitle>Professional Profile</SectionTitle>
            <p style={{ margin: 0, color: "#333", lineHeight: "1.7", fontSize: "10.5px" }}>
              {summary}
            </p>
          </div>
        )}

        {/* Work Experience */}
        {experience && (
          <div style={{ marginBottom: "18px" }}>
            <SectionTitle>Professional Experience</SectionTitle>
            {experienceLines.map((line, i) => {
              const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
              const isHeader = !isBullet && line.trim().length > 0 && !line.startsWith(" ");
              return (
                <p key={i} style={{
                  margin: isBullet ? "2px 0 2px 16px" : isHeader ? "10px 0 3px 0" : "1px 0",
                  fontWeight: isHeader ? "700" : "normal",
                  color: isHeader ? "#111" : "#374151",
                  fontSize: isBullet ? "10px" : "10.5px",
                  borderLeft: isHeader ? `3px solid ${GREEN}` : "none",
                  paddingLeft: isHeader ? "8px" : "0",
                }}>
                  {line || "\u00A0"}
                </p>
              );
            })}
          </div>
        )}

        {/* Education */}
        {(degree || college) && (
          <div style={{ marginBottom: "18px" }}>
            <SectionTitle>Education & Training</SectionTitle>
            <div style={{ marginBottom: "8px", paddingLeft: "14px", borderLeft: `2px solid ${GREEN_MID}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontWeight: "700", margin: "0 0 2px 0", color: "#111", fontSize: "11px" }}>{degree}</p>
                <p style={{ fontSize: "10px", color: "#888", margin: 0, flexShrink: 0 }}>{year}</p>
              </div>
              <p style={{ margin: "0", color: "#555", fontSize: "10px" }}>{college}</p>
            </div>
            {extraEduList.map((edu, i) => (
              <div key={i} style={{ paddingLeft: "14px", borderLeft: `2px solid ${GREEN_MID}`, marginTop: "8px" }}>
                <p style={{ margin: 0, fontSize: "10px", color: "#555" }}>{edu}</p>
              </div>
            ))}
          </div>
        )}

        {/* Two column: Skills + Languages/Certs */}
        <div style={{ display: "flex", gap: "28px", marginBottom: "18px" }}>

          {/* Skills */}
          {skillList.length > 0 && (
            <div style={{ flex: 1 }}>
              <SectionTitle>Skills</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {skillList.map((skill, i) => (
                  <span key={i} style={{
                    background: GREEN_LIGHT,
                    border: `1px solid ${GREEN_MID}`,
                    borderRadius: "3px",
                    padding: "2px 8px",
                    fontSize: "9.5px",
                    color: GREEN,
                    fontWeight: "600",
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {langList.length > 0 && (
            <div style={{ flex: "0 0 35%" }}>
              <SectionTitle>Languages</SectionTitle>
              {langList.map((lang, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: GREEN, flexShrink: 0 }} />
                  <span style={{ fontSize: "10.5px", color: "#333" }}>{lang}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Projects */}
        {projectName && (
          <div style={{ marginBottom: "18px" }}>
            <SectionTitle>Projects</SectionTitle>
            <div style={{
              background: GREEN_LIGHT, border: `1px solid ${GREEN_MID}`,
              borderRadius: "4px", padding: "10px 14px", marginBottom: "8px"
            }}>
              <p style={{ fontWeight: "700", margin: "0 0 4px 0", color: GREEN, fontSize: "11px" }}>{projectName}</p>
              {projectDescription && <p style={{ margin: "0 0 3px 0", color: "#374151", fontSize: "10.5px" }}>{projectDescription}</p>}
              {projectTech && (
                <p style={{ margin: 0, fontSize: "9.5px", color: "#15803d" }}>
                  <span style={{ fontWeight: "600" }}>Technologies:</span> {projectTech}
                </p>
              )}
            </div>
            {extraProjectList.map((proj, i) => (
              <p key={i} style={{ margin: "4px 0 0 0", color: "#555", fontSize: "10px" }}>{proj}</p>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certList.length > 0 && (
          <div style={{ marginBottom: "18px" }}>
            <SectionTitle>Certifications</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
              {certList.map((cert, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "4px", height: "4px", background: GREEN, flexShrink: 0, borderRadius: "1px" }} />
                  <span style={{ fontSize: "10px", color: "#444" }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Green bottom bar */}
      <div style={{ height: "4px", background: `linear-gradient(90deg, ${GREEN}, #22c55e)` }} />
      <div style={{ padding: "6px", textAlign: "center" }}>
        <p style={{ fontSize: "9px", color: "#bbb", margin: 0 }}>Europe CV Template — Resume Helper AI</p>
      </div>
    </div>
  );
}
