import React, { useState } from 'react';
import BrandPanel from './components/BrandPanel.jsx';
import AuthTabs from './components/AuthTabs.jsx';
import SignInForm from './components/SignInForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import { FileText } from 'lucide-react';

export default function App() {
  const [mode, setMode] = useState('signin');

  const handleSignIn = (data) => {
    console.log('Sign in', data);
    // Hook up to backend later
  };

  const handleSignUp = (data) => {
    console.log('Sign up', data);
    // Hook up to backend later
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
        <div className="mb-10 flex items-center gap-3 lg:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm">
            <FileText className="h-4 w-4" />
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight">Notable</p>
            <p className="text-xs text-slate-500">Minimal notes for focused minds</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <BrandPanel />

          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                    {mode === 'signin' ? 'Welcome back' : 'Create your workspace'}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {mode === 'signin'
                      ? 'Sign in to continue where you left off.'
                      : 'Start capturing ideas in seconds.'}
                  </p>
                </div>
                <AuthTabs mode={mode} onChange={setMode} />
              </div>

              {mode === 'signin' ? (
                <SignInForm onSubmit={handleSignIn} />
              ) : (
                <SignUpForm onSubmit={handleSignUp} />
              )}

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-xs text-slate-500">or</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-4 w-4" />
                    Continue with Google
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    <img src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHaXRIdWJ8ZW58MHwwfHx8MTc2MTYzNzQyM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="GitHub" className="h-4 w-4" />
                    Continue with GitHub
                  </button>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-slate-500">
                By continuing, you agree to our Terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
