import MysticalCard from './mysticalCard';
// import MarqueeCards from './MarqueeCards';
// import MobileCard from './mobileCard';
// import { cards } from './data';
import ComicCardGrid from './comicCArd'
const cards = [
  {
    name: 'KlipB',
    description: 'A simple clipboard for Linux',
    techStack: ['C++', 'Wayland'],
    link: 'https://example1.com',
  },
  {
    name: 'HalalDroid',
    description: 'Blocks all NSFW content from user device',
    techStack: ['Kotlin', 'Tensorflow'],
    link: 'https://example2.com',
  },
  {
    name: 'L-Edger',
    description: 'A simple link managing app for Android',
    techStack: ['Flutter'],
    link: 'https://example3.com',
  },
  {
    name: 'dough',
    description: 'A C library for UI.',
    techStack: ['C'],
    link: 'https://example4.com',
  },
  {
    name: 'Kondo',
    description: 'File organizing tool',
    techStack: ['Rust'],
    link: 'https://example5.com',
  },
  {
    name: 'Portfolio ~Fareed',
    description: 'Designed and created a unique manga-styled portfolio',
    techStack: ['Tailwind', 'Next.js', 'Figma'],
    link: 'https://example6.com',
  },
];
const Mobilecard = [
  {
    name: 'KlipB',
    techStack: ['C++', 'Wayland'],
    link: 'https://example1.com',
  },
  {
    name: 'HalalDroid',
    techStack: ['Kotlin'],
    link: 'https://example2.com',
  },
  {
    name: 'L-Edger',
    techStack: ['Flutter'],
    link: 'https://example3.com',
  },
  {
    name: 'dough C-library',
    techStack: ['C'],
    link: 'https://example4.com',
  },
  {
    name: 'Kondo',
    techStack: ['Rust'],
    link: 'https://example5.com',
  },
  {
    name: 'Portfolio ~Fareed',
    techStack: ['Tailwind', 'Next.js', 'Figma'],
    link: 'https://example6.com',
  },
];

const Work = () => (
  <div className="relative w-full min-h-screen overflow-hidden text-center">

    {/* Background Image */}
    <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Images/stars.jpg')" }} />

    {/* Optional Blur + Black Overlay */}
    <div className="absolute inset-0 z-10 bg-black/80 backdrop-blur-sm" />

    {/* Content container */}
    <div className="relative z-20">

      {/* --- DESKTOP: 3D Carousel, Statue, Mystical --- */}
      <div className="hidden md:block w-full h-screen">

        {/* 3D Carousel */}
        <div
          className="absolute w-[200px] h-[300px] top-[10%] left-1/2 -translate-x-1/2 animate-rotate3d z-30
                     [transform-style:preserve-3d] [transform:perspective(1000px)]"
style={{ '--quantity': String(cards.length) } as React.CSSProperties}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute w-full h-full"
              style={{
                transform: `rotateY(${(360 / cards.length) * index}deg) translateZ(500px)`,
              }}
            >
              <MysticalCard project={card} />
            </div>
          ))}
        </div>

        {/* Statue Visual */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] px-4 pb-24 flex flex-wrap justify-between items-center z-20">
          <div
            className="absolute bottom-0 left-0 w-full h-[75vh] bg-no-repeat bg-top bg-contain z-0"
            style={{ backgroundImage: "url('/Images/work/bd1.png')" }}
          />
        </div>
      </div>

      {/* --- MOBILE: Marquee Layout --- */}
<div className="md:hidden flex justify-center items-center h-screen bg-opacity-95 relative">
  {/* <div
    className="absolute bottom-0 left-0 w-full h-[75vh] bg-no-repeat bg-top bg-contain z-0"
    style={{ backgroundImage: "url('/Images/work/bd1.png')" }}
  /> */}
  {/* <MarqueeCards cards={cards} /> */}
  {/* <MobileCard projects={Mobilecard} /> */}
  <ComicCardGrid />
</div>

    {/* --- MOBILE: Marquee Layout --- */}
{/* <div className="md:hidden flex flex-col justify-center items-center gap-6 py-8 px-4 bg-gradient-to-br from-[#3a2b23] via-[#2c1f16] to-[#1a120b] bg-opacity-90">
  {cards.map((card, index) => (
    <MobileCard  project={card} />
  ))}
</div> */}


    </div>
  </div>
);

export default Work;
