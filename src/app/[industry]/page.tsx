import industries from '@/data/industries.json';
import { notFound } from 'next/navigation';
import { ArrowDown, ArrowRight, Zap, Target, LineChart, Code2, Database, Search } from 'lucide-react';
import Image from 'next/image';

import ParticleBackground from '@/components/ParticleBackground';
import { FadeIn } from '@/components/AnimatedHero';

interface PageProps {
  params: {
    industry: string;
  };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    industry: industry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { industry: industrySlug } = await params;
  const industry = industries.find((i) => i.slug === industrySlug);

  if (!industry) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `Programmatic SEO Services for ${industry.name} | Avatar Alchemy`,
    description: `Avatar Alchemy helps ${industry.name} ${industry.benefit} by building automated, high-converting programmatic SEO engines. Stop ${industry.painPoint}.`,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry: industrySlug } = await params;
  const industry = industries.find((i) => i.slug === industrySlug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#070b14]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-6">
              <a href="https://www.avatar-alchemy.com/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
                <span aria-hidden="true">&larr;</span> Back to Main Site
              </a>
              <a href="https://www.avatar-alchemy.com/" className="relative w-48 h-12 hidden sm:block hover:opacity-80 transition-opacity">
                {/* Using the user's logo file */}
                <Image 
                  src="/main-logo.png" 
                  alt="Avatar Alchemy AI" 
                  fill 
                  className="object-contain object-left" 
                />
              </a>
            </div>

            <div className="flex items-center">
              <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden bg-[#070b14]">
        
        {/* Particle Background */}
        <ParticleBackground />

        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Pill */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
              <span className="text-sm font-medium text-blue-400 tracking-wide">Programmatic SEO for {industry.name}</span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Stop Guessing.<br/>
              <span className="text-blue-500">Start Dominating.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
              We help {industry.name} dominate Search Engines and automate lead generation with AI-driven Programmatic SEO.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.7}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                Book Strategy Call
              </a>
              <a href="#what-is-pseo" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-md text-white border border-white/10 hover:bg-white/5 transition-colors">
                <ArrowDown className="mr-2 w-4 h-4" /> Learn More
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3 Pillars Section (Matching the screenshot) */}
      <section className="py-16 border-y border-white/5 relative bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">Get Found</h3>
              <p className="text-sm tracking-widest text-slate-500 uppercase font-semibold">PROGRAMMATIC SEO</p>
            </div>
            <div className="pt-8 md:pt-0">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">Get Seen</h3>
              <p className="text-sm tracking-widest text-slate-500 uppercase font-semibold">DYNAMIC CONTENT</p>
            </div>
            <div className="pt-8 md:pt-0">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">Scale</h3>
              <p className="text-sm tracking-widest text-slate-500 uppercase font-semibold">AUTOMATED LEADS</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Programmatic SEO? (The Explanation) */}
      <section id="what-is-pseo" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What is <span className="text-blue-500">Programmatic SEO?</span>
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Traditional SEO often relies on guessing generic keywords and fighting for highly competitive terms. It is slow, unpredictable, and scales poorly for {industry.name}.
              </p>
              
              {/* Dynamic Tailored Content */}
              <div className="p-6 my-8 border border-blue-500/20 bg-blue-500/5 rounded-xl">
                 <p className="text-blue-400 font-semibold mb-2">Why it works for {industry.name}:</p>
                 <p className="text-lg text-slate-300 leading-relaxed">
                    {industry.tailoredExplanation}
                 </p>
              </div>
              
              <div className="flex items-start gap-4 mb-8 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <LineChart className="w-6 h-6 text-emerald-400" />
                 </div>
                 <div>
                    <h4 className="text-white font-bold text-lg mb-1">{industry.mockCaseStudy.title}</h4>
                    <p className="text-slate-400"><span className="text-emerald-400 font-bold">{industry.mockCaseStudy.metric}</span> {industry.mockCaseStudy.description}</p>
                 </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 mt-1">
                    <Target className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <p className="ml-3 text-slate-300">Capture long-tail, high-intent searches (e.g. "Emergency {industry.name} in London").</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 mt-1">
                    <Zap className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <p className="ml-3 text-slate-300">{industry.industryStats}</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 mt-1">
                    <LineChart className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <p className="ml-3 text-slate-300">Built on Next.js edge infrastructure for lightning-fast indexing.</p>
                </li>
              </ul>
            </div>

            {/* Right Graphic */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-2xl border border-white/5 blur-xl"></div>
              <div className="relative bg-[#0d1527] border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex flex-col space-y-6">
                  
                  {/* The Equation */}
                  <div className="flex items-center justify-between gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex flex-col items-center flex-1">
                      <Database className="w-6 h-6 text-slate-400 mb-2" />
                      <span className="text-xs font-mono text-slate-300 bg-black/50 px-2 py-1 rounded">Data (JSON)</span>
                    </div>
                    <span className="text-blue-500 font-bold">+</span>
                    <div className="flex flex-col items-center flex-1">
                      <Code2 className="w-6 h-6 text-slate-400 mb-2" />
                      <span className="text-xs font-mono text-slate-300 bg-black/50 px-2 py-1 rounded">Next.js Engine</span>
                    </div>
                    <span className="text-blue-500 font-bold">=</span>
                    <div className="flex flex-col items-center flex-1">
                      <Search className="w-6 h-6 text-blue-400 mb-2" />
                      <span className="text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded">10,000 Pages</span>
                    </div>
                  </div>

                  {/* Example Outputs */}
                  <div className="space-y-3">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">Generated Landing Pages:</p>
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5 text-sm font-mono text-slate-300 flex items-center">
                      <span className="text-blue-500 mr-2">/</span> {industry.slug}-in-london
                    </div>
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5 text-sm font-mono text-slate-300 flex items-center">
                      <span className="text-blue-500 mr-2">/</span> {industry.slug}-in-manchester
                    </div>
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5 text-sm font-mono text-slate-300 flex items-center">
                      <span className="text-blue-500 mr-2">/</span> best-{industry.slug}-services
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industry Specific FAQs */}
      <section className="py-24 relative overflow-hidden bg-[#070b14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Common questions from {industry.name}</p>
          </div>
          <div className="space-y-6">
            {industry.faqs.map((faq, idx) => (
              <div key={idx} className="p-8 bg-[#0d1527] border border-white/5 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-start">
                  <span className="text-blue-500 mr-3">Q.</span> {faq.question}
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed flex items-start">
                  <span className="text-emerald-500 mr-3 font-bold">A.</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Final CTA */}
      <section className="py-24 bg-[#0a0f1c] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to scale your lead generation?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Stop {industry.painPoint}. We build the engine, host the infrastructure, and monitor your growth.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/5 p-6 rounded-2xl border border-white/10 mb-10">
            <div className="text-left">
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Architecture Build</p>
              <p className="text-3xl font-bold text-white">£3,000</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
            <div className="w-full h-px bg-white/10 sm:hidden"></div>
            <div className="text-left">
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Monthly Expansion & Hosting</p>
              <p className="text-3xl font-bold text-blue-500">£1,000<span className="text-lg text-slate-500 font-normal">/mo</span></p>
            </div>
          </div>

          <div>
            <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transform hover:-translate-y-1">
              Book Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070b14] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="relative w-32 h-8 mb-6 opacity-50 grayscale">
             <Image src="/main-logo.png" alt="Avatar Alchemy" fill className="object-contain" />
          </div>
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Avatar Alchemy AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
