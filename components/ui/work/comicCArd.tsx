import React, { useEffect, useRef, useState } from 'react';

// type Star = {
//   id: number;
//   x: number;
//   y: number;
//   size: number;
//   opacity: number;
//   twinkleDelay: number;
// };

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
  icon: string;
  color: string;
};

type MobileProjectsSectionProps = {
  projects: Project[];
};

export default function MobileProjectsSection({ projects }: MobileProjectsSectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
//   const [stars, setStars] = useState<Star[]>([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const animationRef = useRef<number | null>(null);

  // Generate stars for background
//   useEffect(() => {
//     const generateStars = () => {
//       const newStars = [];
//       for (let i = 0; i < 50; i++) {
//         newStars.push({
//           id: i,
//           x: Math.random() * 100,
//           y: Math.random() * 100,
//           size: Math.random() * 2 + 1,
//           opacity: Math.random() * 0.6 + 0.3,
//           twinkleDelay: Math.random() * 3
//         });
//       }
//       setStars(newStars);
//     };
//     generateStars();
//   }, []);

  // Infinite scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !projects.length) return;

    const cardWidth = 280; // Width of each card + margin
    const totalWidth = cardWidth * projects.length;

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
  }, [isPaused, projects.length]);

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
    <section className="relative min-h-screen overflow-hidden py-12 px-4">
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
  <div className="text-center mb-6">
    <h2 className="text-4xl font-hand bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      FEATURED PROJECTS
    </h2>
    {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
    <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
      Innovative solutions pushing the boundaries of technology
    </p> */}
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
      {[...projects, ...projects].map((project, index) => (
        <div
          key={`${project.id}-${index}`}
          className="mt-2 flex-shrink-0 w-64 mx-2 border-white/40 bg-white/10 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 hover:scale-105 h-[400px] relative"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
        >
          {/* Status Badge */}
          <div className="flex justify-between items-start mb-4">
            <div className={`w-12 h-12 rounded-xl  bg-gradient-to-br ${project.color} flex items-center justify-center text-xl`}>
              {project.icon}
            </div>
            <span className={`px-2 py-1 rounded-full font-playwrite text-xs font-bold text-white ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>

          {/* Project Info */}
          <h3 className="text-lg font-bold font-jacques text-white mb-3 leading-tight">{project.title}</h3>
          <p className="text-slate-300 text-xs font-WDXL leading-relaxed mb-4 h-12 overflow-hidden">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap font-Gloock gap-1 mb-4">
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
            <button className="cursor flex-1 px-8 py-4 rounded-xl font-WDXL font-bold text-sm  transition-all duration-500 hover:scale-105 text-[#fb7185] bg-gradient-to-r from-[#fb7185]/20 to-white/10 border border-[#caa56e]/30 hover:from-[#fb7185]/30 hover:to-white/20 hover:shadow-lg hover:hover:shadow-[#fb7185]/20">
              Demo
            </button>
<button className="cursor px-8 py-4 rounded-xl font-bold text-sm font-WDXL transition-all duration-500 hover:scale-105 text-[#c4b5fd] bg-gradient-to-r from-[#c4b5fd]/20 to-white/10 border border-[#caa56e]/30 hover:from-[#c4b5fd]/30 hover:to-white/20 hover:shadow-lg hover:shadow-[#c4b5fd]/20">
              Code
            </button>
          </div>

          {/* Hover Glow Effect */}
          <div className={`absolute font-WDXL inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
        </div>
      ))}
    </div>
  </div>

  {/* Instruction Text */}
  <div className="text-center mt-4">
    <p className="text-slate-400 text-xs font-jacques font-bold">👆 Tap and hold to pause</p>
  </div>

  {/* Bottom CTA */}
  <div className="text-center mt-4">
    <button
      className="cursor px-8 py-4 rounded-xl font-bold text-sm  transition-all duration-500 hover:scale-105 text-[#fb7185] bg-gradient-to-r from-[#fb7185]/20 to-white/10 border border-[#caa56e]/30 hover:from-[#fb7185]/30 hover:to-white/20 hover:shadow-lg hover:hover:shadow-[#fb7185]/20"
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
