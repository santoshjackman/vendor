import { Activity, BarChart3, Gauge, LineChart, Sparkles } from "lucide-react";

const metrics = [
    { label: "Pipeline velocity", value: "24 days", note: "Avg intake → sign" },
    { label: "Vendor performance score", value: "87", note: "Weighted quality" },
    { label: "Savings from negotiation", value: "$420K", note: "YTD avoided spend" },
    { label: "Follow-up efficiency", value: "92%", note: "Within SLA" },
];

const insights = [
    "Bottleneck: Negotiation → Approved taking +5 days vs last month.",
    "Top vendors by value: Northwind, Helios, Apex Labs.",
    "Forecast: $4.9M spend; uplift +6% if renewals hold.",
    "AI: Recommend auto-templates for stalled negotiations.",
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <header className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Analytics</p>
                    <h1 className="text-3xl font-semibold text-gray-900">Decision intelligence</h1>
                    <p className="text-gray-600">
                        Velocity, scoring, savings, spend analytics, forecasting, bottleneck detection, follow-up efficiency, AI insights.
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                    <LineChart className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">Live</span>
                </div>
            </header>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                            <p className="text-xs uppercase text-gray-500">{metric.label}</p>
                            <p className="text-xl font-semibold text-gray-900">{metric.value}</p>
                            <p className="text-xs text-gray-500">{metric.note}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <Gauge className="h-4 w-4 text-emerald-600" />
                    Pipeline velocity, follow-up efficiency, and savings tracked across all vendors.
                </div>
            </section>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Insights</h2>
                        <p className="text-sm text-gray-600">AI-driven recommendations</p>
                    </div>
                    <Sparkles className="h-5 w-5 text-indigo-500" />
                </div>
                <div className="mt-3 space-y-2">
                    {insights.map((insight) => (
                        <div key={insight} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                            {insight}
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <Activity className="h-4 w-4 text-amber-500" />
                    Bottleneck detection, forecasting, and spend analytics combine pipeline + billing data.
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                    <BarChart3 className="h-4 w-4 text-indigo-500" />
                    Vendor-wise spend analytics live here, not in vendor tabs.
                </div>
            </section>
        </div>
    );
}
