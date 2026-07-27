import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Aurora X1 Laptop',
    category: 'Laptops',
    price: '$2,499',
    rating: '4.9',
    description: 'Ultra-light performance laptop designed for creators and professionals.',
    badge: 'New',
    stock: 'In Stock',
    specs: ['16 GB RAM', '1 TB SSD', '14-inch OLED'],
  },
  {
    id: 2,
    name: 'Nova Pro Phone',
    category: 'Smartphones',
    price: '$1,199',
    rating: '4.8',
    description: 'Flagship AI camera system with cinematic display and all-day battery.',
    badge: 'Best Seller',
    stock: 'In Stock',
    specs: ['120Hz Display', 'Triple Camera', 'All-day Battery'],
  },
  {
    id: 3,
    name: 'Pulse Studio Headphones',
    category: 'Headphones',
    price: '$349',
    rating: '4.7',
    description: 'Immersive spatial audio with adaptive noise cancellation.',
    badge: 'Hot',
    stock: 'Limited',
    specs: ['Spatial Audio', '40hr Battery', 'ANC'],
  },
  {
    id: 4,
    name: 'Orbit Smart Watch',
    category: 'Smart Watches',
    price: '$279',
    rating: '4.6',
    description: 'Precision health tracking wrapped in a premium titanium frame.',
    badge: 'Limited',
    stock: 'In Stock',
    specs: ['Sleep Tracking', 'GPS', '7-day Battery'],
  },
]

const features = [
  {
    title: 'Fast Delivery',
    text: 'Get your favorite electronics delivered quickly and safely.',
  },
  {
    title: 'Premium Quality',
    text: 'Only high-quality products selected for modern lifestyles.',
  },
  {
    title: 'Secure Shopping',
    text: 'Safe checkout and a protected customer experience.',
  },
]

const cartItems = [
  { id: 1, name: 'Nova Pro Phone', price: '$1,199', qty: 1 },
  { id: 2, name: 'Pulse Studio Headphones', price: '$349', qty: 1 },
]

const wishlistItems = [
  { id: 1, name: 'Orbit Smart Watch', price: '$279' },
  { id: 2, name: 'Aurora X1 Laptop', price: '$2,499' },
]

function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_25%)] px-4 py-5 text-slate-100 sm:px-6 lg:px-8">
      <nav className="main-nav sticky top-4 z-20 mx-auto flex max-w-7xl flex-wrap items-center justify-between rounded-full border border-white/10 bg-black/70 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6">
        <Link to="/" className="flex items-center gap-3 font-semibold tracking-wide">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-white to-slate-400 text-base font-bold text-slate-950">E</div>
          <span className="text-lg">ElectroNova</span>
        </Link>

        <div className="nav-links flex items-center gap-4 text-sm text-slate-300">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white' : '')}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'text-white' : '')}>Shop</NavLink>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? 'text-white' : '')}>Orders</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-white' : '')}>Contact</NavLink>
        </div>

        <div className="nav-actions flex items-center gap-2">
          <NavLink to="/wishlist" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5">♡</NavLink>
          <NavLink to="/cart" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5">🛒</NavLink>
          <NavLink to="/login" className="rounded-full bg-gradient-to-r from-white to-slate-300 px-4 py-2 font-semibold text-slate-950">Get Started Now</NavLink>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl py-8">{children}</main>

      <footer className="cryptgen-footer">
        <div className="cryptgen-footer__container">
          <div className="cryptgen-footer__brand">
            <div className="cryptgen-footer__brand-head">
              <div className="cryptgen-footer__logo">E</div>
              <span>ElectroNova</span>
            </div>
            <div className="cryptgen-footer__social">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="cryptgen-footer__social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.18 9.18 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.7 0a4.48 4.48 0 0 0-4.47 4.48c0 .35.04.69.11 1.02A12.8 12.8 0 0 1 1.64 1.82a4.47 4.47 0 0 0-.61 2.25 4.48 4.48 0 0 0 1.99 3.73A4.43 4.43 0 0 1 .9 7.43v.06a4.48 4.48 0 0 0 3.6 4.4 4.47 4.47 0 0 1-2.02.08 4.48 4.48 0 0 0 4.19 3.11A9 9 0 0 1 0 19.54 12.72 12.72 0 0 0 6.92 21c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58A9.18 9.18 0 0 0 23 3z"/></svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="cryptgen-footer__social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm3.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="cryptgen-footer__social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.1V12h2.1V9.7c0-2.1 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3V12h2.2l-.4 2.9h-1.8v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="cryptgen-footer__social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zm.02 4.5H1v15h4V8zm7.5 0h-3.8v15H12.5v-8.3c0-2 1.2-3.2 3-3.2 1.7 0 2.4 1.2 2.4 3.1V23H21v-8.7c0-4.7-2.5-6.9-5.8-6.9z"/></svg>
              </a>
            </div>
          </div>

          <div className="cryptgen-footer__links">
            <div>
              <h3>Shop</h3>
              <a href="#">New Arrivals</a>
              <a href="#">Best Sellers</a>
              <a href="#">Gadgets</a>
              <a href="#">Accessories</a>
              <a href="#">Gift Cards</a>
            </div>
            <div>
              <h3>Support</h3>
              <a href="#">Customer Care</a>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
              <a href="#">Warranty</a>
            </div>
            <div>
              <h3>Company</h3>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
            <div>
              <h3>Legal</h3>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionHeading({ eyebrow, title, subtitle, action }) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? <p className="text-[0.7rem] uppercase tracking-[0.35em] text-slate-500">{eyebrow}</p> : null}
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm text-slate-400">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  )
}

