"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Award, Globe, Camera, Mic, Play, ExternalLink, Mail, Linkedin, Twitter, BookOpen, Video, Newspaper, Users, Eye, Download } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderSection from './components/HeaderSection';

const RendyPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
    AOS.init({ duration: 900, once: false });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const portfolioProjects = [
    {
      id: 1,
      title: "Transnational Documentary",
      category: "documentary",
      year: "2021",
      platform: "VICE",
      description: "Award-winning documentary that earned Peabody and GLAAD awards, exploring transnational stories with innovative multimedia approach.",
      image: "/api/placeholder/600/400",
      awards: ["Peabody Award", "GLAAD Award"],
      tags: ["Documentary", "LGBTQ+", "International"]
    },
    {
      id: 2,
      title: "US Presidential Election Coverage",
      category: "news",
      year: "2024",
      platform: "Voice of America",
      description: "Comprehensive coverage of the 2024 US Presidential Election from New York, providing in-depth analysis for international audiences.",
      image: "/api/placeholder/600/400",
      tags: ["Politics", "Election", "Breaking News"]
    },
    {
      id: 3,
      title: "United Nations General Assembly",
      category: "international",
      year: "2023",
      platform: "Voice of America",
      description: "Live reporting and analysis from the UN General Assembly, covering global diplomatic developments and international relations.",
      image: "/api/placeholder/600/400",
      tags: ["Diplomacy", "International", "UN"]
    },
    {
      id: 4,
      title: "Indonesian Diaspora Stories",
      category: "feature",
      year: "2022",
      platform: "Various",
      description: "Feature series highlighting Indonesian communities across the United States, showcasing cultural preservation and integration.",
      image: "/api/placeholder/600/400",
      tags: ["Culture", "Diaspora", "Community"]
    },
    {
      id: 5,
      title: "Climate Change Impact Reports",
      category: "environmental",
      year: "2023",
      platform: "Multiple Outlets",
      description: "Investigative series on climate change impacts in Southeast Asia, combining data journalism with human stories.",
      image: "/api/placeholder/600/400",
      tags: ["Environment", "Data Journalism", "Investigation"]
    },
    {
      id: 6,
      title: "Tech Innovation in Asia",
      category: "technology",
      year: "2022",
      platform: "Digital Platforms",
      description: "Multimedia coverage of emerging technologies and startup ecosystems across Asian markets.",
      image: "/api/placeholder/600/400",
      tags: ["Technology", "Innovation", "Asia"]
    }
  ];

  const filterCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'documentary', name: 'Documentary' },
    { id: 'news', name: 'News' },
    { id: 'international', name: 'International' },
    { id: 'feature', name: 'Feature' },
    { id: 'environmental', name: 'Environmental' },
    { id: 'technology', name: 'Technology' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === activeFilter);

  const stats = [
    { number: "11+", label: "Years Experience" },
    { number: "100+", label: "Stories Published" },
    { number: "2", label: "Major Awards" },
    { number: "50M+", label: "Audience Reached" }
  ];

  const expertise = [
    {
      icon: Camera,
      title: "Visual Storytelling",
      description: "Creating compelling narratives through multimedia formats for TV and digital platforms."
    },
    {
      icon: Mic,
      title: "International Reporting",
      description: "Covering global events with cultural sensitivity and cross-platform expertise."
    },
    {
      icon: Video,
      title: "Documentary Production",
      description: "Award-winning documentary work recognized by Peabody and GLAAD organizations."
    },
    {
      icon: Globe,
      title: "Cross-Cultural Communication",
      description: "Bridging Indonesian and international audiences through strategic storytelling."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{
            left: mousePosition.x * 0.015 + 'px',
            top: mousePosition.y * 0.015 + 'px',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{
            left: mousePosition.x * -0.01 + 800 + 'px',
            top: mousePosition.y * -0.01 + 600 + 'px',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Header */}
      <HeaderSection stats={stats} isVisible={isVisible} />

      {/* Hero Section */}
      <section 
          id="home" 
          className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-12 md:pt-5"
        >
        <div className="text-center max-w-5xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <span className="bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                Award-Winning Journalist
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-400 bg-clip-text text-transparent">
              Rendy Wicaksana
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
              Multimedia Journalist & Communication Specialist
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
              Crafting compelling visual stories for global audiences with 11 years of experience in
              international journalism, documentary production, and cross-cultural communication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-400 text-white px-8 py-4 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Eye className="w-5 h-5 inline mr-2" />
                View Portfolio
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105">
                <Mail className="w-5 h-5 inline mr-2" />
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="mx-auto w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
          id="about"
          className="relative z-10 py-20 px-6 bg-white/50"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              About Me
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
            >
              A passionate storyteller dedicated to bridging cultures through impactful journalism
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="bg-gradient-to-br from-blue-400 to-gray-600 rounded-2xl p-1 transform hover:rotate-1 transition-transform duration-300">
                <div className="bg-white rounded-xl p-8">
                  <div className="text-center">
                      <img
                        src="/img/1_rm.webp" // Ganti sesuai path gambarmu
                        alt="Rendy Wicaksana"
                        className="w-full h-full object-cover"
                      />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Rendy Wicaksana</h3>
                    <p className="text-blue-400 font-medium">Multimedia Journalist</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Storytelling That Transcends Borders
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With 11 years of experience in multimedia journalism, I specialize in creating compelling
                visual narratives that resonate with both Indonesian and international audiences. My work
                spans from documentary production to breaking news coverage.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a former New York correspondent for Voice of America, I have covered major global events
                including the UN General Assembly and US Presidential Elections, bringing nuanced perspectives
                to complex international stories.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My documentary &quot;Transnational&quot; with VICE earned prestigious Peabody and GLAAD awards in 2021,
                reflecting my commitment to authentic storytelling that drives social impact.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Multimedia Journalism', 'Documentary Production', 'International Reporting', 'Visual Storytelling'].map((skill, index) => (
                  <span key={index} className="bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section 
          id="portfolio" 
          className="relative z-10 py-20 px-6"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">My Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A collection of impactful stories spanning documentaries, breaking news, and feature reporting
            </p>
          </div>

          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${activeFilter === category.id
                  ? 'bg-blue-400 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div> */}

          {/* Portfolio Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs md:text-sm text-gray-500 font-medium">
                      {project.platform}
                    </span>

                  </div>

                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.awards && (
                    <div className="mb-4">
                      {project.awards.map((award, i) => (
                        <span key={i} className="inline-flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-[10px] md:text-xs font-medium mr-2 mb-1">
                          <Award className="w-3 h-3 mr-1" />
                          {award}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] md:text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="relative z-10 py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">My Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core competencies that drive impactful journalism and storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-400 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let&apos;s Create Something Amazing
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to collaborate on your next story? I am available for freelance projects,
            consulting, and media partnerships.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">rendy@example.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">linkedin.com/in/rendy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Twitter className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Twitter</h3>
              <p className="text-gray-300">@rendywicaksana</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-400 text-white px-8 py-4 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </button>
            <button className="border border-gray-400 text-gray-300 px-8 py-4 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-gray-400 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Rendy Wicaksana. All rights reserved.</p>
              <p className="text-sm">Multimedia Journalist & Communication Specialist</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RendyPortfolio;


