import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Phone, Search, FileText, X, MapPin } from 'lucide-react';
import {
  BOOKING_URL,
  PRICING,
  deliverables,
  wontPromise,
  exampleBuilds,
  CONTACT_EMAIL,
} from '@/data/shared-content';

export function SiteNav({ showBack = false }: { showBack?: boolean }) {
  return (
    <nav className="fixed w-full z-50 bg-[#070b14]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          <div className="flex items-center gap-6 min-w-0">
            {showBack && (
              <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium whitespace-nowrap">
                <span aria-hidden="true">&larr;</span> All industries
              </Link>
            )}
            <a href="https://www.avatar-alchemy.com/" className={`relative w-40 sm:w-48 h-12 hover:opacity-80 transition-opacity ${showBack ? 'hidden sm:block' : ''}`}>
              <Image src="/main-logo.png" alt="Avatar Alchemy AI" fill className="object-contain object-left" />
            </a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 text-sm font-bold rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] whitespace-nowrap"
          >
            Book a free call
          </a>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#070b14] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-3">
        <p className="text-sm text-slate-400">
          Trading as Avatar Alchemy AI · Glastonbury, Somerset, UK
        </p>
        <p className="text-sm">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">{CONTACT_EMAIL}</a>
          <span className="text-slate-600 mx-2">·</span>
          <Link href="/privacy" className="text-slate-400 hover:text-white">Privacy</Link>
        </p>
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Avatar Alchemy AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow?: string; title: React.ReactNode; intro?: React.ReactNode }) {
  return (
    <div className="text-center mb-12 sm:mb-14">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {intro && <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{intro}</p>}
    </div>
  );
}

