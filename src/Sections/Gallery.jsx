import SectionHeader from "@/Components/SectionHeader";

export default function Gallery() {
  return (
    <section className="section bg-white text-black py-20" id="gallery">
      {/* Updated Container for consistent left/right spacing */}
      <div className="mx-auto max-w-[95%] xl:max-w-[1440px] px-4">
        
        {/* Header moved inside container for alignment */}
        <SectionHeader title="Our Gallery" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          {/* BIG IMAGE (LEFT) */}
          <div tabIndex={0} className="md:col-span-2 h-[520px] overflow-hidden rounded-2xl group">
            <img
              src="/images/1.jpg"
              alt="Gallery 1"
              className="h-full w-full object-cover rounded-2xl
              transition-transform duration-500 ease-out
              group-hover:scale-110 group-active:scale-110 group-focus:scale-110"
            />
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-8 h-[520px]">
            <div tabIndex={0} className="h-1/2 overflow-hidden rounded-2xl group">
              <img
                src="/images/2.jpg"
                alt="Gallery 2"
                className="h-full w-full object-cover rounded-2xl
                transition-transform duration-500 ease-out
                group-hover:scale-110 group-active:scale-110 group-focus:scale-110"
              />
            </div>

            <div tabIndex={0} className="h-1/2 overflow-hidden rounded-2xl group">
              <img
                src="/images/3.jpg"
                alt="Gallery 3"
                className="h-full w-full object-cover rounded-2xl
                transition-transform duration-500 ease-out
                group-hover:scale-110 group-active:scale-110 group-focus:scale-110"
              />
            </div>
          </div>

          {/* BOTTOM ROW */}
          {[4, 5, 6].map((img) => (
            <div
              key={img}
              tabIndex={0}
              className="h-64 overflow-hidden rounded-2xl group"
            >
              <img
                src={`/images/${img}.jpg`}
                alt={`Gallery ${img}`}
                className="h-full w-full object-cover rounded-2xl
                transition-transform duration-500 ease-out
                group-hover:scale-110 group-active:scale-110 group-focus:scale-110"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}