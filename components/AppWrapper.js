"use client";
import { useTheme } from "@/context/ThemeContext";

export default function AppWrapper({ children }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-[#000319] text-[#E4ECFF]"
          : "bg-[#F9FAFB] text-[#0b1320]"
      }`}
    >
      {children}
    </div>
  );
}
