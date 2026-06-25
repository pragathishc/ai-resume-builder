export default function UAEPreview({
  name, jobTitle, email, phone, city, linkedin, portfolio,
  degree, college, year, extraEducation, photo,
  skills, languages, certifications, summary,
  projectName, projectDescription, projectTech, extraProjects,
  experience,
  // UAE specific fields
  nationality, visaStatus, noticePeriod, dateOfBirth, maritalStatus,
  themeColor = "#b8860b",
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
  const midBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.18)`;

  // Section title component
  const SectionTitle = ({ children }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0 0 8px 0" }}>
      <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.2px", color: themeColor, margin: 0, whiteSpace: "nowrap" }}>
        {children}
      </h2>
      <div style={{ flex: 1, height: "1.5px", background: midBg }} />
    </div>
  );

  return (
    <div style={{ fontFamily: "'Calibri','Arial',sans-serif", fontSize: "11px", lineHeight: "1.5", color: "#1a1a1a", background: "#fff", maxWidth: "720px", margin: "0 auto" }}>

      {/* Gold top bar */}
      <div style={{ height: "5px", background: `linear-gradient(90deg, ${themeColor}, #d4a84b, ${themeColor})` }} />

      {/* HEADER */}
      <div style={{ padding: "20px 32px 16px", background: lightBg, borderBottom: `2px solid ${themeColor}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
          <div style={{ flex: 1 }}>
            {/* Name */}
            <h1 style={{ fontSize: "22px", fontWeight: "700", margin: "0 0 2px 0", color: "#111", letterSpacing: "0.5px" }}>
              {name || "Your Name"}
            </h1>
            {/* Job Title */}
            <p style={{ fontSize: "12px", color: themeColor, fontWeight: "700", margin: "0 0 10px 0", letterSpacing: "0.3px" }}>
              {jobTitle || "Professional Title"}
            </p>

            {/* Contact row 1 */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 16px", fontSize: "10px", color: "#444", marginBottom: "4px" }}>
              {email && <span>✉ {email}</span>}
              {phone && <span>📞 {phone}</span>}
              {city && <span>📍 {city}</span>}
              {linkedin && <span>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/, "")}</span>}
              {portfolio && <span>🌐 {portfolio.replace(/^https?:\/\/(www\.)?/, "")}</span>}
            </div>

            {/* UAE specific row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 16px", fontSize: "10px" }}>
              {nationality && (
                <span style={{ background: midBg, color: themeColor, fontWeight: "600", padding: "1px 8px", borderRadius: "3px", fontSize: "9.5px" }}>
                  🌍 {nationality}
                </span>
              )}
              {visaStatus && (
                <span style={{ background: midBg, color: themeColor, fontWeight: "600", padding: "1px 8px", borderRadius: "3px", fontSize: "9.5px" }}>
                  📋 {visaStatus}
                </span>
              )}
              {noticePeriod && (
                <span style={{ background: midBg, color: themeColor, fontWeight: "600", padding: "1px 8px", borderRadius: "3px", fontSize: "9.5px" }}>
                  ⏱ {noticePeriod}
                </span>
              )}
              {dateOfBirth && (
                <span style={{ color: "#666", fontSize: "9.5px" }}>
                  DOB: {dateOfBirth}
                </span>
              )}
              {maritalStatus && (
                <span style={{ color: "#666", fontSize: "9.5px" }}>
                  | {maritalStatus}
                </span>
              )}
            </div>
          </div>

          {/* Photo */}
          <div style={{ width: "76px", height: "90px", flexShrink: 0, border: `2px solid ${themeColor}`, borderRadius: "4px", overflow: "hidden", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {photo ? (
              <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "24px" }}>👤</div>
                <p style={{ fontSize: "8px", color: "#999", margin: "2px 0 0 0" }}>Photo</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ padding: "16px 32px 28px" }}>

        {/* Professional Summary */}
        {summary && (
          <div style={{ marginBottom: "16px" }}>
            <SectionTitle>Professional Summary</SectionTitle>
            <p style={{ margin: 0, color: "#333", lineHeight: "1.7", fontSize: "10.5px" }}>{summary}</p>
          </div>
        )}

        {/* Work Experience */}
        {experience && (
          <div style={{ marginBottom: "16px" }}>
            <SectionTitle>Work Experience</SectionTitle>
            {experienceLines.map((line, i) => {
              const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
              const isEmpty = line.trim() === "";
              const isHeader = !isBullet && !isEmpty;
              return (
                <p key={i} style={{
                  margin: isBullet ? "2px 0 2px 14px" : isHeader ? "10px 0 3px 0" : "1px 0",
                  fontWeight: isHeader ? "700" : "normal",
                  color: isHeader ? "#111" : "#444",
                  fontSize: isBullet ? "10px" : "10.5px",
                  borderLeft: isHeader ? `3px solid ${themeColor}` : "none",
                  paddingLeft: isHeader ? "8px" : "0",
                }}>
                  {line || "\u00A0"}
                </p>
              );
            })}
          </div>
        )}

        {/* Two column: Skills + Education */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "16px" }}>

          {/* Skills */}
          {skillList.length > 0 && (
            <div style={{ flex: 1 }}>
              <SectionTitle>Core Skills</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {skillList.map((skill, i) => (
                  <span key={i} style={{ background: lightBg, border: `1px solid ${midBg}`, borderRadius: "3px", padding: "2px 8px", fontSize: "9.5px", color: "#333", fontWeight: "500" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {(degree || college) && (
            <div style={{ flex: "0 0 38%" }}>
              <SectionTitle>Education</SectionTitle>
              <p style={{ fontWeight: "700", margin: "0 0 2px 0", fontSize: "10.5px", color: "#111" }}>{degree}</p>
              <p style={{ margin: "0 0 1px 0", fontSize: "10px", color: "#555" }}>{college}</p>
              {year && <p style={{ margin: "0 0 6px 0", fontSize: "9.5px", color: "#888" }}>{year}</p>}
              {extraEduList.map((edu, i) => (
                <p key={i} style={{ margin: "4px 0 0 0", fontSize: "9.5px", color: "#666" }}>{edu}</p>
              ))}
            </div>
          )}
        </div>

        {/* Projects */}
        {projectName && (
          <div style={{ marginBottom: "16px" }}>
            <SectionTitle>Projects</SectionTitle>
            <div style={{ background: lightBg, borderLeft: `3px solid ${themeColor}`, padding: "10px 12px", borderRadius: "0 4px 4px 0", marginBottom: "8px" }}>
              <p style={{ fontWeight: "700", margin: "0 0 3px 0", color: themeColor, fontSize: "11px" }}>{projectName}</p>
              {projectDescription && <p style={{ margin: "0 0 2px 0", color: "#444", fontSize: "10.5px" }}>{projectDescription}</p>}
              {projectTech && <p style={{ margin: 0, fontSize: "9.5px", color: "#777" }}>Technologies: {projectTech}</p>}
            </div>
            {extraProjectList.map((proj, i) => (
              <p key={i} style={{ margin: "4px 0 0 0", color: "#555", fontSize: "10px" }}>{proj}</p>
            ))}
          </div>
        )}

        {/* Bottom row: Certifications + Languages */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "16px" }}>
          {certList.length > 0 && (
            <div style={{ flex: 1 }}>
              <SectionTitle>Certifications</SectionTitle>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 16px" }}>
                {certList.map((cert, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <div style={{ width: "4px", height: "4px", background: themeColor, flexShrink: 0, borderRadius: "1px" }} />
                    <span style={{ fontSize: "10px", color: "#444" }}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {langList.length > 0 && (
            <div style={{ flex: "0 0 30%" }}>
              <SectionTitle>Languages</SectionTitle>
              {langList.map((lang, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: themeColor, flexShrink: 0 }} />
                  <span style={{ fontSize: "10.5px", color: "#333" }}>{lang}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Gold bottom bar */}
      <div style={{ height: "4px", background: `linear-gradient(90deg, ${themeColor}, #d4a84b, ${themeColor})` }} />
      <div style={{ padding: "5px", textAlign: "center" }}>
        <p style={{ fontSize: "9px", color: "#bbb", margin: 0 }}>UAE CV Template — Resume Helper AI</p>
      </div>
    </div>
  );
}
