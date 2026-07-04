import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

/**
 * Hero Section Component
 * Bold introduction with Nitin's bio, social links, and a scroll-down CTA
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grey gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-neutral-700/50 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-sm text-neutral-400">Open to internships & collaborations</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
          Nitin Kumar
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-4 leading-relaxed animate-slide-up" style={{ animationDelay: '0.05s' }}>
          Journalism & Mass Communication Student
        </p>
        <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Android Developer (Kotlin) &middot; Digital Content Strategist &middot; Python Enthusiast
        </p>

        {/* Bio paragraph */}
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Bridging communication and technology — from coordinating college tech events to
          producing data-driven media content. Passionate about leveraging cross-disciplinary
          knowledge to create impactful digital experiences.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-700/50 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-500 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-700/50 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-500 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:nitinsingh36393@gmail.com"
            className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-700/50 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-500 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
            aria-label="Send Email"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-white text-black font-medium transition-all duration-300 hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-neutral-600 hover:text-neutral-400 transition-colors" aria-label="Scroll to projects">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
