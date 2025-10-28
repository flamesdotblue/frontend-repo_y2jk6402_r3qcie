import React from 'react';

export default function AuthTabs({ mode, onChange }) {
  return (
    <div className="grid grid-cols-2 rounded-lg bg-slate-100 p-1 text-sm">
      <button
        type="button"
        onClick={() => onChange('signin')}
        className={`rounded-md px-3 py-2 transition ${
          mode === 'signin' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'
        }`}
        aria-pressed={mode === 'signin'}
      >
        Sign in
      </button>
      <button
        type="button"
        onClick={() => onChange('signup')}
        className={`rounded-md px-3 py-2 transition ${
          mode === 'signup' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'
        }`}
        aria-pressed={mode === 'signup'}
      >
        Create account
      </button>
    </div>
  );
}
