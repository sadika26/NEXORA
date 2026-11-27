
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[#080d19] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider"
        >
          LUVAYEN<span className="text-cyan-400">.</span>
        </Link>

        <Link
          href="/"
          className="text-sm text-gray-300 transition hover:text-cyan-400"
        >
          Back to Home →
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:px-16 md:py-32">
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Customer Onboarding
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-7xl">
            Your journey to
            <span className="block text-cyan-400">
              smarter business
            </span>
            starts here.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Welcome to LUVAYEN. Discover a smarter way to manage
            your digital experience, connect your business tools,
            and build a foundation for growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact-form"
              className="rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-[#080d19] transition hover:bg-cyan-300"
            >
              Get Started →
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/15 px-7 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-white/10 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Getting Started
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              A simple path to
              <span className="text-cyan-400"> success.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Discover",
                description:
                  "Understand your business goals and identify the right digital solutions.",
              },
              {
                number: "02",
                title: "Connect",
                description:
                  "Bring your website, content, and customer workflows together.",
              },
              {
                number: "03",
                title: "Grow",
                description:
                  "Move forward with a smarter, more connected digital experience.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/40"
              >
                <p className="mb-6 text-sm font-bold text-cyan-400">
                  {step.number}
                </p>

                <h3 className="mb-4 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] px-8 py-16 text-center md:px-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to begin?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Let&apos;s discuss your goals and find the right
            solution for your business.
          </p>

          <Link
            href="/#contact-form"
            className="mt-8 inline-block rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-[#080d19] transition hover:bg-cyan-300"
          >
            Contact LUVAYEN →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LUVAYEN. All rights reserved.
      </footer>
    </main>
  );
}