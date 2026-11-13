"use client";
// SHARED between avatar-alchemy.com and pseo.avatar-alchemy.com. Keep identical in both repos.
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CTA_HREF, CTA_LABEL, TRADING_NAME, mainHref } from "./site-links";

export function SiteHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-[#070b14]/90 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 gap-4">
                    <a href={mainHref("/")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/avatar-alchemy-icon.png" alt="" width={40} height={40} className="w-10 h-10" />
                        <span className="text-lg font-bold text-white tracking-tight whitespace-nowrap">{TRADING_NAME}</span>
                    </a>

                    <nav aria-label="Main" className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
                        {NAV_LINKS.map((l) => (
                            <a key={l.label} href={l.href} className="hover:text-white transition-colors">
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={CTA_HREF}
                            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] whitespace-nowrap"
                        >
                            {CTA_LABEL}
                        </a>
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="lg:hidden p-2 text-slate-300 hover:text-white"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                        >
                            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <nav aria-label="Main" className="lg:hidden border-t border-white/5 bg-[#070b14] px-4 sm:px-6 py-6">
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium text-slate-200 hover:text-white">
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={CTA_HREF}
                        className="mt-5 flex items-center justify-center px-5 py-3.5 text-base font-bold rounded-full text-white bg-blue-500 hover:bg-blue-600"
                    >
                        {CTA_LABEL}
                    </a>
                </nav>
            )}
        </header>
    );
}
