"use client";
import React, { useState, useEffect } from "react";
import { Star, Gift, Zap, Users } from "lucide-react";

const offers = [
  {
    tag: "NEW USER",
    title: "20% OFF",
    sub: "First Booking",
    desc: "Welcome offer for new players. Use Code: NEWPLAY20",
    gradient: "from-[#FBB03B] to-[#D4145A]",
    Icon: Star,
    back: "#FF5C00",
  },
  {
    tag: "BULK DEAL",
    title: "BUY 5",
    sub: "Get 1 Free",
    desc: "Book 5 sessions and get the 6th free!",
    gradient: "from-[#00A859] to-[#009245]",
    Icon: Gift,
    back: "#98FB98",
  },
  {
    tag: "WEEKEND",
    title: "₹150 OFF",
    sub: "Per Hour",
    desc: "Save big on weekend bookings. Sat & Sun only.",
    gradient: "from-[#3E52E8] to-[#111E6C]",
    Icon: Zap,
    back: "#1E90FF",
  },
  {
    tag: "GROUP",
    title: "30% OFF",
    sub: "Team Booking",
    desc: "Special rates for teams booking 3+ hours weekly.",
    gradient: "from-[#D4145A] to-[#9111DD]",
    Icon: Users,
    back: "#FD58F8",
  },
];

const quotes = ["Hurry !!", "Book Now !!", "Limited Slots !!", "Don't Miss !!"];

export default function Offers() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [currentButtonColor, setCurrentButtonColor] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 3000);

    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + 2) % 360);
    }, 50);

    const buttonInterval = setInterval(() => {
      setCurrentButtonColor((prev) => (prev + 1) % offers.length);
    }, 2000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(rotateInterval);
      clearInterval(buttonInterval);
    };
  }, []);

  const currentButtonOffer = offers[currentButtonColor];

  return (
    <section id="offers" className="bg-black text-white py-12 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-[95%] xl:max-w-[1440px] px-4">

        {/* HEADER */}
        <div className="mb-10 md:mb-16">
          <div className="text-yellow-500 font-semibold text-lg md:text-3xl mb-4 uppercase text-center">
            Limited Time
          </div>

          <h2 className="text-3xl md:text-5xl font-bold max-w-5xl leading-[1.1]">
            Exclusive offers for our <br />
            valued members
            <span
              className={`inline-block ml-2 text-[#E933FF] transition-all duration-500 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {quotes[currentQuote]}
            </span>
          </h2>
        </div>

        {/* OFFERS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {offers.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-[2rem] p-6 bg-gradient-to-br ${item.gradient}
                flex flex-col min-h-[365px] transition-all duration-300 hover:scale-[1.02] group shadow-2xl`}
            >
              {/* FIXED: NO background shorthand */}
              <div
                className="absolute inset-0 rounded-[2rem] pointer-events-none"
                style={{
                  padding: "2px",
                  backgroundImage: `conic-gradient(from ${rotation}deg, ${item.back}, transparent 270deg)`,
                  backgroundColor: "transparent",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* CARD CONTENT */}
              <div className="relative z-10 flex flex-col h-full">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border border-white/10 w-fit mb-5">
                  {item.tag}
                </span>

                <div className="w-12 h-12 mb-5 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  <item.Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-white/90 mb-4 leading-none">
                  {item.sub}
                </p>

                <p className="text-sm font-medium text-white/80 leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>

              {/* DECOR */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-white/10 blur-xl" />
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/5" />
            </div>
          ))}
        </div>

        {/* CYCLING BUTTON */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <button
            className="relative overflow-hidden text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 shadow-lg active:scale-95 group"
            style={{
              backgroundColor: currentButtonOffer.back,
            }}
          >
            <span className="relative z-10">View All Offers</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
}
