import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AppWrapper from "@/components/AppWrapper";
import { ThemeProvider } from "../context/ThemeContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hassan's Portfolio",
  description: "A showcase of my projects, skills, and experience as a web developer. Explore my work and get in touch to collaborate on exciting projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body>
        <ThemeProvider>
          <Navbar />
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
