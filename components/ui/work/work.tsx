import { useEffect, useRef, useState } from 'react';
import MysticalCard from './mysticalCard';
// import MobileProjectsSection from './comicCArd';

const cards = [
  {
    id: 1,
    title: 'Vanish',
    description: 'Modern alternative to rm, with customizable TUI and restore feature',
    tech: ['GoLang', 'TUI'],
    color: 'from-red-700 via-rose-600 to-pink-500',
    // icon: '🗑️',
    icon:'globe.svg',
    status: 'Live',
    link: 'https://github.com/Aelune/vanish'
  },
  {
    id: 2,
    title: 'Venus',
    description: 'Browser extension to change tab UI and have customizable quicklinks',
    tech: ['JavaScript', 'WebExt'],
    color: 'from-orange-600 via-amber-500 to-yellow-400',
    // icon: '🪐',
    icon:'globe.svg',
    status: 'Beta',
    link: 'https://github.com/Dwukn/venus'
  },
  {
    id: 3,
    title: 'Hecate',
    description: 'Hyprland dotfiles and collection of apps to improve user experience',
    tech: ['Hyprland', 'Config'],
    color: 'from-purple-700 via-indigo-600 to-blue-500',
    // icon: '🌙',
    icon:'globe.svg',
    status: 'Live',
    link: 'https://github.com/Dwukn/hecate'
  },
  {
    id: 4,
    title: 'Janus',
    description: 'Template creation tool for multiple types of projects',
    tech: ['Rust', 'CLI'],
    color: 'from-green-600 via-emerald-500 to-teal-400',
    // icon: '⚡',
    icon:'globe.svg',
    status: 'Beta',
    link: 'https://github.com/Dwukn/janus'
  },
  {
    id: 5,
    title: 'Athena',
    description: 'Custom Linux kernel build for fun and learning',
    tech: ['C', 'Kernel'],
    color: 'from-blue-700 via-cyan-600 to-indigo-500',
    // icon: '⚔️',
    icon:'globe.svg',
    status: 'Research',
    link: 'https://github.com/Dwukn/athena'
  },
//   {
//     id: 6,
//     title: 'KlipB',
//     description: 'A simple clipboard manager for Linux',
//     tech: ['C++', 'Wayland'],
//     color: 'from-gray-700 via-gray-500 to-gray-400',
//     icon: '📋',
//     status: 'Live',
//     link: "https://github.com/Dwukn/KlipB"
//   }
];

const Work = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen overflow-hidden text-center transition-all duration-1000 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center m-6">
        <h2 className="text-4xl font-hand bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          FEATURED PROJECTS
        </h2>
      </div>

      <div className="relative">
        {/* DESKTOP */}
        <div className="hidden md:block w-full h-screen [transform-style:preserve-3d]">
          {/* Rotating Cards Container */}
          <div
            className="absolute w-[280px] h-[200px] top-[15%] left-1/2 -translate-x-1/2 animate-rotate3d [transform-style:preserve-3d] [transform:perspective(1000px)]"
            style={{ '--quantity': String(cards.length) } as React.CSSProperties}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="absolute w-full h-full [transform-style:preserve-3d]"
                style={{
                  transform: `rotateY(${(360 / cards.length) * index}deg) translateZ(400px)`,
                }}
              >
                <MysticalCard project={card} />
              </div>
            ))}
          </div>

          {/* Statue - positioned in 3D space behind the cards */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] px-4 pb-24 flex flex-wrap justify-between items-center"
            style={{ transform: 'translateZ(-200px)' }}
          >
            <div className="relative w-full h-[75vh]">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[30%] h-10 bg-white/10 opacity-30 rounded-full blur-md" />
              <div
                className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-top bg-contain"
                style={{ backgroundImage: "url('/Images/Athena-Statue.png')" }}
              />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
{/* <MobileProjectsSection projects={cards} /> */}
          <div className="relative w-full overflow-hidden whitespace-nowrap flex justify-center items-center bg-opacity-95">
            <div className="inline-flex animate-marquee space-x-6 min-w-max py-8">
              {/* Duplicate the card list twice to allow infinite scroll */}
              {[...cards, ...cards].map((card, index) => (
                <div
                  key={index}
                  className="w-[280px] h-[320px] flex-shrink-0"
                >
                  <MysticalCard project={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
