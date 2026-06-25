"use client";

import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useReactToPrint } from "react-to-print";

import ATSPreview from "../components/ATSPreview";
import ModernPreview from "../components/ModernPreview";
import ExecutivePreview from "../components/ExecutivePreview";
import CreativePreview from "../components/CreativePreview";
import EuropePreview from "../components/EuropePreview";

export default function ResumeBuilder() {
  const searchParams = useSearchParams();
  const initialTemplate = searchParams.get("template") || "ATS Professional";
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);
  const [showFullScreenPreview, setShowFullScreenPreview] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [photo, setPhoto] = useState("");
  const [skills, setSkills] = useState("");
  const [languages, setLanguages] = useState("");
  const [certifications, setCertifications] = useState("");
  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState("");
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [isSuggestingSkills, setIsSuggestingSkills] = useState(false);
  const [suggestSkillsError, setSuggestSkillsError] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTech, setProjectTech] = useState("");
  const [experience, setExperience] = useState("");
  const resumeRef = useRef();
  const fullScreenPreviewRef = useRef();
  
  const renderPreviewComponent = (templateName) => {
    const previewProps = {
      name,
      email,
      phone,
      jobTitle,
      degree,
      college,
      year,
      photo,
      skills,
      languages,
      certifications,
      projectName,
      projectDescription,
      projectTech,
      experience,
      summary,
    };

    switch (templateName) {
      case "ATS Professional":
        return <ATSPreview {...previewProps} />;
      case "Modern Tech":
        return <ModernPreview {...previewProps} />;
      case "Executive":
        return <ExecutivePreview {...previewProps} />;
      case "Creative":
        return <CreativePreview {...previewProps} />;
      case "Europe CV":
        return <EuropePreview {...previewProps} />;
      default:
        return <ATSPreview {...previewProps} />;
    }
  };
  
  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateSummary = async () => {
    setGenerateError("");
    setIsGenerating(true);

    try {
      const response = await fetch("/api/generate-summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobTitle, skills }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to generate summary.");
      }

      const data = await response.json();
      if (!data.summary) {
        throw new Error("No summary returned from AI.");
      }

      setSummary(data.summary);
    } catch (error) {
      setGenerateError(error?.message || "Unable to generate summary.");
    } finally {
      setIsGenerating(false);
    }
  };

  const parseSkillString = (value) =>
    value
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

  const formatSkillString = (skillList) =>
    [...new Set(skillList.map((skill) => skill.trim()))].join(", ");

  const toggleSuggestedSkill = (skill) => {
    const currentSkills = parseSkillString(skills);
    const normalized = skill.trim();
    const hasSkill = currentSkills.some(
      (existing) => existing.toLowerCase() === normalized.toLowerCase()
    );

    const updatedSkills = hasSkill
      ? currentSkills.filter(
          (existing) => existing.toLowerCase() !== normalized.toLowerCase()
        )
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobTitle }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to suggest skills.");
      }

      const data = await response.json();
      if (!data.skills) {
        throw new Error("No skills returned from AI.");
      }

      const suggested = data.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
        .slice(0, 10);

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
  });

  const handlePrintFullScreen = useReactToPrint({
    contentRef: fullScreenPreviewRef,
    documentTitle: `${name || "resume"}`,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">

        {/* FORM */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <label className="block mb-4 text-sm text-gray-700">
            Profile Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full text-sm text-gray-700 mb-4"
          />

          <input
            type="text"
            placeholder="Target Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <textarea
            placeholder="Professional Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows="4"
            className="w-full border p-3 md:p-3 rounded mb-3 text-base"
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
            <button
              type="button"
              onClick={handleGenerateSummary}
              disabled={isGenerating}
              className="bg-indigo-600 text-white px-4 py-2 sm:py-2 rounded-lg disabled:opacity-60 text-sm sm:text-base whitespace-nowrap w-full sm:w-auto"
            >
              {isGenerating ? "Generating..." : "Generate with AI"}
            </button>
            {generateError && (
              <p className="text-xs sm:text-sm text-red-600">{generateError}</p>
            )}
          </div>

          <input
            type="text"
            placeholder="Degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <input
            type="text"
            placeholder="College"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <input
            type="text"
            placeholder="Graduation Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <textarea
            placeholder="Skills (comma separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            rows="4"
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <div className="flex flex-col gap-3 mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                type="button"
                onClick={handleSuggestSkills}
                disabled={isSuggestingSkills}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg disabled:opacity-60 text-sm sm:text-base whitespace-nowrap w-full sm:w-auto"
              >
                {isSuggestingSkills ? "Suggesting..." : "Suggest Skills"}
              </button>
              {suggestSkillsError && (
                <p className="text-xs sm:text-sm text-red-600">{suggestSkillsError}</p>
              )}
            </div>

            {suggestedSkills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((skill) => {
                  const currentSkills = parseSkillString(skills);
                  const selected = currentSkills.some(
                    (existing) =>
                      existing.toLowerCase() === skill.toLowerCase()
                  );

                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSuggestedSkill(skill)}
                      className={`text-xs sm:text-sm px-3 py-2 sm:py-1 rounded-full border transition active:scale-95 ${
                        selected
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-gray-100 text-gray-700 border-gray-300"
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <textarea
            placeholder="Languages (comma separated)"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            rows="3"
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <input
            type="text"
            placeholder="Certifications (comma separated)"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <textarea
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            rows="4"
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <input
            type="text"
            placeholder="Technologies Used"
            value={projectTech}
            onChange={(e) => setProjectTech(e.target.value)}
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <textarea
            placeholder="Work Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            rows="6"
            className="w-full border p-3 md:p-3 rounded mb-4 text-base"
          />

          <div className="space-y-3"></div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full mb-3 text-base font-medium">
            Generate Resume
          </button>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handlePrint}
              className="bg-green-600 text-white px-6 py-3 rounded-lg flex-1 text-base font-medium"
            >
              Download PDF
            </button>
            <button
              onClick={() => setShowFullScreenPreview(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg flex-1 text-base font-medium"
            >
              Preview Resume
            </button>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="bg-white p-3 md:p-4 rounded-xl shadow flex flex-col h-auto md:h-full min-h-96 md:min-h-screen">
          {/* Template Switcher */}
          <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b overflow-x-auto">
            {["ATS Professional", "Modern Tech", "Executive", "Creative", "Europe CV"].map(
              (tmpl) => (
                <button
                  key={tmpl}
                  onClick={() => setSelectedTemplate(tmpl)}
                  className={`text-xs md:text-sm px-3 py-2 rounded transition whitespace-nowrap flex-shrink-0 font-medium ${
                    selectedTemplate === tmpl
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tmpl}
                </button>
              )
            )}
          </div>

          {/* Preview Content */}
          <div
            ref={resumeRef}
            className="overflow-auto flex-1"
          >
            {renderPreviewComponent(selectedTemplate)}
          </div>
        </div>
      </div>

      {/* Full-Screen Preview Modal */}
      {showFullScreenPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg md:rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] md:max-h-[95vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 md:p-6 border-b">
              <h2 className="text-lg md:text-2xl font-bold">Preview Resume</h2>
              <button
                onClick={() => setShowFullScreenPreview(false)}
                className="text-gray-500 hover:text-gray-700 text-xl md:text-2xl p-2 -mr-2"
              >
                ✕
              </button>
            </div>

            {/* Modal Content - Preview */}
            <div
              ref={fullScreenPreviewRef}
              className="overflow-auto flex-1 p-4 md:p-6 bg-gray-50"
            >
              <div className="bg-white p-4 md:p-8 mx-auto">
                {renderPreviewComponent(selectedTemplate)}
              </div>
            </div>

            {/* Modal Footer - Download Button */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 p-4 md:p-6 border-t bg-gray-100">
              <button
                onClick={() => setShowFullScreenPreview(false)}
                className="bg-gray-400 text-white px-6 py-2 md:py-3 rounded-lg hover:bg-gray-500 order-2 sm:order-1 text-sm md:text-base"
              >
                Close
              </button>
              <button
                onClick={handlePrintFullScreen}
                className="bg-green-600 text-white px-6 py-2 md:py-3 rounded-lg hover:bg-green-700 order-1 sm:order-2 text-sm md:text-base"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}