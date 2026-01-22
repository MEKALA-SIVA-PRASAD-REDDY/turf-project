import SectionHeader from "@/Components/SectionHeader";

export default function Sports() {
  return (
    <section className="bg-white text-black py-20" id="sports">
      {/* CHANGED: max-w-7xl -> max-w-[95%] and px-6 -> px-4 */}
      <div className="mx-auto max-w-[95%] xl:max-w-[1440px] px-4">

        <SectionHeader
          title={
            <>
              Our Sports <span className="text-[#009D5E]">& Services</span>
            </>
          }
          subtitle={
            <span className="text-black text-[18px] ">
              From football to cricket, we offer premium facilities for all your favorite sports. Pick your game and start playing!
            </span>
          }
        />

        {/* grid */}
        <div
          className="
            mt-12
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-5
            gap-6
            justify-items-center
          "
        >
          {["badminton", "volleyball", "cricket", "football", "basketball"].map(
            (sport) => (
              <div
                key={sport}
                tabIndex={0}
                className="group flex flex-col items-center transition-all duration-500 hover:scale-105 active:scale-[1.02] focus-within:scale-105 touch-manipulation"
              >
                <div className="
                  w-full h-[240px] 
                  sm:h-[270px]
                  md:h-[330px]
                  rounded-2xl overflow-hidden bg-white
                  group transition-all duration-500 active:shadow-lg
                ">
                  {/* Note: changed fixed widths (w-[211px]) to w-full so cards 
                      flex naturally within the wider container grid */}
                  <img
                    src={`/images/${sport}.jpg`}
                    alt={sport}
                    className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 group-focus:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="
                  mt-3
                  text-base
                  sm:text-lg
                  font-semibold
                  capitalize
                  opacity-0
                  transition-all duration-300
                  group-hover:opacity-100
                  group-active:opacity-100
                  group-focus:opacity-100
                ">
                  {sport}
                </p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}