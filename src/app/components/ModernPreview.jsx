export default function ModernPreview({
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
  summary,
  projectName,
  projectDescription,
  projectTech,
  experience,
}) {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden flex">

      {/* Left Sidebar */}
      <div className="w-1/3 bg-blue-700 text-white p-6">

        <div className="w-24 h-24 rounded-full overflow-hidden bg-white mx-auto mb-6">
          {photo ? (
            <img
              src={photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-blue-700 font-bold">
              PHOTO
            </div>
          )}
        </div>

        <h3 className="font-bold mb-3">Contact</h3>

        <p className="text-sm mb-2">
          {email || "your@email.com"}
        </p>

        <p className="text-sm mb-6">
          {phone || "+91 9876543210"}
        </p>

        <h3 className="font-bold mb-3">
          Skills
        </h3>

        <ul className="space-y-2 text-sm">
          {(skills
            ? skills.split(",")
            : ["React", "Next.js", "JavaScript"]
          ).map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>

        <h3 className="font-bold mb-3 mt-6">
          Languages
        </h3>

        <ul className="space-y-2 text-sm">
          {(languages
            ? languages.split(",")
            : ["English", "Tamil", "Arabic"]
          ).map((language, index) => (
            <li key={index}>{language.trim()}</li>
          ))}
        </ul>

        <h3 className="font-bold mb-3 mt-6">
          Certifications
        </h3>

        <ul className="space-y-2 text-sm">
          {(certifications
            ? certifications.split(",")
            : ["AWS Certified", "Google Analytics", "PMP"]
          ).map((cert, index) => (
            <li key={index}>{cert.trim()}</li>
          ))}
        </ul>

      </div>

      {/* Right Content */}
      <div className="w-2/3 p-6">

        <h1 className="text-4xl font-bold">
          {name || "Your Name"}
        </h1>

        <p className="text-gray-600 mb-6">
          {jobTitle || "Professional Title"}
        </p>

        <h2 className="font-bold text-xl mb-3">
          Professional Summary
        </h2>

        <p className="text-gray-600 mb-6">
          {summary || "A concise professional summary will appear here."}
        </p>

        <h2 className="font-bold text-xl mb-3">
          Education
        </h2>

        <p className="text-gray-600">
          {degree || "Degree"} • {college || "College/University"} • {year || "Year"}
        </p>

        <h2 className="font-bold text-xl mb-3">
          Projects
        </h2>

        <p className="font-semibold text-gray-900">
          {projectName || "Project Name"}
        </p>

        <p className="text-gray-600 mb-3">
          {projectDescription || "Project description goes here."}
        </p>

        <p className="text-gray-600">
          {projectTech || "Technologies used"}
        </p>

        <h2 className="font-bold text-xl mb-3">
          Experience
        </h2>

        <p className="text-gray-600">
          {experience || "Experience will appear here"}
        </p>

      </div>

    </div>
  );
}