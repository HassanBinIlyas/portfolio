"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext.js";
import { FaMoon, FaSun } from "react-icons/fa6";
import Image from "next/image";

export default function Navbar() {
    const { darkMode, setDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 w-full z-[9999] 
            bg-transparent backdrop-blur-sm transition-all duration-300`}>
            <div className="relative max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

                <div className="flex items-center space-x-2">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={32}
                        height={32}
                        style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
                    />

                </div>

                <ul
                    className={`md:flex space-x-8 px-6 py-2 rounded-full 
                        ${darkMode ? "bg-[#000]/70 text-white shadow-lg shadow-gray-500/50" : "bg-[#FFF]/70 text-black shadow-md shadow-gray-500/50"
                        } text-sm font-medium hidden`}
                >
                    <li><Link href="#home" className="hover:text-[#9ca3af] transition">Home</Link></li>
                    <li><Link href="#about" className="hover:text-[#9ca3af] transition">About</Link></li>
                    <li><Link href="#services" className="hover:text-[#9ca3af] transition">Services</Link></li>
                    <li><Link href="#projects" className="hover:text-[#9ca3af] transition">Projects</Link></li>
                    <li><Link href="#contact" className="hover:text-[#9ca3af] transition">Contact</Link></li>
                </ul>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`p-3 rounded-full transition ${darkMode ? "bg-[#000]/70 text-[#FFF] shadow-lg shadow-gray-500/50" : "bg-[#FFF]/70 text-[#000] shadow-md shadow-gray-500/50"
                        }`}
                >
                    {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
                </button>

                <button
                    className={`md:hidden p-2 rounded-lg ${darkMode ? "text-white" : "text-black"}`}
                    onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>

                {isOpen && ( 
                    <div className={`md:hidden absolute top-full left-0 w-full 
                            ${darkMode ? "bg-[#000]/90 text-white" : "bg-[#FFF]/90 text-black"} 
                            backdrop-blur-md shadow-lg rounded-b-xl z-[9998]`}>
                        <ul className="flex flex-col items-center gap-4 py-4">
                            {["home", "about", "services", "projects", "contact"].map((id) => (
                                <li key={id}>
                                    <Link
                                        href={`#${id}`}
                                        onClick={() => setIsOpen(false)}  // ✅ Close menu after click
                                        className="hover:text-[#9ca3af] transition"
                                    >
                                        {id.charAt(0).toUpperCase() + id.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}




            </div>
        </nav >
    );
}
