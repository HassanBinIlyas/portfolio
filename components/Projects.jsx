"use client";
import { FaLocationArrow } from "react-icons/fa6";
import projects from "@/data/projectsData";
import { PinContainer } from "@/components/ui/Pin";
import Image from "next/image";

export default function Projects() {

  return (
    <section
      id="projects"
      className={`max-w-7xl mx-auto px-6 py-20 transition-colors duration-300`}
    >
      <h2 className="text-4xl font-bold text-center">A small selection of recent projects</h2>

      <div className="relative z-[1] flex flex-col items-center justify-center p-4 gap-16 mt-8">
        {projects.map((item) => (
          <div
            className="lg:min-h-[30rem] h-[25rem] flex items-center justify-center sm:w-[40rem] w-[85vw]"
            key={item.id}
          >
            <PinContainer href={item.live}>
            
              <div className="relative flex items-center justify-center sm:w-[40rem] w-[85vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <Image src={item.img} alt="cover" className="z-10 absolute bottom-0" width={640} height={480} priority />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="lg:text-sm font-light text-xs line-clamp-4 my-2">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <Image src={icon} alt="icon" className="p-2" width={40} height={40} priority />
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 items-center">
                  <a href={item.code} target="_blank" onClick={(e) => e.stopPropagation()} className="flex items-center text-gray-500 text-sm p-3">
                    View Code
                    <FaLocationArrow className="ms-2" color="#6b7280" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
}
