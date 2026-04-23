import { useEffect, useState } from "react";

const services = [
  {
    title: "Website Designing",
    description: "Fast, clean websites for companies that need a sharp online presence.",
    items: ["Responsive pages", "Landing pages", "Business websites", "SEO-ready structure"],
  },
  {
    title: "Web App Development",
    description: "Interactive browser-based systems for operations, bookings, portals, and dashboards.",
    items: ["Admin dashboards", "Customer portals", "Booking workflows", "Data-driven interfaces"],
  },
  {
    title: "Custom Software Development",
    description: "Business software shaped around your process instead of forcing your team into a template.",
    items: ["Workflow tools", "Inventory systems", "Reports", "API integrations"],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that perform and delight.",
    items: ["iOS and Android apps", "Cross-platform solutions", "App store optimization", "Real-time features"],
  },
  {
    title: "Logo Designing and Branding",
    description: "Visual identity that captures your brand essence and resonates with your audience.",
    items: ["Logo design", "Brand guidelines", "Marketing materials", "Brand strategy"],
  },
  {
    title: "Graphic Design",
    description: "Visual content that communicates your message and drives engagement.",
    items: ["Posters and banners", "Social media content", "Packaging design", "Print collateral"],
  },
];

const deliverables = [
  "Company profiles",
  "E-commerce stores",
  "Booking systems",
  "Business dashboards",
  "Restaurant menus",
  "Brand launch kits",
  "Campaign posters",
  "Mobile-first apps",
];

const processSteps = [
  { num: "01", title: "Understand the goal", desc: "We listen and learn your vision." },
  { num: "02", title: "Plan the right screens and flow", desc: "We structure the pages and user journey." },
  { num: "03", title: "Design the visual direction", desc: "We shape a clear and modern visual system." },
  { num: "04", title: "Build and test", desc: "We implement, review, and refine before launch." },
  { num: "05", title: "Launch with support", desc: "We go live and stay available after delivery." },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-shell">
      <nav className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
        <div className="layout shell-row">
          <div className="brand-mark">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663563800651/ec43yeaTqevznf9xYAQ2YW/converted_image_643b23e1.png"
              alt="Al Amana Technologies"
            />
            <span>AL AMANA TECHNOLOGIES</span>
          </div>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://wa.me/96892005361"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="hero-orb hero-orb--top" />
          <div className="hero-orb hero-orb--bottom" />

          <div className="layout hero-grid">
            <div className="hero-copy">
              <div className="section-label">SALALAH, OMAN</div>
              <h1>
                Digital work that <span>looks clean</span> and works hard.
              </h1>
              <p>
                Al Amana Technologies builds websites, web apps, custom software,
                mobile apps, logos, branding, posters, and graphic design for businesses
                that need reliable digital execution.
              </p>

              <div className="button-row">
                <a
                  href="https://wa.me/96892005361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  WhatsApp us
                </a>
                <a href="#services" className="button button-outline">
                  View services
                </a>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <strong>6+</strong>
                  <span>Service lines</span>
                </div>
                <div className="stat-card">
                  <strong>Salalah</strong>
                  <span>Based in Oman</span>
                </div>
                <div className="stat-card">
                  <strong>24/7</strong>
                  <span>WhatsApp ready</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663563800651/ec43yeaTqevznf9xYAQ2YW/services-visual-Z28qm66EqSGQV7gYTGDMKw.webp"
                alt="Digital services dashboard"
              />
            </div>
          </div>
        </section>

        <section id="services" className="content-section">
          <div className="layout">
            <div className="section-header">
              <div className="section-label">SERVICES</div>
              <h2>Design, development, and brand support in one place.</h2>
              <p>
                Choose one service or build a complete launch package across web,
                mobile, software, and visual identity.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="panel-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="layout split-grid">
            <div className="image-frame">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663563800651/ec43yeaTqevznf9xYAQ2YW/ecommerce-it-abstract-dD6waSNp3NMvVNEgnLd6YV.webp"
                alt="E-commerce and IT technology solutions"
              />
            </div>

            <div>
              <div className="section-label">WHAT WE BUILD</div>
              <h2>Practical digital assets for real business use.</h2>
              <div className="deliverables-grid">
                {deliverables.map((item) => (
                  <div key={item} className="deliverable-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="content-section">
          <div className="layout">
            <div className="section-header">
              <div className="section-label">PROCESS</div>
              <h2>Simple steps from idea to launch.</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((step) => (
                <article key={step.num} className="panel-card">
                  <div className="step-number">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="layout">
            <div className="cta-panel">
              <h2>Ready to build something useful?</h2>
              <p>
                Talk to Al Amana Technologies about your website, app, software,
                brand, or design project.
              </p>
              <div className="button-row button-row--center">
                <a
                  href="https://wa.me/96892005361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  WhatsApp us
                </a>
                <a href="tel:+96892005361" className="button button-outline">
                  +968 92005361
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="layout footer-grid">
          <div>
            <div className="brand-mark brand-mark--footer">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663563800651/ec43yeaTqevznf9xYAQ2YW/converted_image_643b23e1.png"
                alt="Al Amana Technologies"
              />
              <span>AL AMANA TECHNOLOGIES</span>
            </div>
            <p className="footer-text">
              Websites, apps, software, branding, and design services for businesses
              in Salalah and across Oman.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Website Designing</a></li>
              <li><a href="#services">Web App Development</a></li>
              <li><a href="#services">Custom Software</a></li>
              <li><a href="#services">Mobile Apps</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://wa.me/96892005361"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li><a href="tel:+96892005361">+968 92005361</a></li>
              <li>
                <a
                  href="https://maps.app.goo.gl/NGP3xh2XUPJCXAEF8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Salalah, Oman
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="layout footer-bar">
          <p>© 2026 Al Amana Technologies. All rights reserved.</p>
          <p>Digital services from Salalah, Oman</p>
        </div>
      </footer>
    </div>
  );
}
