"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import aboutCards from "@/data/aboutData";
import BorderCard from "@/components/ui/BorderCard";

export default function About() {
    const { darkMode } = useTheme();

    return (
        <section
            id="about"
            className={`max-w-7xl mx-auto px-6 py-20 transition-colors duration-300]`}
        >
            <h2 className="text-4xl font-bold text-center mb-12">Who I Am</h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">

                <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/profile.png"
                        alt="Hassan"
                        fill priority
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col space-y-6 max-w-xl">
                    <p className="max-w-2xl mx-auto text-left leading-relaxed">
                        I am <code>Hassan Bin Ilyas</code>, a Junior Frontend Developer passionate about learning modern frameworks
                        and building user-friendly web applications. My goal is to grow through
                        collaboration and create digital experiences that inspire.

                    </p>


                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {aboutCards.map((card, index) => (
                            <BorderCard key={index} darkMode={darkMode}>
                                <Image
                                    src={darkMode ? card.iconDark : card.iconLight}
                                    alt={card.title}
                                    width={25}
                                    height={25}
                                    className="mb-5"
                                    priority
                                />
                                <h3 className="font-semibold text-sm mb-3">{card.title}</h3>
                                <p className="text-xs leading-relaxed">{card.text}</p>
                            </BorderCard>
                        ))}
                    </div>

                    <div className="mt-6">
                        <h4 className="font-semibold mb-3">Tools I use</h4>
                        <div className="flex gap-4">
                            {["vscode", "react", "next", "tailwind", "git"].map((tool) => (
                                <div
                                    key={tool}
                                    className="transition-transform duration-300 hover:scale-110"
                                >
                                    <Image
                                        src={`/icons/${tool}.png`}
                                        alt={tool}
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
