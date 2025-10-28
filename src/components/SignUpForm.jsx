import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

export default function SignUpForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accept, setAccept] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accept) return;
    onSubmit?.({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <div className="mt-2 flex items-center rounded-lg border border-slate-200 bg-white px-3 focus-within:ring-2 focus-within:ring-slate-900/5">
          <User className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ada Lovelace"
            className="w-full border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <div className="mt-2 flex items-center rounded-lg border border-slate-200 bg-white px-3 focus-within:ring-2 focus-within:ring-slate-900/5">
          <Mail className="h-4 w-4 text-slate-400" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Password</label>
        <div className="mt-2 flex items-center rounded-lg border border-slate-200 bg-white px-3 focus-within:ring-2 focus-within:ring-slate-900/5">
          <Lock className="h-4 w-4 text-slate-400" />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input
          type="checkbox"
          checked={accept}
          onChange={(e) => setAccept(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
        />
        <span>
          I agree to the Terms and Privacy Policy
        </span>
      </label>

      <button
        type="submit"
        disabled={!accept}
        className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Create account
      </button>
    </form>
  );
}
