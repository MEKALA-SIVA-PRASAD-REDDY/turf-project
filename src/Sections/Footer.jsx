import {
  Facebook,
  Instagram,
  Twitter,
  X,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12 lg:py-20 text-white font-sans" id="footer">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">

        {/* LEFT : BRAND */}
        <div className="max-w-[360px] w-full lg:w-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#00a65a] flex items-center justify-center text-black font-bold text-xl">
              T
            </div>
            <h3 className="text-3xl font-semibold tracking-tight">
              Turf Zone
            </h3>
          </div>

          <p className="text-[16px] leading-relaxed text-white/90 mb-8">
            Premium sports facilities for football, cricket,
            badminton & more. Book your slot today and
            experience the difference
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, X].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg bg-[#333333] flex items-center justify-center hover:bg-[#444444] transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT : FLEX CONTAINER (UNCHANGED DESKTOP) */}
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-24 text-left w-full lg:w-auto lg:ml-auto">

          {/* MOBILE ROW: QUICK + LEGAL */}
          <div className="flex flex-row justify-between gap-8 lg:flex-row lg:gap-x-24">

            {/* QUICK LINKS */}
            <div className="min-w-[120px]">
              <h4 className="font-bold text-xl mb-8">Quick Links</h4>
              <ul className="flex flex-col gap-4 text-[16px]">
                {["Home", "About", "Sports", "Gallery", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white/80 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* LEGAL */}
            <div className="min-w-[140px]">
              <h4 className="font-bold text-xl mb-8">Legal</h4>
              <ul className="flex flex-col gap-4 text-[16px]">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Refund Policy",
                  "Cancellation Policy",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white/80 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT (UNCHANGED) */}
          <div className="min-w-[200px] flex-1">
            <h4 className="font-bold text-xl mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-6 text-[16px]">
              <li className="flex gap-4 items-start">
                <MapPin size={20} className="text-[#00FF99] mt-1 shrink-0" />
                <span className="leading-snug">
                  123 Sports Complex Road, Green Valley,<br />
                  Bangalore-560001
                </span>
              </li>

              <li className="flex gap-4 items-center">
                <Phone size={20} className="text-[#00e676] shrink-0" />
                <span>+91 7683912451</span>
              </li>

              <li className="flex gap-4 items-center">
                <Mail size={20} className="text-[#00FF99] shrink-0" />
                <span>playturf32@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
