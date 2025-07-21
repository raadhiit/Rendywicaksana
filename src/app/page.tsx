"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Award, Globe, Camera, Mic, Play, ExternalLink, Mail, Linkedin, Twitter, BookOpen, Video, Newspaper, Users, Eye, Download } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderSection from './components/HeaderSection';
import Image from "next/image";


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
      title: "Pesantren Tuli: 'Bagaimana Mau Taat Kalau Gak Pernah Dengar?'",
      category: "documentary",
      year: "2022",
      platform: "VOA Indonesia",
      description: "Di agama yang ibadahnya sarat dengan praktik lisan, bagaimana teman Tuli beribadah di agama Islam?",
      awards: [],
      tags: ["Documentary", "religion"],
      youtubeUrl: "https://www.youtube.com/watch?v=YdxiQLmk8pI"
    },
    {
      id: 2,
      title: "Waria Tenang Beribadah di Pesantren Al-Fatah",
      category: "documentary",
      year: "2021",
      platform: "VOA Indonesia",
      description: "",
      tags: ["documentary", "religion", "Transgender"],
      youtubeUrl: "https://www.youtube.com/watch?v=UZXx8HFxZIg"
    },
    {
      id: 3,
      title: "Guru SD Transpuan di Flores Timur: Jangan Panggil Saya 'Pak'",
      category: "documentary",
      year: "2023",
      platform: "VOA Indonesia",
      description: "Sebenarnya ada penolakan dalam diri saya. Saya sudah berdandan untuk pergi bekerja, namun masih dipanggil ‘pak’",
      tags: ["docuemntary", "transgender"],
      youtubeUrl: "https://www.youtube.com/watch?v=BH5IysQYddE"
    },
    {
      id: 4,
      title: "Pasien Covid Bisa Sembuh?",
      category: "News",
      year: "2021",
      platform: "Voice of Indonesia",
      description: "Treatments toward COVID-19 infection keeps developing along with the more knowledge to understand behavior of this virus is gained. WHO on May has actually announced a new procedure basically saying that patients will no longer required 2x consecutive negative swab test result in order to be considered recovered from the disease. ",
      image: "/img/2(1).png",
      tags: ["Covid-19"]
    },
    {
      id: 5,
      title: "Indonesians Are Trying to Make Crypto Halal",
      category: "environmental",
      year: "2022",
      platform: "Vice News",
      description: "Cryptocurrency is booming in Indonesia, with millions of Indonesians looking to crypto investments as a way of making quick money after two years of pandemic-fueled economic decline. But in the world’s most populous Muslim country, religious authorities have spoken out against the risks of cryptocurrency, and declared crypto transactions against the rules of Islam.",
      tags: ["covid-19", "Cryptocurrency"],
      youtubeUrl: "https://www.youtube.com/watch?v=Z5oXzNUz7G0"
    },
    {
      id: 6,
      title: "Only 37% of Indonesian are willing to take COVID-19 vaccine",
      category: "technology",
      year: "2021",
      platform: "VOA Indonesia",
      description: "According to the latest survey by SMRC (16-19 Dec 2020). I asked around, why not? Here is what they say, responded by expert and Indonesian vaccine spokesperson.",
      tags: ["Vaccine", "Covid-19"],
      image: "/img/3.png",
    },
    {
      id: 7,
      title: "Diaspora Indonesia Tinggal di Kawasan ‘Zombie’ Narkoba di Philadelphia",
      category: ["News", "Zombie"],
      year: "2023",
      platform: "VOA Indonesia",
      description: "Di balik fenomena ‘zombie’ narkoba di kawasan Kensington Avenue di kota Philadelphia, Amerika Serikat, ternyata ada keluarga diaspora Indonesia yang bermukim di sana selama 15 tahun.",
      tags: ["narcotics"],
      youtubeUrl: "https://www.youtube.com/watch?v=7gut7W-AUjI",
    },
    {
      id: 8,
      title: "Indonesian Diver Volunteers, Treating Airplane Crash Victims as Human and With Respect",
      category: ["News", "Zombie"],
      year: "2023",
      platform: "VOA Indonesia",
      description: "Volunteering in your community is not a new idea. But for one Indonesian scuba diver his volunteer work is dangerous and sometimes terrifying. ",
      tags: ["Diver"],
      youtubeUrl: "https://www.youtube.com/watch?v=U8SZhhfABQo",
    },
    {
      id: 9,
      title: "Inside Indonesia's Only Quran School for Trans Muslims | Transnational",
      category: ["Trandgender", "News"],
      year: "2022",
      platform: "VICE News",
      description: "In this episode of Transnational, Rana Thamrin embarks on a spiritual journey to Indonesia’s only Islamic school in Yogyakarta where transgender Muslim women are finding ways to reconcile their faith and trans identity.",
      tags: ["Trandgender", "News"],
      youtubeUrl: "https://www.youtube.com/watch?v=BN_yIxQABOA",
    },
  ];

  // const filterCategories = [
  //   { id: 'all', name: 'All Projects' },
  //   { id: 'documentary', name: 'Documentary' },
  //   { id: 'news', name: 'News' },
  //   { id: 'international', name: 'International' },
  //   { id: 'feature', name: 'Feature' },
  //   { id: 'environmental', name: 'Environmental' },
  //   { id: 'technology', name: 'Technology' }
  // ];

  // const filteredProjects = activeFilter === 'all'
  //   ? portfolioProjects
  //   : portfolioProjects.filter(project => project.category === activeFilter);

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.year === activeFilter);


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

  function getYoutubeId(url: string): string | null {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  }

  // function getYoutubeThumbnailUrl(youtubeUrl?: string): string {
  //   const id = youtubeUrl ? getYoutubeId(youtubeUrl) : null;
  //   return id
  //     ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  //     : "/api/placeholder/600/400";
  // }

  function getProjectThumbnail(project: { youtubeUrl?: string; image?: string }): string {
    const id = project.youtubeUrl ? getYoutubeId(project.youtubeUrl) : null;

    if (id) {
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }

    // fallback ke image jika tersedia, kalau tidak pakai placeholder
    return project.image ?? "/api/placeholder/600/400";
  }


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

      {/* Award Section */}
      <section
        id="awards"
        className="relative z-10 py-20 px-6"
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
              Awards
            </h2>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section 
          id="portfolio" 
          className="relative z-10 py-20 px-6 bg-white/50"
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
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {[...filteredProjects]
              .sort((a, b) => Number(b.year) - Number(a.year)) // urut dari terbaru ke lama
              .map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={getProjectThumbnail(project)}
                      alt={project.title}
                      width={600}
                      height={200}
                      className="w-full h-48 object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.youtubeUrl && (
                        <a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <h4 className="text-lg md:text-base font-bold text-gray-800 group-hover:text-blue-400 transition-colors mb-3">
                        {project.title}
                      </h4>
                      <span className="text-xs md:text-sm text-gray-500 font-medium mt-1 block">
                        {project.platform}
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {project.awards && (
                      <div className="mb-4">
                        {project.awards.map((award, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-[10px] md:text-xs font-medium mr-2 mb-1"
                          >
                            <Award className="w-3 h-3 mr-1" />
                            {award}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] md:text-xs"
                        >
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
      <section id="expertise" className="relative z-10 py-20 px-6">
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


