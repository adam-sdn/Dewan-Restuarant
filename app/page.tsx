const testimonials = [
  {
    quote:
      "The charcoal-grilled kebabs are perfectly seasoned, and the portions are generous.",
    name: "Local diner",
  },
  {
    quote:
      "Freshly baked bread, rich spices, and a warm welcome every time we visit.",
    name: "Repeat guest",
  },
  {
    quote:
      "Great value for money and consistently delicious Turkish flavours.",
    name: "Family reviewer",
  },
];

const menuHighlights = [
  "Charcoal-grilled kebabs & platters",
  "Traditional rice & oven-baked dishes",
  "Stone-baked pizzas & Turkish pide",
  "Vegetarian options & desserts",
];

const orderLinks = [
  {
    label: "Deliveroo",
    href: "https://deliveroo.co.uk",
  },
  {
    label: "Uber Eats",
    href: "https://www.ubereats.com/gb",
  },
  {
    label: "Just Eat",
    href: "https://www.just-eat.co.uk",
  },
];

export default function Home() {
  return (
    <div>
      <header className="navbar">
        <div className="container nav-content">
          <a className="brand" href="#home">
            Dewan Restaurant
          </a>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#menu">Our Menu</a>
            <a href="#order">Order</a>
            <a href="#contact">Contact / Socials</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Dewan Restaurant</h1>
            <p>
              Authentic Middle Eastern & Turkish cuisine in Leeds, crafted with
              rich spices, fresh ingredients, and warm hospitality.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#menu">
                View Menu
              </a>
              <a className="button secondary" href="#order">
                Order Online
              </a>
            </div>
          </div>
          <div aria-hidden="true">
            <img
              src="/images/mezze.svg"
              alt="Illustration of a mezze platter"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Dewan Restaurant is a welcoming, family-friendly Middle Eastern &
            Turkish restaurant in Leeds, celebrated for authentic flavours,
            fresh food, and generous portions. Enjoy dine-in, takeaway, or
            delivery, with affordable meals typically ranging from £10–£20 per
            person.
          </p>
          <div className="card-grid">
            <div className="card">
              <h3>Warm & Authentic</h3>
              <p>
                Our kitchen blends Turkish tradition with Middle Eastern spices,
                giving every dish a rich, aromatic finish.
              </p>
            </div>
            <div className="card">
              <h3>Freshly Prepared</h3>
              <p>
                We grill to order, bake daily, and keep our flavours bold and
                balanced for every guest.
              </p>
            </div>
            <div className="card">
              <h3>Family Friendly</h3>
              <p>
                Generous portions, affordable pricing, and a welcoming atmosphere
                make Dewan ideal for groups and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="section" style={{ background: "#fff" }}>
        <div className="container">
          <span className="badge">4.0 ★ Average Rating</span>
          <h2 className="section-title">Loved by 500+ Guests</h2>
          <p className="section-subtitle">
            Consistently praised for flavourful dishes, attentive service, and a
            welcoming atmosphere.
          </p>
          <div className="card-grid">
            {testimonials.map((item) => (
              <div className="card" key={item.quote}>
                <p>“{item.quote}”</p>
                <p style={{ marginTop: 12, fontWeight: 600, color: "#7a4f2a" }}>
                  — {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="section">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">
            Explore our Middle Eastern & Turkish favourites, from charcoal-grilled
            kebabs to stone-baked specialties. View the full menu for complete
            details.
          </p>
          <div className="menu-list">
            {menuHighlights.map((item) => (
              <div className="menu-item" key={item}>
                <span aria-hidden="true">🍽️</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <a
            className="button primary"
            href="/menu.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Full Menu (PDF)
          </a>
        </div>
      </section>

      <section id="order" className="section" style={{ background: "#fff" }}>
        <div className="container">
          <h2 className="section-title">Order Online</h2>
          <p className="section-subtitle">
            Order Dewan favourites for delivery or takeaway via your preferred
            platform. Choose one of the trusted delivery partners below.
          </p>
          <div className="order-buttons">
            {orderLinks.map((link) => (
              <a
                key={link.label}
                className="button secondary"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#4b0f16", borderColor: "#4b0f16" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container card-grid">
          <div>
            <h2 className="section-title">Contact & Socials</h2>
            <p className="section-subtitle">
              Visit us for a relaxed meal in Woodhouse, or reach out to place a
              takeaway order.
            </p>
            <div className="card" style={{ marginTop: 16 }}>
              <p>
                <strong>Address:</strong> 18 Woodsley Rd, Woodhouse, Leeds LS3
                1DT
              </p>
              <p>
                <strong>Phone:</strong> 0113 216 2946
              </p>
              <p>
                <strong>Opening Hours:</strong>
              </p>
              <p>Mon–Thu: 12:00 – 22:00</p>
              <p>Fri–Sat: 12:00 – 23:00</p>
              <p>Sun: 12:00 – 21:30</p>
            </div>
            <div className="socials">
              <a href="#" aria-label="Instagram">
                <span aria-hidden="true">📸</span>
              </a>
              <a href="#" aria-label="Facebook">
                <span aria-hidden="true">👍</span>
              </a>
              <a href="#" aria-label="TikTok">
                <span aria-hidden="true">🎵</span>
              </a>
            </div>
          </div>
          <div className="card">
            <h3>Find Us in Leeds</h3>
            <p>
              Located minutes from the University of Leeds, with easy access to
              local transport and parking options nearby.
            </p>
            <img
              src="/images/hero-food.svg"
              alt="Illustration of warm Middle Eastern dishes"
              style={{ marginTop: 16, borderRadius: 16 }}
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            Dewan Restaurant · Middle Eastern & Turkish Cuisine · Leeds, United
            Kingdom
          </p>
        </div>
      </footer>
    </div>
  );
}
