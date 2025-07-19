// TODO
//  ADD links in footer and create documentation page


'use client';

import React, { useState, useEffect } from 'react';
import { FileText, FolderOpen, Sparkles, Download, Github, Star, ArrowRight, Check, Zap, Shield, Heart, Terminal, Code2, Move3D, Layers3 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const KondoLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(testimonialInterval);
    };
  }, []);

   const router = useRouter();

  const sorceCodeRedirect = () => {
    router.push('https://github.com/Dwukn/kondo');
  };

 const KondoDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/Dwukn/kondo/releases/download/testing/kondo';
    link.setAttribute('download', 'kondo'); // won't work on GitHub, but harmless
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const features = [
    {
      icon: <Terminal className="w-7 h-7" />,
      title: "Command Line Power",
      description: "Execute with a single command. No configuration needed, just instant organization.",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      icon: <Layers3 className="w-7 h-7" />,
      title: "Smart Grouping",
      description: "Intelligently categorizes files by extension with custom handling for edge cases.",
      gradient: "from-purple-500 via-blue-500 to-cyan-500"
    },
    {
      icon: <Move3D className="w-7 h-7" />,
      title: "Non-Destructive",
      description: "Safely moves files without data loss. Your original files remain perfectly intact.",
      gradient: "from-green-500 via-teal-500 to-emerald-500"
    }
  ];

  const testimonials = [
    { text: "Kondo saved me hours of manual file organization. It's like magic!", author: "Sarah Chen", role: "Frontend Developer" },
    { text: "The cleanest file organization tool I've ever used. Simply brilliant.", author: "Marcus Rodriguez", role: "DevOps Engineer" },
    { text: "Finally, a tool that thinks like I do about file organization.", author: "Zoe Kim", role: "UI/UX Designer" }
  ];

const beforeFiles = [
  { name: "vacation_photo.jpg", type: "image", size: "2.4MB" },
  { name: "portrait.jpg", type: "image", size: "1.8MB" },
  { name: "project_report.pdf", type: "pdf", size: "1.2MB" },
  { name: "summary.pdf", type: "pdf", size: "800KB" },
  { name: "meeting_notes.txt", type: "text", size: "4KB" },
  { name: "todo_list.txt", type: "text", size: "3KB" },
  { name: "README", type: "file", size: "8KB" }
];

