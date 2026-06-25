export default function ATSResume() {
  return (
    <div className="bg-white max-w-5xl mx-auto p-10">

      <h1 className="text-5xl font-bold uppercase">
        Full Name
      </h1>

      <p className="text-xl text-gray-600 mt-2">
        Professional Title
      </p>

      <hr className="mt-4" />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">
          Professional Summary
        </h2>

        <p>
          A brief professional summary statement that highlights
          your key skills, experience, achievements and career goals.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

          <div className="bg-gray-100 p-2 rounded text-center">Skill One</div>
          <div className="bg-gray-100 p-2 rounded text-center">Skill Two</div>
          <div className="bg-gray-100 p-2 rounded text-center">Skill Three</div>
          <div className="bg-gray-100 p-2 rounded text-center">Skill Four</div>
          <div className="bg-gray-100 p-2 rounded text-center">Skill Five</div>

        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">
          Work Experience
        </h2>

        <p>Senior Position - Company Name</p>
        <p>Previous Position - Company Name</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">
          Education
        </h2>

        <p>Bachelor Degree</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">
          Certifications
        </h2>

        <ul className="list-disc pl-5">
          <li>Certification One</li>
          <li>Certification Two</li>
          <li>Certification Three</li>
        </ul>
      </div>

    </div>
  );
}