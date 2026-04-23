/* ============================================================
   HOME PAGE — Al Amana Technologies
   Design: Obsidian Tech dark luxury aesthetic
   Sections: Hero, Services (Bento), What We Build, Process, Footer
   ============================================================ */

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Palette, Smartphone, Zap } from "lucide-react";
import { useEffect, useState } from "react";

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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* ========== NAVIGATION ========== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663563800651/ec43yeaTqevznf9xYAQ2YW/converted_image_643b23e1.png" alt="Al Amana Technologies" className="w-8 h-8" />
            <span className="font-bold text-lg tracking-tight">AL AMANA TECHNOLOGIES</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </a>
          </div>

          <a
            href="https://wa.me/96892005361"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background with dot grid and glow */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        {/* Animated glow orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="mono-label text-primary/80">SALALAH, OMAN</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Digital work that{" "}
                <span className="gradient-text">looks clean</span> and works hard.
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Al Amana Technologies builds websites, web apps, custom software, mobile apps, logos, branding, posters, and graphic designs for businesses ready to move faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/96892005361"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition group"
              >
                WhatsApp us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/40 text-foreground rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                View services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">6+</div>
                <p className="text-xs text-muted-foreground mt-1">Service lines</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Salalah</div>
                <p className="text-xs text-muted-foreground mt-1">Based in Oman</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <p className="text-xs text-muted-foreground mt-1">WhatsApp ready</p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663563800651/ec43yeaTqevznf9xYAQ2YW/services-visual-Z28qm66EqSGQV7gYTGDMKw.webp"
              alt="Digital services dashboard"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION (BENTO) ========== */}
      <section id="services" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="mono-label text-primary/80">SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Design, development, and brand support in one place.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose one service or build a complete launch package across web, mobile, software, and visual identity.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Website Designing */}
            <div className="glass-card glass-card-hover md:col-span-1 p-8 rounded-2xl border-glow group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Website Designing</h3>
              <p className="text-muted-foreground mb-6">
                Fast, clean websites for companies that need a sharp online presence.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Responsive pages
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Landing pages
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Business websites
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> SEO-ready structure
                </li>
              </ul>
            </div>

            {/* Card 2: Web App Development */}
            <div className="glass-card glass-card-hover md:col-span-1 p-8 rounded-2xl border-glow group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web App Development</h3>
              <p className="text-muted-foreground mb-6">
                Interactive browser-based systems for operations, bookings, portals, and dashboards.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Admin dashboards
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Customer portals
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Booking workflows
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Data-driven interfaces
                </li>
              </ul>
            </div>

            {/* Card 3: Custom Software */}
            <div className="glass-card glass-card-hover md:col-span-1 p-8 rounded-2xl border-glow group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Software Development</h3>
              <p className="text-muted-foreground mb-6">
                Business software shaped around your process instead of forcing your team into a template.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Workflow tools
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Inventory systems
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Reports
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> API integrations
                </li>
              </ul>
            </div>

            {/* Card 4: Mobile App Development */}
            <div className="glass-card glass-card-hover md:col-span-1 p-8 rounded-2xl border-glow group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile App Development</h3>
              <p className="text-muted-foreground mb-6">
                Native and cross-platform mobile applications that perform and delight.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span> iOS & Android apps
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Cross-platform solutions
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> App store optimization
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Real-time features
                </li>
              </ul>
            </div>

            {/* Card 5: Branding & Design */}
            <div className="glass-card glass-card-hover md:col-span-1 p-8 rounded-2xl border-glow group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Logo Designing & Branding</h3>
              <p className="text-muted-foreground mb-6">
                Visual identity that captures your brand essence and resonates with your audience.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Logo design
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Brand guidelines
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Marketing materials
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Brand strategy
                </li>
              </ul>
            </div>

            {/* Card 6: Graphic Design */}
            <div className="glass-card glass-card-hover md:col-span-1 p-8 rounded-2xl border-glow group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Graphic Design</h3>
              <p className="text-muted-foreground mb-6">
                Stunning visual content that communicates your message and drives engagement.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Posters & banners
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Social media content
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Packaging design
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span> Print collateral
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT WE BUILD SECTION ========== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663563800651/ec43yeaTqevznf9xYAQ2YW/ecommerce-it-abstract-dD6waSNp3NMvVNEgnLd6YV.webp"
                alt="E-commerce and IT technology solutions"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-8">
              <div>
                <span className="mono-label text-primary/80">WHAT WE BUILD</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Practical digital assets for real business use.
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Company profiles",
                  "E-commerce stores",
                  "Booking systems",
                  "Business dashboards",
                  "Restaurant menus",
                  "Brand launch kits",
                  "Campaign posters",
                  "Mobile-first apps",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass-card p-4 rounded-lg border-l-2 border-primary/50 hover:border-primary transition"
                  >
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section id="process" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="mono-label text-primary/80">PROCESS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Simple steps from idea to launch.
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Understand the goal", desc: "We listen and learn your vision" },
              { num: "02", title: "Plan the right screens and flow", desc: "Strategic UX planning" },
              { num: "03", title: "Design the visual direction", desc: "Crafting the aesthetic" },
              { num: "04", title: "Build and test", desc: "Development & quality assurance" },
              { num: "05", title: "Launch with support", desc: "Go live and ongoing support" },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="glass-card glass-card-hover p-6 rounded-xl h-full flex flex-col">
                  <div className="text-4xl font-bold text-primary/40 mb-4">{step.num}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container relative z-10">
          <div className="glass-card border-glow p-12 md:p-16 rounded-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's talk about your project. Reach out on WhatsApp or call us directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/96892005361"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition group"
              >
                WhatsApp us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="tel:+96892005361"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/40 text-foreground rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                +968 92005361
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="relative border-t border-border py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663563800651/ec43yeaTqevznf9xYAQ2YW/converted_image_643b23e1.png" alt="Al Amana Technologies" className="w-8 h-8" />
                <span className="font-bold">AL AMANA TECHNOLOGIES</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Websites, apps, software, branding, and design services for businesses in Salalah and across Oman.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-foreground transition">
                    Website Designing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition">
                    Web App Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition">
                    Custom Software
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition">
                    Mobile Apps
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-foreground transition">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://wa.me/96892005361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="tel:+96892005361" className="hover:text-foreground transition">
                    +968 92005361
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/NGP3xh2XUPJCXAEF8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition"
                  >
                    Salalah, Oman
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Al Amana Technologies. All rights reserved.</p>
            <p>Digital services from Salalah, Oman</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
