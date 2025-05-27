import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-white px-6 py-16">

      {/* Background image layer */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/Images/stars.jpg')" }} />

      {/* Optional dark overlay + blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10" />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-widest text-[#caa56e] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Let's Connect
        </h2>

        <p className="text-center max-w-xl mb-12 text-lg md:text-xl font-light text-gray-300 drop-shadow-sm">
          Feel free to reach out for collaboration, questions, or just to say hello!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg w-full max-w-3xl">
          {/* GitHub */}
          <a
            href="https://github.com/dwukn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-black/30 hover:bg-black/50 transition-all duration-300 rounded-xl shadow-lg backdrop-blur-sm"
          >
            <FaGithub className="text-2xl text-[#caa56e]" />
            dwukn
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/dwukn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-black/30 hover:bg-black/50 transition-all duration-300 rounded-xl shadow-lg backdrop-blur-sm"
          >
            <FaLinkedin className="text-2xl text-[#caa56e]" />
            dwukn
          </a>

          {/* Email */}
          <a
            href="mailto:dawood220a@gmail.com"
            className="flex items-center gap-3 p-4 bg-black/30 hover:bg-black/50 transition-all duration-300 rounded-xl shadow-lg backdrop-blur-sm"
          >
            <MdEmail className="text-2xl text-[#caa56e]" />
            dawood220a@gmail.com
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@blunebear"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-black/30 hover:bg-black/50 transition-all duration-300 rounded-xl shadow-lg backdrop-blur-sm"
          >
            <FaYoutube className="text-2xl text-[#caa56e]" />
            blunebear
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
