import "./globals.css";
import Navbar from "@/Components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
