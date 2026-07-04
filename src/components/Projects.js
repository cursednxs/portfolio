import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

/**
 * Nitin's actual projects
 */
const projectsData = [
  {
    id: 1,
    title: 'Android App Prototype',
    description:
      'Built a functional Android application prototype using Kotlin, demonstrating UI/UX design thinking and mobile development skills.',
    tech: ['Kotlin', 'Android'],
    category: ['Mobile Apps'],
    github: 'https://github.com',
    live: null,
  },
  {
    id: 2,
    title: 'Digital Media Campaign Analysis',
    description:
      'Analyzed a real-world brand\'s social media campaign, evaluating reach, engagement and storytelling effectiveness using analytics tools. Presented findings in a structured report applying media ethics and communication theory frameworks.',
    tech: ['Python', 'Analytics', 'Research'],
    category: ['Academic Projects'],
    github: null,
    live: null,
  },
  {
    id: 3,
    title: 'Technical Event Coordination',
    description:
      'Organized and managed technical sessions, hackathons and coding workshops as Technical Lead and Community Lead, coordinating 50+ student participants.',
    tech: ['Event Management', 'Team Leadership'],
    category: ['Open Source'],
    github: 'https://github.com',
    live: null,
  },
];

const filterCategories = ['All', 'Mobile Apps', 'Academic Projects', 'Open Source'];

/**
 * TechStackBadge — monochrome style for grey/black/white theme
 */
const TechStackBadge = ({ tech }) => {
  return (
    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md border border-neutral-700 text-neutral-400 bg-neutral-800/50 transition-colors duration-200">
      {tech}
    </span>
  );
};

/**
 * ProjectCard Component
 */
const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group relative bg-neutral-900/50 border border-neutral-800/50 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:bg-neutral-800/50 hover:border-neutral-700/50 hover:shadow-xl hover:shadow-white/5 hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Card Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-neutral-200 transition-colors duration-200">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-200"
              aria-label={`View ${project.title} source code`}
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-200"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechStackBadge key={t} tech={t} />
        ))}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-neutral-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

/**
 * Projects Section Component
 */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Work spanning mobile development, media analytics, and community-driven tech events.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <Filter size={16} className="text-neutral-500" />
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:text-white hover:bg-neutral-800 hover:border-neutral-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-neutral-500">
            No projects found for this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
