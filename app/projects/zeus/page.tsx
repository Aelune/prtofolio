'use client';

import React, { useState, useEffect } from 'react';
import {
  Clipboard,
  Search,
  Trash2,
  Zap,
  Settings,
  Terminal,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

export default function KlipbLanding() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Clipboard,
      title: "Smart Storage",
      description: "Automatically store clipboard contents with intelligent deduplication to prevent redundant entries and optimize storage."
    },
    {
      icon: Search,
      title: "Quick Search",
      description: "Instantly find and retrieve clipboard items using rofi integration with powerful search and preview capabilities."
    },
    {
      icon: Trash2,
      title: "Flexible Management",
      description: "Delete items by ID, search query, or wipe everything clean. Full control over your clipboard history."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with C++ for optimal performance. Minimal resource usage with maximum efficiency."
    },
    {
      icon: Settings,
      title: "Wayland Native",
      description: "Designed specifically for Wayland environments using wl-clipboard for seamless integration."
    },
    {
      icon: Terminal,
      title: "Command Line",
      description: "Full command-line interface for automation, scripting, and integration with your workflow."
    }
  ];

  const installSteps = [
    {
      step: "1",
      title: "Clone Repository",
      description: "git clone https://github.com/dwukn/klipb"
    },
    {
      step: "2",
      title: "Install Dependencies",
      description: "Ensure you have wl-clipboard and rofi installed on your system"
    },
    {
      step: "3",
      title: "Build Application",
      description: "Compile the source code using g++ or your preferred C++ compiler"
    },
    {
      step: "4",
      title: "Start Using",
      description: "Begin managing your clipboard with powerful Klipb commands"
    }
  ];

  const codeExample = `# Store clipboard content
wl-paste | ./klipb store

# List all items with preview
./klipb list

# Search and select with rofi
./klipb decode "$(./klipb list | rofi -dmenu)"

# Delete items by query
./klipb delete-query "search_term"

# Clear all history
./klipb wipe`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-50/95 backdrop-blur-lg border-b border-blue-200/30 shadow-sm'
          : 'bg-slate-50/90 backdrop-blur-md border-b border-blue-100/20'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Klipb
              </div>
              <div className="ml-2 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('installation')}
                className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Installation
              </button>
              <button
                onClick={() => scrollToSection('docs')}
                className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Documentation
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-slate-100/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent leading-tight">
              Advanced Clipboard Management
            </h1>
            <div className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              for Wayland
            </div>
          </div>

          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Klipb is a powerful, efficient clipboard manager designed specifically for Wayland environments.
            Store, manage, and access your clipboard history with unprecedented ease and control.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
            <button
              onClick={() => scrollToSection('installation')}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                Install Now
                <ChevronDown className="ml-2 w-5 h-5" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection('features')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for efficient clipboard management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-slate-200/50 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                Simple & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Powerful</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Klipb offers an intuitive command-line interface that makes clipboard management effortless.
                From storing content to searching through history, everything is just a command away.
              </p>
              <button
                onClick={() => scrollToSection('installation')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Get Started
                <ExternalLink className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center px-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <pre className="text-slate-200 font-mono text-sm leading-relaxed mt-8 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>

                <div className="absolute bottom-4 right-4 opacity-20">
                  <Terminal className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              Quick Installation
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get up and running in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl border border-slate-200/50 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 group">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-slate-800 mt-4 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < installSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Klipb
            </div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Advanced clipboard management for the modern Wayland desktop.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8 text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Documentation</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Issues</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Contributing</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">License</a>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Klipb. Licensed under MIT License.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
