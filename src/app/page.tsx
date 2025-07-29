"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, Camera, Mic, ExternalLink, Mail, Linkedin, Twitter,  Video, Download, MessageCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderSection from './components/HeaderSection';
import Image from "next/image";
import { portfolioProjects } from './components/portfolioProjects';
import { motion, AnimatePresence } from "framer-motion";


const RendyPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('english');
  const scrollRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  

  useEffect(() => {
    setIsVisible(true);
    AOS.init({ duration: 900, once: false, startEvent: 'DOMContentLoaded' });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  const image = [
    '/img/24.webp',
    '/img/16.webp',
    '/img/25.webp',
    '/img/19.webp',
    '/img/23.webp',
    '/img/20.webp',
    '/img/22.webp',
    '/img/17.webp',
    '/img/18.webp',
    '/img/7.webp',
    '/img/6.webp',
  ];

  const logos = [
    { name: "vice", src: "/img/vice.webp" },
    { name: "scmp", src: "/img/SCMP_mod.webp" },
    { name: "abc", src: "/img/ABC_mod.webp" },
    { name: "voa", src: "/img/VOA_mod.webp" },
  ];

  const awards = [
    { name: "Peabody", src: "/img/peabody.webp" },
    { name: "GLAAD", src: "/img/glaad.webp" },
  ]


  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.language === activeFilter);

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
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  }

  function getProjectThumbnail(project: { videoUrl?: string; image?: string }): string {
    const id = project.videoUrl ? getYoutubeId(project.videoUrl) : null;

    if (id) {
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }

    return project.image ?? "/api/placeholder/600/400";
  }

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProjects = filteredProjects
    .sort((a, b) => {
      const platformPriority = ["VICE News", "South China Morning Post", "VOA Indonesia"];
      const getPriority = (platform: string): number => {
        const index = platformPriority.indexOf(platform);
        return index === -1 ? platformPriority.length : index;
      };
      const priorityA = getPriority(a.platform);
      const priorityB = getPriority(b.platform);
      if (priorityA !== priorityB) return priorityA - priorityB;
      return Number(b.year) - Number(a.year);
    })
    .slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // jangan scroll saat pertama render
    }

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);



  return (
    <div className="min-h-screen bg-[#212121] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-white rounded-full mix-blend-lighten filter blur-[120px] opacity-30 animate-pulse"
          style={{
            left: mousePosition.x * 0.015 + 'px',
            top: mousePosition.y * 0.015 + 'px',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gray-500 rounded-full mix-blend-lighten filter blur-[100px] opacity-30 animate-pulse"
          style={{
            left: mousePosition.x * -0.01 + 800 + 'px',
            top: mousePosition.y * -0.01 + 600 + 'px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Header */}
      <HeaderSection stats={stats} isVisible={isVisible} />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="w-full bg-gradient-to-b from-white/90 via-gray-100 to-gray-200 pb-8 md:min-h-screen md:pb-3"
      >
        <div className="relative w-full">
          <Image
            src="/img/15 (1).webp"
            alt="hero"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover mb-6 md:mb-10 grayscale"
            priority
          />
        </div>

        <div className="text-center max-w-5xl px-6 mx-auto z-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-black bg-clip-text text-transparent font-['Playfair_Display']">
              Rendy Wicaksana
            </h1>
            <p className="text-base md:text-2xl text-black/60 mb-3 md:mb-4 leading-relaxed font-['Source_Sans_3']">
              Video Journalist | Multimedia Journalist | Producer
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-black/70 bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-sm text-black/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
            className="flex md:flex-wrap justify-center md:justify-center items-center gap-x-3 md:gap-x-6 gap-y-4 mb-4 overflow-x-auto md:overflow-x-visible pb-2"
          >
            {awards.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center p-2 h-16 md:h-28 min-w-[110px] md:w-[180px] flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={`Logo ${idx + 1}`}
                  width={180}
                  height={90}
                  className="object-contain max-h-14 md:max-h-24 w-full"
                />
              </div>
            ))}
          </div>

          <div className="animate-bounce">
            <ChevronDown className="mx-auto w-6 h-6 md:w-8 md:h-8 text-black" />
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* Sesuaikan lagi content dari about section */}
      <section
          id="about"
          className="relative z-10 py-10 px-6"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div 
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
            >
              {/* <div className="bg-gradient-to-br from-blue-400 to-gray-600 rounded-2xl p-1 transform hover:rotate-1 transition-transform duration-300"> */}
              <div className="rounded-2xl p-6 transform hover:rotate-1 transition-transform duration-300">
                  {/* MASONRY LAYOUT */}
                  <div className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3">
                    {image.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`Photo ${idx + 1}`}
                        className="w-full rounded-lg break-inside-avoid grayscale"
                      />
                    ))}
                  </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-col justify-center px-6 md:px-16 max-w-[680px] mx-auto mt-4 text-white text-base leading-relaxed"
            >
              <p className="text-lg text-white/80 mb-6 leading-relaxed font-['Merriweather']">
                With 11 years of experience in multimedia journalism, I specialize in creating compelling
                visual narratives that resonate with both Indonesian and international audiences. My work
                spans from documentary production to breaking news coverage.
              </p>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                As a former New York correspondent for Voice of America, I have covered major global events
                including the UN General Assembly and US Presidential Elections, bringing nuanced perspectives
                to complex international stories.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                My documentary &quot;Transnational&quot; with VICE earned prestigious Peabody and GLAAD awards in 2021,
                reflecting my commitment to authentic storytelling that drives social impact.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Worked With */}
      <section
        id="worked"
        className="flex flex-col items-center justify-center mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
      >
        <h2 className="text-center text-4xl md:text-4xl font-bold mb-6 font-semibold mb-6">Worked With</h2>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-6">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-[160px] md:w-[180px] h-24 md:h-28"
            >
              <Image
                src={logo.src}
                alt={`Logo ${idx + 1}`}
                width={300}
                height={100}
                className={`object-contain max-h-16 md:max-h-20 w-auto filter invert ${
                  logo.name === 'scmp' ? 'scale-125' : ''
                }`}
              />
            </div>
          ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white/90">My Portfolio</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              A collection of impactful stories spanning documentaries, breaking news, and feature reporting
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {["english", "bahasa", "all"].map((lang) => {
              const isActive = activeFilter === lang;

              return (
                <motion.button
                  key={lang}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => {
                    setActiveFilter(lang);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 text-white shadow-md"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {lang === "all"
                    ? "All"
                    : `In ${lang.charAt(0).toUpperCase() + lang.slice(1)}`}
                </motion.button>
              );
            })}
          </div>

          {/* Portfolio Grid */}
          <div ref={scrollRef}>
            <AnimatePresence>
              <motion.div
                key={`${activeFilter}-${currentPage}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-3 gap-8 sm:gap-10"
              >
                {paginatedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer md:cursor-default border border-gray-100/50"
                    onClick={() => {
                      // Handle mobile click - only on mobile screens
                      if (window.innerWidth < 768 && project.videoUrl) {
                        window.open(project.videoUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <div className="relative overflow-hidden">
                      {/* Image with enhanced overlay */}
                      <Image
                        src={getProjectThumbnail(project)}
                        alt={project.title}
                        width={600}
                        height={200}
                        className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500" />
                      
                      {/* Year badge with enhanced styling */}
                      <div className="absolute top-5 left-5">
                        <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-white/20">
                          {project.year}
                        </span>
                      </div>
                      
                      {/* External link button with enhanced design */}
                      <div className="absolute bottom-5 right-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform md:translate-y-2 md:group-hover:translate-y-0">
                        {project.videoUrl && (
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white/95 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg border border-white/20 hover:scale-110"
                            onClick={(e) => {
                              // Prevent card click on desktop when clicking the button
                              if (window.innerWidth >= 768) {
                                e.stopPropagation();
                              }
                            }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      
                      {/* Subtle play icon overlay for mobile */}
                      {project.videoUrl && (
                        <div className="md:hidden absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-7">
                      {/* Title and Platform */}
                      <div className="mb-4">
                        <h4 className="text-xl md:text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                          {project.title}
                        </h4>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></div>
                          <span className="text-sm md:text-sm text-gray-600 font-medium">
                            {project.platform}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-5 leading-relaxed text-sm md:text-base line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags with enhanced styling */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200/50 hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200/50">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        currentPage === i + 1
                          ? "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 text-white shadow-md transform scale-105"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>          

        </div>
      </section>

      {/* Expertise Section */}
      <section 
          id="expertise" 
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
          className="relative z-10 py-20 px-6 bg-white/85"
        >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">My Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core competencies that drive impactful journalism and storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
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
      <section id="contact" className="relative z-10 py-20 px-6 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let&apos;s Create Something Amazing
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to collaborate on your next story? I am available for freelance projects,
            consulting, and media partnerships.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rendy.wise@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-300">rendy.wise@gmail.com</p>
              </div>
            </a>

            <a 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              href='https://www.linkedin.com/in/rendy-wicaksana-295a4432/'
              target='_blank'
              rel='noopener noreferrer'
              >
                <Linkedin className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-300">linkedin.com/in/rendy</p>
            </a>
            <a 
                href='https://x.com/reendywise?t=yNFtyiJm2hMnvyDUar1OMg&s=08'
                target='_blank'
                rel='noopener noreferrer'
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <Twitter className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Twitter</h3>
                <p className="text-gray-300">@reendywise</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full px-4">
            <a
              href="https://wa.me/6285697124495" // Ganti dengan nomor kamu (tanpa tanda +)
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-8 py-4 w-full rounded-full hover:text-black hover:transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Send WhatsApp
              </button>
            </a>

            <button className="border border-gray-400 text-gray-300 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/85 text-gray-400 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 text-black md:mb-0">
              <p>&copy; 2024 Rendy Wicaksana. All rights reserved.</p>
              <p className="text-sm">Multimedia Journalist & Communication Specialist</p>
            </div>
            {/* <div className="flex space-x-6 text-black">
              <a href="https://x.com/reendywise?t=yNFtyiJm2hMnvyDUar1OMg&s=08" className="hover:text-blue-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rendy-wicaksana-295a4432/" className="hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RendyPortfolio;


