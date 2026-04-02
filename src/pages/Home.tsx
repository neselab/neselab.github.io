import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import NewsSection from "@/components/NewsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean and Minimal */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-blue-50/40 via-white to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-tight">
                Neurosymbolic Software
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Engineering Lab
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Combining neural learning with symbolic reasoning to build reliable,
              verifiable software systems
            </p>
          </div>
        </div>
      </section>

      {/* Research Highlights - Minimal Cards */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50/40 via-blue-50/20 to-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Research Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.highlights.map((item, index) => (
              <div key={index} className="space-y-3 p-6 rounded-lg hover:bg-white/60 transition-all group">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/research"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
            >
              View all research areas
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">About</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="leading-relaxed mb-4">
                  The Neurosymbolic Software Engineering (NeSE) Lab develops methods that combine
                  neural learning with symbolic reasoning to create more reliable and verifiable
                  software systems.
                </p>
                <p className="leading-relaxed mb-4">
                  Our research bridges machine learning and formal methods, focusing on critical
                  challenges in software verification, access control policy analysis, and ensuring
                  the safety of AI systems deployed in high-stakes environments.
                </p>
                <p className="leading-relaxed">
                  We work at the intersection of theory and practice, developing tools and techniques
                  that provide formal guarantees while leveraging the power of modern AI systems.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Principal Investigator</h2>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg font-medium text-gray-900">{siteConfig.pi.name}</p>
                <p>{siteConfig.pi.title}</p>
                <p>{siteConfig.pi.department}</p>
                <p>{siteConfig.pi.university}</p>
                <a
                  href={`mailto:${siteConfig.pi.email}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline inline-block mt-2"
                >
                  {siteConfig.pi.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates - Dynamic */}
      <NewsSection />
    </div>
  );
};

export default Home;
