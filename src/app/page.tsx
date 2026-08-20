import Link from 'next/link';
import industries from '@/data/industries.json';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#070b14]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="https://www.avatar-alchemy.com/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative w-48 h-12">
                <Image 
                  src="/main-logo.png" 
                  alt="Avatar Alchemy AI" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <ParticleBackground />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Industries We <span className="text-blue-500">Transform</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
            We build high-converting programmatic SEO engines for the most competitive industries on the web. Select your industry below to learn more.
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-24 relative bg-[#0a0f1c] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link 
                key={industry.slug} 
                href={`/${industry.slug}`}
                className="group p-6 bg-[#0d1527] border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{industry.name}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Stop {industry.painPoint}.
                  </p>
                </div>
                <div className="mt-8 flex items-center text-sm font-bold text-blue-500 group-hover:text-blue-400">
                  View Strategy <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#070b14] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Avatar Alchemy AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
