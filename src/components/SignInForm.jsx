import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

export default function SignInForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="text-xs text-slate-500 hover:text-slate-700"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
          Remember me
        </label>
        <button type="button" className="text-sm text-slate-600 hover:text-slate-900">
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
      >
        Sign in
      </button>
    </form>
  );
}
