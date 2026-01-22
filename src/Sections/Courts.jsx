"use client";
import { useState } from "react";

const courtData = [
  {
    image: "/images/footballc.jpg",
    title: "Grand Slam Football Arena",
    desc: "We are more than just a platform—we are built for athletes, trainers, event organizers, and sports enthusiasts.",
    price: "$10.35",
  },
  {
    image: "/images/cricketc.jpg",
    title: "The Champion Cricket Turf",
    desc: "We are more than just a ground—we are made for cricketers, coaches, league managers, and fans of the game.",
    price: "$15.35",
  },
  {
    image: "/images/badmintonc.jpg",
    title: "The Smashing Badminton Turf",
    desc: "We power the badminton world—from ambitious players and expert coaches to dedicated organizers and passionate fans. This is where the game lives.",
    price: "$25.50",
  },
];

export default function Courts() {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-black py-24" id="courts">
      <div className="mx-auto max-w-[95%] xl:max-w-[1440px] px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Discover Our Courts
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {courtData.map((court, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => toggle(index)}
              onTouchStart={() => toggle(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(index);
                }
              }}
              className={`group bg-white rounded-xl p-5 flex flex-col transition-all duration-300 hover:shadow-2xl
                min-h-[500px] md:min-h-[600px]
                ${active === index ? "shadow-2xl" : ""}
              `}
            >
              {/* IMAGE */}
              <div className="relative h-72 md:h-80 w-full mb-6 overflow-hidden rounded-xl">
                <img
                  src={court.image}
                  alt={court.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ease-in-out
                    group-hover:scale-110
                    ${active === index ? "scale-110" : ""}
                  `}
                />

                {/* TITLE OVER IMAGE */}
                <div
                  className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ease-out z-20
                    ${active === index ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}
                    group-hover:translate-y-0 group-hover:opacity-100
                  `}
                >
                  <span className="inline-block bg-white text-black px-4 py-2 rounded-lg font-bold text-sm shadow-md">
                    {court.title}
                  </span>
                </div>

                {/* OVERLAY */}
                <div
                  className={`absolute inset-0 bg-black/10 transition-opacity duration-300
                    ${active === index ? "opacity-100" : "opacity-0"}
                    group-hover:opacity-100
                  `}
                ></div>
              </div>

              {/* CONTENT */}
              <div className="flex-grow px-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {court.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  {court.desc}
                </p>
                <p className="text-gray-900 text-lg mb-6">
                  Open 7 days a week
                </p>
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between mt-auto pt-2 px-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-gray-900 mr-5">
                    {court.price}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    Per hour
                  </span>
                </div>

                <button className="bg-[#009D5E] hover:bg-[#008650] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
