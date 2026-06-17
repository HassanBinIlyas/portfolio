"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext.js";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const { darkMode, setDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <nav className={`fixed top-0 left-0 w-full z-[9999] 
            bg-transparent backdrop-blur-sm transition-all duration-300`}>
            <div className="relative max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

                <button onClick={() => window.location.reload()} className="flex items-center space-x-1">
                    <span className={`font-bold text-xl ${darkMode ? "text-white" : "text-black"}`}>
                        HBI
                    </span>
                    <span className="translate-y-[0.4rem] w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"></span>
                </button>



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

                <ThemeToggle extraClasses="hidden md:inline-flex" />

                <div ref={menuRef} className="md:hidden relative">

                    <button
                        className={`md:hidden p-2 rounded-lg ${darkMode ? "text-white" : "text-black"}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(!isOpen);
                        }}>
                        ☰
                    </button>

                    {isOpen && (
                        <div className={`md:hidden fixed top-full left-0 w-full 
                            ${darkMode ? "bg-[#000]/90 text-white" : "bg-[#FFF]/90 text-black"} 
                            backdrop-blur-md shadow-lg rounded-b-xl z-[9998]`}>
                            <ul className="flex flex-col items-center gap-4 py-4">
                                {["home", "about", "services", "projects", "contact"].map((id) => (
                                    <li key={id}>
                                        <Link
                                            href={`#${id}`}
                                            onClick={() => setIsOpen(false)}
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

            </div>
        </nav >
    );
}