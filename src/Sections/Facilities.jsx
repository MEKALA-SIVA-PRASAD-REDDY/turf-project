"use client";
import SectionHeader from "../Components/SectionHeader";
import { useState } from "react";

const facilities = [
  {
    id: "turf",
    title: "Premium Turf",
    desc: "Our high-intensity LED floodlights ensure unmatched visibility, letting you enjoy flawless gameplay day or night.",
  },
  {
    id: "seating",
    title: "Spectator Seating",
    desc: "Our well-planned spectator seating ensures fans enjoy every moment with excellent views and a relaxed, enjoyable atmosphere",
  },
  {
    id: "parking",
    title: "Free Car Parking",
    desc: "Enjoy hassle-free visits with spacious, dedicated car- free parking that keeps your experience smooth from the moment you arrive.",
  },
  {
    id: "cctv",
    title: "24/7 CCTV",
    desc: "Your safety comes first with our reliable security measures that keep the entire turf zone monitoredand secure.",
  },
  {
    id: "scoreboard",
    title: "Digital Scoreboard",
    desc: "Experience the thrill of the match with a dynamic digital scoreboard that displays every score, play, and update in real",
  },
  {
    id: "washroom",
    title: "Clean Washrooms",
    desc: "Our high-intensity LED floodlights ensure unmatched visibility, letting you enjoy flawless gameplay day or night.",
  },
];

export default function Facilities() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white text-black py-20" id="facilities">
      {/* CHANGED: max-w-7xl -> max-w-[95%] and px-6 -> px-4 */}
      <div className="mx-auto max-w-[95%] xl:max-w-[1440px] px-4">
        <SectionHeader 
          tag={
            <span className="font-bold text-xl md:text-2xl text-[#008851] uppercase">
              What We Offer
            </span>
          }
          title={
            <span className="text-2xl md:text-4xl font-normal leading-tight md:leading-snug">
              <span>Facilities</span> And Amenities
            </span>
          }
        />


        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {facilities.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => toggleOpen(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleOpen(idx);
                  }
                }}
                className="group cursor-pointer flex flex-col"
              >
                {/* IMAGE CONTAINER */}
                <div className="overflow-hidden rounded-2xl h-72">
                  <img
                    src={`/images/${item.id}.jpg`}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* REVEAL CONTENT */}
                <div
                  className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? 'max-h-48 opacity-100 visible pointer-events-auto'
                      : 'max-h-0 opacity-0 invisible pointer-events-none'
                  } group-hover:max-h-48 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto`}
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-gray-800 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}