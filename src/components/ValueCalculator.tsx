'use client';

import { useId, useState } from 'react';

const BUILD = 3000;
const MONTHLY = 1000;

export default function ValueCalculator({ valueLabel }: { valueLabel: string }) {
  const [value, setValue] = useState('1500');
  const inputId = useId();

  const n = Number(value.replace(/[^0-9.]/g, ''));
  const valid = Number.isFinite(n) && n > 0;
  const perMonth = valid ? Math.ceil(MONTHLY / n) : null;
  const firstYear = BUILD + MONTHLY * 12;
  const perYear = valid ? Math.ceil(firstYear / n) : null;

  return (
    <div className="bg-[#0d1527] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <label htmlFor={inputId} className="block text-white font-semibold mb-3">
        On average, what is {valueLabel} worth to you?
      </label>
      <div className="flex items-center gap-2 max-w-xs">
        <span className="text-2xl text-slate-400">£</span>
        <input
          id={inputId}
          inputMode="decimal"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-black/40 border border-white/15 rounded-lg px-4 py-3 text-2xl font-bold text-white focus:outline-none focus:border-blue-500"
        />
      </div>
      <p className="text-xs text-slate-500 mt-2">£1,500 is just a starting figure. Put in your own.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
          <p className="text-sm text-slate-400 mb-1">New customers a month to cover the £1,000 plan</p>
          <p className="text-4xl font-extrabold text-blue-400">{perMonth ?? '–'}</p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <p className="text-sm text-slate-400 mb-1">New customers in year one to cover everything (£{firstYear.toLocaleString('en-GB')})</p>
          <p className="text-4xl font-extrabold text-white">{perYear ?? '–'}</p>
        </div>
      </div>
      <p className="text-sm text-slate-500 mt-6">
        This is arithmetic, not a forecast. It tells you the bar the pages need to clear, so you can judge whether that is realistic for your business.
      </p>
    </div>
  );
}
