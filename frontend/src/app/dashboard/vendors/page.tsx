"use client";

import {
    Activity,
    AlertCircle,
    Building2,
    CheckCircle2,
    ChevronRight,
    CreditCard,
    FileText,
    Inbox,
    LayoutDashboard,
    Mail,
    Paperclip,
    Phone,
    ShieldCheck,
    Tag,
    Users,
} from "lucide-react";
import { useMemo, useState } from "react";

type TabKey = "overview" | "contacts" | "documents" | "emails" | "activity" | "billing";

const vendor = {
    name: "Apex Labs",
    industry: "Data Infrastructure",
    owner: "Jordan Chen",
    health: "On track",
    stage: "Renewal prep",
    renewalDate: "Feb 12",
    contractValue: "$420K ARR",
    score: "A-",
};

const tabs: { key: TabKey; label: string; icon: any; badge?: string }[] = [
    { key: "overview", label: "Overview", icon: LayoutDashboard },
    { key: "contacts", label: "Contacts", icon: Users, badge: "3" },
    { key: "documents", label: "Documents", icon: FileText, badge: "12" },
    { key: "emails", label: "Emails", icon: Inbox, badge: "5" },
    { key: "activity", label: "Activity", icon: Activity },
    { key: "billing", label: "Billing", icon: CreditCard, badge: "New" },
];

const contacts = [
    { name: "Maya Patel", role: "Account Manager", email: "maya@apexlabs.com", phone: "+1 (415) 222-1902" },
    { name: "Eric Liu", role: "Security Lead", email: "eric.liu@apexlabs.com", phone: "+1 (510) 778-8821" },
    { name: "Sam Ortiz", role: "Finance Ops", email: "sam.ortiz@apexlabs.com", phone: "+1 (650) 944-0003" },
];

const documentsByType = [
    {
        title: "Contracts",
        items: [
            { name: "MSA v2 - Executed", status: "Signed", updated: "Oct 04" },
            { name: "DPA addendum", status: "In review", updated: "Nov 18" },
        ],
    },
    {
        title: "Purchase orders",
        items: [{ name: "PO-8842", status: "Approved", updated: "Sep 12" }],
    },
    {
        title: "Invoices",
        items: [
            { name: "INV-2311", status: "Paid", updated: "Oct 30" },
            { name: "INV-2312", status: "Pending", updated: "Nov 30" },
        ],
    },
    {
        title: "Receipts",
        items: [{ name: "Receipt 2311", status: "Filed", updated: "Oct 31" }],
    },
    {
        title: "Payments",
        items: [
            { name: "ACH - Oct", status: "Cleared", updated: "Nov 02" },
            { name: "ACH - Nov", status: "Processing", updated: "Dec 01" },
        ],
    },
    {
        title: "Internal notes",
        items: [{ name: "QBR notes", status: "Shared", updated: "Nov 28" }],
    },
    {
        title: "Attachments",
        items: [{ name: "Security questionnaire.pdf", status: "Stored", updated: "Nov 07" }],
    },
];

const emails = [
    { subject: "Renewal timeline + pricing", from: "Jordan · Apex", status: "Replied", time: "2h ago" },
    { subject: "Security review: updated SOC2", from: "Eric · Apex", status: "Need follow-up", time: "6h ago" },
    { subject: "Invoice INV-2312 sent", from: "Billing · Apex", status: "Unread", time: "1d ago" },
    { subject: "QBR deck draft", from: "Maya · Apex", status: "Replied", time: "2d ago" },
];

const activities = [
    { title: "DPA addendum routed to legal", meta: "You · Legal queue", time: "12m ago" },
    { title: "Invoice INV-2311 paid", meta: "Finance · $35,000", time: "2h ago" },
    { title: "Security review cleared", meta: "Eric Liu · SOC2 Type II", time: "5h ago" },
    { title: "QBR scheduled", meta: "Dec 15 · With AM + CS", time: "1d ago" },
    { title: "New contact added", meta: "Sam Ortiz · Finance Ops", time: "3d ago" },
];

const billing = {
    outstanding: "$35,000",
    nextDue: "Dec 30",
    cadence: "Quarterly",
    lastPayment: "Nov 02 · ACH",
    invoices: [
        { id: "INV-2312", amount: "$35,000", status: "Pending", due: "Dec 30" },
        { id: "INV-2311", amount: "$35,000", status: "Paid", due: "Sep 30" },
        { id: "INV-2310", amount: "$35,000", status: "Paid", due: "Jun 30" },
    ],
    payments: [
        { id: "PAY-4481", amount: "$35,000", method: "ACH", status: "Cleared", date: "Nov 02" },
        { id: "PAY-4378", amount: "$35,000", method: "ACH", status: "Cleared", date: "Aug 03" },
    ],
};

