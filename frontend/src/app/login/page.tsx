/*
"use client";

import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import AuthCard from "@/components/auth/AuthCard";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <AuthShell title="Welcome back" subtitle="Pick up where operations left off.">
            <AuthCard>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
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
                            placeholder="••••••••"
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-200"
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Continue
                    </button>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                        <Link href="/forgot" className="hover:text-slate-900">
                            Forgot password?
                        </Link>
                        <Link href="/signup" className="hover:text-slate-900">
                            Create account
                        </Link>
                    </div>
                    <p className="text-xs text-slate-500">
                        Encrypted in transit and at rest. You control access. Export anytime.
                    </p>
                </form>
            </AuthCard>
        </AuthShell>
    );
}
*/



"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Add your authentication logic here
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

            <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Brand & Image */}
                <div className="hidden lg:block">
                    <div className="relative">
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl" />
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl" />

                        <div className="relative space-y-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">VF</span>
                                </div>
                                <span className="text-3xl font-bold text-gray-900">VendorFlow</span>
                            </div>

                            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                                Welcome Back to Your
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {" "}Sales Command Center
                </span>
                            </h1>

                            <p className="text-xl text-gray-600">
                                Continue managing your vendor relationships and automating follow-ups from where you left off.
                            </p>

                            <div className="bg-white rounded-2xl shadow-xl p-6 border">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-lg">📈</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">94% Follow-up Success Rate</div>
                                        <div className="text-sm text-gray-500">Average across our users</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        { label: "Automated Sequences", value: "Active", color: "bg-blue-100 text-blue-800" },
                                        { label: "Pending Follow-ups", value: "12", color: "bg-yellow-100 text-yellow-800" },
                                        { label: "Vendors This Month", value: "48", color: "bg-green-100 text-green-800" }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <span className="text-gray-700">{stat.label}</span>
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${stat.color}`}>
                        {stat.value}
                      </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    {[1,2,3,4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full border-2 border-white"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-semibold">Join 250+ SMBs</span> optimizing vendor communications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Login Form */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600">
                            Pick up where your operations left off
                        </p>
                    </div>

                    <button
                        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                        className="w-full rounded-xl border border-gray-200 px-6 py-4 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 mb-6 group"
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
                            <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center">
                                <span className="mr-2">📧</span>
                                Work email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300"
                                    required
                                />
                            </div>
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
                                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300 pr-10"
                                    required
                                />
                                <div className="absolute right-3 top-3 text-gray-400">
                                    {showPassword ? "👁️" : "👁️‍🗨️"}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                />
                                <span className="text-gray-600">Remember me</span>
                            </label>

                            <Link
                                href="/forgot"
                                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Signing in...</span>
                                </div>
                            ) : (
                                "Login to Dashboard"
                            )}
                        </button>

                        <div className="text-center pt-4 border-t border-gray-100">
                            <p className="text-sm text-gray-600">
                                Don&apos;t have an account?{" "}
                                <Link
                                    href="/signup"
                                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                                >
                                    Create account
                                </Link>
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-blue-600">🔒</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Enterprise-grade security</p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Encrypted in transit and at rest. You control access. Export anytime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* Stats Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {[
                                { value: "99.9%", label: "Uptime" },
                                { value: "256-bit", label: "Encryption" },
                                { value: "SOC2", label: "Compliant" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-xs text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="fixed bottom-8 left-8 hidden lg:block">
                <div className="bg-white rounded-xl p-4 shadow-lg border">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg">🚀</span>
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-900">Live Updates</div>
                            <div className="text-xs text-gray-500">Vendors followed up today: 1,248</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



