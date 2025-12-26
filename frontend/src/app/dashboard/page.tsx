// frontend/src/app/dashboard/page.tsx
import {
    Activity,
    AlertTriangle,
    ArrowUpRight,
    CheckCircle2,
    Clock,
    CreditCard,
    Inbox,
    Mail,
    ShieldCheck,
    TrendingUp,
    Users,
} from "lucide-react";

const pipelineStages = [
    { name: "Discovery", count: 18 },
    { name: "Evaluation", count: 12 },
    { name: "Security", count: 9 },
    { name: "Legal", count: 6 },
];

const vendorStatuses = [
    { label: "Live vendors", value: 38, tone: "emerald", delta: "+4 this month" },
    { label: "In onboarding", value: 9, tone: "blue", delta: "Steady" },
    { label: "At risk", value: 3, tone: "amber", delta: "Needs touchpoint" },
];

const reminders = [
    {
        title: "Renew security packet - Apex Labs",
        due: "Today, 3:00 PM",
        type: "Compliance",
        priority: "high",
    },
    { title: "Push SOW to legal - Northwind", due: "Tomorrow", type: "Contract", priority: "medium" },
    { title: "Schedule QBR - Drift", due: "Friday", type: "Relationship", priority: "low" },
    { title: "Refresh pipeline health deck", due: "Monday", type: "Reporting", priority: "medium" },
];

const inboxSummary = {
    unread: 18,
    escalations: 2,
    followUps: 6,
    updates: 5,
};

const spendSummary = {
    month: "Dec",
    spent: 74200,
    budget: 120000,
    forecast: 108000,
    variance: "+6.4% vs last month",
};

const activity = [
    { title: "Vendor approved", meta: "Helios Security", time: "2m ago" },
    { title: "Contract redlines received", meta: "Northwind • Legal", time: "35m ago" },
    { title: "Security review kicked off", meta: "Drift • 24d cycle avg", time: "1h ago" },
    { title: "Invoice posted", meta: "Apex Labs • $8,400", time: "3h ago" },
    { title: "New vendor submitted", meta: "Nimbus Ops • Intake form", time: "6h ago" },
];

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

const pillStyles: Record<string, string> = {
    high: "text-red-700 bg-red-50 border-red-200",
    medium: "text-amber-700 bg-amber-50 border-amber-200",
    low: "text-emerald-700 bg-emerald-50 border-emerald-200",
};

