"use client";

import { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useReactToPrint } from "react-to-print";

import ATSPreview from "../components/ATSPreview";
import ModernPreview from "../components/ModernPreview";
import ExecutivePreview from "../components/ExecutivePreview";
import CreativePreview from "../components/CreativePreview";
import EuropePreview from "../components/EuropePreview";
import UAEPreview from "../components/UAEPreview";

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
    </svg>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-3 mb-4 mt-6 first:mt-0">
      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div className="mb-3">
      {label && (
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {label}{required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function EntryCard({ title, subtitle, onDelete, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl mb-3 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition" onClick={() => setOpen(!open)}>
        <div>
          <p className="text-sm font-semibold text-gray-800">{title || "Untitled"}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="text-gray-400 hover:text-red-500 transition p-1 rounded-lg hover:bg-red-50">🗑</button>
          <span className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
        </div>
      </div>
      {open && <div className="p-4 bg-white border-t border-gray-100">{children}</div>}
    </div>
  );
}

function AddButton({ onClick, label }) {
  return (
    <button type="button" onClick={onClick}
      className="w-full border-2 border-dashed border-gray-200 text-gray-500 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl py-3 text-sm font-medium transition flex items-center justify-center gap-2">
      <span className="text-lg leading-none">+</span> {label}
    </button>
  );
}

const COLOR_THEMES = [
  { label: "Navy", value: "#1e3a5f" },
  { label: "Indigo", value: "#4338ca" },
  { label: "Green", value: "#15803d" },
  { label: "Rose", value: "#be185d" },
  { label: "Charcoal", value: "#374151" },
  { label: "Amber", value: "#92700a" },
  { label: "Teal", value: "#0f766e" },
  { label: "Purple", value: "#7e22ce" },
];

const UAE_THEMES = [
  { label: "Dubai Gold", value: "#b8860b", emoji: "🥇" },
  { label: "Corporate Navy", value: "#1e3a5f", emoji: "🔵" },
  { label: "Executive Black", value: "#1c1c1c", emoji: "⚫" },
];

const TEMPLATES = ["ATS Professional", "Modern Tech", "Executive", "Creative", "Europe CV", "UAE CV"];

const VISA_OPTIONS = [
  "Visit Visa – Immediate Joiner",
  "Employment Visa",
  "Residence Visa – 1 Month Notice",
  "Residence Visa – 2 Month Notice",
  "Residence Visa – 3 Month Notice",
  "Freelance Visa",
  "Student Visa",
  "Outside UAE – Ready to Relocate",
];

const NOTICE_OPTIONS = [
  "Immediate Joiner",
  "1 Week Notice",
  "2 Weeks Notice",
  "1 Month Notice",
  "2 Months Notice",
  "3 Months Notice",
];

const DRIVING_LICENSE_OPTIONS = [
  "UAE Driving License",
  "GCC Driving License",
  "International Driving License",
  "Indian Driving License",
  "UK Driving License",
  "US Driving License",
  "No Driving License",
];

function ResumeBuilderContent() {
  const searchParams = useSearchParams();
  const initialTemplate = searchParams.get("template") || "ATS Professional";
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);
  const [showFullScreenPreview, setShowFullScreenPreview] = useState(false);
  const [themeColor, setThemeColor] = useState("#1e3a5f");
  const [uaeThemeColor, setUaeThemeColor] = useState("#b8860b");

  // Personal Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [photo, setPhoto] = useState("");

  // UAE specific
  const [nationality, setNationality] = useState("");
  const [visaStatus, setVisaStatus] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");

  // Job & Summary
  const [jobTitle, setJobTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState("");

  // Education
  const [educations, setEducations] = useState([{ id: 1, degree: "", college: "", year: "" }]);

  // Skills
  const [skills, setSkills] = useState("");
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [isSuggestingSkills, setIsSuggestingSkills] = useState(false);
  const [suggestSkillsError, setSuggestSkillsError] = useState("");

  // Additional
  const [languages, setLanguages] = useState("");
  const [certifications, setCertifications] = useState("");

  // Projects
  const [projects, setProjects] = useState([{ id: 1, name: "", description: "", tech: "" }]);

  // Experience
  const [experiences, setExperiences] = useState([{ id: 1, company: "", role: "", duration: "", companyDesc: "", description: "" }]);

  const [errors, setErrors] = useState({});
  const resumeRef = useRef();
  const fullScreenPreviewRef = useRef();

  const isUAE = selectedTemplate === "UAE CV";

  const inputClass = (hasError) =>
    `w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${hasError ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}`;

  const addEducation = () => setEducations([...educations, { id: Date.now(), degree: "", college: "", year: "" }]);
  const removeEducation = (id) => setEducations(educations.filter((e) => e.id !== id));
  const updateEducation = (id, field, value) => setEducations(educations.map((e) => e.id === id ? { ...e, [field]: value } : e));

  const addProject = () => setProjects([...projects, { id: Date.now(), name: "", description: "", tech: "" }]);
  const removeProject = (id) => setProjects(projects.filter((p) => p.id !== id));
  const updateProject = (id, field, value) => setProjects(projects.map((p) => p.id === id ? { ...p, [field]: value } : p));

  const addExperience = () => setExperiences([...experiences, { id: Date.now(), company: "", role: "", duration: "", companyDesc: "", description: "" }]);
  const removeExperience = (id) => setExperiences(experiences.filter((e) => e.id !== id));
  const updateExperience = (id, field, value) => setExperiences(experiences.map((e) => e.id === id ? { ...e, [field]: value } : e));

  // Build combined strings
  const combinedExperience = experiences.filter((e) => e.company || e.role)
    .map((e) => {
      const header = `${e.company}${e.role ? ` — ${e.role}` : ""}${e.duration ? ` (${e.duration})` : ""}`;
      const compDesc = e.companyDesc ? `(${e.companyDesc})` : "";
      return [header, compDesc, e.description].filter(Boolean).join("\n");
    })
    .join("\n\n");

  const combinedProjects = projects.filter((p) => p.name);
  const primaryProject = combinedProjects[0] || { name: "", description: "", tech: "" };
  const extraProjects = combinedProjects.slice(1).map((p) => `${p.name}: ${p.description} [${p.tech}]`).join("\n");

  const combinedEducation = educations.filter((e) => e.degree || e.college);
  const primaryEdu = combinedEducation[0] || { degree: "", college: "", year: "" };
  const extraEdu = combinedEducation.slice(1).map((e) => `${e.degree}${e.college ? `, ${e.college}` : ""}${e.year ? ` (${e.year})` : ""}`).join("\n");

  const previewProps = {
    name, email, phone, city, linkedin, portfolio,
    jobTitle, photo, skills, languages, certifications, summary,
    degree: primaryEdu.degree, college: primaryEdu.college, year: primaryEdu.year,
    extraEducation: extraEdu,
    projectName: primaryProject.name, projectDescription: primaryProject.description, projectTech: primaryProject.tech,
    extraProjects, experience: combinedExperience,
    nationality, visaStatus, noticePeriod, dateOfBirth, maritalStatus, drivingLicense,
    themeColor: isUAE ? uaeThemeColor : themeColor,
  };

  const renderPreviewComponent = (templateName) => {
    switch (templateName) {
      case "ATS Professional": return <ATSPreview {...previewProps} />;
      case "Modern Tech": return <ModernPreview {...previewProps} />;
      case "Executive": return <ExecutivePreview {...previewProps} />;
      case "Creative": return <CreativePreview {...previewProps} />;
      case "Europe CV": return <EuropePreview {...previewProps} />;
      case "UAE CV": return <UAEPreview {...previewProps} />;
      default: return <ATSPreview {...previewProps} />;
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const handleGenerateSummary = async () => {
    if (!jobTitle.trim()) { setGenerateError("Enter a job title first."); return; }
    setGenerateError(""); setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-summary", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle, skills }),
      });
      if (!response.ok) { const e = await response.json().catch(() => ({})); throw new Error(e.error || "Failed."); }
      const data = await response.json();
      if (!data.summary) throw new Error("No summary returned.");
      setSummary(data.summary);
    } catch (error) { setGenerateError(error?.message || "Unable to generate summary."); }
    finally { setIsGenerating(false); }
  };

  const parseSkillString = (value) => value.split(",").map((s) => s.trim()).filter(Boolean);
  const formatSkillString = (list) => [...new Set(list.map((s) => s.trim()))].join(", ");

  const toggleSuggestedSkill = (skill) => {
    const current = parseSkillString(skills);
    const norm = skill.trim();
    const has = current.some((e) => e.toLowerCase() === norm.toLowerCase());
    setSkills(formatSkillString(has ? current.filter((e) => e.toLowerCase() !== norm.toLowerCase()) : [...current, norm]));
  };

  const handleSuggestSkills = async () => {
    if (!jobTitle.trim()) { setSuggestSkillsError("Enter a job title first."); return; }
    setSuggestSkillsError(""); setIsSuggestingSkills(true);
    try {
      const response = await fetch("/api/suggest-skills", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle }),
      });
      if (!response.ok) { const e = await response.json().catch(() => ({})); throw new Error(e.error || "Failed."); }
      const data = await response.json();
      if (!data.skills) throw new Error("No skills returned.");
      setSuggestedSkills(data.skills.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 10));
    } catch (error) { setSuggestSkillsError(error?.message || "Unable to suggest skills."); }
    finally { setIsSuggestingSkills(false); }
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email";
    if (!jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePrint = useReactToPrint({ contentRef: resumeRef, documentTitle: `${name || "resume"}` });
  const handlePrintFullScreen = useReactToPrint({ contentRef: fullScreenPreviewRef, documentTitle: `${name || "resume"}` });
  const handleDownloadClick = () => { if (validate()) handlePrint(); };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-gray-900">Resume Builder</h1>
          <p className="text-sm text-gray-500 mt-0.5">Fill in your details — AI will help you write the perfect resume</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7">

            <SectionHeader title="Personal Information" />
            <Field label="Full Name" required error={errors.name}>
              <input type="text" placeholder="e.g. Alex Morgan" value={name}
                onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
                className={inputClass(errors.name)} />
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Email Address" required error={errors.email}>
                <input type="email" placeholder="alex@email.com" value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }}
                  className={inputClass(errors.email)} />
              </Field>
              <Field label="Phone Number">
                <input type="text" placeholder={isUAE ? "+971 50 123 4567" : "+1 (555) 123-4567"} value={phone}
                  onChange={(e) => setPhone(e.target.value)} className={inputClass(false)} />
              </Field>
            </div>
            <Field label="City / Country">
              <input type="text" placeholder={isUAE ? "e.g. Dubai, UAE" : "e.g. New York, USA"} value={city}
                onChange={(e) => setCity(e.target.value)} className={inputClass(false)} />
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="LinkedIn URL">
                <input type="url" placeholder="linkedin.com/in/username" value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)} className={inputClass(false)} />
              </Field>
              <Field label="Portfolio / Website">
                <input type="url" placeholder="yourportfolio.com" value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)} className={inputClass(false)} />
              </Field>
            </div>
            <Field label="Profile Photo">
              <input type="file" accept="image/*" onChange={handlePhotoChange}
                className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer" />
            </Field>

            {/* UAE FIELDS */}
            {isUAE && (
              <>
                <SectionHeader title="🇦🇪 UAE Details" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
                  <p className="text-xs text-amber-700 font-medium mb-3">
                    Required by UAE employers — GulfTalent & MOHRE standards
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field label="Nationality">
                      <input type="text" placeholder="e.g. Indian, Pakistani, British" value={nationality}
                        onChange={(e) => setNationality(e.target.value)} className={inputClass(false)} />
                    </Field>
                    <Field label="Date of Birth">
                      <input type="text" placeholder="e.g. 15 Jan 1990" value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)} className={inputClass(false)} />
                    </Field>
                  </div>
                  <Field label="Visa Status">
                    <select value={visaStatus} onChange={(e) => setVisaStatus(e.target.value)} className={inputClass(false)}>
                      <option value="">Select Visa Status</option>
                      {VISA_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </Field>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field label="Notice Period / Availability">
                      <select value={noticePeriod} onChange={(e) => setNoticePeriod(e.target.value)} className={inputClass(false)}>
                        <option value="">Select Notice Period</option>
                        {NOTICE_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </Field>
                    <Field label="Driving License">
                      <select value={drivingLicense} onChange={(e) => setDrivingLicense(e.target.value)} className={inputClass(false)}>
                        <option value="">Select License Type</option>
                        {DRIVING_LICENSE_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field label="Marital Status (Optional)">
                      <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} className={inputClass(false)}>
                        <option value="">Select (Optional)</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                      </select>
                    </Field>
                  </div>
                </div>
              </>
            )}

            <SectionHeader title="Target Role" />
            <Field label="Target Job Title" required error={errors.jobTitle}>
              <input type="text" placeholder="e.g. Senior Software Engineer" value={jobTitle}
                onChange={(e) => { setJobTitle(e.target.value); setErrors((p) => ({ ...p, jobTitle: "" })); }}
                className={inputClass(errors.jobTitle)} />
            </Field>

            <SectionHeader title="Professional Summary" />
            <Field label="Summary">
              <textarea placeholder="Write a brief summary or use AI to generate one..." value={summary}
                onChange={(e) => setSummary(e.target.value)} rows="4" className={inputClass(false)} />
            </Field>
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-2">
              <button type="button" onClick={handleGenerateSummary} disabled={isGenerating}
                className="min-h-[44px] bg-indigo-600 text-white px-5 py-2.5 rounded-lg disabled:opacity-60 text-sm font-medium w-full sm:w-auto flex items-center justify-center hover:bg-indigo-700 transition">
                {isGenerating ? <><Spinner />Generating...</> : "✨ Generate with AI"}
              </button>
              {generateError && <p className="text-xs text-red-500 mt-1">{generateError}</p>}
            </div>

            <SectionHeader title="Education" />
            {educations.map((edu, idx) => (
              <EntryCard key={edu.id} title={edu.degree || `Education ${idx + 1}`} subtitle={edu.college}
                onDelete={() => removeEducation(edu.id)} defaultOpen={idx === 0}>
                <Field label="Degree / Qualification">
                  <input type="text" placeholder="e.g. B.Tech Computer Science" value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, "degree", e.target.value)} className={inputClass(false)} />
                </Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="College / University">
                    <input type="text" placeholder="e.g. MIT" value={edu.college}
                      onChange={(e) => updateEducation(edu.id, "college", e.target.value)} className={inputClass(false)} />
                  </Field>
                  <Field label="Graduation Year">
                    <input type="text" placeholder="e.g. 2023" value={edu.year}
                      onChange={(e) => updateEducation(edu.id, "year", e.target.value)} className={inputClass(false)} />
                  </Field>
                </div>
              </EntryCard>
            ))}
            <AddButton onClick={addEducation} label="Add Another Education" />

            <SectionHeader title="Skills" />
            <Field label="Skills (comma separated)">
              <textarea placeholder="e.g. React, Node.js, Python, SQL..." value={skills}
                onChange={(e) => setSkills(e.target.value)} rows="3" className={inputClass(false)} />
            </Field>
            <div className="flex flex-col gap-3 mb-2">
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <button type="button" onClick={handleSuggestSkills} disabled={isSuggestingSkills}
                  className="min-h-[44px] bg-indigo-600 text-white px-5 py-2.5 rounded-lg disabled:opacity-60 text-sm font-medium w-full sm:w-auto flex items-center justify-center hover:bg-indigo-700 transition">
                  {isSuggestingSkills ? <><Spinner />Suggesting...</> : "🎯 Suggest Skills"}
                </button>
                {suggestSkillsError && <p className="text-xs text-red-500">{suggestSkillsError}</p>}
              </div>
              {suggestedSkills.length > 0 && (
                <div>
                  <p className="text-xs text-gray-400 mb-2">Click to add or remove:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedSkills.map((skill) => {
                      const selected = parseSkillString(skills).some((e) => e.toLowerCase() === skill.toLowerCase());
                      return (
                        <button key={skill} type="button" onClick={() => toggleSuggestedSkill(skill)}
                          className={`min-h-[36px] text-xs px-3 py-1.5 rounded-full border transition active:scale-95 ${selected ? "bg-indigo-600 text-white border-indigo-600" : "bg-gray-50 text-gray-700 border-gray-200 hover:border-indigo-300"}`}>
                          {selected ? "✓ " : "+ "}{skill}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <SectionHeader title="Additional Information" />
            <Field label="Languages (comma separated)">
              <textarea placeholder={isUAE ? "e.g. English, Arabic, Hindi, Urdu" : "e.g. English, French, Spanish"} value={languages}
                onChange={(e) => setLanguages(e.target.value)} rows="2" className={inputClass(false)} />
            </Field>
            <Field label="Certifications (comma separated)">
              <input type="text" placeholder="e.g. PMP, ACCA, AWS Certified, CIPD" value={certifications}
                onChange={(e) => setCertifications(e.target.value)} className={inputClass(false)} />
            </Field>

            <SectionHeader title="Projects" />
            {projects.map((proj, idx) => (
              <EntryCard key={proj.id} title={proj.name || `Project ${idx + 1}`} subtitle={proj.tech}
                onDelete={() => removeProject(proj.id)} defaultOpen={idx === 0}>
                <Field label="Project Name">
                  <input type="text" placeholder="e.g. E-Commerce Platform" value={proj.name}
                    onChange={(e) => updateProject(proj.id, "name", e.target.value)} className={inputClass(false)} />
                </Field>
                <Field label="Description">
                  <textarea placeholder="Describe what you built and your role..." value={proj.description}
                    onChange={(e) => updateProject(proj.id, "description", e.target.value)}
                    rows="3" className={inputClass(false)} />
                </Field>
                <Field label="Technologies Used">
                  <input type="text" placeholder="e.g. React, Node.js, MongoDB" value={proj.tech}
                    onChange={(e) => updateProject(proj.id, "tech", e.target.value)} className={inputClass(false)} />
                </Field>
              </EntryCard>
            ))}
            <AddButton onClick={addProject} label="Add Another Project" />

            <SectionHeader title="Work Experience" />
            {experiences.map((exp, idx) => (
              <EntryCard key={exp.id} title={exp.role || `Experience ${idx + 1}`}
                subtitle={exp.company ? `${exp.company}${exp.duration ? ` · ${exp.duration}` : ""}` : ""}
                onDelete={() => removeExperience(exp.id)} defaultOpen={idx === 0}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Company Name">
                    <input type="text" placeholder={isUAE ? "e.g. Emirates Group" : "e.g. Google"} value={exp.company}
                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)} className={inputClass(false)} />
                  </Field>
                  <Field label="Job Title / Role">
                    <input type="text" placeholder="e.g. Software Engineer" value={exp.role}
                      onChange={(e) => updateExperience(exp.id, "role", e.target.value)} className={inputClass(false)} />
                  </Field>
                </div>
                <Field label="Duration">
                  <input type="text" placeholder="e.g. Jan 2022 – Present" value={exp.duration}
                    onChange={(e) => updateExperience(exp.id, "duration", e.target.value)} className={inputClass(false)} />
                </Field>
                {/* Company description — GulfTalent recommends for UAE CVs */}
                {isUAE && (
                  <Field label="Company Description (Recommended for UAE)">
                    <input type="text"
                      placeholder="e.g. Largest telecom provider in UAE with 5000+ employees"
                      value={exp.companyDesc}
                      onChange={(e) => updateExperience(exp.id, "companyDesc", e.target.value)}
                      className={inputClass(false)} />
                  </Field>
                )}
                <Field label="Responsibilities & Achievements">
                  <textarea placeholder={"• Led a team of 5 engineers...\n• Reduced costs by AED 500K...\n• Managed GCC-wide operations..."}
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                    rows="4" className={`${inputClass(false)} font-mono text-xs`} />
                </Field>
              </EntryCard>
            ))}
            <AddButton onClick={addExperience} label="Add Another Experience" />

            <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-100">
              <button onClick={handleDownloadClick}
                className="min-h-[48px] bg-green-600 text-white px-6 py-3 rounded-xl flex-1 text-base font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2">
                📄 Download PDF
              </button>
              <button onClick={() => setShowFullScreenPreview(true)}
                className="min-h-[48px] bg-indigo-600 text-white px-6 py-3 rounded-xl flex-1 text-base font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                👁 Preview Resume
              </button>
            </div>
          </div>

          {/* PREVIEW PANEL */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col min-h-96 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)]">

            {/* Template Tabs */}
            <div className="flex flex-wrap gap-2 mb-3 pb-3 border-b border-gray-100 overflow-x-auto">
              {TEMPLATES.map((tmpl) => (
                <button key={tmpl} onClick={() => setSelectedTemplate(tmpl)}
                  className={`min-h-[36px] text-xs px-3 py-1.5 rounded-lg transition whitespace-nowrap flex-shrink-0 font-medium ${
                    selectedTemplate === tmpl
                      ? tmpl === "UAE CV" ? "bg-amber-500 text-white" : "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}>
                  {tmpl === "UAE CV" ? "🇦🇪 UAE CV" : tmpl}
                </button>
              ))}
            </div>

            {/* Color Picker for non-UAE templates */}
            {!isUAE && (
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
                <span className="text-xs text-gray-400 font-medium whitespace-nowrap">Theme:</span>
                <div className="flex flex-wrap gap-2">
                  {COLOR_THEMES.map((theme) => (
                    <button key={theme.value} onClick={() => setThemeColor(theme.value)} title={theme.label}
                      style={{ width: "22px", height: "22px", borderRadius: "50%", background: theme.value, cursor: "pointer", flexShrink: 0,
                        border: themeColor === theme.value ? "3px solid #6366f1" : "2px solid transparent",
                        outline: themeColor === theme.value ? "2px solid #e0e7ff" : "none" }} />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">{COLOR_THEMES.find((t) => t.value === themeColor)?.label}</span>
              </div>
            )}

            {/* UAE 3-color picker */}
            {isUAE && (
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100">
                <span className="text-xs text-gray-400 font-medium whitespace-nowrap">UAE Style:</span>
                <div className="flex gap-2">
                  {UAE_THEMES.map((theme) => (
                    <button key={theme.value} onClick={() => setUaeThemeColor(theme.value)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                        uaeThemeColor === theme.value
                          ? "border-amber-400 bg-amber-50 text-amber-800"
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}>
                      <span>{theme.emoji}</span>
                      <span>{theme.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={resumeRef} className="overflow-auto flex-1">
              {renderPreviewComponent(selectedTemplate)}
            </div>
          </div>
        </div>
      </div>

      {showFullScreenPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] md:max-h-[95vh] flex flex-col">
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Resume Preview</h2>
              <button onClick={() => setShowFullScreenPreview(false)}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition text-xl">✕</button>
            </div>
            <div ref={fullScreenPreviewRef} className="overflow-auto flex-1 p-4 md:p-6 bg-gray-50">
              <div className="bg-white p-4 md:p-8 mx-auto">
                {renderPreviewComponent(selectedTemplate)}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-3 px-5 py-4 border-t border-gray-100">
              <button onClick={() => setShowFullScreenPreview(false)}
                className="min-h-[44px] bg-gray-100 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-200 order-2 sm:order-1 text-sm font-medium transition">Close</button>
              <button onClick={handlePrintFullScreen}
                className="min-h-[44px] bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 order-1 sm:order-2 text-sm font-medium transition">📄 Download PDF</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResumeBuilder() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 text-indigo-600 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <p className="text-gray-500 text-sm">Loading Resume Builder...</p>
        </div>
      </div>
    }>
      <ResumeBuilderContent />
    </Suspense>
  );
}
