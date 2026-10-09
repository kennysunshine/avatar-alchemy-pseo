import industries from '@/data/industries.json';
import {
  sharedFaqs,
  processSteps,
  qualitySafeguards,
  comparisonRows,
  BOOKING_URL,
  SITE_URL,
  PRICING,
} from '@/data/shared-content';
import { notFound } from 'next/navigation';
import { ArrowDown, Code2, Database, Map, LineChart, ShieldCheck, Check } from 'lucide-react';

import ParticleBackground from '@/components/ParticleBackground';
import { FadeIn } from '@/components/AnimatedHero';
import ValueCalculator from '@/components/ValueCalculator';
import {
  SiteNav,
  SiteFooter,
  SectionHeading,
  CustomerJourney,
  SamplePagePreview,
  PageMatrix,
  Deliverables,
  WontPromise,
  ExampleBuilds,
  AboutKenny,
  PricingBlock,
} from '@/components/sections';

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { industry: industrySlug } = await params;
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) return { title: 'Not Found' };

  const title = `Programmatic SEO for ${industry.name} | Avatar Alchemy`;
  const description = `Get found for "${industry.exampleQuery}" and every search like it. I build a page for each service and area you cover, so customers find you instead of a competitor. Fixed £3,000 build.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${industry.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${industry.slug}`,
      type: 'website',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Avatar Alchemy programmatic SEO' }],
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry: industrySlug } = await params;
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) notFound();

  const allFaqs = [...industry.faqs, ...sharedFaqs(industry.name)];
  const steps = processSteps(industry.name);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: allFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'Service',
        name: `Programmatic SEO for ${industry.name}`,
        serviceType: 'Programmatic SEO',
        url: `${SITE_URL}/${industry.slug}`,
        provider: {
          '@type': 'Organization',
          name: 'Avatar Alchemy AI',
          url: 'https://www.avatar-alchemy.com/',
        },
        offers: [
          { '@type': 'Offer', name: 'Build', price: String(PRICING.build), priceCurrency: 'GBP' },
          { '@type': 'Offer', name: 'Monthly hosting and expansion', price: String(PRICING.monthly), priceCurrency: 'GBP' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav showBack />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-[#070b14]">
        <ParticleBackground />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
              <span className="text-sm font-medium text-blue-400 tracking-wide">Programmatic SEO for {industry.name}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-lg text-slate-400 mb-3">Right now, someone is searching for</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              &ldquo;{industry.exampleQuery}&rdquo;
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
              Is it your business they find? I build a page for every service and area you cover, so they land on you, not a competitor or a directory.
            </p>
          </FadeIn>
          <FadeIn delay={0.55}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                Book a free call
              </a>
              <a href="#how-it-helps" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-md text-white border border-white/10 hover:bg-white/5 transition-colors">
                <ArrowDown className="mr-2 w-4 h-4" /> See how it works for you
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Customer journey */}
      <section id="how-it-helps" className="py-20 sm:py-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What it means for you"
            title={<>How a search turns into <span className="text-blue-500">a customer</span></>}
            intro={industry.tailoredExplanation}
          />
          <CustomerJourney
            searcher={industry.searcher}
            query={industry.exampleQuery}
            pageShows={industry.pageShows}
            action={industry.action}
          />
        </div>
      </section>

      {/* Sample page + matrix */}
      <section id="example" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What the pages look like"
            title={<>One page for every <span className="text-blue-500">search that matters</span></>}
            intro="Here's what one of your pages could look like, and how a handful of services and areas multiplies into hundreds of them."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <SamplePagePreview {...industry.samplePage} />
            <PageMatrix {...industry.matrix} />
          </div>
        </div>
      </section>

      {/* Value calculator */}
      <section id="value" className="py-20 sm:py-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Is it worth it?"
            title={<>Work out your <span className="text-blue-500">break-even</span></>}
            intro="Put in what one new customer is worth to you and see how many the pages would need to bring in to pay for themselves."
          />
          <ValueCalculator valueLabel={industry.valueLabel} />
        </div>
      </section>

      {/* What you get */}
      <section id="what-you-get" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What you get" title={<>Everything included in the <span className="text-blue-500">build and monthly plan</span></>} />
          <Deliverables />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 sm:py-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The process"
            title={<>How the build works, <span className="text-blue-500">step by step</span></>}
            intro="You approve the plan and the templates before anything goes live."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, idx) => {
              const StepIcon = [Map, Database, Code2, LineChart][idx];
              return (
                <div key={step.title} className="p-7 sm:p-8 bg-[#0d1527] border border-white/5 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <StepIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-blue-500 mb-1">STEP {idx + 1}</p>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Built so far"
            title={<>Builds for my own ventures <span className="text-blue-500">and partners</span></>}
            intro="Real sites, real page counts. Results from paying clients will go here as they come in."
          />
          <ExampleBuilds />
        </div>
      </section>

      {/* Quality objection */}
      <section id="quality" className="py-20 sm:py-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              &ldquo;Won&apos;t Google penalise <span className="text-blue-500">pages like this?</span>&rdquo;
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Fair question. Google&apos;s policy targets pages made for search engines instead of people: thousands of near-identical pages where only the town name changes. That&apos;s exactly what I don&apos;t build.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {qualitySafeguards.map((item) => (
              <li key={item} className="flex items-start p-5 bg-[#0d1527] border border-white/5 rounded-xl">
                <Check className="flex-shrink-0 w-5 h-5 text-emerald-400 mt-0.5" />
                <p className="ml-3 text-slate-300 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <p className="text-center text-slate-400">
            Big sites like Zapier, Wise and G2 are well-known examples of this approach done well. The risk isn&apos;t the method, it&apos;s thin pages.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={<>Compared with <span className="text-blue-500">regular SEO and paid ads</span></>} />
          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
            <table className="w-full text-left border-collapse bg-[#0d1527] min-w-[560px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 sm:p-5"></th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-blue-400 uppercase tracking-wider bg-blue-500/5">These pages</th>
                  <th className="p-4 sm:p-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">Regular SEO</th>
                  <th className="p-4 sm:p-5 text-sm font-semibold text-slate-400 uppercase tracking-wider">Paid ads</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-white/5 last:border-b-0">
                    <td className="p-4 sm:p-5 text-slate-300 font-medium">{row.label}</td>
                    <td className={`p-4 sm:p-5 bg-blue-500/5 ${row.pseoWins ? 'text-emerald-400 font-semibold' : 'text-slate-300'}`}>{row.pseo}</td>
                    <td className="p-4 sm:p-5 text-slate-400">{row.traditional}</td>
                    <td className="p-4 sm:p-5 text-slate-400">{row.paidAds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-400 mt-8 text-lg">
            Paid ads rent attention. <span className="text-white font-semibold">These pages are an asset you own.</span>
          </p>
        </div>
      </section>

      {/* What I won't promise */}
      <section id="honest" className="py-20 sm:py-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Straight answers" title={<>What I <span className="text-blue-500">won&apos;t</span> promise</>} />
          <WontPromise />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <AboutKenny />
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 sm:py-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Questions people ask" intro={`From ${industry.name.toLowerCase()} and everyone else.`} />
          <div className="space-y-4">
            {allFaqs.map((faq) => (
              <details key={faq.question} className="group p-6 sm:p-7 bg-[#0d1527] border border-white/5 rounded-2xl">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-lg font-bold text-white">
                  {faq.question}
                  <span className="text-blue-400 text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="py-20 sm:py-24">
        <PricingBlock painPoint={industry.painPoint} />
      </section>

      <SiteFooter />
    </div>
  );
}
