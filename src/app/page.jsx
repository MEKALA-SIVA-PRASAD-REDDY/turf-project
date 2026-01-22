import Hero from "@/Sections/Hero";
import About from "@/Sections/About";
import AboutTwo from "@/Sections/Abouttwo";
import Sports from "@/Sections/Sports";
import Facilities from "@/Sections/Facilities";
import Products from "@/Sections/Products";
import Offers from "@/Sections/Offers";
import Gallery from "@/Sections/Gallery";
import Courts from "@/Sections/Courts";
import Footer from "@/Sections/Footer";


export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Sports />
      <AboutTwo />
      <Facilities />
      <Products />
      <Offers />
      <Gallery />
      <Courts />
      <Footer />
    </main>
  );
}