import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";


interface WelcomeAnimationProps {
  welcomeDone: boolean;
  setWelcomeDone: (done: boolean) => void;
}
const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ welcomeDone, setWelcomeDone }) => {    const
    [currentStage, setCurrentStage] = useState(0);
    const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (!welcomeDone) {
      // Stage progression
      const timer1 = setTimeout(() => setCurrentStage(1), 400);
      const timer2 = setTimeout(() => setCurrentStage(2), 1000);
      const timer3 = setTimeout(() => setShowParticles(true), 800);
    //   const timer4 = setTimeout(() => setCurrentStage(3), 2000);

      // Set welcome done after all animations complete
      const finalTimer = setTimeout(() => setWelcomeDone(true), 2000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        // clearTimeout(timer4);
        clearTimeout(finalTimer);
      };
    }
  }, [welcomeDone, setWelcomeDone]);

  // Particle component
  const Particle = ({ delay = 0 }) => (
    <motion.div
      className="absolute w-1 h-1 bg-blue-400 rounded-full"
      initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        x: [0, Math.random() * 400 - 200],
        y: [0, Math.random() * 400 - 200],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: delay,
        ease: "easeOut",
      }}
      style={{
        left: '50%',
        top: '50%',
      }}
    />
  );

  const letterVariants: Variants = {
    hidden: {
      y: 50,
      opacity: 0,
      rotateX: -90,
      scale: 0.8
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }),
    glow: {
      textShadow: [
        "0 0 10px rgba(59, 130, 246, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.8)",
        "0 0 30px rgba(59, 130, 246, 0.5)",
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const name = "DΛωσσd";
  const subtitle = "PORTFOLIO";

  return (
    <AnimatePresence mode="wait">
      {!welcomeDone && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0, animationDuration: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{
            animationDuration: 0.6,
            // ease: "easeInOut",
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{
            // initial: { duration: 0.3 },
            ease: "easeInOut"
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,1) 100%)'
          }}
        >
          {/* Particles */}
          {showParticles && (
            <div className="absolute inset-0">
              {Array.from({ length: 20 }, (_, i) => (
                <Particle key={i} delay={i * 0.1} />
              ))}
            </div>
          )}

          {/* Glowing Orb */}
          <motion.div
            className="absolute w-96 h-96 rounded-full opacity-30"
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              rotate: 360,
            }}
            transition={{
              scale: { duration: 1.5, ease: "easeOut" },
              rotate: { duration: 10, repeat: Infinity, ease: "linear" }
            }}
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.4), transparent)'
            }}
          />

          {/* Main Content Container */}
          <div className="relative z-10 text-center">
            {/* Name Animation */}
            <div className="mb-8">
              <motion.div
                className="flex justify-center items-center text-6xl md:text-8xl font-bold text-white"
                style={{ perspective: "1000px" }}
              >
                {name.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate={currentStage >= 1 ? ["visible", "glow"] : "hidden"}
                    className="inline-block origin-bottom"
                    style={{
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Subtitle Animation */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={currentStage >= 2 ? {
                y: 0,
                opacity: 1,
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              } : {}}
              transition={{
                y: { duration: 0.8, ease: "easeOut" },
                opacity: { duration: 0.8, ease: "easeOut" },
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="text-xl md:text-2xl font-light tracking-[0.3em] text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #60A5FA, #A78BFA, #F472B6, #60A5FA)',
                backgroundSize: '200% 100%'
              }}
            >
              {subtitle}
            </motion.div>

            {/* Loading Bar */}
            {/* <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={currentStage >= 2 ? {
                width: "100%",
                opacity: [0, 1, 1, 0]
              } : {}}
              transition={{
                width: { duration: 1.5, ease: "easeInOut" },
                opacity: {
                  duration: 2,
                  times: [0, 0.1, 0.9, 1],
                  ease: "easeInOut"
                }
              }}
              className="mt-12 mx-auto h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              style={{ maxWidth: "300px" }}
            /> */}

            {/* Enter Message */}
            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={currentStage >= 3 ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="mt-8 text-gray-400 text-sm tracking-wider"
            >
              Welcome to my digital realm
            </motion.div> */}
          </div>

          {/* Corner Decorations */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-20 h-20 border-2 border-blue-500/30 ${
                i === 0 ? 'top-8 left-8 border-r-0 border-b-0' :
                i === 1 ? 'top-8 right-8 border-l-0 border-b-0' :
                i === 2 ? 'bottom-8 left-8 border-r-0 border-t-0' :
                'bottom-8 right-8 border-l-0 border-t-0'
              }`}
              initial={{ scale: 0, opacity: 0 }}
              animate={currentStage >= 1 ? {
                scale: 1,
                opacity: 0.6,
                rotate: [0, 5, 0, -5, 0]
              } : {}}
              transition={{
                delay: 1 + i * 0.1,
                duration: 0.8,
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          ))}

          {/* Ripple Effect */}
          <motion.div
            className="absolute inset-0 border-4 border-blue-500/20 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 2, 4],
              opacity: [1, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeOut"
            }}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100px',
              height: '100px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