// The customer's-customer journey: search → page → action.
export function CustomerJourney({
  searcher,
  query,
  pageShows,
  action,
}: {
  searcher: string;
  query: string;
  pageShows: string;
  action: string;
}) {
  const steps = [
    { icon: Search, label: 'They search', body: <>{searcher} types <span className="text-white font-semibold">&ldquo;{query}&rdquo;</span> into Google.</> },
    { icon: FileText, label: 'They find your page', body: <>Instead of a directory or a competitor, they land on {pageShows}.</> },
    { icon: Phone, label: 'They contact you', body: <>Because the page answers exactly what they asked, they {action}.</> },
  ];
  return (
    <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {steps.map((s, i) => (
        <li key={s.label} className="relative p-6 sm:p-7 bg-[#0d1527] border border-white/5 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <s.icon className="w-5 h-5 text-blue-400" />
            </span>
            <span className="text-xs font-mono text-blue-400">{i + 1}. {s.label.toUpperCase()}</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

// A mock rendering of one generated page, clearly labelled as illustrative.
export function SamplePagePreview({
  url,
  title,
  intro,
  points,
  cta,
}: {
  url: string;
  title: string;
  intro: string;
  points: string[];
  cta: string;
}) {
  return (
    <figure className="relative">
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
          <span className="w-3 h-3 rounded-full bg-slate-300" />
          <span className="w-3 h-3 rounded-full bg-slate-300" />
          <span className="w-3 h-3 rounded-full bg-slate-300" />
          <span className="ml-3 flex-1 min-w-0 truncate text-xs font-mono text-slate-500 bg-white rounded px-3 py-1 border border-slate-200">
            yourbusiness.co.uk{url}
          </span>
        </div>
        <div className="p-6 sm:p-8 text-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Your business name</p>
          <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{title}</h3>
          <p className="text-slate-600 mb-5 leading-relaxed">{intro}</p>
          <ul className="space-y-2 mb-6">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-slate-700">
                <Check className="w-4 h-4 mt-1 flex-shrink-0 text-emerald-600" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-sm">
            {cta}
          </span>
        </div>
      </div>
      <figcaption className="text-xs text-slate-500 mt-3 text-center">
        Illustrative mock-up of one page. Real pages use your branding, your details and your approved wording.
      </figcaption>
    </figure>
  );
}

// Shows how services × areas multiply into a page set. Counts are illustrative.
export function PageMatrix({
  rowLabel,
  rows,
  rowCount,
  colLabel,
  cols,
  colCount,
}: {
  rowLabel: string;
  rows: string[];
  rowCount: number;
  colLabel: string;
  cols: string[];
  colCount: number;
}) {
  return (
    <div className="bg-[#0d1527] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="overflow-x-auto -mx-2 px-2">
        <table className="w-full text-sm border-collapse min-w-[420px]">
          <thead>
            <tr>
              <th className="p-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"></th>
              {cols.map((c) => (
                <th key={c} className="p-2 text-left text-xs font-semibold text-slate-400 whitespace-nowrap">
                  <MapPin className="inline w-3 h-3 mr-1 text-blue-400" />
                  {c}
                </th>
              ))}
              <th className="p-2 text-left text-xs text-slate-500">…</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r} className="border-t border-white/5">
                <td className="p-2 text-slate-300 font-medium whitespace-nowrap">{r}</td>
                {cols.map((c) => (
                  <td key={c} className="p-2">
                    <span className="block w-full h-6 rounded bg-blue-500/20 border border-blue-500/30" title={`${r}, ${c}`} />
                  </td>
                ))}
                <td className="p-2 text-slate-600">…</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-slate-300 leading-relaxed">
        Each square is a page. For example, <span className="text-white font-semibold">{rowCount} {rowLabel}</span> ×{' '}
        <span className="text-white font-semibold">{colCount} {colLabel}</span> ={' '}
        <span className="text-blue-400 font-bold">{(rowCount * colCount).toLocaleString('en-GB')} pages</span>, each one built for a search a real customer makes.
      </p>
      <p className="text-xs text-slate-500 mt-2">Example numbers. Your page count comes from your actual services and areas.</p>
    </div>
  );
}

export function Deliverables() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {deliverables.map((d) => (
        <li key={d.title} className="p-6 bg-[#0d1527] border border-white/5 rounded-2xl">
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400" />
            <div>
              <h3 className="text-white font-semibold mb-1">{d.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{d.detail}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function WontPromise() {
  return (
    <ul className="space-y-3 max-w-3xl mx-auto">
      {wontPromise.map((w) => (
        <li key={w} className="flex items-start gap-3 p-5 bg-[#0d1527] border border-white/5 rounded-xl">
          <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-400" />
          <p className="text-slate-300 leading-relaxed">{w}</p>
        </li>
      ))}
    </ul>
  );
}

export function ExampleBuilds() {
  const items = exampleBuilds.filter((b) => b.show);
  return (
    <div className={`grid grid-cols-1 ${items.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'} gap-6`}>
      {items.map((c) => (
        <div key={c.title} className="relative p-6 sm:p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
          <span className="absolute top-4 right-5 text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">{c.relationship}</span>
          <h3 className="text-white font-bold text-lg mb-2 pr-28">{c.title}</h3>
          <p className="text-slate-400 leading-relaxed">
            <span className="text-emerald-400 font-bold text-2xl mr-1">{c.metric}</span> {c.description}
          </p>
          {c.url && (
            <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
              See the live site <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export function AboutKenny() {
  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-10 bg-[#0d1527] border border-white/10 rounded-2xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Who you&apos;d be working with</p>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">I&apos;m Kenny Swann.</h2>
      <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
        <p>
          I run Avatar Alchemy from Glastonbury in Somerset. It&apos;s a one-person business, and when you book a call you&apos;re talking to the person who&apos;ll do the work.
        </p>
        <p>
          I build these page systems with AI tools, and I check the data and every claim on the pages myself, because one wrong price or made-up fact on a page costs you more than it gains. The first system I built was for my own tutoring platform, LumenForge, which now runs over 1,100 pages across five sites.
        </p>
      </div>
    </div>
  );
}

export function PricingBlock({ painPoint }: { painPoint?: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple, fixed pricing</h2>
      {painPoint && (
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Stop {painPoint}. I build the pages, host them and keep improving them.
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6 text-left">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Build</p>
          <p className="text-4xl font-bold text-white">£{PRICING.build.toLocaleString('en-GB')}</p>
          <p className="text-sm text-slate-400 mt-2">One-off. Search map, data, templates and the launch pages.</p>
        </div>
        <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20">
          <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Monthly</p>
          <p className="text-4xl font-bold text-blue-400">
            £{PRICING.monthly.toLocaleString('en-GB')}<span className="text-lg text-slate-500 font-normal">/mo</span>
          </p>
          <p className="text-sm text-slate-400 mt-2">Hosting, monitoring, new pages and a monthly report.</p>
        </div>
      </div>
      <p className="text-sm text-slate-500 mb-10">
        No long contract. The monthly plan is rolling: stop any time and keep every page built so far.
      </p>
      <OpportunityCta />
    </div>
  );
}

export function OpportunityCta({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? '' : 'max-w-2xl mx-auto'}>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 sm:px-10 py-4 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
      >
        Book a free 30-minute call <ArrowRight className="ml-2 w-5 h-5" />
      </a>
      {!compact && (
        <p className="text-slate-400 mt-4 leading-relaxed">
          I&apos;ll bring a rough map of what people search for in your area for your services, so you can see what&apos;s there before you spend anything. No obligation.
        </p>
      )}
    </div>
  );
}
