
"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const services = [
  {
    id: "digital-experience",
    title: "Digital Experience",
    description:
      "We create modern, responsive and engaging digital experiences that help businesses build a strong online presence.",
    features: [
      "Responsive website development",
      "Modern UI/UX design",
      "Performance optimization",
      "User-focused digital solutions",
    ],
  },
  {
    id: "headless-cms",
    title: "Headless CMS",
    description:
      "Manage your digital content efficiently with a flexible content management system built for modern businesses.",
    features: [
      "Centralized content management",
      "Create and edit blog articles",
      "Media and image management",
      "Flexible content delivery",
    ],
  },
  {
    id: "crm-integration",
    title: "CRM Integration",
    description:
      "Organize customer enquiries, manage leads and improve business workflows through connected CRM solutions.",
    features: [
      "Customer enquiry management",
      "Lead tracking",
      "Contact organization",
      "Workflow integration",
    ],
  },
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("service");

  const service = services.find((item) => item.id === selectedId);

  return (
    <main className="min-h-screen bg-[#080d19] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          LUVAYEN Services
        </p>

        {service ? (
          <>
            <h1 className="mt-5 text-4xl font-bold">{service.title}</h1>
            <p className="mt-6 max-w-2xl leading-8 text-slate-400">
              {service.description}
            </p>

            <h2 className="mt-12 text-xl font-semibold">What we offer</h2>

            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="text-slate-300">
                  <span className="mr-3 text-blue-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/#contact-form"
              className="mt-12 inline-flex rounded-full bg-blue-600 px-7 py-3 font-semibold hover:bg-blue-500"
            >
              Contact Us →
            </Link>
          </>
        ) : (
          <>
            <h1 className="mt-5 text-4xl font-bold">Explore Our Services</h1>
            <p className="mt-5 text-slate-400">
              Discover solutions designed to help your business grow.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {services.map((item) => (
                <Link
                  key={item.id}
                  href={`/services?service=${item.id}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/60"
                >
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-blue-400">
                    Explore service →
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#080d19] px-6 py-24 text-white">
          Loading services...
        </main>
      }
    >
      <ServicesContent />
    </Suspense>
  );
}