export default function ATSPreview({
  name,
  jobTitle,
  email,
  phone,
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
    <div className="bg-white p-8 rounded-xl shadow border">

      {photo && (
        <div className="flex justify-center mb-6">
          <img
            src={photo}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold">
        {name || "Your Name"}
      </h1>

      <p className="text-gray-600 mb-4">
        {jobTitle || "Job Title"}
      </p>

      <div className="mb-6">
        <h2 className="font-bold text-lg mb-2">Professional Summary</h2>
        <p className="text-gray-700">
          {summary || "A polished professional summary will appear here."}
        </p>
      </div>

      <hr className="mb-4" />

      <h2 className="font-bold text-lg mb-2">
        Contact
      </h2>

      <p>{email || "your@email.com"}</p>
      <p>{phone || "+91 9876543210"}</p>

      <div className="mt-6">
        <h2 className="font-bold text-lg mb-2">
          Skills
        </h2>

        <p>
          {skills || "Skills will appear here"}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-lg mb-2">
          Languages
        </h2>

        <p>
          {languages || "Languages will appear here"}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-lg mb-2">
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

      <div className="mt-6">
        <h2 className="font-bold text-lg mb-2">
          Education
        </h2>

        <p>{degree || "Degree"}</p>
        <p>{college || "College/University"}</p>
        <p>{year || "Year"}</p>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-lg mb-2">
          Projects
        </h2>

        <p className="font-semibold">{projectName || "Project Name"}</p>
        <p>{projectDescription || "Project description goes here."}</p>
        <p className="text-sm text-gray-600">
          {projectTech || "Technologies used"}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-lg mb-2">
          Experience
        </h2>

        <p>
          {experience || "Experience will appear here"}
        </p>
      </div>

    </div>
  );
}