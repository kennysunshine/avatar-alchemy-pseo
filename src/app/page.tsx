import Link from 'next/link';
import industries from '@/data/industries.json';
import { ArrowRight, ArrowDown } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import { FadeIn } from '@/components/AnimatedHero';
import type { Metadata } from 'next';
import { BOOKING_URL, SITE_URL } from '@/data/shared-content';
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

export const metadata: Metadata = {
  title: 'Programmatic SEO Services | Avatar Alchemy',
  description:
    'Get found for every service and every area you cover. I build hundreds of useful, specific pages for your business so customers find you instead of a competitor. Fixed £3,000 build, £1,000/month.',
  alternates: { canonical: SITE_URL },
};

// The homepage uses the trades example because it is the easiest to picture.
const demo = industries.find((i) => i.slug === 'plumbing')!;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white">
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <ParticleBackground />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-6">Programmatic SEO</p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Your customers search for exactly what you do, <span className="text-blue-500">where they are.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
              I build a useful page for each of those searches, every service in every area you cover, so they find you instead of a competitor or a directory.
            </p>
          </FadeIn>
          <FadeIn delay={0.55}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                Book a free call
              </a>
              <a href="#industries" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-md text-white border border-white/10 hover:bg-white/5 transition-colors">
                <ArrowDown className="mr-2 w-4 h-4" /> Find your industry
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Plain-English explainer */}
      <section id="what-it-is" className="py-20 sm:py-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What it is, in plain English"
            title={<>Most websites have one page per service. <span className="text-blue-500">Customers search for far more.</span></>}
            intro="A plumber's site usually has one 'burst pipes' page and one town on it. But people search for the problem and their own area, hundreds of different ways. Programmatic SEO means building a genuinely useful page for each of those searches, from real data, so you show up for all of them."
          />
          <CustomerJourney searcher={demo.searcher} query={demo.exampleQuery} pageShows={demo.pageShows} action={demo.action} />
        </div>
      </section>

      {/* Example page + matrix */}
      <section id="example" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you'd get"
            title={<>A few services and areas <span className="text-blue-500">become hundreds of pages</span></>}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <SamplePagePreview {...demo.samplePage} />
            <PageMatrix {...demo.matrix} />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 sm:py-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title={<>See how it works <span className="text-blue-500">for your business</span></>}
            intro="Each page walks through real searches in your industry, an example page and a break-even calculator."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/${industry.slug}`}
                className="group p-6 bg-[#0d1527] border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{industry.name}</h3>
                  <p className="text-sm text-slate-500 mb-3 font-mono">&ldquo;{industry.exampleQuery}&rdquo;</p>
                  <p className="text-slate-400 leading-relaxed">Stop {industry.painPoint}.</p>
                </div>
                <div className="mt-6 flex items-center text-sm font-bold text-blue-500 group-hover:text-blue-400">
                  See how it works <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-8">
            Not listed? If your customers search for a service plus a place, it probably works for you too. <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">Ask me.</a>
          </p>
        </div>
      </section>

      {/* What you get */}
      <section id="what-you-get" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What you get" title={<>Everything included in the <span className="text-blue-500">build and monthly plan</span></>} />
          <Deliverables />
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="py-20 sm:py-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Built so far"
            title={<>Builds for my own ventures <span className="text-blue-500">and partners</span></>}
            intro="Real sites, real page counts. Results from paying clients will go here as they come in."
          />
          <ExampleBuilds />
        </div>
      </section>

      {/* Won't promise */}
      <section id="honest" className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Straight answers" title={<>What I <span className="text-blue-500">won&apos;t</span> promise</>} />
          <WontPromise />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] border-y border-white/5">
        <AboutKenny />
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-24">
        <PricingBlock />
      </section>

      <SiteFooter />
    </div>
  );
}
