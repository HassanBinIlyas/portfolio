"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import servicesData from "@/data/servicesData";
import BorderCard from "@/components/ui/BorderCard";

export default function Services() {
    const { darkMode } = useTheme();

    return (
        <section
            id="services"
            className={`max-w-7xl mx-auto px-6 py-20 transition-colors duration-300 
                }`}
        >
            <h2 className="text-4xl font-bold text-center mb-12">
               What I Offer
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
                {servicesData.map((service) => (
                    <div
                        key={service.id}
                        className="w-full sm:w-[45%] lg:w-[22%] h-[20rem] flex items-stretch">
                        <BorderCard darkMode={darkMode}>
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <Image
                                        src={darkMode ? service.iconDark : service.iconLight}
                                        alt={service.title}
                                        width={45}
                                        height={45}
                                        className="mb-5"
                                    />
                                    <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                                    <p className="text-sm leading-relaxed">{service.text}</p>
                                </div>
                            </div>
                        </BorderCard>
                    </div>
                ))}
            </div>
        </section>
    );
}
