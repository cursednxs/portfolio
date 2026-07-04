import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

/**
 * Footer Component — monochrome grey/black/white
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-neutral-800/50 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* CTA Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Let's Connect
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto mb-2">
            Open to internships, content creation collaborations, and tech-communication projects.
          </p>
          <p className="text-neutral-500 max-w-md mx-auto mb-8 text-sm">
            nitinsingh36393@gmail.com &middot; Ranchi, Jharkhand, India
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-600 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-600 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nitinsingh36393@gmail.com"
              className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-600 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800/50 pt-6">
          <p className="text-center text-sm text-neutral-600 flex items-center justify-center gap-1.5">
            &copy; {currentYear} Nitin Kumar &middot; Built with
            <Heart size={14} className="text-neutral-500 fill-neutral-500" />
            using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
