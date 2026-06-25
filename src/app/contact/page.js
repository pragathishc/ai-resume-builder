export const metadata = {
  title: "Contact Us | Resume Helper AI",
  description: "Get in touch with the Resume Helper AI team.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">

        <div className="mb-12">
          <a href="/" className="text-blue-600 hover:underline text-sm mb-8 block">← Back to Resume Helper AI</a>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-500">We are here to help. Send us a message and we will get back to you.</p>
        </div>

        <div className="space-y-8 text-gray-700">

          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">Email</h2>
              <a href="mailto:pragathish031994@gmail.com" className="text-blue-600 hover:underline">pragathish031994@gmail.com</a>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">Website</h2>
              <a href="https://resumehelperai.com" className="text-blue-600 hover:underline">resumehelperai.com</a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">What can we help with?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bug reports or technical issues</li>
              <li>Feature suggestions or feedback</li>
              <li>Questions about privacy or your data</li>
              <li>Partnership or advertising enquiries</li>
              <li>General questions about Resume Helper AI</li>
            </ul>
          </div>

          <div className="bg-violet-50 rounded-xl p-6">
            <h2 className="font-semibold text-gray-900 mb-2">Response Time</h2>
            <p className="text-gray-700">We typically respond within 1 to 2 business days. For urgent technical issues, please include as much detail as possible — your browser, device, and what you were doing when the issue occurred.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Looking for something specific?</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/privacy" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition text-center">Privacy Policy</a>
              <a href="/about" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition text-center">About Us</a>
              <a href="/resume-builder" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-center">Build My Resume</a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}