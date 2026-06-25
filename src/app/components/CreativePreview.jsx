export default function CreativePreview({
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
    <div className="bg-white p-6 rounded-xl shadow">

      <div className="bg-pink-50 rounded-xl p-6 mb-6">
        {photo && (
          <div className="w-28 h-28 rounded-full overflow-hidden mb-4 mx-auto">
            <img
              src={photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-5xl font-bold text-pink-600">
          {name || "Your Name"}
        </h1>

        <p className="mt-2 text-lg">
          {jobTitle || "Creative Professional"}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2">
          Contact
        </h2>

        <p>{email || "your@email.com"}</p>
        <p>{phone || "+91 9876543210"}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2">
          Professional Summary
        </h2>
        <p>{summary || "A creative professional summary will appear here."}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2">
          Skills
        </h2>

        <p>{skills || "Skills appear here"}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2">
          Languages
        </h2>

        <p>{languages || "Languages appear here"}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2">
          Certifications
        </h2>

        <ul className="space-y-2 text-sm">
          {(certifications
            ? certifications.split(",")
            : ["AWS Certified", "Google Analytics", "PMP"]
          ).map((cert, index) => (
            <li key={index}>{cert.trim()}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2">
          Projects
        </h2>

        <p className="font-semibold">{projectName || "Project Name"}</p>
        <p>{projectDescription || "Project description goes here."}</p>
        <p className="text-sm text-gray-600">{projectTech || "Technologies used"}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2">
          Education
        </h2>

        <p>{degree || "Degree"}</p>
        <p>{college || "College/University"}</p>
        <p>{year || "Year"}</p>
      </div>

      <div>
        <h2 className="font-bold text-xl mb-2">
          Experience
        </h2>

        <p>{experience || "Experience appears here"}</p>
      </div>

    </div>
  );
}