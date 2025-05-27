import { motion } from "framer-motion";

const MysticalCard = ({ project }) => {
  const { name, description, techStack, link } = project;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 8px 32px 0 rgba(202,165,110,0.18)",
        transition: { type: "spring", stiffness: 250, damping: 20 }
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        group relative block
        w-full max-w-[90vw] sm:max-w-xs md:max-w-sm
h-[130px] sm:h-[150px] md:h-[160px] lg:h-[220px]
        p-3 sm:p-4 rounded-2xl shadow-2xl overflow-hidden
        border border-white/30
        transition-all duration-500 cursor-pointer text-white
        focus:outline-none focus:ring-2 focus:ring-yellow-400
        bg-gradient-to-br from-white/20 via-white/10 to-white/5
        backdrop-blur-xl
        "
      style={{
        boxShadow: "0 4px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 6px 0 rgba(202,165,110,0.08) inset"
      }}
    >
      {/* Shine Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-60" />

      {/* Magical aura */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-700/20 via-[rgba(202,165,110,0.13)] to-red-700/20 opacity-40 blur-lg pointer-events-none"></div>

      {/* Sparkle
      <motion.div
        className="absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[rgba(202,165,110,1)] opacity-70 filter drop-shadow-lg pointer-events-none"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col  h-full justify-between shadow-[inset_0_0_16px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_32px_rgba(202,165,110,0.3)]">
        <div className="absolute inset-0  z-0" />

        <div >
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide drop-shadow-md">
            {name}
          </h2>
          <p className="text-sm leading-snug text-white/90 font-light drop-shadow-md line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-2">
         <h3 className="hidden md:block text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-1 drop-shadow-md">
  Tech Stack
</h3>

        <ul
  className={`flex flex-wrap gap-1
    ${techStack.length === 1 ? 'justify-center md:justify-start' : 'justify-start'}`}
>
  {techStack.map((tech, i) => (
    <li
      key={i}
      className="px-2.5 py-1 rounded-full bg-sky-400/60
        backdrop-blur-sm
        text-[11px] sm:text-xs md:text-sm font-medium tracking-wide
        text-white/90 border border-[rgba(255,255,255,0.1)]"
    >
      {tech}
    </li>
  ))}
</ul>

        </div>
      </div>
    </motion.a>
  );
};

export default MysticalCard;
