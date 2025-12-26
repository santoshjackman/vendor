/*
"use client";

import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import AuthCard from "@/components/auth/AuthCard";
import { signIn } from "next-auth/react";

export default function SignupPage() {
    return (
        <AuthShell title="Create your workspace" subtitle="Tasks, follow-ups, vendors, billing — one system.">
            <AuthCard>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/onboarding" })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                    Continue with Google
                </button>

                <div className="my-6 flex items-center gap-3">
                    <div className="flex-1 h-px bg-slate-200" />
                    <div className="text-xs uppercase tracking-wide text-slate-500">or</div>
                    <div className="flex-1 h-px bg-slate-200" />
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-slate-700">Work email</label>
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-200"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700">Password</label>
                        <input
                            type="password"
                            placeholder="Minimum 8 characters"
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-200"
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Create workspace
                    </button>
                    <p className="text-xs text-slate-500">
                        No credit card. Setup takes under 60 seconds. We only request what’s needed. You control access.
                    </p>
                    <div className="text-sm text-slate-600">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-slate-900">
                            Sign in
                        </Link>
                    </div>
                </form>
            </AuthCard>
        </AuthShell>
    );
}
*/
// frontend/src/app/signup/page.tsx

/*

"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { CheckCircle, Eye, EyeOff, ArrowRight, Shield, Zap, Users, Clock } from "lucide-react";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);

        // Simple password strength calculation
        let strength = 0;
        if (value.length >= 8) strength += 25;
        if (/[A-Z]/.test(value)) strength += 25;
        if (/[0-9]/.test(value)) strength += 25;
        if (/[^A-Za-z0-9]/.test(value)) strength += 25;
        setPasswordStrength(strength);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        // Redirect to onboarding
        window.location.href = "/onboarding";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
            {/!* Background elements *!/}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/!* Left Column - Features & Benefits *!/}
                <div className="space-y-8">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-2xl">VF</span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">VendorFlow</h1>
                            <p className="text-blue-600 font-medium">SMB Sales Automation</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                            Start Automating Vendor
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}Follow-ups Today
              </span>
                        </h2>

                        <p className="text-xl text-gray-600">
                            Everything you need to manage vendor relationships, automate follow-ups, and scale your SMB sales operations.
                        </p>
                    </div>

                    {/!* Features List *!/}
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Zap className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Automate Follow-ups</h3>
                                <p className="text-gray-600">Set up sequences that run automatically based on vendor behavior</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Centralize Communications</h3>
                                <p className="text-gray-600">Email, SMS, and calls all in one dashboard</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Save 15+ Hours Weekly</h3>
                                <p className="text-gray-600">Average time saved by our SMB customers</p>
                            </div>
                        </div>
                    </div>

                    {/!* Stats *!/}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                        {[
                            { value: "250+", label: "SMBs Using", color: "text-blue-600" },
                            { value: "94%", label: "Success Rate", color: "text-green-600" },
                            { value: "15hrs", label: "Time Saved/Week", color: "text-purple-600" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-3 bg-white/50 rounded-xl">
                                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/!* Right Column - Signup Form *!/}
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Create Your Workspace
                        </h2>
                        <p className="text-gray-600">
                            Tasks, follow-ups, vendors, billing — all in one system.
                        </p>
                    </div>

                    {/!* Google Signup Button *!/}
                    <button
                        onClick={() => signIn("google", { callbackUrl: "/onboarding" })}
                        className="w-full rounded-xl border border-gray-200 px-6 py-4 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 mb-8 group"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span>Continue with Google</span>
                    </button>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or sign up with email</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center">
                                <span className="mr-2">🏢</span>
                                Work email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700 flex items-center">
                                    <span className="mr-2">🔒</span>
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                                >
                                    {showPassword ? (
                                        <>
                                            <EyeOff className="w-4 h-4 mr-1" />
                                            Hide
                                        </>
                                    ) : (
                                        <>
                                            <Eye className="w-4 h-4 mr-1" />
                                            Show
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Minimum 8 characters"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300 pr-10"
                                    required
                                />
                            </div>

                        </div>

                        {/!* Password Requirements *!/}
                        <div className="space-y-3">
                            {/!* Progress bar *!/}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-600">Password strength</span>
                                    <span className={`font-medium ${
                                        password.length === 0 ? 'text-gray-400' :
                                            password.length < 8 ? 'text-red-500' :
                                                !/[A-Z]/.test(password) ? 'text-yellow-500' :
                                                    !/[0-9]/.test(password) ? 'text-blue-500' :
                                                        !/[^A-Za-z0-9]/.test(password) ? 'text-purple-500' :
                                                            'text-green-500'
                                    }`}>
        {password.length === 0 ? "Enter password" :
            password.length < 8 ? "Too short" :
                !/[A-Z]/.test(password) ? "Add uppercase" :
                    !/[0-9]/.test(password) ? "Add number" :
                        !/[^A-Za-z0-9]/.test(password) ? "Add special" :
                            "Strong ✓"}
      </span>
                                </div>

                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-300 ${
                                            password.length < 8 ? 'bg-red-500 w-1/4' :
                                                !/[A-Z]/.test(password) ? 'bg-yellow-500 w-2/4' :
                                                    !/[0-9]/.test(password) ? 'bg-blue-500 w-3/4' :
                                                        !/[^A-Za-z0-9]/.test(password) ? 'bg-purple-500 w-5/6' :
                                                            'bg-green-500 w-full'
                                        }`}
                                    />
                                </div>
                            </div>

                            {/!* Compact requirements *!/}
                            {password && (
                                <div className="grid grid-cols-2 gap-1.5 text-xs text-gray-500">
                                    {[
                                        { label: "✓ 8+ characters", check: password.length >= 8 },
                                        { label: "✓ Uppercase letter", check: /[A-Z]/.test(password) },
                                        { label: "✓ Number", check: /[0-9]/.test(password) },
                                        { label: "✓ Special character", check: /[^A-Za-z0-9]/.test(password) }
                                    ].map((req, i) => (
                                        <div key={i} className={`${req.check ? 'text-green-600' : 'text-gray-400'}`}>
                                            {req.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-sm font-semibold text-white transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Creating workspace...</span>
                                </>
                            ) : (
                                <>
                                    <span>Create Workspace</span>
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>

                        <div className="text-center">
                            <p className="text-xs text-gray-500">
                <span className="flex items-center justify-center mb-2">
                  <Shield className="w-4 h-4 mr-1" />
                  No credit card required
                </span>
                                Setup takes under 60 seconds. We only request what's needed. You control access.
                            </p>
                        </div>

                        <div className="text-center pt-4 border-t border-gray-100">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors inline-flex items-center"
                                >
                                    Sign in
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </p>
                        </div>
                    </form>

                    {/!* Trust Badges *!/}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {[
                                { icon: "🔒", label: "256-bit SSL", desc: "Encryption" },
                                { icon: "📈", label: "99.9%", desc: "Uptime" },
                                { icon: "🌍", label: "GDPR", desc: "Compliant" }
                            ].map((badge, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-xl">{badge.icon}</div>
                                    <div className="text-sm font-medium text-gray-900">{badge.label}</div>
                                    <div className="text-xs text-gray-500">{badge.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/!* Floating Demo Button *!/}
            <div className="fixed bottom-8 right-8">
                <Link
                    href="/demo"
                    className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border"
                >
                    <span className="text-lg">🎬</span>
                    <span>Watch 2-min Demo</span>
                </Link>
            </div>

            <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
}

*/


