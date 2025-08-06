import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Keep Your Yard Clean, Safe & Odor-Free</h1>
          <p>Professional Pet Waste Removal for Busy Pet Owners</p>
          <a href="#contact">
            <button className="cta-button">Schedule a Clean-Up</button>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="service-card">
          <h3>Weekly Scooping</h3>
          <p>Scheduled weekly visits to keep your yard clean and enjoyable.</p>
        </div>
        <div className="service-card">
          <h3>One-Time Clean-Up</h3>
          <p>Perfect for spring cleaning or special events.</p>
        </div>
        <div className="service-card">
          <h3>Deodorizing & Sanitizing</h3>
          <p>Eliminate bacteria and odors for a fresh, safe yard.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-container">
        <img src="/images/profile.webp" alt="Owner with dog" />
        <div className="about-text">
          <h2>About Scoop Co!</h2>
          <p>
            Hey there! I’m Landon — husband, dad of three awesome kids, veteran,
            Christian, and lifelong dog lover. I started Scooper Co. because,
            let’s be honest… no one likes stepping in dog poop. Growing up, I
            hated being on poop patrol, and now I’m making sure you don’t have
            to be!
          </p>
          <p>
            At Scooper Co., we’re all about quality service and results you can
            actually see (and smell…less of). Whether you’ve got one dog or a
            whole pack, we’re here to help you keep your yard clean, your shoes
            safe, and your weekends poop-free.
          </p>{" "}
          <p>
            Let us handle the dirty work — so you can get back to enjoying your
            clean yard and your happy pup!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input name="name" placeholder="Name" required />
          <input name="phone" placeholder="Phone" />
          <input name="email" type="email" placeholder="Email" required />
          <input name="address" placeholder="Address" />
          <select name="yardSize">
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
          <input name="dogs" type="number" placeholder="Number of Dogs" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}
