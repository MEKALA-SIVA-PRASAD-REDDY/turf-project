import Button from "@/Components/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/back.png')" }}
    >
      {/* Content container */}
      <div className="relative max-w-[95%] xl:max-w-[1440px] mx-auto px-4 py-20 md:pt-40 w-full">
        {/* LEFT CONTENT */}
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.1] text-white">
            Play. <span className="text-green-500">Compete.</span>
            <br />
            Repeat
          </h1>

          <p className="mt-6 text-gray-200 text-lg md:text-[18px] max-w-lg mx-auto md:mx-0">
            Premium sports turfs near you. Book football, cricket, badminton &
            more instantly. Experience world-class facilities at affordable
            prices.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="w-full sm:w-auto">Check Availability</Button>
            <Button variant="outline" className="w-full sm:w-auto">
              ▶ Watch Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-nowrap gap-8 md:gap-12 text-lg">
  <div className="flex flex-col">
    <span className="font-bold text-green-500 text-4xl md:text-5xl">
      50+
    </span>
    <span className="text-sm md:text-base text-white">
      Active Courts
    </span>
  </div>

  <div className="flex flex-col">
    <span className="font-bold text-yellow-400 text-4xl md:text-5xl">
      10K+
    </span>
    <span className="text-sm md:text-base text-white">
      Happy Players
    </span>
  </div>

  <div className="flex flex-col">
    <span className="font-bold text-cyan-400 text-4xl md:text-5xl">
      24/7
    </span>
    <span className="text-sm md:text-base text-white">
      Available
    </span>
  </div>
</div>


          {/* MEMBERSHIP PILL (SECOND IMAGE) */}
          <div className="mt-10 flex flex-col items-center md:items-start gap-3">
            {/* Mini avatar card */}
            <div className="flex items-center bg-green-600 rounded-full px-4 py-2 shadow-xl">
              <div className="flex -space-x-3">
                <img
                  src="/images/user1.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/images/user2.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/images/user3.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/images/user4.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
            </div>

            {/* Text BELOW */}
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-lg leading-tight">
                12K+ Membership
              </p>
              <p className="text-white/80 text-sm">
                Enjoying our facilities
              </p>
            </div>
          </div>
        </div>

        {/* 20% OFF — MOBILE (unchanged position) */}
        <div className="block lg:hidden absolute -top-16 right-2 z-[1000]">
          <div className="bg-yellow-400 text-black text-xs font-bold px-6 py-1.5 rounded-full shadow-xl">
            20% OFF
          </div>
        </div>

        {/* PHONE PREVIEW — DESKTOP */}
        <div className="hidden lg:block absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 scale-90 xl:scale-100">
          <div className="relative h-[560px] w-[280px]">
            <div className="relative">
              <img
                src="/images/mobile.png"
                alt="Mobile App Preview"
                className="relative z-10 h-[560px] w-[280px] object-contain pointer-events-none"
              />

              {/* 20% OFF — DESKTOP (attached to phone) */}
              <div className="absolute -top-3 right-2 z-[1000]">
                <div className="bg-yellow-400 text-black text-xs font-bold px-6 py-1.5 h-10 rounded-lg shadow-xl flex items-center justify-center">
                  20% OFF
                </div>
              </div>
            </div>

            <div className="absolute inset-[18px] rounded-[32px] bg-[#009D5E] flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-white text-4xl font-bold">
                T
              </div>
              <p className="mt-4 text-white text-xl font-semibold">
                Turf Zone
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <div className="text-white text-sm font-medium tracking-wider">
          SCROLL DOWN
        </div>
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
