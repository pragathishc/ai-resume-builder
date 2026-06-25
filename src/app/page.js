import Link from "next/link";
import ScrollAnimationClient from "./components/ScrollAnimationClient";

export default function Home() {
  const templates = [
    { name: "ATS Professional", color: "from-blue-400 to-blue-600" },
    { name: "Modern Tech", color: "from-purple-400 to-purple-600" },
    { name: "Executive", color: "from-amber-400 to-amber-600" },
    { name: "Creative", color: "from-pink-400 to-pink-600" },
    { name: "Europe CV", color: "from-green-400 to-green-600" },
  ];

  const features = [
    { icon: "✨", title: "AI Summary Generator", desc: "Auto-generate professional summaries" },
    { icon: "🎯", title: "AI Skill Suggestions", desc: "Get role-matched skill recommendations" },
    { icon: "🤖", title: "ATS-Friendly", desc: "Optimized for applicant tracking systems" },
    { icon: "🎨", title: "5 Templates", desc: "Professional designs for any industry" },
    { icon: "📄", title: "PDF Download", desc: "Export instantly to PDF" },
    { icon: "🔓", title: "No Login Required", desc: "Start building in seconds" },
  ];

  const howItWorks = [
    { step: "1", title: "Pick a Template", desc: "Choose from 5 professionally designed templates tailored for different industries" },
    { step: "2", title: "Fill with AI Help", desc: "Enter your details and let AI generate summaries and suggest skills" },
    { step: "3", title: "Download PDF", desc: "Download your resume instantly or switch templates to compare" },
  ];

  const faqs = [
    { q: "Is it completely free?", a: "Yes! Resume Helper AI is 100% free to use. Create unlimited resumes with no hidden charges." },
    { q: "Do I need to sign up?", a: "No sign-up required. Start building your resume immediately, no account needed." },
    { q: "Is it ATS-friendly?", a: "Absolutely. All our templates are optimized for Applicant Tracking Systems used by recruiters." },
    { q: "Can I edit the AI-generated content?", a: "Of course! Everything is fully editable. Use AI as a starting point and customize to your needs." },
    { q: "Can I switch templates later?", a: "Yes! Use our template switcher to preview all 5 designs with your data and choose the best one." },
    { q: "What countries/formats do you support?", a: "We support resume formats for India, UAE, Canada, UK, and Europe with localized best practices." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <ScrollAnimationClient />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Resume Helper AI
          </h1>
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#templates" className="hover:text-gray-900 transition">Templates</a>
            <a href="#how" className="hover:text-gray-900 transition">How it works</a>
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
          </nav>
          <Link href="/resume-builder">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-violet-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="fade-in-scroll">
              <div className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
                Free Online Resume Builder
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Land More Interviews — Free AI Resume Builder
              </h1>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Create a professional resume in minutes. Choose from modern, ATS-friendly templates designed by hiring experts.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                AI-powered summaries and skill suggestions. No sign-up required. Export to PDF instantly.
              </p>
              <Link href="/resume-builder">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg">
                  Get Started Free
                </button>
              </Link>
            </div>

            {/* Right Column - Resume Mockup */}
            <div className="fade-in-scroll md:flex justify-center hidden">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm transform hover:shadow-3xl transition-shadow duration-300">
                {/* Resume Container */}
                <div className="flex">
                  {/* Left Sidebar */}
                  <div className="w-1/3 bg-gray-900 text-white p-6 flex flex-col">
                    {/* Photo Circle */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 mx-auto mb-4 flex-shrink-0" />
                    
                    <h3 className="text-sm font-bold mb-6 text-center">Contact</h3>
                    <p className="text-xs text-gray-300 mb-3">alex@email.com</p>
                    <p className="text-xs text-gray-300 mb-6">+1 (555) 123-4567</p>

                    <h3 className="text-sm font-bold mb-2">Profile</h3>
                    <p className="text-xs text-gray-300 mb-6 leading-tight">Product Designer with 5+ years creating user-centered experiences.</p>

                    <h3 className="text-sm font-bold mb-2">Languages</h3>
                    <p className="text-xs text-gray-300">English, Spanish</p>
                  </div>

                  {/* Right Content */}
                  <div className="w-2/3 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Alex Morgan</h2>
                    <p className="text-sm text-gray-600 mb-4">Product Designer</p>

                    <div className="mb-4">
                      <h3 className="text-xs font-bold text-gray-900 mb-2">Experience</h3>
                      <p className="text-xs text-gray-700 mb-2"><strong>Sr. Product Designer</strong></p>
                      <p className="text-xs text-gray-600">2022 - Present</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xs font-bold text-gray-900 mb-2">Education</h3>
                      <p className="text-xs text-gray-700"><strong>B.A. Design</strong></p>
                      <p className="text-xs text-gray-600">University · 2019</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-gray-900 mb-2">Skills</h3>
                      <p className="text-xs text-gray-700">Figma, UX Research, Prototyping</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="fade-in-scroll">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="font-semibold text-gray-900 mb-1">First Resume, Free Forever</h3>
              <p className="text-sm text-gray-600">No credit card needed. Build unlimited resumes at no cost.</p>
            </div>
            <div className="fade-in-scroll">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-1">Privacy Compliant</h3>
              <p className="text-sm text-gray-600">Your data is yours. We never sell or share your information.</p>
            </div>
            <div className="fade-in-scroll">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-1">Professional Templates</h3>
              <p className="text-sm text-gray-600">5 expertly designed templates optimized for ATS systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space 1 - Below Hero */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
          <p className="text-sm font-semibold">Advertisement</p>
        </div>
      </section>

      {/* Templates Showcase */}
      <section id="templates" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 fade-in-scroll">
            5 Professional Templates
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {templates.map((template, idx) => (
              <Link
                key={template.name}
                href={`/resume-builder?template=${encodeURIComponent(template.name)}`}
              >
                <div 
                  className="fade-in-scroll bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer group"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`bg-gradient-to-br ${template.color} h-32 flex items-center justify-center text-white text-2xl font-bold`}>
                    {template.name.split(" ")[0]}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-center text-gray-900 group-hover:text-gray-700">
                      {template.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 fade-in-scroll">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, idx) => (
              <div 
                key={idx} 
                className="fade-in-scroll bg-white rounded-lg p-8 border border-gray-200"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space 2 - Middle */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
          <p className="text-sm font-semibold">Advertisement</p>
        </div>
      </section>

      {/* Features Strip */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 fade-in-scroll">
            Why Choose Resume Helper AI
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="fade-in-scroll bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-md transition"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 fade-in-scroll">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="fade-in-scroll bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 cursor-pointer transition group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <summary className="font-semibold text-lg text-gray-900 group-hover:text-gray-700 transition flex justify-between items-center">
                  {faq.q}
                  <span className="text-xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center fade-in-scroll">
        <div className="bg-gray-900 rounded-lg p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Resume?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Start for free. No credit card. No sign-up. Export to PDF instantly.
          </p>
          <Link href="/resume-builder">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg">
              Create Your Resume Now
            </button>
          </Link>
        </div>
      </section>

      {/* Ad Space 3 - Footer */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
          <p className="text-sm font-semibold">Advertisement</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2024 Resume Helper AI. Build professional resumes for free. No sign-up required.</p>
        </div>
      </footer>
    </main>
  );
}

