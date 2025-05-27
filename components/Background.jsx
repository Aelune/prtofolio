import React, { useEffect, useState, useRef } from 'react';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 }); // <-- new state for window size
  const containerRef = useRef(null);

  useEffect(() => {
    // Set initial window size on mount
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize(); // initial set

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  // Optional: Add mousemove listener to update mousePosition
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Destructure for convenience
  const { width, height } = windowSize;

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Secondary smaller glow */}
      <div
        className="fixed z-19 pointer-events-none transition-all duration-200 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(202,165,110,0.8) 0%, rgba(202,165,110,0.4) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          opacity: 0.7
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-15">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-[#caa56e] opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.speed * 3}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`,
              transform: width && height ? `translate(${(mousePosition.x / width - 0.5) * particle.speed * 10}px, ${(mousePosition.y / height - 0.5) * particle.speed * 10}px)` : 'none'
            }}
          />
        ))}
      </div>

      {/* Geometric shapes with mouse interaction */}
 <div className="absolute inset-0 z-15 pointer-events-none">
  <div
    className="absolute w-96 h-96 border border-[#C0C0C0]/20 rounded-full"
    style={{
      top: '10%',
      left: '10%',
      transform: width ? `rotate(${(mousePosition.x / width) * 30}deg)` : 'none'
    }}
  />
  <div
    className="absolute w-64 h-64 border border-white/10 rounded-full" // keep this as is or change to silver?
    style={{
      bottom: '20%',
      right: '10%',
      transform: height ? `rotate(${-(mousePosition.y / height) * 40}deg)` : 'none'
    }}
  />
  <div
    className="absolute w-32 h-32 bg-gradient-to-br from-[#C0C0C0]/10 to-transparent rounded-full blur-xl"
    style={{
      top: '30%',
      right: '20%',
      transform: width ? `scale(${1 + (mousePosition.x / width) * 0.3})` : 'none'
    }}
  />
</div>


      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-10 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(202,165,110,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(202,165,110,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: width && height ? `translate(${(mousePosition.x / width - 0.5) * 20}px, ${(mousePosition.y / height - 0.5) * 20}px)` : 'none'
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default Background;
