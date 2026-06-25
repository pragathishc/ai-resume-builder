export default function ExecutivePreview({
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
    <div className="bg-white p-8">

      {photo && (
        <div className="flex justify-center mb-6">
          <img
            src={photo}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
      )}

      <h1 className="text-5xl font-bold text-amber-700">
        {name || "Executive Resume"}
      </h1>

      <p className="text-lg mt-2">
        {jobTitle || "Senior Management Profile"}
      </p>

      <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">Professional Summary</h2>
        <p>{summary || "A concise executive summary will appear here."}</p>
      </div>

      <hr className="my-4" />

      <h2 className="font-bold text-xl mb-2">Contact</h2>

      <p>{email || "email@example.com"}</p>
      <p>{phone || "+91 9876543210"}</p>

      <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">Skills</h2>
        <p>{skills || "Skills appear here"}</p>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">Languages</h2>
        <p>{languages || "Languages appear here"}</p>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">Certifications</h2>
        <ul className="space-y-2 text-sm">
          {(certifications
            ? certifications.split(",")
            : ["AWS Certified", "Google Analytics", "PMP"]
          ).map((cert, index) => (
            <li key={index}>{cert.trim()}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">Education</h2>
        <p>{degree || "Degree"}</p>
        <p>{college || "College/University"}</p>
        <p>{year || "Year"}</p>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">Projects</h2>
        <p className="font-semibold">{projectName || "Project Name"}</p>
        <p>{projectDescription || "Project description goes here."}</p>
        <p className="text-sm text-gray-600">{projectTech || "Technologies used"}</p>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">Experience</h2>
        <p>{experience || "Experience appears here"}</p>
      </div>

    </div>
  );
}