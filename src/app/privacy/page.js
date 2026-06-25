export const metadata = {
  title: "Privacy Policy | Resume Helper AI",
  description: "How Resume Helper AI collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="text-blue-600 hover:underline text-sm mb-8 block">
            ← Back to Resume Helper AI
          </a>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last updated: June 24, 2026</p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          <p>
            This Privacy Policy explains how <strong>Resume Helper AI</strong> ("we", "our", "us") 
            collects, uses, and protects information when you use our website and resume builder 
            tool at <strong>resumehelperai.com</strong> (the "Service"). By using the Service, 
            you agree to the practices described below.
          </p>

          <p>
            We operate this Service from India and serve users globally, including India and the 
            United Arab Emirates. We aim to comply with applicable data protection laws, including 
            India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the UAE's Personal 
            Data Protection Law (Federal Decree-Law No. 45 of 2021), where applicable.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              1. Information You Provide
            </h2>
            <p>
              Our resume builder lets you enter personal details to create a resume, such as your 
              name, email address, phone number, photo, work experience, education, skills, 
              languages, certifications, and projects. <strong>This information is processed in 
              your browser to generate your resume in real time. We do not require you to create 
              an account, and we do not store your resume content on our servers.</strong>
            </p>
            <p className="mt-3">
              When you click "Generate with AI" or "Suggest Skills," limited information from 
              your resume (such as your job title and skills) is sent to Google's Gemini API 
              to generate suggestions. This information is processed by Google in accordance 
              with Google's terms and privacy policies.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              2. Information Collected Automatically
            </h2>
            <p>When you visit our Service, we and our service providers may automatically collect:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Basic device and browser information (browser type, operating system, device type)</li>
              <li>IP address and approximate location (such as country and city)</li>
              <li>Pages visited, time spent on pages, and referring website</li>
              <li>Cookies and similar tracking technologies (see Section 5)</li>
            </ul>
            <p className="mt-3">
              This information helps us understand how the Service is used, fix problems, 
              and improve the experience.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              3. How We Use Information
            </h2>
            <p>We use the information described above to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Operate and maintain the resume builder</li>
              <li>Generate AI-powered content suggestions through Google Gemini</li>
              <li>Analyze usage patterns to improve the Service</li>
              <li>Display advertisements through Google AdSense</li>
              <li>Detect, prevent, and address technical issues and misuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              4. Third-Party Services
            </h2>
            <p>
              We use trusted third-party services to operate the Service. These providers may 
              collect or receive information about your use of our site as described in their 
              own privacy policies.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Google AdSense</h3>
                <p className="mt-1">
                  We use Google AdSense to display advertisements. Google and its advertising 
                  partners may use cookies and similar technologies to serve ads based on your 
                  prior visits to this and other websites. You can opt out of personalized 
                  advertising by visiting Google's Ads Settings at{" "}
                  <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    adssettings.google.com
                  </a>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Google Gemini API</h3>
                <p className="mt-1">
                  We use Google's Gemini API to power our AI summary and skill-suggestion 
                  features. Limited resume information you choose to submit (such as job title 
                  and skills) is sent to Google for processing. We do not send your name, 
                  email, phone number, or full resume to the AI service.
                </p>
              </div>
            </div>
            <p className="mt-4">
              You can review Google's privacy practices at{" "}
              <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                policies.google.com/privacy
              </a>.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              We and our advertising partners use cookies and similar technologies to remember 
              your preferences, measure how the Service is used, and show advertisements. You 
              can control cookies through your browser settings. Disabling cookies may affect 
              parts of the Service.
            </p>
            <p className="mt-3">
              Under Google's policies, third-party vendors including Google use cookies to serve 
              ads based on a user's prior visits to our website or other websites. Users may opt 
              out of personalized advertising by visiting{" "}
              <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                adssettings.google.com
              </a>.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              6. Data Retention
            </h2>
            <p>
              Because resumes are processed in your browser and not stored on our servers, 
              your resume content is not retained by us after you close your browser. Limited 
              usage data (such as analytics and cookie data) may be retained by our service 
              providers in line with their own retention policies.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              7. Your Rights
            </h2>
            <p>
              Depending on your location, you may have rights regarding your personal data, 
              including the right to access, correct, erase, restrict, or object to processing. 
              To exercise these rights, contact us at{" "}
              <a href="mailto:contact@resumehelperai.com" className="text-blue-600 hover:underline">
                contact@resumehelperai.com
              </a>.
            </p>
            <div className="mt-4 space-y-3">
              <p>
                <strong>Users in India</strong> — You have rights under the Digital Personal 
                Data Protection Act, 2023, including the right to access, correct, and erase 
                your personal data.
              </p>
              <p>
                <strong>Users in the UAE</strong> — You have rights under the UAE Personal 
                Data Protection Law (Federal Decree-Law No. 45 of 2021), including the right 
                to access, rectify, erase, restrict, or object to processing of your personal data.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              8. Children's Privacy
            </h2>
            <p>
              The Service is not directed at children under 13. We do not knowingly collect 
              personal information from children under 13. If you believe a child has provided 
              personal information through our Service, please contact us so we can remove it.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              9. Security
            </h2>
            <p>
              We use reasonable technical and organizational measures to protect information 
              processed through the Service. However, no method of transmission over the 
              internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update 
              the "Last updated" date at the top of this page. We encourage you to review this 
              policy periodically.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg">
              <p><strong>Email:</strong>{" "}
                <a href="mailto:contact@resumehelperai.com" className="text-blue-600 hover:underline">
                  contact@resumehelperai.com
                </a>
              </p>
              <p className="mt-1"><strong>Website:</strong> https://resumehelperai.com</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}