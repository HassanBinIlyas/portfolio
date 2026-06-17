"use client";
import React from 'react'
import { useTheme } from "@/context/ThemeContext.js";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeToggle = ({extraClasses}) => {
    const { darkMode, setDarkMode } = useTheme();
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${extraClasses} p-3 rounded-full transition ${darkMode ? "bg-[#000]/70 text-[#FFF] shadow-lg shadow-gray-500/50" : "bg-[#FFF]/70 text-[#000] shadow-md shadow-gray-500/50"
                }`}
        >
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
    )
}

export default ThemeToggle
