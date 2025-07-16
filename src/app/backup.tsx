"use client";

import React, { useState, useEffect } from 'react';
import { Award, Globe, Camera, Mic, Play, ExternalLink, Mail, Linkedin, Twitter, BookOpen, Video, Newspaper, Users, Eye, Download, Filter, Search } from 'lucide-react';

const RendyPortfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const portfolioWorks = [
        {
            id: 1,
            title: "Transnational",
            category: "documentary",
            year: "2021",
            platform: "VICE",
            description: "Award-winning documentary exploring transnational LGBTQ+ stories across borders, earning both Peabody and GLAAD awards.",
            image: "/api/placeholder/400/300",
            awards: ["Peabody Award", "GLAAD Award"],
            tags: ["Documentary", "LGBTQ+", "International", "Award-winning"],
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            title: "US Presidential Election 2024",
            category: "news",
            year: "2024",
            platform: "Voice of America",
            description: "Comprehensive coverage of the 2024 US Presidential Election from New York, providing analysis for international audiences.",
            image: "/api/placeholder/400/300",
            tags: ["Politics", "Election", "Breaking News", "Analysis"],
            color: "from-blue-500 to-indigo-500"
        },
        {
            id: 3,
            title: "UN General Assembly Reports",
            category: "international",
            year: "2023",
            platform: "Voice of America",
            description: "Live reporting from the UN General Assembly, covering global diplomatic developments and international relations.",
            image: "/api/placeholder/400/300",
            tags: ["Diplomacy", "International", "UN", "Live Coverage"],
            color: "from-green-500 to-teal-500"
        },
        {
            id: 4,
            title: "Indonesian Diaspora Stories",
            category: "feature",
            year: "2022",
            platform: "Multiple Outlets",
            description: "Feature series highlighting Indonesian communities across the US, showcasing cultural preservation and integration.",
            image: "/api/placeholder/400/300",
            tags: ["Culture", "Diaspora", "Community", "Identity"],
            color: "from-orange-500 to-red-500"
        },
        {
            id: 5,
            title: "Climate Change Investigations",
            category: "environmental",
            year: "2023",
            platform: "Environmental Media",
            description: "Investigative series on climate change impacts in Southeast Asia, combining data journalism with human stories.",
            image: "/api/placeholder/400/300",
            tags: ["Environment", "Data Journalism", "Investigation", "Climate"],
            color: "from-emerald-500 to-green-600"
        },
        {
            id: 6,
            title: "Tech Innovation in Asia",
            category: "technology",
            year: "2022",
            platform: "Tech Publications",
            description: "Multimedia coverage of emerging technologies and startup ecosystems across Asian markets.",
            image: "/api/placeholder/400/300",
            tags: ["Technology", "Innovation", "Asia", "Startups"],
            color: "from-cyan-500 to-blue-600"
        },
        {
            id: 7,
            title: "Refugee Crisis Coverage",
            category: "international",
            year: "2023",
            platform: "International Media",
            description: "In-depth reporting on refugee situations and humanitarian crises with focus on human impact stories.",
            image: "/api/placeholder/400/300",
            tags: ["Humanitarian", "Refugees", "Crisis", "Human Rights"],
            color: "from-slate-500 to-gray-600"
        },
        {
            id: 8,
            title: "Mental Health in Journalism",
            category: "feature",
            year: "2022",
            platform: "Media Publications",
            description: "Feature investigation into mental health challenges faced by journalists in high-stress reporting environments.",
            image: "/api/placeholder/400/300",
            tags: ["Mental Health", "Journalism", "Workplace", "Investigation"],
            color: "from-violet-500 to-purple-600"
        },
        {
            id: 9,
            title: "COVID-19 Impact Stories",
            category: "news",
            year: "2021",
            platform: "Voice of America",
            description: "Comprehensive coverage of COVID-19 pandemic impacts on communities, focusing on human resilience stories.",
            image: "/api/placeholder/400/300",
            tags: ["Health", "Pandemic", "Community", "Resilience"],
            color: "from-red-500 to-pink-500"
        },
        {
            id: 10,
            title: "Democracy in Southeast Asia",
            category: "documentary",
            year: "2023",
            platform: "Documentary Network",
            description: "Documentary series examining democratic movements and challenges across Southeast Asian nations.",
            image: "/api/placeholder/400/300",
            tags: ["Democracy", "Politics", "Southeast Asia", "Documentary"],
            color: "from-yellow-500 to-orange-500"
        },
        {
            id: 11,
            title: "Women in Technology",
            category: "technology",
            year: "2022",
            platform: "Tech Media",
            description: "Profile series showcasing influential women leaders in the technology sector across Asia-Pacific region.",
            image: "/api/placeholder/400/300",
            tags: ["Women", "Technology", "Leadership", "Asia-Pacific"],
            color: "from-pink-500 to-rose-500"
        },
        {
            id: 12,
            title: "Ocean Conservation Efforts",
            category: "environmental",
            year: "2023",
            platform: "Environmental Network",
            description: "Multimedia investigation into marine conservation efforts and ocean pollution challenges in Southeast Asia.",
            image: "/api/placeholder/400/300",
            tags: ["Ocean", "Conservation", "Environment", "Southeast Asia"],
            color: "from-blue-600 to-cyan-600"
        }
    ];

    const filterCategories = [
        { id: 'all', name: 'All Works', count: portfolioWorks.length },
        { id: 'documentary', name: 'Documentary', count: portfolioWorks.filter(w => w.category === 'documentary').length },
        { id: 'news', name: 'News', count: portfolioWorks.filter(w => w.category === 'news').length },
        { id: 'international', name: 'International', count: portfolioWorks.filter(w => w.category === 'international').length },
        { id: 'feature', name: 'Feature', count: portfolioWorks.filter(w => w.category === 'feature').length },
        { id: 'environmental', name: 'Environmental', count: portfolioWorks.filter(w => w.category === 'environmental').length },
        { id: 'technology', name: 'Technology', count: portfolioWorks.filter(w => w.category === 'technology').length }
    ];

    const filteredWorks = portfolioWorks.filter(work => {
        const matchesFilter = activeFilter === 'all' || work.category === activeFilter;
        const matchesSearch = work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            work.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            work.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className="w-80 bg-white shadow-xl fixed left-0 top-0 h-full z-10 overflow-y-auto">
                {/* Header */}
                <div className="p-8 border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        RENDY<br />WICAKSANA
                    </h1>
                    <p className="text-gray-600 text-sm uppercase tracking-wide">
                        Multimedia Journalist
                    </p>
                </div>

                {/* Navigation */}
                <nav className="p-6">
                    <div className="space-y-2">
                        {filterCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 text-left ${activeFilter === category.id
                                    ? 'bg-blue-400 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <span className="font-medium">{category.name}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${activeFilter === category.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Search */}
                <div className="p-6 border-t border-gray-200">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search works..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="p-6 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">11+</div>
                            <div className="text-xs text-gray-600 uppercase tracking-wide">Years</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">100+</div>
                            <div className="text-xs text-gray-600 uppercase tracking-wide">Stories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">2</div>
                            <div className="text-xs text-gray-600 uppercase tracking-wide">Awards</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">50M+</div>
                            <div className="text-xs text-gray-600 uppercase tracking-wide">Reach</div>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="p-6 border-t border-gray-200">
                    <div className="space-y-3">
                        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-400 transition-colors">
                            <Mail className="w-4 h-4" />
                            <span className="text-sm">rendy@example.com</span>
                        </a>
                        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-400 transition-colors">
                            <Linkedin className="w-4 h-4" />
                            <span className="text-sm">linkedin.com/in/rendy</span>
                        </a>
                        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-400 transition-colors">
                            <Twitter className="w-4 h-4" />
                            <span className="text-sm">@rendywicaksana</span>
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200">
                    <button className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                    </button>
                    <p className="text-xs text-gray-400 mt-4 text-center">
                        © 2024 Rendy Wicaksana<br />
                        All rights reserved
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-80 p-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-4xl font-bold text-gray-800">
                            {activeFilter === 'all' ? 'All Works' : filterCategories.find(c => c.id === activeFilter)?.name}
                        </h2>
                        <div className="text-gray-600">
                            {filteredWorks.length} {filteredWorks.length === 1 ? 'work' : 'works'}
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg">
                        A comprehensive collection of multimedia journalism spanning documentaries, breaking news, and investigative features
                    </p>
                </div>

                {/* Works Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredWorks.map((work) => (
                        <div
                            key={work.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                            onMouseEnter={() => setHoveredCard(work.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-48">
                                <div className={`w-full h-full bg-gradient-to-br ${work.color} flex items-center justify-center relative`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                                    <div className="relative z-10">
                                        {work.category === 'documentary' && <Video className="w-12 h-12 text-white" />}
                                        {work.category === 'news' && <Newspaper className="w-12 h-12 text-white" />}
                                        {work.category === 'international' && <Globe className="w-12 h-12 text-white" />}
                                        {work.category === 'feature' && <BookOpen className="w-12 h-12 text-white" />}
                                        {work.category === 'environmental' && <Camera className="w-12 h-12 text-white" />}
                                        {work.category === 'technology' && <Mic className="w-12 h-12 text-white" />}
                                    </div>

                                    {/* Overlay Info */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {work.year}
                                        </span>
                                        <button className={`bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 ${hoveredCard === work.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                            }`}>
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Play Button for Videos */}
                                    {(work.category === 'documentary' || work.category === 'news') && (
                                        <button className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredCard === work.id ? 'opacity-100' : 'opacity-0'
                                            }`}>
                                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                                <Play className="w-8 h-8 text-white" />
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-400 transition-colors line-clamp-1">
                                        {work.title}
                                    </h3>
                                    <span className="text-sm text-gray-500 font-medium">{work.platform}</span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                    {work.description}
                                </p>

                                {/* Awards */}
                                {work.awards && (
                                    <div className="mb-4">
                                        {work.awards.map((award, i) => (
                                            <span key={i} className="inline-flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium mr-2 mb-1">
                                                <Award className="w-3 h-3 mr-1" />
                                                {award}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1">
                                    {work.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                    {work.tags.length > 3 && (
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                            +{work.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredWorks.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-gray-400 mb-4">
                            <Search className="w-16 h-16 mx-auto mb-4" />
                            <p className="text-xl">No works found</p>
                            <p className="text-sm">Try adjusting your search or filter</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RendyPortfolio;