function ProductCard({ product, showActions = true }) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">{product.badge}</div>
      <h3 className="text-xl font-semibold text-white">{product.name}</h3>
      <p className="mt-2 text-sm text-slate-400">{product.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
        <span>⭐ {product.rating}</span>
        <span>{product.price}</span>
      </div>
      {showActions ? (
        <div className="mt-5 flex items-center gap-3">
          <Link to={`/product/${product.id}`} className="rounded-full bg-gradient-to-r from-white to-slate-300 px-4 py-2 font-semibold text-slate-950">View Details</Link>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5">♡</button>
        </div>
      ) : null}
    </article>
  )
}

function DashboardPreview() {
  return (
    <div className="hero-viz hero-viz--dashboard">
      <div className="dashboard-hero-frame">
        <div className="dashboard-grid">
          <div className="dashboard-column">
            <article className="dashboard-card dashboard-card--revenue">
              <div className="dashboard-card__body">
                <p className="dashboard-card__label">Total Revenue</p>
                <p className="dashboard-card__value">$15,231.89</p>
                <p className="dashboard-card__meta dashboard-card__meta--positive">+20.1% from last month</p>
              </div>
              <div className="dashboard-card__chart">
                <svg viewBox="0 0 180 90" role="img" aria-label="Revenue trend chart">
                  <path d="M4 62C28 56 42 44 58 46C72 48 78 34 96 32C118 30 126 52 144 49C154 47 164 40 176 34" />
                  <circle cx="58" cy="46" r="3.5" />
                  <circle cx="96" cy="32" r="3.5" />
                  <circle cx="144" cy="49" r="3.5" />
                </svg>
              </div>
            </article>

            <article className="dashboard-card dashboard-card--team">
              <div className="dashboard-card__body">
                <p className="dashboard-card__label">Team Members</p>
                <p className="dashboard-card__subtext">Invite your team members to collaborate.</p>
              </div>
              <div className="dashboard-team-list">
                <div className="dashboard-team-item">
                  <div className="dashboard-avatar">AD</div>
                  <div>
                    <p>Abigail Dean</p>
                    <span>abigail@electro.com</span>
                  </div>
                  <span className="dashboard-role">Owner</span>
                </div>
                <div className="dashboard-team-item">
                  <div className="dashboard-avatar">ML</div>
                  <div>
                    <p>Miles Lane</p>
                    <span>miles@electro.com</span>
                  </div>
                  <span className="dashboard-role">Member</span>
                </div>
                <div className="dashboard-team-item">
                  <div className="dashboard-avatar">SK</div>
                  <div>
                    <p>Sophia Kim</p>
                    <span>sophia@electro.com</span>
                  </div>
                  <span className="dashboard-role">Member</span>
                </div>
              </div>
              <div className="dashboard-team-footer">Cookie Settings</div>
            </article>
          </div>

          <div className="dashboard-column">
            <article className="dashboard-card dashboard-card--subscriptions">
              <div className="dashboard-card__body">
                <p className="dashboard-card__label">Subscriptions</p>
                <p className="dashboard-card__value">+2350</p>
                <p className="dashboard-card__meta dashboard-card__meta--positive">+180.1% from last month</p>
              </div>
              <div className="dashboard-bar-chart" aria-hidden="true">
                {[32, 58, 44, 78, 54, 92, 68, 82].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </article>

            <article className="dashboard-card dashboard-card--chat">
              <div className="dashboard-chat__header">
                <div className="dashboard-chat__person">
                  <div className="dashboard-avatar dashboard-avatar--small">SD</div>
                  <div>
                    <p>Sofia Davis</p>
                    <span>support@electro.com</span>
                  </div>
                </div>
                <button type="button" className="dashboard-chat__add">+</button>
              </div>
              <div className="dashboard-chat__thread">
                <div className="dashboard-chat__bubble dashboard-chat__bubble--incoming">Can you share the latest launch calendar?</div>
                <div className="dashboard-chat__bubble dashboard-chat__bubble--outgoing">Absolutely — premium stock arrives this week.</div>
                <div className="dashboard-chat__bubble dashboard-chat__bubble--incoming">Perfect, I’ll notify the team.</div>
              </div>
              <div className="dashboard-chat__composer">
                <input type="text" placeholder="Type a message" />
                <button type="button">↗</button>
              </div>
            </article>
          </div>

          <div className="dashboard-column dashboard-column--stacked">
            <article className="dashboard-card dashboard-card--calendar">
              <div className="dashboard-calendar">
                <div className="dashboard-calendar__header">
                  <button type="button" className="dashboard-calendar__nav">‹</button>
                  <h3>June 2023</h3>
                  <button type="button" className="dashboard-calendar__nav">›</button>
                </div>
                <div className="dashboard-calendar__weekdays">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
                <div className="dashboard-calendar__dates">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'].map((date, index) => (
                    <span key={date} className={index === 14 ? 'is-active' : ''}>{date}</span>
                  ))}
                </div>
              </div>
            </article>

            <article className="dashboard-card dashboard-card--move">
              <div className="dashboard-card__body">
                <p className="dashboard-card__label">Move Goal</p>
                <p className="dashboard-card__subtext">Set your daily activity goal.</p>
              </div>
              <div className="dashboard-stepper">
                <button type="button" className="dashboard-stepper__button">−</button>
                <div className="dashboard-stepper__value">
                  <span>350</span>
                  <small>CALORIES/DAY</small>
                </div>
                <button type="button" className="dashboard-stepper__button">+</button>
              </div>
              <div className="dashboard-mini-bars" aria-hidden="true">
                {[38, 56, 43, 74, 52, 67].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <button type="button" className="dashboard-pill-btn">Set Goal</button>
            </article>

            <article className="dashboard-card dashboard-card--exercise">
              <div className="dashboard-card__body">
                <p className="dashboard-card__label">Exercise Minutes</p>
                <p className="dashboard-card__subtext">Your exercise minutes are ahead of where you normally are.</p>
              </div>
              <div className="dashboard-card__chart dashboard-card__chart--large">
                <svg viewBox="0 0 180 100" role="img" aria-label="Exercise goal chart">
                  <path d="M4 72C24 70 34 54 50 52C66 50 72 36 90 38C108 40 114 62 132 60C146 58 156 44 176 28" />
                  <circle cx="50" cy="52" r="3.4" />
                  <circle cx="90" cy="38" r="3.4" />
                  <circle cx="132" cy="60" r="3.4" />
                </svg>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <section className="hero-page">
      <div className="hero-center">
        <div className="hero-copy">
          <p className="eyebrow">All-in-one electronic marketplace</p>
          <h1>Your Elite Electronic Companion</h1>
          <p className="hero-text">
            Simplify premium electronics shopping with a luxurious dashboard-style storefront built for a single trusted seller.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn-primary">Get Started</Link>
            <Link to="/shop" className="btn-secondary">Browse Products</Link>
          </div>
        </div>

        <DashboardPreview />
      </div>

      <section className="cg-features">
        <div className="cg-features__header">
          <p className="cg-features__eyebrow">Features & Benefits</p>
          <h2 className="cg-features__title">Features & Benefits</h2>
          <p className="cg-features__subtitle">Discover premium electronics, fast shipping, and curated gear built for modern creators, gamers, and everyday tech enthusiasts.</p>
        </div>

        <div className="cg-grid">
          <article className="cg-card cg-card--hosting">
            <div className="cg-hosting-visual">
              <div className="cg-hosting-visual__ring cg-hosting-visual__ring--outer"></div>
              <div className="cg-hosting-visual__ring cg-hosting-visual__ring--inner"></div>
              <div className="cg-hosting-visual__center"></div>
              <span className="cg-bubble cg-bubble--yt">YT</span>
              <span className="cg-bubble cg-bubble--x">X</span>
              <span className="cg-bubble cg-bubble--rd">RD</span>
              <span className="cg-bubble cg-bubble--dc">DC</span>
              <span className="cg-bubble cg-bubble--msg">✉</span>
            </div>
            <div className="cg-card__content">
              <h3>Seamless product discovery</h3>
              <p>Curated product drops, intuitive filters, and fast checkout combine to make your electronics shopping effortless.</p>
            </div>
          </article>

          <article className="cg-card cg-card--countries">
            <div className="cg-card__text">
              <h3>Delivered to every home</h3>
              <p>Fast global shipping, transparent stock updates, and reliable delivery across regions for every tech purchase.</p>
            </div>
            <div className="cg-country-map">
              <span className="cg-country-dot cg-country-dot--bright" style={{ '--x': '14%', '--y': '20%' }}></span>
              <span className="cg-country-dot cg-country-dot--bright" style={{ '--x': '62%', '--y': '18%' }}></span>
              <span className="cg-country-dot cg-country-dot--glow" style={{ '--x': '46%', '--y': '58%' }}></span>
              <span className="cg-country-dot" style={{ '--x': '20%', '--y': '46%' }}></span>
              <span className="cg-country-dot" style={{ '--x': '75%', '--y': '46%' }}></span>
              <span className="cg-country-dot" style={{ '--x': '33%', '--y': '72%' }}></span>
              <span className="cg-country-dot" style={{ '--x': '84%', '--y': '72%' }}></span>
            </div>
            <div className="cg-country-stat">100+ Countries</div>
          </article>

          <article className="cg-card cg-card--adoption">
            <div className="cg-adoption-row">
              <div className="cg-platform-icons">
                <span className="cg-platform-icon">YT</span>
                <span className="cg-platform-icon">X</span>
                <span className="cg-platform-icon">RD</span>
                <span className="cg-platform-icon">DC</span>
                <span className="cg-platform-icon">💬</span>
              </div>
              <div className="cg-adoption-number">542,000 Users</div>
            </div>
            <div className="cg-card__content">
              <h3>Trusted by shoppers</h3>
              <p>Join hundreds of thousands of buyers who rely on our curated electronics catalog, premium service, and transparent experience.</p>
            </div>
            <div className="cg-avatar-grid">
              <span className="cg-avatar">MA</span>
              <span className="cg-avatar">NL</span>
              <span className="cg-avatar">TY</span>
              <span className="cg-avatar">SK</span>
              <span className="cg-avatar">JR</span>
              <span className="cg-avatar">EV</span>
            </div>
          </article>

          <article className="cg-card cg-card--testimonial">
            <div>
              <h3>People love us</h3>
              <p>Customers praise our modern storefront, quick delivery, and premium support for every electronics purchase.</p>
            </div>
            <div className="cg-testimonial-stack">
              <div className="cg-testimonial-stack__back"></div>
              <div className="cg-testimonial-card">
                <div className="cg-testimonial-head">
                  <div className="cg-testimonial-avatar">M</div>
                  <div>
                    <p className="cg-testimonial-name">Manu Arora</p>
                  </div>
                </div>
                <p className="cg-testimonial-copy">“The product selection is sleek, fast, and <span>refreshingly easy to trust</span> — the best electronics shopping experience I’ve used.” 🚀</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="crypto-testimonials">
        <div className="crypto-testimonials__intro">
          <div className="crypto-testimonials__headline">
            <span className="crypto-testimonials__word crypto-testimonials__word--strong">What they</span>
            <span className="crypto-testimonials__word crypto-testimonials__word--muted">say about us</span>
          </div>
          <p className="crypto-testimonials__subtext">
            Trusted voices from modern shoppers and tech reviewers, sharing why our electronics storefront feels premium, fast, and effortless.
          </p>
        </div>

        <div className="crypto-testimonials__grid">
          <article className="crypto-testimonials__card">
            <div className="crypto-testimonials__card-header">
              <div className="crypto-testimonials__avatar">SA</div>
              <div>
                <p className="crypto-testimonials__name">Sophia Allen</p>
                <p className="crypto-testimonials__role">Tech Reviewer</p>
              </div>
            </div>
            <p className="crypto-testimonials__body">
              “The storefront feels premium and uncluttered — I can browse top gadgets, compare specs, and checkout in one confident flow.”
            </p>
          </article>

          <article className="crypto-testimonials__card crypto-testimonials__card--offset">
            <div className="crypto-testimonials__card-header">
              <div className="crypto-testimonials__avatar">JJ</div>
              <div>
                <p className="crypto-testimonials__name">Jules James</p>
                <p className="crypto-testimonials__role">Electronics Editor</p>
              </div>
            </div>
            <p className="crypto-testimonials__body">
              “This platform makes it easy to find premium gear quickly. The visual system keeps every product feel upscale and modern.”
            </p>
          </article>

          <article className="crypto-testimonials__card">
            <div className="crypto-testimonials__card-header">
              <div className="crypto-testimonials__avatar">LM</div>
              <div>
                <p className="crypto-testimonials__name">Lina Morgan</p>
                <p className="crypto-testimonials__role">Retail Partner</p>
              </div>
            </div>
            <p className="crypto-testimonials__body">
              “I love the premium typography and soft contrast. It feels built for modern shopping, not just another electronics site.”
            </p>
          </article>

          <article className="crypto-testimonials__card">
            <div className="crypto-testimonials__card-header">
              <div className="crypto-testimonials__avatar">AR</div>
              <div>
                <p className="crypto-testimonials__name">Arman Reed</p>
                <p className="crypto-testimonials__role">Gadget Strategist</p>
              </div>
            </div>
            <p className="crypto-testimonials__body">
              “The offset card rhythm feels modern and dynamic, perfect for a platform that values clarity and subtle luxury.”
            </p>
          </article>
        </div>
      </section>

      <section className="home-crypto-hero">
        <div className="home-crypto-hero__frame">
          <div className="home-crypto-hero__light"></div>
          <div className="home-crypto-hero__panel">
            <h2>Your All-in-One Electronics Companion</h2>
            <p>Explore premium gadgets, curated launches, and fast checkout in a sleek storefront built for creators, gamers, and modern tech shoppers.</p>
            <button className="home-crypto-hero__cta">Get Started Now</button>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <p className="eyebrow">Trusted by industry leaders</p>
        <div className="trusted-grid">
          <span>Apple</span>
          <span>Samsung</span>
          <span>PlayStation</span>
          <span>Camera</span>
          <span>Laptop</span>
          <span>Headphone</span>
        </div>
      </section>
    </section>
  )
}

