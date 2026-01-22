"use client";
import React from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutTwo() {
  return (
    <section className="bg-white text-black py-16 font-sans">
      {/* CHANGED: max-w-7xl -> max-w-[95%] and px-6 -> px-4 */}
      <div className="mx-auto max-w-[95%] xl:max-w-[1440px] px-4 relative">
        
        {/* Header Section */}
        <div className="mb-10">
          <h4 className="text-[#009D5E] font-bold text-xl tracking-wider mb-3 uppercase text-center md:text-left">
            About Us
          </h4>
          <h2 className="text-lg md:text-xl font-semibold leading-tight">
            At Turf Zone, we deliver premium sports experiences <br className="hidden md:block" />
            with top-quality facilities and unmatched convenience.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 lg:grid-cols-12 items-start mb-20">
          
          {/* Main Large Image (Cricket) with Hover Effect */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-[32px] h-[300px] md:h-[450px] cursor-pointer">
              <img
                src="/images/l3.jpg"
                alt="Cricket match"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">

                <p className="text-md font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Experience professional-grade pitches designed for high-performance match play and training sessions.
                </p>
              </div>

              {/* Arrow Button Overlay */}
              <button
                className="absolute top-6 right-6 bg-white/90 group-hover:bg-[#00A86B] group-hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10"
                aria-label="View Details"
              >
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Stats Cards Section */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tennis Card */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-[32px] h-[220px] mb-6">
                <img
                  src="/images/l2.jpg"
                  alt="Tennis training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-1">
                <h3 className="text-3xl  text-[#000000]">15,000+</h3>
                <p className=" text-xl text-black mt-1">Tennis Player Trained</p>
                <p className="text-[#000000] mt-3 leading-relaxed text-[17px]">
                  Play your best badminton on courts built for speed, precision, and 
                  performance where every badminton rally feels more exciting.
                </p>
              </div>
            </div>

            {/* Athletics/Basketball Card */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-[32px] h-[220px] mb-6">
                <img
                  src="/images/l1.jpg"
                  alt="Basketball match"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-1">
                <h3 className="text-3xl text-[#000000]">10,000+</h3>
                <p className="text-xl text-black mt-1 ">Athletics Trained</p>
                <p className="text-[#000000] mt-3 leading-relaxed text-[17px]">
                  Experience high-energy basketball on courts built for precision 
                  where every shot, pass, and play feels game-ready.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <button 
            className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className="w-12 h-12 rounded-full bg-[#00A86B] flex items-center justify-center text-white hover:bg-[#008f5a] transition-colors shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}