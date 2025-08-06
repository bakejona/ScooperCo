import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Scooper",
  description: "Professional pet waste removal services for busy pet owners",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <a href="#hero" className="logo">
            Scooper Co.
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gray-100 p-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Scooper Co. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
