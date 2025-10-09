import React, { useRef, useState } from 'react';
import { useScroll,
    useTransform,
    useMotionValueEvent,
    motion,
    easeInOut,
    spring,
} from 'framer-motion';
import FuzzyText from '@/components/Text/FuzzyText';

export default function Hero() {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    // const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
      // Animate from 0.5 to 0.15 based on scroll
  const intensityMotion = useTransform(scrollYProgress, [0, 1], [0.3, 0.15]);
  const [baseIntensity, setBaseIntensity] = useState(0.2);

  useMotionValueEvent(intensityMotion, 'change', (latest) => {
    setBaseIntensity(latest);
  });

  const hoverIntensity = 0.02;
  const enableHover = true;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: spring,
        stiffness: 400,
        damping: 17,
        delay: 0.5
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={ref}
        style={{ opacity, scale }}
        className="relative w-full h-screen bg-[url('/Images/herobg-hd.webp')] bg-cover bg-center"
      >
        {/* Enhanced Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black" />

        {/* Smooth Bottom Blend - extends into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

        {/* Extended blend that continues past the hero section */}
        <div className="absolute -bottom-16 left-0 right-0 h-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Aesthetic Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-50">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                backgroundSize: '12px 12px',
                backgroundPosition: '0 0, 6px 6px'
              }}
            />
          </div>

          {/* Secondary dot layer for depth */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at center, rgba(202, 165, 110, 0.3) 0.6px, transparent 0.6px)`,
                backgroundSize: '24px 24px',
                backgroundPosition: '12px 12px'
              }}
            />
          </div>
        </div>

        {/* Main Content - Grid Layout */}
        <motion.div
          className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 h-full items-center">
            {/* Left Side: Enhanced Title Section */}
            <motion.div
              className="grid place-items-center md:place-items-start pt-24 md:pt-0 md:ml-11"
              variants={titleVariants}
            >
              <div className="relative w-full max-w-2xl">
                {/* Title Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fb7185]/10 via-transparent to-[#caa56e]/10 blur-2xl rounded-2xl" />

                {/* Main Title with Enhanced Typography */}
                <div className="relative">
                    <motion.div
                    className="font-inukit text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white/90 relative text-center md:text-left"
                    variants={subtitleVariants}
                    whileHover={{ scale: 1.02, color: "#fb7185" }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient Text Effect */}
                    <span className="bg-gradient-to-r from-white via-[#fb7185] to-[#caa56e] bg-clip-text text-transparent">
                      DEVELOPER
                    </span>
                  </motion.div>


                  {/* Connecting Line */}
              <motion.div
                className="flex items-center justify-center md:justify-start my-2 md:my-4"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="h-px bg-gradient-to-r from-[#fb7185] via-white to-[#caa56e] w-full" />
                <motion.div
                  className="mx-3 text-white/60 text-lg md:text-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  &
                </motion.div>
                <div className="h-px bg-gradient-to-r from-[#caa56e] via-white to-[#fb7185] w-full" />
              </motion.div>

                  {/* Subtitle */}
<motion.div
                className="font-inukit leading-tight text-white relative"
              >
                {/* Text Shadow Layer */}
                {/* Main Text */}
                <div className="relative text-[#fb7185]/30">
                  <FuzzyText
                    baseIntensity={baseIntensity}
                    hoverIntensity={hoverIntensity}
                    enableHover={enableHover}
                    fontSize='clamp(2rem, 3vw, 3rem)'
                  >
                    DESIGNER
                  </FuzzyText>
                </div>
              </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 border border-[#fb7185]/30 rounded-full animate-pulse hidden md:block" />
                <div className="absolute -bottom-8 -right-8 w-12 h-12 border border-[#caa56e]/30 rotate-45 animate-pulse delay-1000 hidden md:block" />
              </div>
            </motion.div>

            {/* Right Side: Enhanced Description */}
            <motion.div
              className="grid place-items-center md:place-items-start pb-24 md:pb-0"
              variants={textVariants}
            >
              <div className="relative w-full max-w-2xl">
                {/* Glass Card Background */}
                <div className="absolute inset-0 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-2xl" />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 space-y-6 md:space-y-8">
                  <motion.p
                    className="font-jacques text-lg sm:text-xl md:text-xl lg:text-2xl text-white/90 leading-relaxed text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    {/* Highlight certain words */}
                    <span className="text-white">I am a </span>
                    <span className="text-[#34d399] font-semibold underline-link-red">
                      <a href="/projects">developer </a>
                    </span>
                    <span className="text-white">and </span>
                    {/* <span className="text-[#caa56e] font-semibold">UX/UI designer</span> */}
                    <span className="text-[#565c63] font-semibold underline-link-blue">UX/UI designer</span>
                    <span className="text-white"> based in India. Although just started UI, I have built some unique website designs. I love </span>
                    {/* <span className="text-[#60a5fa] font-semibold">minimal</span> */}
                    <span className="text-[#60a5fa] font-semibold underline-link-blue">
                      <a href="/projects">minimal </a>
                    </span>
                    <span className="text-white"> and </span>
                    <span className="text-[#34d399] font-semibold underline-link">
                      <a href="/projects/vanish">experimental </a>
                    </span>
                    <span className="text-white">design</span>
                  </motion.p>

                {/* Stats/Skills Preview */}
                <motion.div
                  className="flex justify-center md:justify-start space-x-6 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  {['Python','GoLang', 'Linux', 'Design'].map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 backdrop-blur-sm"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(251,113,133,0.2)" }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                  {/* Enhanced CTA Button */}
                <div className="flex justify-center md:justify-start mt-8">
                  <motion.button
                    className="relative text-white font-roboto rounded-full px-8 py-4 border-2 border-white/30 backdrop-blur-sm overflow-hidden group"
                    variants={buttonVariants}
                    whileHover={{
                      scale: 1.05,
                      rotate: -1,
                      boxShadow: "0 0 30px rgba(251,113,133,0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const section = document.getElementById('contact');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {/* Button Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fb7185]/20 to-[#caa56e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-[#fb7185] rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Button Text */}
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Contact ME</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 grid place-items-center gap-2 text-white/60 z-11"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full grid place-items-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-1 h-3 bg-white/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
