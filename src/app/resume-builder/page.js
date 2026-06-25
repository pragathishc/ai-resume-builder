"use client";

import { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useReactToPrint } from "react-to-print";

import ATSPreview from "../components/ATSPreview";
import ModernPreview from "../components/ModernPreview";
import ExecutivePreview from "../components/ExecutivePreview";
import CreativePreview from "../components/CreativePreview";
import EuropePreview from "../components/EuropePreview";

// Loading Spinner Component
function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 text-white inline-block mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8z"
      />
    </svg>
  );
}

// Section Header Component
function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-3 mb-4 mt-6 first:mt-0">
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

// Input Field Component
function Field({ label, required, error, children }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function ResumeBuilderContent() {
  const searchParams = useSearchParams();
  const initialTemplate = searchParams.get("template") || "ATS Professional";
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);
  const [showFullScreenPreview, setShowFullScreenPreview] = useState(false);

  // Personal Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [photo, setPhoto] = useState("");

  // Job & Summary
  const [jobTitle, setJobTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState("");

  // Education
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");

  // Skills
  const [skills, setSkills] = useState("");
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [isSuggestingSkills, setIsSuggestingSkills] = useState(false);
  const [suggestSkillsError, setSuggestSkillsError] = useState("");

  // Other
  const [languages, setLanguages] = useState("");
  const [certifications, setCertifications] = useState("");

  // Projects
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTech, setProjectTech] = useState("");

  // Experience
  const [experience, setExperience] = useState("");

  // Validation errors
  const [errors, setErrors] = useState({});

  const resumeRef = useRef();
  const fullScreenPreviewRef = useRef();

  const inputClass = (field) =>
    `w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
    }`;

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email";
    if (!jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const renderPreviewComponent = (templateName) => {
    const previewProps = {
      name, email, phone, city, linkedin, portfolio,
      jobTitle, degree, college, year, photo,
      skills, languages, certifications,
      projectName, projectDescription, projectTech,
      experience, summary,
    };
    switch (templateName) {
      case "ATS Professional": return <ATSPreview {...previewProps} />;
      case "Modern Tech": return <ModernPreview {...previewProps} />;
      case "Executive": return <ExecutivePreview {...previewProps} />;
      case "Creative": return <CreativePreview {...previewProps} />;
      case "Europe CV": return <EuropePreview {...previewProps} />;
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
    if (!jobTitle.trim()) {
      setGenerateError("Enter a job title first to generate a summary.");
      return;
    }
    setGenerateError("");
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle, skills }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to generate summary.");
      }
      const data = await response.json();
      if (!data.summary) throw new Error("No summary returned from AI.");
      setSummary(data.summary);
    } catch (error) {
      setGenerateError(error?.message || "Unable to generate summary.");
    } finally {
      setIsGenerating(false);
    }
  };

  const parseSkillString = (value) =>
    value.split(",").map((s) => s.trim()).filter(Boolean);

  const formatSkillString = (skillList) =>
    [...new Set(skillList.map((s) => s.trim()))].join(", ");

  const toggleSuggestedSkill = (skill) => {
    const currentSkills = parseSkillString(skills);
    const normalized = skill.trim();
    const hasSkill = currentSkills.some(
      (e) => e.toLowerCase() === normalized.toLowerCase()
    );
    const updatedSkills = hasSkill
      ? currentSkills.filter((e) => e.toLowerCase() !== normalized.toLowerCase())
      : [...currentSkills, normalized];
    setSkills(formatSkillString(updatedSkills));
  };

  const handleSuggestSkills = async () => {
    if (!jobTitle.trim()) {
      setSuggestSkillsError("Enter a job title first to suggest skills.");
      return;
    }
    setSuggestSkillsError("");
    setIsSuggestingSkills(true);
    try {
      const response = await fetch("/api/suggest-skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to suggest skills.");
      }
      const data = await response.json();
      if (!data.skills) throw new Error("No skills returned from AI.");
      const suggested = data.skills.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 10);
      setSuggestedSkills(suggested);
    } catch (error) {
      setSuggestSkillsError(error?.message || "Unable to suggest skills.");
    } finally {
      setIsSuggestingSkills(false);
    }
  };

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${name || "resume"}`,
    onBeforePrint: () => {
      if (!validate()) return Promise.reject();
    },
  });

  const handlePrintFullScreen = useReactToPrint({
    contentRef: fullScreenPreviewRef,
    documentTitle: `${name || "resume"}`,
  });

  const handleDownloadClick = () => {
    if (validate()) handlePrint();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
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

            {/* Personal Information */}
            <SectionHeader title="Personal Information" />

            <Field label="Full Name" required error={errors.name}>
              <input
                type="text"
                placeholder="e.g. Alex Morgan"
                value={name}
                onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: "" })); }}
                className={inputClass("name")}
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Email Address" required error={errors.email}>
                <input
                  type="email"
                  placeholder="alex@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: "" })); }}
                  className={inputClass("email")}
                />
              </Field>
              <Field label="Phone Number">
                <input
                  type="text"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass("phone")}
                />
              </Field>
            </div>

            <Field label="City / Country">
              <input
                type="text"
                placeholder="e.g. Dubai, UAE"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={inputClass("city")}
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="LinkedIn URL">
                <input
                  type="url"
                  placeholder="linkedin.com/in/username"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  className={inputClass("linkedin")}
                />
              </Field>
              <Field label="Portfolio / Website">
                <input
                  type="url"
                  placeholder="yourportfolio.com"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  className={inputClass("portfolio")}
                />
              </Field>
            </div>

            <Field label="Profile Photo">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
              />
            </Field>

            {/* Target Role */}
            <SectionHeader title="Target Role" />

            <Field label="Target Job Title" required error={errors.jobTitle}>
              <input
                type="text"
                placeholder="e.g. Senior Software Engineer"
                value={jobTitle}
                onChange={(e) => { setJobTitle(e.target.value); setErrors((prev) => ({ ...prev, jobTitle: "" })); }}
                className={inputClass("jobTitle")}
              />
            </Field>

            {/* Professional Summary */}
            <SectionHeader title="Professional Summary" />

            <Field label="Summary">
              <textarea
                placeholder="Write a brief professional summary or use AI to generate one..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows="4"
                className={inputClass("summary")}
              />
            </Field>

            <div className="flex flex-col sm:flex-row items-start gap-3 mb-2">
              <button
                type="button"
                onClick={handleGenerateSummary}
                disabled={isGenerating}
                className="min-h-[44px] bg-indigo-600 text-white px-5 py-2.5 rounded-lg disabled:opacity-60 text-sm font-medium w-full sm:w-auto flex items-center justify-center hover:bg-indigo-700 transition"
              >
                {isGenerating ? (
                  <><Spinner />Generating...</>
                ) : (
                  "✨ Generate with AI"
                )}
              </button>
              {generateError && <p className="text-xs text-red-500 mt-1">{generateError}</p>}
            </div>

            {/* Education */}
            <SectionHeader title="Education" />

            <Field label="Degree / Qualification">
              <input
                type="text"
                placeholder="e.g. B.Tech Computer Science"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className={inputClass("degree")}
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="College / University">
                <input
                  type="text"
                  placeholder="e.g. MIT"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className={inputClass("college")}
                />
              </Field>
              <Field label="Graduation Year">
                <input
                  type="text"
                  placeholder="e.g. 2023"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={inputClass("year")}
                />
              </Field>
            </div>

            {/* Skills */}
            <SectionHeader title="Skills" />

            <Field label="Skills (comma separated)">
              <textarea
                placeholder="e.g. React, Node.js, Python, SQL..."
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                rows="3"
                className={inputClass("skills")}
              />
            </Field>

            <div className="flex flex-col gap-3 mb-4">
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <button
                  type="button"
                  onClick={handleSuggestSkills}
                  disabled={isSuggestingSkills}
                  className="min-h-[44px] bg-indigo-600 text-white px-5 py-2.5 rounded-lg disabled:opacity-60 text-sm font-medium w-full sm:w-auto flex items-center justify-center hover:bg-indigo-700 transition"
                >
                  {isSuggestingSkills ? (
                    <><Spinner />Suggesting...</>
                  ) : (
                    "🎯 Suggest Skills"
                  )}
                </button>
                {suggestSkillsError && <p className="text-xs text-red-500">{suggestSkillsError}</p>}
              </div>

              {suggestedSkills.length > 0 && (
                <div>
                  <p className="text-xs text-gray-500 mb-2">Click to add or remove skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedSkills.map((skill) => {
                      const currentSkills = parseSkillString(skills);
                      const selected = currentSkills.some(
                        (e) => e.toLowerCase() === skill.toLowerCase()
                      );
                      return (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => toggleSuggestedSkill(skill)}
                          className={`min-h-[36px] text-xs sm:text-sm px-3 py-1.5 rounded-full border transition active:scale-95 ${
                            selected
                              ? "bg-indigo-600 text-white border-indigo-600"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:border-indigo-300"
                          }`}
                        >
                          {selected ? "✓ " : "+ "}{skill}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <SectionHeader title="Additional Information" />

            <Field label="Languages (comma separated)">
              <textarea
                placeholder="e.g. English, Arabic, French"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                rows="2"
                className={inputClass("languages")}
              />
            </Field>

            <Field label="Certifications (comma separated)">
              <input
                type="text"
                placeholder="e.g. AWS Certified, PMP, Google Analytics"
                value={certifications}
                onChange={(e) => setCertifications(e.target.value)}
                className={inputClass("certifications")}
              />
            </Field>

            {/* Projects */}
            <SectionHeader title="Projects" />

            <Field label="Project Name">
              <input
                type="text"
                placeholder="e.g. E-Commerce Platform"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className={inputClass("projectName")}
              />
            </Field>

            <Field label="Project Description">
              <textarea
                placeholder="Describe what the project does and your role..."
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                rows="3"
                className={inputClass("projectDescription")}
              />
            </Field>

            <Field label="Technologies Used">
              <input
                type="text"
                placeholder="e.g. React, Node.js, MongoDB"
                value={projectTech}
                onChange={(e) => setProjectTech(e.target.value)}
                className={inputClass("projectTech")}
              />
            </Field>

            {/* Work Experience */}
            <SectionHeader title="Work Experience" />

            <Field label="Experience">
              <textarea
                placeholder={`Company Name — Job Title (Year - Year)\n• Key achievement or responsibility\n• Another achievement\n\nCompany Name — Job Title (Year - Year)\n• Key achievement or responsibility`}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                rows="8"
                className={`${inputClass("experience")} font-mono text-xs`}
              />
            </Field>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-100">
              <button
                onClick={handleDownloadClick}
                className="min-h-[48px] bg-green-600 text-white px-6 py-3 rounded-xl flex-1 text-base font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                📄 Download PDF
              </button>
              <button
                onClick={() => setShowFullScreenPreview(true)}
                className="min-h-[48px] bg-indigo-600 text-white px-6 py-3 rounded-xl flex-1 text-base font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                👁 Preview Resume
              </button>
            </div>
          </div>

          {/* PREVIEW */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col min-h-96 lg:min-h-screen lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)]">
            <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-gray-100 overflow-x-auto">
              {["ATS Professional", "Modern Tech", "Executive", "Creative", "Europe CV"].map((tmpl) => (
                <button
                  key={tmpl}
                  onClick={() => setSelectedTemplate(tmpl)}
                  className={`min-h-[36px] text-xs md:text-sm px-3 py-1.5 rounded-lg transition whitespace-nowrap flex-shrink-0 font-medium ${
                    selectedTemplate === tmpl
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tmpl}
                </button>
              ))}
            </div>
            <div ref={resumeRef} className="overflow-auto flex-1">
              {renderPreviewComponent(selectedTemplate)}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Preview Modal */}
      {showFullScreenPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] md:max-h-[95vh] flex flex-col">
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Resume Preview</h2>
              <button
                onClick={() => setShowFullScreenPreview(false)}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition text-xl"
              >
                ✕
              </button>
            </div>
            <div ref={fullScreenPreviewRef} className="overflow-auto flex-1 p-4 md:p-6 bg-gray-50">
              <div className="bg-white p-4 md:p-8 mx-auto">
                {renderPreviewComponent(selectedTemplate)}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-3 px-5 py-4 border-t border-gray-100">
              <button
                onClick={() => setShowFullScreenPreview(false)}
                className="min-h-[44px] bg-gray-100 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-200 order-2 sm:order-1 text-sm font-medium transition"
              >
                Close
              </button>
              <button
                onClick={handlePrintFullScreen}
                className="min-h-[44px] bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 order-1 sm:order-2 text-sm font-medium transition"
              >
                📄 Download PDF
              </button>
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
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          <p className="text-gray-500 text-sm">Loading Resume Builder...</p>
        </div>
      </div>
    }>
      <ResumeBuilderContent />
    </Suspense>
  );
}
