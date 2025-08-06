import "./globals.css";

export const metadata = {
  title: "ScooperCo - Pet Waste Removal",
  description: "Professional Pet Waste Removal Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <a href="#hero" className="logo">
            ScooperCo
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer>
          <p>
            &copy; {new Date().getFullYear()} ScooperCo. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
