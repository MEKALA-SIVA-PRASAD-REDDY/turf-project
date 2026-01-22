import { Award, Lightbulb, DollarSign, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-black py-20 scroll-mt-20"
    >
      <div className="max-w-[95%] xl:max-w-[1440px] mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE — HOVER (DESKTOP) + TOUCH (MOBILE) */}
        <div className="group relative rounded-2xl w-full h-[420px] overflow-hidden">
          <img
            src="/images/play.jpg"
            alt="About Turf Zone"
            className="
              w-full h-full object-cover
              transition-all duration-500 ease-out
              group-hover:scale-105
              active:scale-95
            "
          />

          {/* SUBTLE OVERLAY ON INTERACTION */}
          <div
            className="
              absolute inset-0
              bg-black/0
              transition-all duration-500
              group-hover:bg-black/10
              active:bg-black/20
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-[#009D5E] text-xl font-bold uppercase">
            About Us
          </p>

          <h2 className="mt-3 text-4xl md:text-[48px] font-semibold leading-tight">
            Why Choose{" "}
            <span className="text-[#009D5E]">Turf Zone</span>?
          </h2>

          <p className="mt-6 text-black text-lg leading-relaxed max-w-xl">
            We deliver world-class sports infrastructure with premium
            quality, safety, and affordability — built for players,
            teams, and communities.
          </p>

          {/* FEATURES */}
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10">
            
            {/* Feature */}
            <li className="flex items-start gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-md bg-[#009D5E] shrink-0 mt-1">
                <Award className="w-5 h-5 text-white" />
              </span>
              <div>
                <h4 className="font-semibold text-black">
                  Professional Grounds
                </h4>
                <p className="mt-1 text-sm text-black leading-relaxed max-w-[240px]">
                  FIFA-quality synthetic turf with perfect ball control and player safety.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-md bg-[#009D5E] shrink-0 mt-1">
                <Lightbulb className="w-5 h-5 text-white" />
              </span>
              <div>
                <h4 className="font-semibold text-black">
                  LED Floodlights
                </h4>
                <p className="mt-1 text-sm text-black leading-relaxed max-w-[240px]">
                  State-of-the-art lighting for clear visibility during night games.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-md bg-[#009D5E] shrink-0 mt-1">
                <DollarSign className="w-5 h-5 text-white" />
              </span>
              <div>
                <h4 className="font-semibold text-black">
                  Affordable Pricing
                </h4>
                <p className="mt-1 text-sm text-black leading-relaxed max-w-[240px]">
                  Premium experience without the premium price tag.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-md bg-[#009D5E] shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5 text-white" />
              </span>
              <div>
                <h4 className="font-semibold text-black">
                  Safe Environment
                </h4>
                <p className="mt-1 text-sm text-black leading-relaxed max-w-[240px]">
                  24/7 CCTV monitoring and sanitized facilities.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
}
