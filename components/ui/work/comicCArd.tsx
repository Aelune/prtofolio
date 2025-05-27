import React, { useEffect, useRef, useState } from 'react';

const card = [
  {
    id: 1,
    title: 'KlipB',
    description: 'A simple clipboard for Linux',
    tech: ['C++', 'Wayland'],
    color: 'from-gray-700 via-gray-500 to-gray-400',
    icon: '📋',
    status: 'Live'
  },
  {
    id: 2,
    title: 'HalalDroid',
    description: 'Blocks all NSFW content from user device',
    tech: ['Kotlin', 'Tensorflow'],
    color: 'from-green-600 via-lime-500 to-yellow-400',
    icon: '🛡️',
    status: 'Beta'
  },
  {
    id: 3,
    title: 'L-Edger',
    description: 'A simple link managing app for Android',
    tech: ['Flutter'],
    color: 'from-blue-500 via-cyan-500 to-teal-400',
    icon: '🔗',
    status: 'Live'
  },
  {
    id: 4,
    title: 'dough',
    description: 'A C library for UI.',
    tech: ['C'],
    color: 'from-orange-600 via-red-500 to-pink-500',
    icon: '🍞',
    status: 'Live'
  },
  {
    id: 5,
    title: 'Kondo',
    description: 'File organizing tool',
    tech: ['Rust'],
    color: 'from-red-700 via-rose-600 to-pink-500',
    icon: '🗂️',
    status: 'Live'
  },
  {
    id: 6,
    title: 'Portfolio',
    description: 'Designed and created a manga-styled portfolio',
    tech: ['Tailwind', 'Next.js'],
    color: 'from-purple-600 via-pink-600 to-red-500',
    icon: '🎨',
    status: 'Live'
  },
];


type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
};


export default function MobileProjectsSection() {
const trackRef = useRef<HTMLDivElement | null>(null);
const [isPaused, setIsPaused] = useState(false);
const [, setStars] = useState<Star[]>([]);
const [scrollPosition, setScrollPosition] = useState<number>(0);
const animationRef = useRef<number | null>(null);

  // Generate stars for background
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.6 + 0.3,
          twinkleDelay: Math.random() * 3
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  // Infinite scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = 280; // Width of each card + margin
    const totalWidth = cardWidth * card.length;

    const animate = () => {
      if (!isPaused) {
        setScrollPosition(prev => {
          const newPos = prev + 0.5;
          return newPos >= totalWidth ? 0 : newPos;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Update track position
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Live': return 'bg-green-500';
    case 'Beta': return 'bg-yellow-500';
    case 'Coming Soon': return 'bg-blue-500';
    case 'Research': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
};


  return (
    <section className="relative min-h-screen  overflow-hidden py-12 px-4">
      {/* Animated Stars Background */}
      {/* <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle ${2 + star.twinkleDelay}s ease-in-out infinite`
            }}
          />
        ))}
      </div> */}

      {/* Floating Particles */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div> */}

      <div className="relative z-10 mt-25">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            FEATURED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto  rounded-full"></div>
          <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
            Innovative solutions pushing the boundaries of technology
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>

          {/* Scrolling Track */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-75 ease-linear h-[450px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
            style={{ willChange: 'transform' }}
          >
            {/* Render projects twice for seamless loop */}
            {[...card, ...card].map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="mt-2 flex-shrink-0 w-64 mx-2 border-white/40 bg-white/10 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:scale-102 h-[400px]"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-xl`}>
                    {project.icon}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Info */}
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-4 h-12 overflow-hidden">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105">
                    Demo
                  </button>
                  <button className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm font-semibold hover:border-slate-500 hover:text-white transition-all duration-300">
                    Code
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Instruction Text */}
        <div className="text-center mt-4">
          <p className="text-slate-400 text-xs">
            👆 Tap and hold to pause
          </p>
        </div>

        {/* Bottom CTA */}
       <div className="text-center mt-4">
  <button
    className="cursor text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
onClick={() => {
  if (typeof window !== 'undefined') {
    window.open('https://github.com/dwukn', '_blank');
  }
}}
  >
    View All Projects
  </button>
</div>

      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
}