function ShopPage() {
  return (
    <section>
      <SectionHeading title="Explore Latest Technology" subtitle="Premium gadgets, smart accessories, and futuristic essentials for every modern lifestyle." />
      <div className="mb-6 flex flex-wrap gap-2">
        {['Smartphones', 'Laptops', 'Headphones', 'Smart Watches', 'Gaming Devices', 'Accessories'].map((category) => (
          <span key={category} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{category}</span>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return <p className="text-slate-400">Product not found.</p>
  }

  return (
    <section className="grid gap-8 rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm lg:grid-cols-[1fr_0.9fr] lg:p-10">
      <div className="grid place-items-center rounded-[28px] border border-white/10 bg-white/5 p-8 text-7xl">⌘</div>
      <div>
        <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">{product.badge}</div>
        <h2 className="mt-4 text-3xl font-semibold text-white">{product.name}</h2>
        <p className="mt-3 text-slate-400">{product.description}</p>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-300">
          <span>⭐ {product.rating}</span>
          <span>{product.stock}</span>
        </div>
        <div className="mt-5 flex items-baseline gap-3">
          <span className="text-3xl font-semibold text-white">{product.price}</span>
          <span className="text-slate-400">Premium electronic device</span>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {product.specs.map((spec) => (
            <li key={spec} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{spec}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-gradient-to-r from-white to-slate-300 px-5 py-3 font-semibold text-slate-950">Add To Cart</button>
          <button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-slate-100">Buy Now</button>
          <button className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5">♡</button>
        </div>
      </div>
    </section>
  )
}

function CartPage() {
  const subtotal = '$1,548'
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <SectionHeading title="Your Cart" subtitle="Review your selected premium electronics before checkout." />
        {cartItems.map((item) => (
          <div key={item.id} className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-white/10 bg-black/20 p-4">
            <div>
              <h3 className="font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-slate-400">Quantity: {item.qty}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-white">{item.price}</span>
              <button className="text-sm text-slate-400">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-white">Order Summary</h3>
        <div className="mt-5 space-y-3 text-sm text-slate-400">
          <div className="flex justify-between"><span>Subtotal</span><span>{subtotal}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>$40</span></div>
          <div className="flex justify-between border-t border-white/10 pt-3 text-white"><span>Total</span><span>$1,588</span></div>
        </div>
        <button className="mt-6 w-full rounded-full bg-gradient-to-r from-white to-slate-300 px-4 py-3 font-semibold text-slate-950">Proceed To Checkout</button>
      </div>
    </section>
  )
}

function WishlistPage() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <SectionHeading title="Wishlist" subtitle="Save your favorite premium products for later." />
      <div className="grid gap-4 md:grid-cols-2">
        {wishlistItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-[24px] border border-white/10 bg-black/20 p-4">
            <div>
              <h3 className="font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-slate-400">{item.price}</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full bg-gradient-to-r from-white to-slate-300 px-3 py-2 text-sm font-semibold text-slate-950">Move To Cart</button>
              <button className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function OrdersPage() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <SectionHeading title="Order History" subtitle="Track your latest purchases and delivery progress." />
      <div className="space-y-4">
        <div className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-slate-500">Order #1042</p>
            <h3 className="mt-1 text-lg font-semibold text-white">Aurora X1 Laptop</h3>
            <p className="text-sm text-slate-400">Placed on 24 Jul 2026</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-white">$2,499</p>
            <span className="mt-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">Processing</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-slate-500">Order #1038</p>
            <h3 className="mt-1 text-lg font-semibold text-white">Pulse Studio Headphones</h3>
            <p className="text-sm text-slate-400">Placed on 18 Jul 2026</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-white">$349</p>
            <span className="mt-2 inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">Delivered</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-slate-500">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s Connect</h2>
        <p className="mt-3 max-w-md text-slate-400">Share your ideas or ask about our premium electronics catalog.</p>
      </div>
      <form className="space-y-4 rounded-[24px] border border-white/10 bg-black/20 p-5">
        <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none" placeholder="Name" />
        <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none" placeholder="Email" />
        <textarea className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none" placeholder="Message" />
        <button className="rounded-full bg-gradient-to-r from-white to-slate-300 px-4 py-3 font-semibold text-slate-950">Send Message</button>
      </form>
    </section>
  )
}

function LoginPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-slate-500">Welcome back</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Login to continue your shopping journey.</h2>
        <div className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none" placeholder="Email" />
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none" placeholder="Password" type="password" />
          <button className="w-full rounded-full bg-gradient-to-r from-white to-slate-300 px-4 py-3 font-semibold text-slate-950">Login</button>
          <p className="text-center text-sm text-slate-400">Create Account</p>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
