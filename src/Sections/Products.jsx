"use client";
import SectionHeader from "@/Components/SectionHeader";
import { useState } from "react";

const productData = [
  { id: "shoes", title: "Football Shoes", price: "$25.60", image: "/images/shoes.png" },
  { id: "golf", title: "Golf Kit", price: "$25.50", image: "/images/golf.jpg" },
  { id: "jersey", title: "Sports Jerseys", price: "$10.50", image: "/images/jersey.jpg" },
  { id: "cricketb", title: "Cricket Bats", price: "$45.60", image: "/images/cricketb.jpg" },
  { id: "badmintonb", title: "Badminton Set", price: "$15.00", image: "/images/badmintonb.jpg" },
];

export default function Products() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-white text-black py-16" id="products">
      <div className="mx-auto max-w-[95%] xl:max-w-[1440px] px-4">
        
        <SectionHeader
          title={
            <span className="font-semibold text-2xl md:text-4xl leading-tight text-center block">
              Explore Our Exclusive Products
            </span>
          }
        />

        {/* PRODUCT GRID */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-6">
          {productData.map((product, index) => (
            <div
              key={product.id}
              role="button"
              tabIndex={0}
              onClick={() => toggleOpen(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleOpen(index);
              }}
              className={`
                group relative overflow-hidden rounded-[2rem] cursor-pointer
                ${index < 2
                  ? "md:col-span-3 h-[300px] md:h-[450px]"
                  : "md:col-span-2 h-[300px] md:h-[400px]"
                }
              `}
            >
              {/* IMAGE */}
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div
                className={`
                  absolute inset-0
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  opacity-0 transition-opacity duration-500
                  pointer-events-none
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  ${openIndex === index ? "opacity-100 pointer-events-auto" : ""}
                `}
              >
                {/* BOTTOM CONTENT */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  
                  {/* TITLE + PRICE */}
                  <div>
                    <h3 className="text-white text-xl font-semibold">
                      {product.title}
                    </h3>
                    <p className="text-white/80 text-base mt-1">
                      {product.price}
                    </p>
                  </div>

                  {/* ORDER BUTTON */}
                  <button
                    className="
                      rounded-full
                      bg-white/90
                      px-5 py-2
                      text-sm font-medium text-black
                      backdrop-blur-md
                      hover:bg-grey-400
                      transition
                    "
                  >
                    Order Now
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
