"use client";
import { useState } from "react";
const services = [
  {
    id: "digital-experience",
    number: "01",
    title: "Digital Experience",
    description: "Build seamless digital experiences that turn visitors into loyal customers.",
    icon: "✳",
  },
  {
    id: "headless-cms",
    number: "02",
    title: "Headless CMS",
    description: "Manage content across every channel with a flexible, scalable architecture.",
    icon: "◈",
  },
  {
    id: "crm-integration",
    number: "03",
    title: "CRM Integration",
    description: "Connect customer data, automate workflows and improve business operations.",
    icon: "⌘",
  },
];

const metrics = [
  { value: "99.9%", label: "Platform uptime" },
  { value: "3.2x", label: "Faster workflows" },
  { value: "45+", label: "Integrations" },
  { value: "24/7", label: "System support" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d19] text-white">
      {/* Navigation */}
      <header className="relative z-10 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">N</span>
            <span className="text-xl font-bold tracking-tight">LUVAYEN<span className="text-blue-400">.</span></span>
          </a>

        <div className="hidden items-center gap-9 text-sm text-slate-300 md:flex">
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#platform">Platform</a>
  <a href="#about">About</a>
</div>

<div className="relative md:hidden">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="rounded-lg border border-white/20 px-4 py-2 text-white"
  >
    {menuOpen ? "Close ✕" : "Menu ☰"}
  </button>

  {menuOpen && (
    <div className="absolute right-0 top-12 z-50 flex w-48 flex-col gap-4 rounded-xl border border-white/10 bg-[#101a2d] p-5 text-sm text-white shadow-xl">
      <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
      <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
      <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    </div>
  )}
</div>
<a href="#contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">
            Let's Talk <span className="ml-2">↗</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 top-60 h-80 w-80 rounded-full bg-indigo-600/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-medium tracking-wide text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              NEXT-GENERATION ENTERPRISE TECHNOLOGY
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Build smarter.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                Scale faster.
              </span>
              <br />
              Lead forward.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Transform your business with intelligent digital experiences,
              powerful content management and connected enterprise solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="rounded-lg bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500">
                Explore Solutions ↗
              </a>
              <a href="#platform" className="rounded-lg border border-white/15 px-7 py-4 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300">
                Discover Platform
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#080d19] bg-indigo-500">A</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#080d19] bg-cyan-600">M</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#080d19] bg-violet-600">J</div>
              </div>
              <div>
                <p className="text-sm font-semibold">Built for ambitious businesses</p>
                <p className="mt-1 text-xs text-slate-500">Technology that moves you forward</p>
              </div>
            </div>
          </div>

          {/* Dashboard preview */}
          <div id="platform" className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-blue-600/20 blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#101a2d] p-5 shadow-2xl shadow-black/40 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs text-slate-500">LUVAYEN WORKSPACE</p>
                  <h3 className="mt-1 text-lg font-semibold">Business Overview</h3>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-400">● Live system</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-slate-400">Total activity</p>
                  <p className="mt-3 text-3xl font-bold">24.8K</p>
                  <p className="mt-2 text-xs text-emerald-400">↗ 18.6% this month</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-slate-400">Workflows</p>
                  <p className="mt-3 text-3xl font-bold">1,284</p>
                  <p className="mt-2 text-xs text-blue-400">Active automation</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Platform performance</p>
                  <span className="text-xs text-slate-500">Last 7 days</span>
                </div>
                <div className="mt-7 flex h-36 items-end gap-3">
                  {[38, 55, 45, 75, 60, 88, 68, 96, 72, 85, 65, 100].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-700 to-cyan-300 transition hover:opacity-70" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-[10px] text-slate-500">
                  <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
                <div>
                  <p className="text-sm font-semibold">All systems operational</p>
                  <p className="mt-1 text-xs text-slate-400">Your workspace is running smoothly.</p>
                </div>
                <span className="text-2xl text-emerald-400">✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 lg:px-10">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-3xl font-bold text-white sm:text-4xl">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">What we do</p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Technology built around your business.
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            Powerful tools and connected systems designed to simplify complex
            operations and support sustainable growth.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group rounded-2xl border border-white/10 bg-[#101a2d] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-[#14223b]">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">{service.number}</span>
                <span className="text-3xl text-blue-400">{service.icon}</span>
              </div>
              <h3 className="mt-12 text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">{service.description}</p>
              <a href={`/services?service=${service.id}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition group-hover:gap-4">
                Learn more <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      
{/* About Section */}
<section id="about" className="px-6 py-24 lg:px-10">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        About LUVAYEN
      </p>
      <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
        Technology that moves businesses forward.
      </h2>
      <p className="mt-6 leading-8 text-slate-400">
        LUVAYEN helps businesses build modern digital experiences,
        manage content efficiently and connect customer workflows
        through integrated technology solutions.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-[#101a2d] p-7">
        <h3 className="text-xl font-semibold text-white">Our Mission</h3>
        <p className="mt-4 leading-7 text-slate-400">
          Make business technology simpler, smarter and more accessible.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#101a2d] p-7">
        <h3 className="text-xl font-semibold text-white">Our Vision</h3>
        <p className="mt-4 leading-7 text-slate-400">
          Build connected digital ecosystems that support business growth.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#101a2d] p-7">
        <h3 className="text-xl font-semibold text-white">Our Approach</h3>
        <p className="mt-4 leading-7 text-slate-400">
          Combine thoughtful design, flexible content systems and automation.
        </p>
      </div>
    </div>

  
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 text-sm text-slate-500 sm:flex-row lg:px-10">
          <p>© 2026 LUVAYEN. All rights reserved.</p>
          <p>Enterprise technology. Designed for what's next.</p>
        </div>
        <section id="contact-form" className="border-t border-white/10 bg-[#0b1220] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Get in touch
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Let's build something meaningful.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Tell us about your business needs and the solutions you're looking for.
            </p>
          </div>

          <form
  className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    setLoading(true);
setStatus("");

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (!response.ok) {
  throw new Error(result.message || "Submission failed.");
}

setStatus("success");
form.reset();

    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    }
    finally {
  setLoading(false);
}
  }}
>
  <div>
    <label className="mb-2 block text-sm text-slate-300">Full Name</label>
    <input
      name="fullName"
      type="text"
      required
      placeholder="Your name"
      className="w-full rounded-lg border border-white/10 bg-[#101a2d] px-4 py-3 text-white outline-none focus:border-blue-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm text-slate-300">Email Address</label>
    <input
      name="email"
      type="email"
      required
      placeholder="you@example.com"
      className="w-full rounded-lg border border-white/10 bg-[#101a2d] px-4 py-3 text-white outline-none focus:border-blue-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm text-slate-300">Message</label>
    <textarea
      name="message"
      rows={5}
      required
      placeholder="Tell us about your project..."
      className="w-full rounded-lg border border-white/10 bg-[#101a2d] px-4 py-3 text-white outline-none focus:border-blue-500"
    />
  </div>

  <button
    type="submit"
    disabled={loading}
  className="w-full rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {loading ? "Sending..." : "Send Message ↗"}
  </button>
  {status && (
  <p className={status === "success" ? "text-green-400" : "text-red-400"}>
    {status === "success"
      ? "Message submitted successfully!"
      : status}
  </p>
)}
</form>
        </div>
      </section>
      </footer>
    </main>
  );
}