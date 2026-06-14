"use client";
import { useTheme } from "@/context/ThemeContext.js";
import { FaDownload } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";

export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 relative overflow-hidden">
      <Spotlight
        className="z-[1] -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill={darkMode ? "white" : "#0b1320"}
      />
      <Spotlight
        className="z-[1] left-80 top-28 h-[80vh] w-[50vw]"
        fill="blue"
      />



      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p
            className={`uppercase tracking-widest text-xs text-center max-w-80 ${darkMode ? "text-[#E4ECFF]" : "text-[#0b1320]"
              }`}
          >
            Frontend Developer & MERN Enthusiast
          </p>

          <TextGenerateEffect
            words="Building Clean UI and Scalable Web Apps"
            extraClasses={`text-center text-5xl lg:text-6xl font-bold leading-[0.95] tracking-wide my-10 
              ${darkMode ? "text-white" : "text-black"}
              `}
          />

          <p
            className={`text-center md:tracking-tighter mb-4 text-sm md:text-lg lg:text-2xl ${darkMode ? "text-[#BEC1DD]" : "text-[#4b5563]"
              }`}
          >
            Hi! I'm Hassan, a Computer Science student based in Pakistan.
          </p>

          <div className="flex gap-4">
            <a href="/resume.pdf" download="Hassan_Bin_Ilyas_Resume.pdf">
              <MagicButton
                title="Download Resume"
                icon={<FaDownload />}
                position="right"
                otherClasses="bg-slate-950"
              />
            </a>
            <MagicButton
              handleClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              title="Contact Me"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="bg-slate-950"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
