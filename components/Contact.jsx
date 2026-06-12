"use client";
import { useTheme } from "@/context/ThemeContext";
import BorderCard from "@/components/ui/BorderCard";

export default function Contact() {
    const { darkMode } = useTheme();

    return (
        <section
            id="contact"
            className={`max-w-7xl mx-auto px-6 py-20 transition-colors duration-300`}
        >
            <h2 className="text-4xl font-bold text-center mb-12">
                Let's Connect
            </h2>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
                <div className="w-full md:w-3/4 lg:w-2/3">
                    <BorderCard darkMode={darkMode}>
                        <form className="flex flex-col gap-5 w-full">
                            <input
                                required
                                type="text"
                                placeholder="Your Name"
                                className={`px-4 py-3 rounded-md focus:outline-none transition
                                    ${darkMode
                                        ? "bg-transparent border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/30"
                                        : "bg-transparent border border-black/20 text-black placeholder-gray-600 focus:ring-2 focus:ring-black/30"}`}
                            />


                            <input
                                required
                                type="email"
                                placeholder="Your Email"
                                className={`px-4 py-3 rounded-md border focus:outline-none transition
                                    ${darkMode
                                        ? "bg-transparent border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/30"
                                        : "bg-transparent border border-black/20 text-black placeholder-gray-600 focus:ring-2 focus:ring-black/30"}`}
                            />
                            <textarea
                                required
                                rows="5"
                                placeholder="Your Message"
                                className={`px-4 py-3 rounded-md border focus:outline-none transition
                                    ${darkMode
                                        ? "bg-transparent border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/30"
                                        : "bg-transparent border border-black/20 text-black placeholder-gray-600 focus:ring-2 focus:ring-black/30"}`}
                            />

                            <button
                                type="submit"
                                className={`py-3 rounded-md font-semibold transition
                                    ${darkMode
                                        ? "bg-white text-black hover:bg-gray-300"
                                        : "bg-black text-white hover:bg-gray-700"}`}
                            >
                                Send Message
                            </button>

                        </form>
                    </BorderCard>
                </div>
            </div>
        </section>
    );
}
