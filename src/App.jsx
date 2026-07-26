import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom'
import heroImg from './assets/hero.png'
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
      <nav className="sticky top-4 z-20 mx-auto flex max-w-7xl flex-wrap items-center justify-between rounded-full border border-white/10 bg-black/70 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6">
        <Link to="/" className="flex items-center gap-3 font-semibold tracking-wide">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-white to-slate-400 text-base font-bold text-slate-950">E</div>
          <span className="text-lg">ElectroNova</span>
        </Link>

        <div className="flex items-center gap-4 text-sm text-slate-300">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white' : '')}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'text-white' : '')}>Shop</NavLink>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? 'text-white' : '')}>Orders</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-white' : '')}>Contact</NavLink>
        </div>

        <div className="flex items-center gap-2">
          <NavLink to="/wishlist" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5">♡</NavLink>
          <NavLink to="/cart" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5">🛒</NavLink>
          <NavLink to="/login" className="rounded-full bg-gradient-to-r from-white to-slate-300 px-4 py-2 font-semibold text-slate-950">Get Started Now</NavLink>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl py-8">{children}</main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-2 py-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3 font-semibold text-slate-100">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-white to-slate-400 text-slate-950">E</div>
            <span>ElectroNova</span>
          </div>
          <p className="mt-2">Premium electronics for modern lifestyles.</p>
        </div>
        <div className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white' : '')}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'text-white' : '')}>Shop</NavLink>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? 'text-white' : '')}>Orders</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-white' : '')}>Contact</NavLink>
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

        <div className="hero-viz">
          <div className="hero-viz-card">
            <img src={heroImg} alt="ElectroNova dashboard" />
            <div className="dashboard-panel">
              <span className="panel-title">ElectroNova UI</span>
              <p className="panel-copy">A premium dark dashboard for high-end electronic shopping and product tracking.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="feature-benefits">
        <div className="feature-header">
          <p className="eyebrow">Features & Benefits</p>
          <div>
            <h2>Upgrade your lifestyle with smart electronics and premium gadgets.</h2>
            <p className="hero-text">Discover the latest technology designed for everyone — from daily users to professionals.</p>
          </div>
        </div>

        <div className="feature-grid">
          <article className="feature-card accent-blue">
            <div className="feature-icon">📱💻⌚🏠</div>
            <h3>Smart Devices Everywhere</h3>
            <p>Bring innovation to your home with our latest smartphones, laptops, smart watches, and connected devices.</p>
          </article>

          <article className="feature-card accent-green">
            <div className="feature-icon">🌍📦</div>
            <h3>Available Across Stores</h3>
            <p>Shop thousands of authentic electronics with fast delivery and trusted support worldwide.</p>
            <div className="stat-block">
              <span>500+</span>
              <small>Products</small>
            </div>
          </article>

          <article className="feature-card accent-blue">
            <div className="feature-icon">👥✨⭐</div>
            <h3>Trusted By Thousands</h3>
            <p>Join our growing community of tech lovers who choose us for quality gadgets and unbeatable service.</p>
            <div className="stat-block">
              <span>100K+</span>
              <small>Happy Customers</small>
            </div>
          </article>

          <article className="feature-card accent-green">
            <div className="feature-icon">💬⭐</div>
            <h3>Customers Love Us</h3>
            <p>See why our customers trust us for their everyday technology needs.</p>
            <div className="review-card">
              <p className="review-name">Alex Johnson</p>
              <p className="review-stars">★★★★★</p>
              <p className="review-text">Great products, fast delivery, and amazing customer support. My new laptop is perfect!</p>
            </div>
          </article>
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