const badgeTone: Record<string, string> = {
    Signed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "In review": "bg-amber-50 text-amber-700 border-amber-200",
    Approved: "bg-blue-50 text-blue-700 border-blue-200",
    Paid: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Pending: "bg-amber-50 text-amber-700 border-amber-200",
    Filed: "bg-gray-50 text-gray-700 border-gray-200",
    Cleared: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Processing: "bg-amber-50 text-amber-700 border-amber-200",
    Shared: "bg-indigo-50 text-indigo-700 border-indigo-200",
    Stored: "bg-gray-50 text-gray-700 border-gray-200",
    Replied: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Need follow-up": "bg-amber-50 text-amber-700 border-amber-200",
    Unread: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export default function VendorsPage() {
    const [activeTab, setActiveTab] = useState<TabKey>("overview");

    const vendorHighlights = useMemo(
        () => [
            { label: "Health", value: vendor.health, icon: ShieldCheck, tone: "text-emerald-600 bg-emerald-50" },
            { label: "Stage", value: vendor.stage, icon: Tag, tone: "text-indigo-600 bg-indigo-50" },
            { label: "Renewal", value: vendor.renewalDate, icon: CalendarIcon, tone: "text-amber-600 bg-amber-50" },
            { label: "Owner", value: vendor.owner, icon: Users, tone: "text-gray-700 bg-gray-100" },
        ],
        []
    );

    return (
        <div className="space-y-8">
            <header className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Vendors</p>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-semibold text-gray-900">{vendor.name}</h1>
                            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                                {vendor.industry}
                            </span>
                        </div>
                        <p className="text-gray-600">
                            The CRM object for all Apex Labs work. Overview, contacts, documents, emails, activity, and
                            vendor-specific billing live here.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                        <Building2 className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-700">Vendor record</span>
                    </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {vendorHighlights.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.label}
                                className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm"
                            >
                                <div>
                                    <p className="text-xs uppercase text-gray-500">{item.label}</p>
                                    <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                                </div>
                                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.tone}`}>
                                    <Icon className="h-4 w-4" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </header>

            <div className="overflow-auto rounded-2xl border bg-white shadow-sm">
                <div className="flex flex-wrap gap-1 border-b bg-gray-50 px-4 py-3">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${
                                    isActive
                                        ? "bg-indigo-600 text-white shadow-sm"
                                        : "text-gray-600 hover:bg-white hover:text-gray-900"
                                }`}
                            >
                                <Icon className="h-4 w-4" />
                                {tab.label}
                                {tab.badge && (
                                    <span
                                        className={`rounded-full px-2 text-[11px] ${
                                            isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        {tab.badge}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="p-6">
                    {activeTab === "overview" && <Overview />}
                    {activeTab === "contacts" && <Contacts />}
                    {activeTab === "documents" && <Documents />}
                    {activeTab === "emails" && <Emails />}
                    {activeTab === "activity" && <ActivityTab />}
                    {activeTab === "billing" && <BillingTab />}
                </div>
            </div>
        </div>
    );
}

function Overview() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-2xl border bg-gray-50 p-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">Renewal readiness</h3>
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Security and legal cleared. Pricing in negotiation.</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-emerald-700">
                        <CheckCircle2 className="h-4 w-4" />
                        No blockers flagged this week.
                    </div>
                </div>
                <div className="rounded-2xl border bg-gray-50 p-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">Relationship health</h3>
                        <Users className="h-4 w-4 text-indigo-600" />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                        QBR scheduled. CSAT 9.2/10. Executive sponsor actively engaged.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-indigo-700">
                        <CheckCircle2 className="h-4 w-4" />
                        Weekly cadence maintained.
                    </div>
                </div>
                <div className="rounded-2xl border bg-gray-50 p-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">Commercials</h3>
                        <Tag className="h-4 w-4 text-amber-600" />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                        $420K ARR with 6% uplift proposed. Term: 12 months. Payment: quarterly ACH.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-amber-700">
                        <AlertCircle className="h-4 w-4" />
                        Awaiting approval on uplift.
                    </div>
                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">Key contacts</h3>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="mt-4 space-y-3">
                        {contacts.map((contact) => (
                            <div key={contact.email} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                                <div>
                                    <p className="font-medium text-gray-900">{contact.name}</p>
                                    <p className="text-sm text-gray-600">{contact.role}</p>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                    <Mail className="h-4 w-4" />
                                    <span>{contact.email}</span>
                                    <span className="h-4 w-px bg-gray-300" />
                                    <Phone className="h-4 w-4" />
                                    <span>{contact.phone}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Latest emails</h3>
                            <p className="text-xs text-gray-500">Threads tied to this vendor</p>
                        </div>
                        <Inbox className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="mt-4 space-y-3">
                        {emails.slice(0, 3).map((email) => (
                            <div key={email.subject} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                                <div>
                                    <p className="font-medium text-gray-900">{email.subject}</p>
                                    <p className="text-sm text-gray-600">{email.from}</p>
                                </div>
                                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeTone[email.status]}`}>
                                    {email.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Contacts() {
    return (
        <div className="space-y-3">
            {contacts.map((contact) => (
                <div key={contact.email} className="flex flex-col gap-2 rounded-xl border bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-gray-900">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.role}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>{contact.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>{contact.phone}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Documents() {
    return (
        <div className="space-y-4">
            <div className="rounded-xl border bg-blue-50 px-4 py-3 text-sm text-blue-900">
                Billing lives under Vendors for vendor-specific invoices, receipts, purchase orders, and payments. Global Billing (cashflow, analytics) stays system-wide.
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {documentsByType.map((section) => (
                    <div key={section.title} className="rounded-2xl border bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-gray-900">{section.title}</p>
                                <p className="text-xs text-gray-500">{section.items.length} items</p>
                            </div>
                            <Paperclip className="h-4 w-4 text-gray-400" />
                        </div>
                        <div className="mt-3 space-y-2">
                            {section.items.map((doc) => (
                                <div key={doc.name} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{doc.name}</p>
                                        <p className="text-xs text-gray-500">Updated {doc.updated}</p>
                                    </div>
                                    <span className={`rounded-full border px-3 py-1 text-[11px] font-medium ${badgeTone[doc.status]}`}>
                                        {doc.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Emails() {
    return (
        <div className="space-y-3">
            {emails.map((email) => (
                <div key={email.subject} className="flex items-center justify-between rounded-xl border bg-gray-50 px-4 py-3">
                    <div>
                        <p className="font-semibold text-gray-900">{email.subject}</p>
                        <p className="text-sm text-gray-600">{email.from}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeTone[email.status]}`}>
                            {email.status}
                        </span>
                        <span className="text-xs text-gray-500">{email.time}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ActivityTab() {
    return (
        <div className="space-y-4">
            {activities.map((event, index) => (
                <div key={event.title} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                            <Activity className="h-4 w-4" />
                        </div>
                        {index !== activities.length - 1 && <div className="h-6 w-px bg-gray-200" />}
                    </div>
                    <div className="flex-1 rounded-xl bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-900">{event.title}</p>
                            <span className="text-xs text-gray-500">{event.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{event.meta}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function BillingTab() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl border bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                Vendor billing: invoices, receipts, purchase orders, and payments scoped to Apex Labs. Global Billing stays the system-wide view for cashflow and analytics.
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium uppercase text-gray-500">Outstanding</p>
                    <p className="text-2xl font-semibold text-gray-900">{billing.outstanding}</p>
                    <p className="text-xs text-gray-500">Due {billing.nextDue}</p>
                </div>
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium uppercase text-gray-500">Cadence</p>
                    <p className="text-2xl font-semibold text-gray-900">{billing.cadence}</p>
                    <p className="text-xs text-gray-500">Last payment {billing.lastPayment}</p>
                </div>
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium uppercase text-gray-500">Invoice count</p>
                    <p className="text-2xl font-semibold text-gray-900">{billing.invoices.length}</p>
                    <p className="text-xs text-gray-500">Vendor-specific</p>
                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">Invoices</h3>
                        <CreditCard className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="mt-4 space-y-3">
                        {billing.invoices.map((invoice) => (
                            <div key={invoice.id} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                                <div>
                                    <p className="font-semibold text-gray-900">{invoice.id}</p>
                                    <p className="text-xs text-gray-500">Due {invoice.due}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-gray-900">{invoice.amount}</span>
                                    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeTone[invoice.status]}`}>
                                        {invoice.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">Payments</h3>
                        <FileText className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div className="mt-4 space-y-3">
                        {billing.payments.map((payment) => (
                            <div key={payment.id} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                                <div>
                                    <p className="font-semibold text-gray-900">{payment.id}</p>
                                    <p className="text-xs text-gray-500">{payment.method}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-gray-900">{payment.amount}</span>
                                    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeTone[payment.status]}`}>
                                        {payment.status}
                                    </span>
                                    <span className="text-xs text-gray-500">{payment.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 ${props.className ?? ""}`}
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
    );
}
