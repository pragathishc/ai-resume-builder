export default function NursingPreview({
  name, jobTitle, email, phone, city, linkedin, portfolio,
  degree, college, year, extraEducation, photo,
  skills, languages, certifications, summary,
  projectName, projectDescription, projectTech, extraProjects,
  experience, themeColor = "#0d7377",
  // Nursing specific
  nursingLicense, licenseExpiry, nursingSpecialty, blsCertDate, aclsCertDate,
}) {
  const skillList = skills ? skills.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const certList = certifications ? certifications.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const langList = languages ? languages.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const experienceLines = experience ? experience.split("\n") : [];
  const extraEduList = extraEducation ? extraEducation.split("\n").filter(Boolean) : [];

  const hexToRgb = (hex) => ({ r: parseInt(hex.slice(1,3),16), g: parseInt(hex.slice(3,5),16), b: parseInt(hex.slice(5,7),16) });
  const rgb = hexToRgb(themeColor);
  const lightBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.07)`;
  const midBg = `rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`;

  const SectionTitle = ({ icon, children }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "6px", margin: "0 0 8px 0", borderLeft: `3px solid ${themeColor}`, paddingLeft: "8px" }}>
      {icon && <span style={{ fontSize: "10px" }}>{icon}</span>}
      <h2 style={{ fontSize: "10.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: themeColor, margin: 0 }}>
        {children}
      </h2>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Calibri','Arial',sans-serif", fontSize: "11px", lineHeight: "1.5", color: "#1a1a1a", background: "#fff", maxWidth: "720px", margin: "0 auto" }}>

      {/* Header */}
      <div style={{ background: themeColor, padding: "18px 28px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#fff", margin: "0 0 2px 0" }}>
              {name || "Your Name"}
            </h1>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", margin: "0 0 10px 0", fontWeight: "600" }}>
              {jobTitle || "Registered Nurse"} {nursingSpecialty ? `| ${nursingSpecialty}` : ""}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 14px", fontSize: "9.5px", color: "rgba(255,255,255,0.85)" }}>
              {email && <span>✉ {email}</span>}
              {phone && <span>📞 {phone}</span>}
              {city && <span>📍 {city}</span>}
              {linkedin && <span>🔗 {linkedin.replace(/^https?:\/\/(www\.)?/,"")}</span>}
            </div>
          </div>
          <div style={{ width: "68px", height: "80px", flexShrink: 0, border: "2px solid rgba(255,255,255,0.4)", borderRadius: "4px", overflow: "hidden", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {photo ? <img src={photo} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <div style={{ textAlign: "center" }}><div style={{ fontSize: "22px" }}>👤</div></div>}
          </div>
        </div>
      </div>

      {/* License Banner — critical for nursing */}
      <div style={{ background: lightBg, borderBottom: `2px solid ${themeColor}`, padding: "8px 28px", display: "flex", flexWrap: "wrap", gap: "4px 20px", alignItems: "center" }}>
        {nursingLicense && (
          <span style={{ fontSize: "10px", fontWeight: "700", color: themeColor }}>
            🏥 License: {nursingLicense}
            {licenseExpiry ? ` | Exp: ${licenseExpiry}` : ""}
          </span>
        )}
        {blsCertDate && (
          <span style={{ background: midBg, color: themeColor, fontSize: "9.5px", fontWeight: "600", padding: "1px 8px", borderRadius: "3px" }}>
            ✓ BLS {blsCertDate}
          </span>
        )}
        {aclsCertDate && (
          <span style={{ background: midBg, color: themeColor, fontSize: "9.5px", fontWeight: "600", padding: "1px 8px", borderRadius: "3px" }}>
            ✓ ACLS {aclsCertDate}
          </span>
        )}
        {!nursingLicense && !blsCertDate && (
          <span style={{ fontSize: "9.5px", color: themeColor, fontWeight: "600" }}>
            🏥 RN License · BLS · ACLS · PALS — Add your license details above
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "14px 28px 24px" }}>

        {/* Summary */}
        {summary && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle icon="📋">Professional Summary</SectionTitle>
            <p style={{ margin: 0, color: "#333", lineHeight: "1.7", fontSize: "10.5px" }}>{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle icon="🏨">Clinical Experience</SectionTitle>
            {experienceLines.map((line, i) => {
              const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
              const isEmpty = line.trim() === "";
              const isHeader = !isBullet && !isEmpty;
              return (
                <p key={i} style={{
                  margin: isBullet ? "2px 0 2px 14px" : isHeader ? "8px 0 2px 0" : "1px 0",
                  fontWeight: isHeader ? "700" : "normal",
                  color: isHeader ? "#111" : "#444",
                  fontSize: isBullet ? "10px" : "10.5px",
                }}>
                  {line || "\u00A0"}
                </p>
              );
            })}
          </div>
        )}

        {/* Two columns: Skills + Certifications */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "14px" }}>
          {skillList.length > 0 && (
            <div style={{ flex: 1 }}>
              <SectionTitle icon="💊">Clinical Skills</SectionTitle>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {skillList.map((skill, i) => (
                  <span key={i} style={{ background: lightBg, border: `1px solid ${midBg}`, borderRadius: "3px", padding: "2px 8px", fontSize: "9.5px", color: "#333" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {certList.length > 0 && (
            <div style={{ flex: "0 0 38%" }}>
              <SectionTitle icon="🎖">Certifications</SectionTitle>
              {certList.map((cert, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: themeColor, flexShrink: 0 }} />
                  <span style={{ fontSize: "10px", color: "#444" }}>{cert}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Education */}
        {(degree || college) && (
          <div style={{ marginBottom: "14px" }}>
            <SectionTitle icon="🎓">Education & Qualifications</SectionTitle>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <p style={{ fontWeight: "700", margin: "0 0 2px 0", fontSize: "11px", color: "#111" }}>{degree}</p>
              {year && <p style={{ margin: 0, fontSize: "10px", color: "#888" }}>{year}</p>}
            </div>
            {college && <p style={{ margin: "0 0 6px 0", fontSize: "10px", color: "#555" }}>{college}</p>}
            {extraEduList.map((edu, i) => <p key={i} style={{ margin: "3px 0 0 0", fontSize: "10px", color: "#666" }}>{edu}</p>)}
          </div>
        )}

        {/* Languages */}
        {langList.length > 0 && (
          <div style={{ marginBottom: "8px" }}>
            <SectionTitle icon="🌐">Languages</SectionTitle>
            <p style={{ margin: 0, fontSize: "10.5px", color: "#444" }}>{langList.join(" · ")}</p>
          </div>
        )}
      </div>

      <div style={{ height: "3px", background: themeColor }} />
      <div style={{ padding: "4px", textAlign: "center" }}>
        <p style={{ fontSize: "9px", color: "#bbb", margin: 0 }}>Nursing / Healthcare Template — Resume Helper AI</p>
      </div>
    </div>
  );
}
