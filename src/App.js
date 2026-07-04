import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

/**
 * Main App component
 * Orchestrates the full portfolio layout with all sections
 */
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
