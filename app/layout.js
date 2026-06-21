import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AppWrapper from "@/components/AppWrapper";
import { ThemeProvider } from "../context/ThemeContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://hassanbinilyas.vercel.app"),
  title: "Hassan Bin Ilyas | Associate Software Engineer",
  description: "Portfolio of Hassan Bin Ilyas showcasing projects, skills, and experience as an Associate Software Engineer.",
  keywords: [
    "Hassan Bin Ilyas",
    "Hassan Bin Ilyas Portfolio",
    "Hassan Bin Ilyas Software Engineer",
    "Associate Software Engineer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Hassan Bin Ilyas" }],
  creator: "Hassan Bin Ilyas",

  verification: {
    google: "6fc47j81YegtL9nutV6LeRkOLFLDtDptsGg9wFsCs5U",
  },
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
