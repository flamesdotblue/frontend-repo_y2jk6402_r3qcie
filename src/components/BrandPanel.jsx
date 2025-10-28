import React from 'react';
import { FileText, Star, ShieldCheck, Sparkles } from 'lucide-react';

const bullets = [
  { icon: <Sparkles className="h-4 w-4 text-emerald-500" />, text: 'Fast, minimal, and distraction‑free' },
  { icon: <FileText className="h-4 w-4 text-blue-500" />, text: 'Rich notes with markdown & blocks' },
  { icon: <ShieldCheck className="h-4 w-4 text-indigo-500" />, text: 'Private by default, secure sync' },
  { icon: <Star className="h-4 w-4 text-amber-500" />, text: 'Organize with spaces, tags, and search' },
];

export default function BrandPanel() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 p-10">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">Notable</p>
            <p className="text-xs text-slate-500">Minimal notes for focused minds</p>
          </div>
        </div>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-slate-900">
          Write clearly. Think better.
        </h1>
        <p className="mt-3 max-w-md text-slate-600">
          A clean canvas for your ideas with the calm of a notebook and the power of a database.
        </p>

        <ul className="mt-8 space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
              <span className="inline-flex items-center justify-center rounded-md bg-white p-2 shadow-sm ring-1 ring-slate-200">
                {b.icon}
              </span>
              <span>{b.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Notable, Inc.
        </div>
      </div>
    </div>
  );
}
