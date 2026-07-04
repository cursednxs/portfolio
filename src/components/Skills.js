import React from 'react';
import { Smartphone, Code2, PenTool, BarChart3, Users, Wrench } from 'lucide-react';

/**
 * Nitin's actual skills organized by category
 */
const skillsData = [
  {
    category: 'Mobile Development',
    icon: Smartphone,
    skills: [
      'Kotlin',
      'Android Development',
      'UI/UX Design Thinking',
      'App Prototyping',
    ],
  },
  {
    category: 'Technical',
    icon: Code2,
    skills: [
      'Python',
      'MS Office',
      'Canva',
      'Video Editing Basics',
    ],
  },
  {
    category: 'Content & Media',
    icon: PenTool,
    skills: [
      'Digital Storytelling',
      'Script Writing',
      'Content Planning',
      'Media Ethics',
    ],
  },
  {
    category: 'Analytics',
    icon: BarChart3,
    skills: [
      'Social Media Analytics',
      'Audience Research',
      'Engagement Metrics',
      'Campaign Analysis',
    ],
  },
  {
    category: 'Communication',
    icon: Users,
    skills: [
      'Public Relations',
      'Reporting',
      'Event Coordination',
      'Team Leadership',
    ],
  },
  {
    category: 'Management',
    icon: Wrench,
    skills: [
      'Community Building',
      'Hackathon Organization',
      'Cross-functional Teamwork',
      'Peer Mentoring',
    ],
  },
];

/**
 * SkillCard Component — monochrome grey/black/white
 */
const SkillCard = ({ data, index }) => {
  const IconComponent = data.icon;

  return (
    <div
      className="group bg-neutral-900/50 border border-neutral-800/50 rounded-2xl p-6 transition-all duration-300 hover:bg-neutral-800/50 hover:border-neutral-700/50 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-neutral-800/50">
          <IconComponent size={22} className="text-neutral-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{data.category}</h3>
      </div>

      {/* Skills List */}
      <ul className="space-y-2.5">
        {data.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2.5 text-sm text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Skills Section Component
 */
const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            A blend of technical and communication skills built through academics and hands-on experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((data, index) => (
            <SkillCard key={data.category} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
