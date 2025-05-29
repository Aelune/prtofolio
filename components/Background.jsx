import React, { useEffect, useState, useRef } from 'react';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();
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
        opacity: Math.random() * 0.4 + 0.6, // Increased minimum opacity
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { width, height } = windowSize;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor: '#000' }} // Ensure black background
    >
      {/* Secondary enhanced glow */}
      <div
        className="fixed z-20 pointer-events-none transition-all duration-200 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
    background: 'radial-gradient(circle, rgba(160,160,160,0.3) 0%, rgba(160,160,160,0.1) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          opacity: 0.9,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-15">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: '#FFD580',
              opacity: particle.opacity,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.speed * 3}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`,
              transform:
                width && height
                  ? `translate(${(mousePosition.x / width - 0.5) * particle.speed * 10}px, ${(mousePosition.y / height - 0.5) * particle.speed * 10}px)`
                  : 'none',
              boxShadow: '0 0 10px #FFD580, 0 0 20px rgba(255,213,128,0.4)',
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div
          className="absolute w-96 h-96 border border-white/20 rounded-full"
          style={{
            top: '10%',
            left: '10%',
            transform: width ? `rotate(${(mousePosition.x / width) * 30}deg)` : 'none',
          }}
        />
        <div
          className="absolute w-64 h-64 border border-white/15 rounded-full"
          style={{
            bottom: '20%',
            right: '10%',
            transform: height ? `rotate(${-(mousePosition.y / height) * 40}deg)` : 'none',
          }}
        />
        <div
          className="absolute w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl"
          style={{
            top: '30%',
            right: '20%',
            transform: width ? `scale(${1 + (mousePosition.x / width) * 0.3})` : 'none',
          }}
        />
      </div>

      {/* Grid overlay */}
      {/* Silvery grid overlay */}
<div
  className="absolute inset-0 z-10 opacity-10"
  style={{
    backgroundImage: `
      linear-gradient(rgba(192,192,192,0.7) 2px, transparent 1px),
      linear-gradient(90deg, rgba(192,192,192,0.4) 2px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    transform:
      width && height
        ? `translate(${(mousePosition.x / width - 0.5) * 20}px, ${(mousePosition.y / height - 0.5) * 20}px)`
        : 'none',
    mixBlendMode: 'lighten' // optional: makes it glow over dark
  }}
/>


      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Background;
