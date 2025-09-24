'use client'

import React, { useState } from 'react';
import { Shield, RotateCcw, BarChart3, Palette, Zap, Settings, FileText, Trash2, Download, Github, Terminal, Star, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';

export default function VanishLanding() {
  const [copiedScript, setCopiedScript] = useState('');

  const copyToClipboard = (text: string, scriptType: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(scriptType);
    setTimeout(() => setCopiedScript(''), 2000);
  };

//   const downloadLinks = {
//     'linux-amd64': 'https://github.com/Aelune/vanish/releases/latest/download/vanish-linux-amd64',
//     'linux-arm64': 'https://github.com/Aelune/vanish/releases/latest/download/vanish-linux-arm64',
//     'darwin-amd64': 'https://github.com/Aelune/vanish/releases/latest/download/vanish-darwin-amd64',
//     'darwin-arm64': 'https://github.com/Aelune/vanish/releases/latest/download/vanish-darwin-arm64'
//   };

  const installScripts = {
    curl: 'curl -LsSf https://raw.githubusercontent.com/Aelune/vanish/main/install.sh | sh',
    wget: 'wget -qO- https://raw.githubusercontent.com/Aelune/vanish/main/install.sh | sh'
  };
  const features = [
    { icon: Shield, title: 'Safe Deletion', desc: 'Files moved to cache, not permanently deleted' },
    { icon: RotateCcw, title: 'Pattern Recovery', desc: 'Restore files using flexible pattern matching' },
    { icon: BarChart3, title: 'Rich Statistics', desc: 'Detailed insights into cache usage and metrics' },
    { icon: Palette, title: 'Beautiful TUI', desc: 'Modern interface with 8 built-in themes' },
    { icon: Zap, title: 'Fast Operations', desc: 'Optimized for large directories and files' },
    { icon: Settings, title: 'Configurable', desc: 'Extensive customization via TOML config' },
    { icon: FileText, title: 'Audit Trails', desc: 'Comprehensive logging of all operations' },
    { icon: Trash2, title: 'Auto Cleanup', desc: 'Configurable retention and purging policies' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Geometric patterns */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-16 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute top-60 left-1/3 w-20 h-20 border-2 border-white transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white rotate-45"></div>

          {/* More geometric shapes for richness */}
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-18 h-18 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/2 w-14 h-14 border-2 border-white rounded-full rotate-12"></div>

          {/* Enhanced Grid pattern overlay */}
  {/* Denser grid near the edges */}
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

  {/* Medium grid in middle area */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

  {/* Less dense grid near the center */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>




          {/* Enhanced Floating dots */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-2/3 right-2/3 w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>

          {/* Diagonal lines for more depth */}
          <div className="absolute top-10 left-10 w-40 h-0.5 bg-white/20 rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-32 h-0.5 bg-white/15 rotate-45"></div>
          <div className="absolute top-1/2 left-10 w-24 h-0.5 bg-white/25 -rotate-45"></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="hero" className='w-full h-screen flex justify-center items-center'>
        <div className="text-center pt-20 pb-16">
          {/* Logo/Brand */}
          {/* <div className="flex items-center justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
              <Terminal className="w-12 h-12 text-white" />
            </div>
          </div> */}

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-10 tracking-tight">
            Vanish
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-emerald-50 mb-8 max-w-3xl mx-auto leading-relaxed">
            A modern, safe file deletion tool with recovery capabilities and beautiful TUI interface.
            <span className="block mt-2 font-semibold">Secure • Recoverable • Beautiful</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
            href="#download"
            //   href="https://github.com/Aelune/vanish/releases/latest"
              className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 min-w-[200px] text-decoration-none"
            >
              <Download className="w-5 h-5" />
              Download Vanish
            </a>
            <a
              href="https://github.com/Aelune/vanish"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-3 min-w-[200px] text-decoration-none"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          {/* Additional links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://github.com/Aelune/vanish/issues"
              className="text-emerald-100 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
            >
              <AlertCircle className="w-4 h-4" />
              Report Issues
            </a>
            <a
              href="https://github.com/Aelune/vanish/discussions"
              className="text-emerald-100 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Join Discussion
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 text-emerald-100">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">100% Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Lightning Fast</span>
            </div>
          </div>
        </div>
</section>
        {/* Features Grid */}
        <section id="feature" className='w-full h-screen flex justify-center items-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-emerald-50 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
</section>
        {/* Code Preview */}
        {/* <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-emerald-100 font-mono text-sm">terminal</span>
          </div>
          <div className="font-mono text-emerald-100 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-300">$</span>
              <span className="text-white">vanish delete *.log</span>
            </div>
            <div className="text-emerald-200 text-sm">✓ Moved 42 files to cache safely</div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-emerald-300">$</span>
              <span className="text-white">vanish restore --pattern "*.log"</span>
            </div>
            <div className="text-emerald-200 text-sm">✓ Restored 42 files from cache</div>
          </div>
        </div> */}

        {/* Download Section */}
        <section id="download" className='w-full h-screen flex justify-center items-center'>
        <div className="text-center pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto"> Just copy paste in your Terminal</p>
            {/* <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto">
              Join thousands of developers who trust Vanish to keep their files safe.
              Choose your preferred installation method below.
            </p> */}

            {/* Installation Methods Tabs */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">

              {/* Quick Install */}
              <div className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Terminal className="w-6 h-6" />
                  Quick Install
                </h3>

<div className="space-y-4">
  {/* curl */}
  <div className="bg-gray-900/60 rounded-xl p-4 text-left"> {/* Add text-left here */}
    <div className="flex items-center justify-between mb-2">
      <span className="text-emerald-200 font-semibold text-sm">Using curl:</span>
      <button
        onClick={() => copyToClipboard(installScripts.curl, 'curl')}
        className="text-emerald-300 hover:text-white transition-colors p-1"
      >
        {copiedScript === 'curl' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
    <code className="text-emerald-100 font-mono text-sm break-all">
      {installScripts.curl}
    </code>
  </div>

  {/* wget */}
  <div className="bg-gray-900/60 rounded-xl p-4 text-left"> {/* Add text-left here */}
    <div className="flex items-center justify-between mb-2">
      <span className="text-emerald-200 font-semibold text-sm">Using wget:</span>
      <button
        onClick={() => copyToClipboard(installScripts.wget, 'wget')}
        className="text-emerald-300 hover:text-white transition-colors p-1"
      >
        {copiedScript === 'wget' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
    <code className="text-emerald-100 font-mono text-sm break-all">
      {installScripts.wget}
    </code>
  </div>
</div>


                <div className="mt-6 p-4 bg-blue-500/40 rounded-xl border border-blue-400/30">
                  <p className="text-left text-blue-100 text-sm">
                    💡 <strong>Tip:</strong> Add a version tag like <code className="bg-black/20 px-1 rounded">v0.9.0</code> to install a specific version
                  </p>
                </div>
              </div>

              {/* Direct Downloads */}
              {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Download className="w-6 h-6" />
                  Direct Downloads
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  <a
                    href={downloadLinks['darwin-arm64']}
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <div className="font-bold">macOS (Apple Silicon)</div>
                      <div className="text-sm opacity-75">ARM64</div>
                    </div>
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href={downloadLinks['darwin-amd64']}
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <div className="font-bold">macOS (Intel)</div>
                      <div className="text-sm opacity-75">AMD64</div>
                    </div>
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href={downloadLinks['linux-amd64']}
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <div className="font-bold">Linux (x86_64)</div>
                      <div className="text-sm opacity-75">AMD64</div>
                    </div>
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href={downloadLinks['linux-arm64']}
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <div className="font-bold">Linux (ARM64)</div>
                      <div className="text-sm opacity-75">ARM64</div>
                    </div>
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                <div className="mt-6 p-4 bg-purple-500/20 rounded-xl border border-purple-400/30">
                  <p className="text-purple-100 text-sm">
                    📦 Package managers: <code className="bg-black/20 px-1 rounded">cargo install vanish</code>
                  </p>
                </div>
              </div> */}
            </div>

            {/* Community Links */}
            <div className="border-t border-white/20 pt-8">
              <h4 className="text-xl font-bold text-white mb-4">Join the Community</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/Aelune/vanish"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </a>
                <a
                  href="https://github.com/Aelune/vanish/issues"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <AlertCircle className="w-5 h-5" />
                  Report Issues
                </a>
                <a
                  href="https://github.com/Aelune/vanish/discussions"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Discussions
                </a>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}