const afterStructure = [
  { folder: "jpg", files: ["vacation_photo.jpg", "portrait.jpg"], color: "bg-orange-500" },
  { folder: "pdf", files: ["project_report.pdf", "summary.pdf"], color: "bg-red-500" },
  { folder: "txt", files: ["meeting_notes.txt", "todo_list.txt"], color: "bg-green-500" },
  { folder: "no_extension", files: ["README"], color: "bg-gray-500" }
];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-gradient-to-tr from-orange-500/5 to-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg shadow-orange-500/10">
              <Sparkles className="w-5 h-5 animate-spin" />
              <span>Inspired by Marie Kondo's Philosophy</span>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 mb-8 leading-tight tracking-tight">
              Spark Joy in Your
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent relative">
                Filesystem
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-xl"></div>
              </span>
            </h1>

            <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transform chaotic directories into perfectly organized folders with a single command.
              <span className="text-orange-400 font-medium"> Kondo automatically groups your files by extension</span>,
              creating clean, maintainable structures that spark digital joy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative flex items-center space-x-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden"
              onClick={KondoDownload}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Kondo</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              </button>

              <button className="group flex items-center space-x-3 text-slate-300 px-10 py-5 rounded-2xl border-2 border-slate-700 hover:border-orange-500/50 hover:bg-orange-500/5 backdrop-blur-sm transition-all duration-300"
              onClick={sorceCodeRedirect}>
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span className="text-xl font-semibold"
                >View Source</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-400">MIT</span>
              </button>
            </div>

            {/* Terminal Preview */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-slate-400 text-sm font-mono">kondo-demo</span>
                </div>
                <div className="font-mono text-left space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-400">$</span>
                    <span className="text-slate-300">kondo -d ~/Downloads</span>
                  </div>
                  <div className="text-green-400">✓ Scanned 127 files</div>
                  <div className="text-blue-400">✓ Created 12 folders</div>
                  <div className="text-orange-400">✓ Organized in 0.03s</div>
                  <div className="text-slate-400">🎉 Your filesystem now sparks joy!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      {/* <section id="demo" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent mb-6">
              See the Magic Happen
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Watch as chaos transforms into perfect organization with intelligent file grouping
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Before Section */}
{/* <div className="space-y-6">
  <div className="flex items-center space-x-3 mb-6">
    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md shadow-red-500/25">
      <span className="text-white font-semibold text-lg">1</span>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-slate-100">Before: Digital Chaos</h3>
      <p className="text-slate-400 text-sm">Unorganized files scattered everywhere</p>
    </div>
  </div>

  <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/40 shadow-xl">
    <div className="space-y-3">
      {beforeFiles.map((file, index) => (
        <div
          key={index}
          className="group flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-md flex items-center justify-center">
              <FileText className="w-5 h-5 text-slate-300" />
            </div>
            <div>
              <div className="text-slate-200 text-sm font-medium">{file.name}</div>
              <div className="text-slate-500 text-xs">{file.size}</div>
            </div>
          </div>
          <div className="text-slate-500 group-hover:text-red-400 transition-colors">
            <Code2 className="w-4 h-4" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div> */}

{/* After Section */}
{/* <div className="space-y-6 mt-12">
  <div className="flex items-center space-x-3 mb-6">
    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md shadow-green-500/25">
      <Check className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-slate-100">After: Perfect Harmony</h3>
      <p className="text-slate-400 text-sm">Intelligently organized by file type</p>
    </div>
  </div>

  <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20 shadow-xl shadow-orange-500/10">
    <div className="space-y-4">
      {afterStructure.map((folder, index) => (
        <div key={index} className="space-y-2">
          <div className="group flex items-center justify-between p-3 bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-lg border border-slate-600/30 hover:border-orange-500/50 hover:from-orange-500/10 hover:to-red-500/10 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${folder.color} rounded-md flex items-center justify-center shadow-md`}>
                <FolderOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-orange-300 font-semibold text-sm">/{folder.folder}/</div>
                <div className="text-slate-500 text-xs">{folder.files.length} file(s)</div>
              </div>
            </div>
            <div className="text-orange-400 group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {folder.files.map((file, fileIndex) => (
            <div
              key={fileIndex}
              className="ml-6 flex items-center space-x-3 p-2.5 bg-slate-800/20 rounded-md border border-slate-700/20 hover:bg-slate-700/20 transition-colors"
            >
              <div className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center">
                <FileText className="w-4 h-4 text-slate-400" />
              </div>
              <span className="text-slate-300 text-sm">{file}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</div>


          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent mb-6">
              Engineered for Excellence
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Powerful features designed for developers who value clean, organized systems
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/30 hover:border-orange-500/30 shadow-2xl hover:shadow-orange-500/10 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-6 group-hover:text-orange-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center space-x-2 text-orange-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-sm font-semibold"
                //   onClick={kondoTutorial}
                  >Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-100 mb-16">Loved by Developers Worldwide</h2>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/30 shadow-2xl">
              <div className="text-3xl text-orange-400 mb-8 font-light leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </div>
              <div className="text-slate-300 font-semibold">{testimonials[currentTestimonial].author}</div>
              <div className="text-slate-500">{testimonials[currentTestimonial].role}</div>
            </div>

            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-orange-500 scale-125' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                About the Philosophy
              </h2>

              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-orange-400">Kondo</strong> is named after <strong className="text-slate-100">Marie Kondo</strong>,
                  the organizational expert famous for the <em className="text-orange-300">KonMari</em> method.
                </p>
                <p>
                  Just as Marie Kondo helps people declutter their physical spaces and "spark joy,"
                  our Kondo tool brings that same philosophy to your digital workspace, transforming
                  chaotic directories into organized, maintainable systems.
                </p>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 text-orange-300">
                    <Heart className="w-6 h-6" />
                    <span className="font-semibold text-lg">Made with passion for clean, organized systems</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/30 shadow-2xl">
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-orange-500/25">
                      <Sparkles className="w-12 h-12 text-white animate-pulse" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-3xl blur-xl animate-pulse"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-orange-300 mb-4">Spark Digital Joy</h3>
                  <p className="text-slate-400 text-lg">Transform digital clutter into organized bliss with the power of intentional file management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>

        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-6xl font-bold text-slate-100 mb-8 leading-tight">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Digital Workspace?
            </span>
          </h2>

          <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Join thousands of developers who have already discovered the joy of perfectly organized file systems.
            Start your journey to digital zen today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative flex items-center space-x-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden"
            onClick={KondoDownload}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="w-7 h-7 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>

            <button className="group flex items-center space-x-3 text-slate-300 border-2 border-slate-600 hover:border-orange-500 px-12 py-6 rounded-2xl hover:bg-orange-500/5 backdrop-blur-sm transition-all duration-300"
            onClick={sorceCodeRedirect}>
              <Star className="w-6 h-6 group-hover:rotate-12 group-hover:text-yellow-400 transition-all" />
              <span className="text-xl font-semibold">Star on GitHub</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-400">2.1k</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Kondo
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-xs">
                Bringing joy and organization to your filesystem, one directory at a time.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5 text-slate-400 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Star className="w-5 h-5 text-slate-400 hover:text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-100 mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Features</span></a></li>
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Documentation</span></a></li>
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Releases</span></a></li>
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Roadmap</span></a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-100 mb-6 text-lg">Community</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>GitHub</span></a></li>
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Issues</span></a></li>
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Contributing</span></a></li>
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Discussions</span></a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-100 mb-6 text-lg">Resources</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>MIT License</span></a></li>
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Privacy Policy</span></a></li>
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Terms of Use</span></a></li>
                <li><a href="#" className="hover:text-orange-400 flex items-center space-x-2"><ArrowRight className="w-4 h-4" /><span>Support</span></a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 flex items-center space-x-2">
              <span>&copy; 2025 Kondo.</span>
              <span className="text-slate-600">|</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for organized developers.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </span>
              <span className="text-slate-600">|</span>
              <span>Version 2.0.1</span>
            </div>
          </div>
        </div>
      </footer>
      </div>
  );
};

export default KondoLanding;