export default function DashboardPage() {
    const pipelineTotal = pipelineStages.reduce((sum, stage) => sum + stage.count, 0);
    const budgetUsage = Math.min(100, Math.round((spendSummary.spent / spendSummary.budget) * 100));

    const tiles = [
        {
            label: "Pipeline value",
            value: formatter.format(3200000),
            sub: "in-flight across stages",
            icon: TrendingUp,
            accent: "bg-emerald-50 text-emerald-600 dark:bg-gray-800 dark:text-gray-100",
        },
        {
            label: "Vendors live",
            value: "38",
            sub: "with active contracts",
            icon: Users,
            accent: "bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-gray-100",
        },
        {
            label: "Tasks due",
            value: "7",
            sub: "priority reminders",
            icon: CheckCircle2,
            accent: "bg-amber-50 text-amber-600 dark:bg-gray-800 dark:text-gray-100",
        },
        {
            label: "Inbox unread",
            value: `${inboxSummary.unread}`,
            sub: "inquiries to triage",
            icon: Mail,
            accent: "bg-indigo-50 text-indigo-600 dark:bg-gray-800 dark:text-gray-100",
        },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                            Command Center
                        </p>
                        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            High-level pulse across pipeline, vendors, tasks, inbox, spend, and activity.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <Activity className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Live view · refreshed moments ago</span>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {tiles.map((tile) => {
                    const Icon = tile.icon;
                    return (
                        <div
                            key={tile.label}
                            className="rounded-2xl border bg-white dark:bg-[#353935] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex items-center justify-between">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tile.accent}`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                                <ArrowUpRight className="h-4 w-4 text-gray-400" />
                            </div>
                            <p className="mt-4 text-sm text-gray-500 dark:text-[#F9F6EE]">{tile.label}</p>
                            <p className="text-2xl font-semibold text-gray-900 dark:text-[#f0fff0] ">{tile.value}</p>
                            <p className="text-sm text-gray-500 dark:text-[#F9F6EE]">{tile.sub}</p>
                        </div>
                    );
                })}
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                <section className="xl:col-span-2 rounded-2xl border bg-white dark:bg-[#353935] p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-950 dark:text-[#f0fff0]">Pipeline summary</h2>
                            <p className="text-sm text-gray-900 dark:text-[#F9F6EE]">Quick read on volume by stage</p>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                            <TrendingUp className="h-4 w-4" />
                            62% win rate
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        {pipelineStages.map((stage) => {
                            const pct = Math.round((stage.count / pipelineTotal) * 100);
                            return (
                                <div key={stage.name} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm text-gray-900 dark:text-[#F9F6EE]">
                                        <span className="font-medium">{stage.name}</span>
                                        <span className="text-gray-900 dark:text-[#F9F6EE]">
                                            {stage.count} deals · {pct}%
                                        </span>
                                    </div>
                                    <div className="h-2 rounded-full bg-gray-100">
                                        <div
                                            className="h-2 rounded-full bg-indigo-500"
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-xl bg-gray-200 dark:bg-[#28282B] p-4">
                            <p className="text-xs font-medium uppercase text-gray-950 dark:text-[#f0fff0]">Avg cycle</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-[#F9F6EE]">24 days</p>
                            <p className="text-xs text-gray-900 dark:text-[#F9F6EE]">from intake to sign</p>
                        </div>
                        <div className="rounded-xl bg-gray-200 dark:bg-[#28282B] p-4">
                            <p className="text-xs font-medium uppercase text-gray-950 dark:text-[#f0fff0]">In-flight value</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-[#F9F6EE]">{formatter.format(3200000)}</p>
                            <p className="text-xs text-gray-900 dark:text-[#F9F6EE]">high-level only</p>
                        </div>
                        <div className="rounded-xl bg-gray-200 dark:bg-[#28282B] p-4">
                            <p className="text-xs font-medium uppercase text-gray-950 dark:text-[#f0fff0]">Next 7 days</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-[#F9F6EE]">5 exits expected</p>
                            <p className="text-xs text-gray-900 dark:text-[#F9F6EE]">close-ready vendors</p>
                        </div>
                    </div>
                </section>

                <section className="rounded-2xl border bg-white dark:bg-[#353935] p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-[#f0fff0]">Spend summary</h2>
                            <p className="text-sm text-gray-600 dark:text-[#F9F6EE]">Billing pulse for {spendSummary.month}</p>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-emerald-50  px-3 py-1 text-xs font-medium text-emerald-700">
                            <CreditCard className="h-4 w-4" />
                            {spendSummary.variance}
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-[#F9F6EE]">Month-to-date</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-[#f0fff0]">{formatter.format(spendSummary.spent)}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500 dark:text-[#F9F6EE]">Budget</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-[#f0fff0]">{formatter.format(spendSummary.budget)}</p>
                            </div>
                        </div>
                        <div className="h-2 rounded-full bg-gray-100">
                            <div
                                className="h-2 rounded-full bg-emerald-500"
                                style={{ width: `${budgetUsage}%` }}
                            />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 dark:text-[#F9F6EE]">
                            <span>{budgetUsage}% of monthly budget</span>
                            <span>Forecast {formatter.format(spendSummary.forecast)}</span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-xl bg-gray-50 dark:bg-[#28282B] p-4">
                                <p className="text-xs font-medium uppercase text-gray-500 dark:text-[#f0fff0]">Top driver</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-[#F9F6EE]">Data & infra renewals</p>
                                <p className="text-xs text-gray-500 dark:text-[#F9F6EE]">31% of spend</p>
                            </div>
                            <div className="rounded-xl bg-gray-50 dark:bg-[#28282B] p-4">
                                <p className="text-xs font-medium uppercase text-gray-500 dark:text-[#f0fff0] ">Next billings</p>
                                <p className="text-sm font-semibold text-gray-900 dark:text-[#F9F6EE]">$18.4K scheduled</p>
                                <p className="text-xs text-gray-500 dark:text-[#F9F6EE]">next 10 days</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <section className="rounded-2xl border bg-white dark:bg-[#353935] p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-[#f0fff0]
">Vendor status overview</h2>
                            <p className="text-sm text-gray-600 dark:text-[#F9F6EE]">Snapshot of portfolio health</p>
                        </div>
                        <ShieldCheck className="h-5 w-5 text-indigo-500" />
                    </div>
                    <div className="mt-5 space-y-3">
                        {vendorStatuses.map((status) => {
                            const tone =
                                status.tone === "emerald"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : status.tone === "blue"
                                        ? "bg-blue-50 text-blue-700"
                                        : "bg-amber-50 text-amber-700";
                            return (
                                <div key={status.label} className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-[#28282B] p-4">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-[#f0fff0]">{status.label}</p>
                                        <p className="text-xs text-gray-500 dark:text-[#F9F6EE]">{status.delta}</p>
                                    </div>
                                    <div className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${tone}`}>
                                        <Users className="h-4 w-4" />
                                        {status.value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-[#F9F6EE]">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        No blockers flagged in the last 24 hours.
                    </div>
                </section>

                <section className="rounded-2xl border bg-white dark:bg-[#353935] p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-[#f0fff0]">Task reminders</h2>
                            <p className="text-sm text-gray-600 dark:text-[#F9F6EE]">Keep pace with upcoming work</p>
                        </div>
                        <Clock className="h-5 w-5 text-amber-500" />
                    </div>
                    <div className="mt-4 space-y-3">
                        {reminders.map((item) => (
                            <div
                                key={item.title}
                                className="flex items-start justify-between rounded-xl border border-gray-100 bg-gray-50 dark:bg-[#28282B] px-4 py-3"
                            >
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-[#F9F6EE]">{item.title}</p>
                                    <p className="text-sm text-gray-600 dark:text-[#F9F6EE]">{item.due}</p>
                                </div>
                                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${pillStyles[item.priority]}`}>
                                    {item.type}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-[#F9F6EE]">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        All other tasks on track.
                    </div>
                </section>

                <section className="rounded-2xl border bg-white dark:bg-[#353935] p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-[#f0fff0]">Inbox</h2>
                            <p className="text-sm text-gray-600 dark:text-[#F9F6EE]">Unread and escalations</p>
                        </div>
                        <Inbox className="h-5 w-5 text-indigo-500" />
                    </div>
                    <div className="mt-5 space-y-3">
                        <div className="flex items-center justify-between rounded-xl bg-indigo-50 dark:bg-[#28282B] px-4 py-3">
                            <div>
                                <p className="text-sm font-semibold text-indigo-600">Unread threads</p>
                                <p className="text-xs text-indigo-700">Triage to keep SLA clean</p>
                            </div>
                            <span className="text-xl font-semibold text-indigo-900 dark:text-[#f0fff0]">{inboxSummary.unread}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-xl bg-gray-50 dark:bg-[#28282B] p-4">
                                <p className="text-xs font-medium uppercase text-gray-500 dark:text-[#F9F6EE] ">Escalations</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-[#f0fff0]">{inboxSummary.escalations}</p>
                                <p className="text-xs text-gray-500 dark:text-[#F9F6EE]">fastest response needed</p>
                            </div>
                            <div className="rounded-xl bg-gray-50 dark:bg-[#28282B] p-4">
                                <p className="text-xs font-medium uppercase text-gray-500 dark:text-[#f0fff0] ">Follow-ups</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-[#F9F6EE]">{inboxSummary.followUps}</p>
                                <p className="text-xs text-gray-500 dark:text-[#F9F6EE]">waiting on replies</p>
                            </div>
                        </div>
                        <div className="rounded-xl bg-gray-50 dark:bg-[#28282B] p-4">
                            <p className="text-xs font-medium uppercase text-gray-500 dark:text-[#f0fff0] ">New vendor updates</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-[#F9F6EE]">{inboxSummary.updates}</p>
                            <p className="text-xs text-gray-500 dark:text-[#F9F6EE]">submitted this week</p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="rounded-2xl border bg-white dark:bg-[#353935] p-6 shadow-sm">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-[#f0fff0]">Activity timeline</h2>
                        <p className="text-sm text-gray-600 dark:text-[#F9F6EE] ">Recent vendor and pipeline signals</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-[#28282B] px-3 py-1 text-xs font-medium text-gray-700 dark:text-[#F9F6EE]">
                        <Activity className="h-4 w-4" />
                        Past 6 hours
                    </div>
                </div>
                <div className="mt-5 space-y-4">
                    {activity.map((event, index) => (
                        <div key={event.title} className="flex items-start gap-3">
                            <div className="flex flex-col items-center">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                                    <Mail className="h-4 w-4" />
                                </div>
                                {index !== activity.length - 1 && <div className="h-6 w-px bg-gray-200 dark:bg-white" />}
                            </div>
                            <div className="rounded-xl bg-gray-50 dark:bg-[#28282B] p-4 flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-gray-900 dark:text-[#f0fff0]">{event.title}</p>
                                    <span className="text-xs text-gray-500 dark:text-[#F9F6EE]">{event.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-[#F9F6EE]">{event.meta}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
