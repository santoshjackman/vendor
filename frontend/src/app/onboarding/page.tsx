"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OnboardingPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        businessType: "service",
        teamSize: "2-5",
        primaryGoal: "all",
    });

    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Quick setup</h1>
                <p className="mt-2 text-slate-600">Configure workspace defaults. You can adjust later.</p>
                <div className="mt-8 space-y-5">
                    <div>
                        <label className="text-sm font-medium text-slate-700">Business type</label>
                        <select
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                            value={form.businessType}
                            onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                        >
                            <option value="retail">Retail / E-commerce</option>
                            <option value="service">Service / Field service</option>
                            <option value="wholesale">Wholesale / Distribution</option>
                            <option value="agency">Agency / Professional services</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700">Team size</label>
                        <select
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                            value={form.teamSize}
                            onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                        >
                            <option value="solo">Solo</option>
                            <option value="2-5">2–5</option>
                            <option value="6-20">6–20</option>
                            <option value="20+">20+</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700">Primary goal</label>
                        <select
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                            value={form.primaryGoal}
                            onChange={(e) => setForm({ ...form, primaryGoal: e.target.value })}
                        >
                            <option value="tasks">Daily tasks</option>
                            <option value="followups">Follow-ups</option>
                            <option value="crm">Vendors + pipeline</option>
                            <option value="all">All of the above</option>
                        </select>
                    </div>
                    <button
                        onClick={() => router.push("/dashboard")}
                        className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Enter dashboard
                    </button>
                    <p className="text-xs text-slate-500">
                        Next: connect Google for inbox/calendar automation (optional).
                    </p>
                </div>
            </div>
        </main>
    );
}