// frontend/src/app/signup/page.tsx
"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import {
    Eye,
    EyeOff,
    ArrowRight,
    Shield,
    Zap,
    Users,
    Clock,
    Building,
    Check,
    FileText,
    Lock
} from "lucide-react";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    // Legal compliance states
    const [isOver18, setIsOver18] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    // Merchant info (minimal upfront)
    const [businessType, setBusinessType] = useState("");
    const [teamSize, setTeamSize] = useState("");

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);

        let strength = 0;
        if (value.length >= 8) strength += 25;
        if (/[A-Z]/.test(value)) strength += 25;
        if (/[0-9]/.test(value)) strength += 25;
        if (/[^A-Za-z0-9]/.test(value)) strength += 25;
        setPasswordStrength(strength);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isOver18 || !acceptedTerms) {
            alert("Please confirm you're 18+ and agree to our terms");
            return;
        }

        setIsLoading(true);

        try {
            // In production: API call to create user
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password,
                    businessType,
                    teamSize,
                    isOver18,
                    acceptedTerms
                })
            });

            if (response.ok) {
                // Redirect to onboarding
                window.location.href = "/onboarding";
            } else {
                throw new Error('Registration failed');
            }
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    // Check if form can be submitted
    const canSubmit = email && password && isOver18 && acceptedTerms && password.length >= 8;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Features & Benefits */}
                <div className="space-y-8">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">VendorFlow</h1>
                            <p className="text-blue-600 font-medium">Trusted by 250+ SMBs</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                            Start Automating Vendor
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                {" "}Follow-ups Today
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600">
                            Join hundreds of SMBs who save 15+ hours weekly on vendor management.
                        </p>
                    </div>

                    {/* Trust Signals */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-gray-600">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span>GDPR & CCPA compliant</span>
                        </div>

                        <div className="flex items-center space-x-3 text-gray-600">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span>256-bit encryption</span>
                        </div>

                        <div className="flex items-center space-x-3 text-gray-600">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span>No credit card required</span>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-6 pt-4">
                        <div className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Zap className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Automate Follow-ups</h3>
                                <p className="text-gray-600">Set it and forget it — sequences run automatically</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Centralize Communications</h3>
                                <p className="text-gray-600">Email, SMS, and calls in one dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Signup Form */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Create Your Workspace
                        </h2>
                        <p className="text-gray-600">
                            Get started in 60 seconds. No credit card needed.
                        </p>
                    </div>

                    {/* Google Signup Button */}
                    <button
                        onClick={() => signIn("google", { callbackUrl: "/onboarding" })}
                        className="w-full rounded-xl border border-gray-200 px-6 py-4 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 mb-8 group"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span>Continue with Google</span>
                    </button>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or sign up with email</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Business Type (Optional, Non-blocking) */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">
                                    Business Type
                                </label>
                                <select
                                    value={businessType}
                                    onChange={(e) => setBusinessType(e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select...</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="agency">Agency</option>
                                    <option value="retail">Retail</option>
                                    <option value="saas">SaaS</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">
                                    Team Size
                                </label>
                                <select
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select...</option>
                                    <option value="1">Solo</option>
                                    <option value="2-5">2-5 people</option>
                                    <option value="6-10">6-10 people</option>
                                    <option value="11-50">11-50 people</option>
                                </select>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Work Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                                >
                                    {showPassword ? (
                                        <>
                                            <EyeOff className="w-4 h-4 mr-1" />
                                            Hide
                                        </>
                                    ) : (
                                        <>
                                            <Eye className="w-4 h-4 mr-1" />
                                            Show
                                        </>
                                    )}
                                </button>
                            </div>

                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Minimum 8 characters"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300"
                                required
                                minLength={8}
                            />

                            {/* Password Strength */}
                            {password && (
                                <div className="pt-2">
                                    <div className="flex items-center justify-between text-xs mb-1">
                                        <span className="text-gray-600">Password strength</span>
                                        <span className={`font-medium ${
                                            password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)
                                                ? 'text-green-600'
                                                : 'text-yellow-600'
                                        }`}>
                                            {password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)
                                                ? "Strong ✓"
                                                : "Keep going"}
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-300 ${
                                                password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)
                                                    ? 'bg-green-500 w-full'
                                                    : password.length >= 6
                                                        ? 'bg-yellow-500 w-2/3'
                                                        : 'bg-red-500 w-1/3'
                                            }`}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Legal Compliance - MINIMAL & CLEAN */}
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            {/* Age Verification */}
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="age-verification"
                                    checked={isOver18}
                                    onChange={(e) => setIsOver18(e.target.checked)}
                                    className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                    required
                                />
                                <label htmlFor="age-verification" className="text-sm text-gray-700">
                                    I confirm I am 18 years or older
                                </label>
                            </div>

                            {/* Terms Acceptance */}
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="terms-acceptance"
                                    checked={acceptedTerms}
                                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                                    className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                    required
                                />
                                <label htmlFor="terms-acceptance" className="text-sm text-gray-700">
                                    I agree to the{" "}
                                    <Link href="/terms" target="_blank" className="text-blue-600 hover:underline">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/privacy" target="_blank" className="text-blue-600 hover:underline">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading || !canSubmit}
                            className={`w-full rounded-xl px-6 py-4 text-sm font-semibold text-white transition-all ${
                                canSubmit
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
                                    : 'bg-gray-300 cursor-not-allowed'
                            } flex items-center justify-center space-x-2`}
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Creating workspace...</span>
                                </>
                            ) : (
                                <>
                                    <span>Create Workspace</span>
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>

                        {/* Legal Note */}
                        <div className="text-center pt-2">
                            <p className="text-xs text-gray-500">
                                <span className="flex items-center justify-center mb-1">
                                    <Lock className="w-3 h-3 mr-1" />
                                    Secure & compliant
                                </span>
                                Setup takes under 60 seconds. We only request what&apos;s needed. You control access.
                            </p>
                        </div>

                        {/* Login Link */}
                        <div className="text-center pt-4 border-t border-gray-100">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors inline-flex items-center"
                                >
                                    Sign in
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </p>
                        </div>
                    </form>

                    {/* Trust Badges */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {[
                                { icon: "🔒", label: "256-bit SSL", desc: "Encryption" },
                                { icon: "📈", label: "99.9%", desc: "Uptime" },
                                { icon: "🌍", label: "GDPR", desc: "Compliant" }
                            ].map((badge, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-xl">{badge.icon}</div>
                                    <div className="text-sm font-medium text-gray-900">{badge.label}</div>
                                    <div className="text-xs text-gray-500">{badge.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Demo Button */}
            <div className="fixed bottom-8 right-8">
                <Link
                    href="/demo"
                    className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border"
                >
                    <span className="text-lg">🎬</span>
                    <span>Watch Demo</span>
                </Link>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}

