import React from "react";
import { FiSettings, FiLayers, FiTool, FiFileText, FiBarChart2, FiShield, FiClock, FiUsers } from "react-icons/fi";

const services = [
  {
    icon: <FiSettings className="w-8 h-8" />,
    title: "Structural Steel Detailing",
    description: "Comprehensive 3D modeling and detailed drawings for structural steel components including beams, columns, and connections.",
    features: ["3D Modeling", "Connection Details", "Erection Drawings"]
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: "Miscellaneous Steel Detailing", 
    description: "Specialized detailing for miscellaneous steel items including stairs, railings, platforms, and architectural elements.",
    features: ["Architectural Steel", "Custom Fabrication", "Precision Details"]
  },
  {
    icon: <FiTool className="w-8 h-8" />,
    title: "Pipe Rack Support Structure",
    description: "Expert design and detailing of pipe rack systems and support structures for industrial and commercial applications.",
    features: ["Industrial Design", "Support Systems", "Load Analysis"]
  },
  {
    icon: <FiFileText className="w-8 h-8" />,
    title: "Advanced Bill of Material",
    description: "Detailed material takeoffs and comprehensive bills of material for accurate project estimation and procurement.",
    features: ["Material Lists", "Cost Estimation", "Procurement Support"]
  }
];

const projects = [
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    title: "Commercial Buildings",
    description: "Modern office complexes and commercial structures",
    category: "Commercial",
    stats: "50+ Projects"
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    title: "Multi-Story Buildings",
    description: "High-rise residential and mixed-use developments", 
    category: "Residential",
    stats: "25+ Stories"
  },
  {
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    title: "Educational Facilities",
    description: "Schools, colleges and educational institutions",
    category: "Institutional", 
    stats: "30+ Schools"
  },
  {
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    title: "Industrial Structures",
    description: "Manufacturing plants and industrial facilities",
    category: "Industrial",
    stats: "40+ Plants"
  }
];

const stats = [
  { icon: <FiClock className="w-8 h-8" />, number: "15+", label: "Years Experience" },
  { icon: <FiUsers className="w-8 h-8" />, number: "Expert", label: "Team Ready" },
  { icon: <FiShield className="w-8 h-8" />, number: "100%", label: "Quality Focus" },
  { icon: <FiBarChart2 className="w-8 h-8" />, number: "New", label: "Fresh Approach" }
];

const HomePageContent = () => {
  return (
    <div className="bg-white" id="home">
      {/* Hero Content Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Structural Design <span className="text-gray-300">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Leveraging 15+ years of industry experience to deliver precision steel detailing services. 
              Our expert team brings proven expertise to your structural engineering projects.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-700 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About MetalWorks Detailing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A new venture founded by experienced professionals with 15+ years in 
              structural steel detailing and fabrication.
            </p>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                MetalWorks Detailing Solutions is a newly established company founded by industry 
                veterans with over 15 years of experience in structural steel detailing and fabrication. 
                While we are a fresh business, our team brings decades of proven expertise from working 
                with reputed companies on successful projects with aggressive schedules.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our founders and principal engineers have extensive backgrounds in professional 
                structural steel detailing, having contributed to multiple complex projects across 
                commercial and industrial sectors. This wealth of experience forms the foundation 
                of our commitment to delivering precision solutions using advanced 3D modeling software.
              </p>
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border-l-4 border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Our New Venture?</h3>
                <p className="text-gray-700">
                  Fresh approach combined with seasoned expertise, dedicated personal attention, 
                  and cutting-edge technology for your structural steel projects.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/snap_001.png"
                alt="Steel Detailing Process"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-700 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Aim */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl text-center">
              <div className="bg-gray-700 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiShield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AIM</h3>
              <p className="text-gray-700 leading-relaxed">
                To establish ourselves as a trusted partner in structural steel detailing 
                by leveraging our team's extensive experience to deliver exceptional quality 
                and precision in every project.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl text-center">
              <div className="bg-slate-700 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">VISION</h3>
              <p className="text-gray-700 leading-relaxed">
                To build a world-class enterprise in professional steel detailing, combining 
                our seasoned expertise with fresh innovation to become the preferred choice 
                for structural engineering professionals.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-2xl text-center">
              <div className="bg-zinc-700 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiClock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">MISSION</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide customer-focused, globally competitive steel detailing services 
                through our team's proven expertise, cutting-edge technology, and commitment 
                to structural engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive steel detailing solutions tailored to meet your project requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:shadow-gray-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 text-gray-700 p-4 rounded-xl group-hover:bg-gray-700 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise across diverse structural steel projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.stats}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900" id="contact">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Experience?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Bring your structural steel projects to our experienced team. We combine 15+ years of industry 
            expertise with fresh innovation to deliver precision detailing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg">
              Discuss Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Learn About Our Expertise
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageContent;
