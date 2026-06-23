"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedIcon from "../ui/AnimatedIcon";
import { Sparkles, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border-black/10 dark:border-white/10 py-4" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center group relative w-12 h-12 md:w-16 md:h-16">
          <Image 
            src="/logo.png" 
            alt="Rashitha Nalaranga Logo" 
            fill 
            className="object-contain group-hover:scale-110 transition-transform duration-500 dark:invert-0 invert" 
            priority
          />
        </Link>

        {/* Center: Main Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-black/5 dark:bg-white/5 px-6 py-2.5 rounded-full border border-black/10 dark:border-white/10 backdrop-blur-md">
          <Link href="#about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">About</Link>
          <Link href="/" className="text-[var(--brand-primary)]">
            <AnimatedIcon delay={0}><Sparkles className="w-5 h-5" /></AnimatedIcon>
          </Link>
          <Link href="#work" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Work</Link>
        </nav>

        {/* Right: Social Links & Theme Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6">
            <a href="mailto:hello@rashithanalaranga.com" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Email</a>
            <a href="#" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">in</a>
            <a href="#" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">x</a>
            <a href="#" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Be</a>
          </div>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
