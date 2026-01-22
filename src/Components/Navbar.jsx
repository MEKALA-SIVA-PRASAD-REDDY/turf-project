"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Sports", href: "#sports" },
    { name: "Facilities", href: "#facilities" },
    { name: "Offers", href: "#offers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#footer" },
    { name: "Products", href: "#products" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 py-5
        ${scrolled 
          ? "bg-black/90 backdrop-blur-sm shadow-md" 
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"} 
        `}
      >
        <div className="max-w-[95%] xl:max-w-[1440px] mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded bg-[#009D5E] flex items-center justify-center font-bold">
              T
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Turf Zone
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#009D5E] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5">
            <button className="px-4 py-2 rounded-full border border-white/40 text-white text-sm hover:bg-white/10 transition">
              Download App
            </button>
            <button className="bg-[#009D5E] px-5 py-2 rounded-full text-sm text-white font-semibold hover:bg-[#008650] transition">
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] bg-black lg:hidden transition-all duration-500
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="absolute top-5 right-5">
            <button onClick={() => setIsOpen(false)} className="text-white p-2">
                <X size={28} />
            </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#009D5E] transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}