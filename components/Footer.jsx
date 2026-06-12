"use client";
import { useTheme } from "@/context/ThemeContext";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const { darkMode } = useTheme();
  return (
    <footer className={`w-full py-6 px-12 flex flex-col items-center justify-center border-t ${darkMode ? "border-white/20" : "border-black/20"}`}>
      <div className="flex flex-col items-center justify-center gap-2 w-full">

        <div className="flex items-center justify-between gap-1 w-full">
          <p className="text-xs">Made with ♥ by Hassan Bin Ilyas</p>
          <div className="flex items-center gap-3 ml-4">
            <a
              href="mailto:hassanbinilyas@duck.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <FaEnvelope size={12} />
            </a>
            <a
              href="https://linkedin.com/in/hassanbinilyas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin size={12} />
            </a>
            <a
              href="https://github.com/hassanbinilyas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <FaGithub size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
