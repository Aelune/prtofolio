'use client';

import React, { useState } from 'react';
import Background from '@/components/Background';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[]; // Change to string[] for an array of technologies
//   color: string;
  icon: string;
  status: string;
  link: string;
  category: string;
  featured?: boolean; // Optional field
}

// All your projects data
const allProjects = [
  {
    id: 1,
    title: 'Vanish',
    description: 'Modern alternative to rm command with customizable TUI and restore feature. Built with Rust for performance and safety.',
    tech: ['GoLang', 'TUI', 'CLI'],
    // color: 'from-red-700 via-rose-600 to-pink-500',
    icon: '🗑️',
    status: 'Live',
    link: 'https://github.com/Aelune/vanish',
    category: 'System Tools',
    featured: true
  },
  {
    id: 2,
    title: 'Venus',
    description: 'Browser extension to customize tab UI and manage quicklinks. Enhances browsing experience with personalized interfaces.',
    tech: ['JavaScript', 'WebExt', 'CSS'],
    // color: 'from-orange-600 via-amber-500 to-yellow-400',
    icon: '🪐',
    status: 'Beta',
    link: 'https://github.com/Dwukn/venus',
    category: 'Web Extensions',
    featured: true
  },
  {
    id: 3,
    title: 'Hecate',
    description: 'Comprehensive Hyprland dotfiles and collection of apps to improve Linux desktop user experience.',
    tech: ['Hyprland', 'Config', 'Shell'],
    // color: 'from-purple-700 via-indigo-600 to-blue-500',
    icon: '🌙',
    status: 'Live',
    link: 'https://github.com/Dwukn/hecate',
    category: 'Desktop Environment',
    featured: true
  },
  {
    id: 4,
    title: 'Janus',
    description: 'Template creation tool for multiple types of projects. Streamlines development workflow with pre-configured setups.',
    tech: ['Rust', 'CLI', 'Templates'],
    // color: 'from-green-600 via-emerald-500 to-teal-400',
    icon: '⚡',
    status: 'Beta',
    link: 'https://github.com/Dwukn/janus',
    category: 'Developer Tools',
    featured: true
  },
  {
    id: 5,
    title: 'Athena',
    description: 'Custom Linux kernel build for fun and learning. Exploring kernel development and system-level programming.',
    tech: ['C', 'Kernel'],
    // color: 'from-blue-700 via-cyan-600 to-indigo-500',
    icon: '⚔️',
    status: 'Research',
    link: 'https://github.com/Dwukn/athena',
    category: 'System Programming',
    featured: true
  },
  {
    id: 6,
    title: 'L-Edger',
    description: 'A simple link managing app for Android with intuitive interface and organization features.',
    tech: ['Flutter', 'Dart', 'Android'],
    // color: 'from-blue-500 via-cyan-500 to-teal-400',
    icon: '🔗',
    status: 'Live',
    link: 'https://github.com/Dwukn/l-edger',
    category: 'Mobile Apps',
    featured: true
  },
    {
    id: 7,
    title: 'KlipB',
    description: 'Simple and efficient clipboard manager for Linux systems with Wayland support.',
    tech: ['C++', 'Wayland', 'Linux'],
    color: 'from-gray-700 via-gray-500 to-gray-400',
    icon: '📋',
    status: 'Live',
    link: 'https://github.com/Dwukn/KlipB',
    category: 'System Tools',
    featured: false
  },
  {
    id: 8,
    title: 'Kondo',
    description: 'File organizing tool to clean up and structure your filesystem automatically.',
    tech: ['Rust', 'File System'],
    // color: 'from-red-700 via-rose-600 to-pink-500',
    icon: '🗂️',
    status: 'Live',
    link: 'https://github.com/Aelune/kondo',
    category: 'System Tools',
    featured: false
  }
];

const categories = ['All', 'System Tools', 'Developer Tools', 'Web Extensions', 'Desktop Environment', 'System Programming', 'Mobile Apps'];
const statuses = ['All', 'Live', 'Beta', 'Research', 'Coming Soon'];

const ProjectCard = ({ project }: { project: Project }) => {
const { title, description, tech, icon, status, link, category } = project;

  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block p-6 rounded-xl shadow-2xl overflow-hidden
                 transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br ${color} group
                 cursor-pointer text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50"
      style={{
        // background: `linear-gradient(135deg, ${color})`,
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(147, 197, 253, 0.2)",
        boxShadow: `
          0 8px 32px 0 rgba(30, 58, 138, 0.25),
          0 0 0 1px rgba(147, 197, 253, 0.1) inset,
          0 2px 4px 0 rgba(59, 130, 246, 0.1) inset
        `,
      }}
    >
      {/* Border Pattern */}
      <div className="absolute inset-0 rounded-xl pointer-events-none">
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
        <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"></div>
        <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-blue-300/60 to-transparent"></div>
        <div className="absolute right-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-blue-300/60 to-transparent"></div>
      </div>

      {/* Icon and Category */}
      <div className="flex justify-between items-start mb-4">
        <div className="text-2xl">{icon}</div>
        <span className="text-xs px-2 py-1 bg-white/20 rounded-full">{category}</span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white/90 via-slate-100 to-white/90 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-sm text-white/80 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Status */}
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
              status === "Live"
                ? "bg-green-500/20 text-green-300 border border-green-400/30"
                : status === "Beta"
                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                : status === "Coming Soon"
                ? "bg-purple-500/20 text-purple-300 border border-purple-400/30"
                : status === "Research"
                ? "bg-pink-500/20 text-pink-300 border border-pink-400/30"
                : "bg-gray-500/20 text-gray-300 border border-gray-400/30"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((techItem, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-lg bg-white/10 border border-white/20 text-white/90"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/10 opacity-0
                      group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </a>
  );
};

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
    const matchesSearch = searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesStatus && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Background */}
<div className="fixed inset-0 z-0">
        <Background />
      </div>

      {/* Radial gradient overlay */}
      {/* <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" /> */}

      {/* Content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              My Projects
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              A collection of open-source tools, applications, and experiments
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              >
                {statuses.map(status => (
                  <option key={status} value={status} className="bg-gray-800">
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">⭐</span>
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {/* {otherProjects.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🛠️</span>
                Other Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )} */}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your filters or search terms</p>
            </div>
          )}

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold text-blue-400">{allProjects.length}</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold text-green-400">
                {allProjects.filter(p => p.status === 'Live').length}
              </div>
              <div className="text-gray-400 text-sm">Live Projects</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold text-yellow-400">
                {allProjects.filter(p => p.status === 'Beta').length}
              </div>
              <div className="text-gray-400 text-sm">Beta Projects</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold text-pink-400">
                {allProjects.filter(p => p.status === 'Research').length}
              </div>
              <div className="text-gray-400 text-sm">Research Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
