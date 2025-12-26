/*
"use client";

import {
    ArrowUpRight,
    CheckCircle2,
    FileText,
    Mail,
    Move,
    Play,
    Settings,
    Sparkles,
    Tag,
    Wand2,
} from "lucide-react";

type StageKey = "evaluation" | "negotiation" | "approved" | "order" | "closed";

type Card = {
    id: string;
    title: string;
    company: string;
    value: string;
    owner: string;
    nextStep: string;
};

const stages: { key: StageKey; name: string }[] = [
    { key: "evaluation", name: "Evaluation" },
    { key: "negotiation", name: "Negotiation" },
    { key: "approved", name: "Approved" },
    { key: "order", name: "Order" },
    { key: "closed", name: "Closed" },
];

const cardsByStage: Record<StageKey, Card[]> = {
    evaluation: [
        { id: "VN-184", title: "Data enrichment", company: "Apex Labs", value: "$35k", owner: "Jordan", nextStep: "Security review" },
        { id: "VN-185", title: "Vendor portal", company: "Nimbus Ops", value: "$62k", owner: "Sam", nextStep: "Schedule demo" },
    ],
    negotiation: [
        { id: "VN-176", title: "Analytics platform", company: "Northwind", value: "$120k", owner: "Taylor", nextStep: "Counterproposal" },
        { id: "VN-179", title: "Observability", company: "Helios", value: "$78k", owner: "Riley", nextStep: "Redlines" },
    ],
    approved: [
        { id: "VN-161", title: "AI co-pilot", company: "Drift", value: "$54k", owner: "Jordan", nextStep: "Send order form" },
    ],
    order: [
        { id: "VN-143", title: "Payments gateway", company: "Stripe", value: "$210k", owner: "Casey", nextStep: "Awaiting signature" },
    ],
    closed: [
        { id: "VN-128", title: "HRIS upgrade", company: "Acme", value: "$180k", owner: "Morgan", nextStep: "Live" },
    ],
};

const automationRules = [
    { name: "Stage -> Negotiation", action: "Email template: Pricing counter", icon: Mail },
    { name: "Stage -> Approved", action: "Assign to Legal queue", icon: Settings },
    { name: "Stage -> Order", action: "Send order form + invoice request", icon: FileText },
    { name: "Stage -> Closed", action: "Trigger onboarding playbook", icon: Play },
];

const templates = [
    { name: "Follow-up", description: "Light nudge after demo", scope: "Pipeline -> Templates" },
    { name: "Reminder", description: "Renewal reminder sequence", scope: "Pipeline -> Templates" },
    { name: "Negotiation", description: "Pricing and terms counter", scope: "Pipeline -> Templates" },
    { name: "Request for quote", description: "Ask for formal quote", scope: "Pipeline -> Templates" },
    { name: "Request for invoice", description: "Collect invoice for PO", scope: "Pipeline -> Templates" },
    { name: "Delivery confirmation", description: "Confirm delivery & acceptance", scope: "Pipeline -> Templates" },
];

export default function PipelinesPage() {
    return (
        <div className="space-y-8">
            <header className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Pipelines</p>
                    <h1 className="text-3xl font-semibold text-gray-900">Kanban</h1>
                    <p className="text-gray-600">
                        Evaluation -> Negotiation -> Approved -> Order -> Closed. Drag cards, trigger automations, and fire email templates from here.
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                    <Move className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">Drag-and-drop enabled</span>
                </div>
            </header>

            <div className="grid gap-4 lg:grid-cols-5">
                {stages.map((stage) => (
                    <div key={stage.key} className="flex flex-col rounded-2xl border bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b px-4 py-3">
                            <div>
                                <p className="text-sm font-semibold text-gray-900">{stage.name}</p>
                                <p className="text-xs text-gray-500">{cardsByStage[stage.key].length} cards</p>
                            </div>
                            <Tag className="h-4 w-4 text-gray-400" />
                        </div>
                        <div className="flex-1 space-y-3 px-3 py-3">
                            {cardsByStage[stage.key].map((card) => (
                                <div
                                    key={card.id}
                                    className="rounded-xl border border-gray-100 bg-gray-50 p-3 shadow-xs transition hover:-translate-y-0.5"
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold text-gray-900">{card.title}</p>
                                        <ArrowUpRight className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <p className="text-xs text-gray-500">{card.company}</p>
                                    <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
                                        <span className="font-semibold text-gray-900">{card.value}</span>
                                        <span className="rounded-full bg-white px-2 py-1 text-[11px]">{card.owner}</span>
                                    </div>
                                    <p className="mt-2 text-xs text-indigo-700">Next: {card.nextStep}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Pipeline automation rules</h2>
                            <p className="text-sm text-gray-600">Triggered by stage changes</p>
                        </div>
                        <Wand2 className="h-5 w-5 text-indigo-500" />
                    </div>
                    <div className="mt-4 space-y-3">
                        {automationRules.map((rule) => {
                            const Icon = rule.icon;
                            return (
                                <div key={rule.name} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                                    <div>
                                        <p className="font-semibold text-gray-900">{rule.name}</p>
                                        <p className="text-sm text-gray-600">{rule.action}</p>
                                    </div>
                                    <Icon className="h-4 w-4 text-gray-500" />
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        Add SLA reminders, owner reassignment, or task creation as stage-based automations.
                    </div>
                </section>

                <section className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Email templates</h2>
                            <p className="text-sm text-gray-600">Templates live under Pipelines -> Templates, not Inbox.</p>
                        </div>
                        <Mail className="h-5 w-5 text-indigo-500" />
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {templates.map((tpl) => (
                            <div key={tpl.name} className="rounded-xl border bg-gray-50 p-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="font-semibold text-gray-900">{tpl.name}</p>
                                        <p className="text-sm text-gray-600">{tpl.description}</p>
                                    </div>
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">{tpl.scope}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                        <Play className="h-4 w-4 text-indigo-500" />
                        Trigger these when cards move stages to keep follow-ups automatic.
                    </div>
                </section>
            </div>
        </div>
    );
}
*/


"use client";

import {
    ArrowUpRight,
    CheckCircle2,
    FileText,
    Mail,
    Move,
    Play,
    Settings,
    Sparkles,
    Tag,
    Wand2,
    MoreVertical,
    Users,
    Calendar,
    Filter,
    Plus,
    TrendingUp,
    DollarSign,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useState } from "react";

type StageKey = "evaluation" | "negotiation" | "approved" | "order" | "closed";

type Card = {
    id: string;
    title: string;
    company: string;
    value: string;
    owner: string;
    nextStep: string;
    daysInStage: number;
    probability: number;
};

const stages: { key: StageKey; name: string; color: string; count: number; value: string }[] = [
    { key: "evaluation", name: "Evaluation", color: "bg-blue-100 text-blue-700", count: 2, value: "$97k" },
    { key: "negotiation", name: "Negotiation", color: "bg-purple-100 text-purple-700", count: 2, value: "$198k" },
    { key: "approved", name: "Approved", color: "bg-amber-100 text-amber-700", count: 1, value: "$54k" },
    { key: "order", name: "Order", color: "bg-green-100 text-green-700", count: 1, value: "$210k" },
    { key: "closed", name: "Closed", color: "bg-gray-100 text-gray-700", count: 1, value: "$180k" },
];

const cardsByStage: Record<StageKey, Card[]> = {
    evaluation: [
        { id: "VN-184", title: "Data enrichment", company: "Apex Labs", value: "$35k", owner: "Jordan", nextStep: "Security review", daysInStage: 3, probability: 40 },
        { id: "VN-185", title: "Vendor portal", company: "Nimbus Ops", value: "$62k", owner: "Sam", nextStep: "Schedule demo", daysInStage: 1, probability: 60 },
    ],
    negotiation: [
        { id: "VN-176", title: "Analytics platform", company: "Northwind", value: "$120k", owner: "Taylor", nextStep: "Counterproposal", daysInStage: 5, probability: 75 },
        { id: "VN-179", title: "Observability", company: "Helios", value: "$78k", owner: "Riley", nextStep: "Redlines", daysInStage: 2, probability: 80 },
    ],
    approved: [
        { id: "VN-161", title: "AI co-pilot", company: "Drift", value: "$54k", owner: "Jordan", nextStep: "Send order form", daysInStage: 1, probability: 90 },
    ],
    order: [
        { id: "VN-143", title: "Payments gateway", company: "Stripe", value: "$210k", owner: "Casey", nextStep: "Awaiting signature", daysInStage: 7, probability: 95 },
    ],
    closed: [
        { id: "VN-128", title: "HRIS upgrade", company: "Acme", value: "$180k", owner: "Morgan", nextStep: "Live", daysInStage: 14, probability: 100 },
    ],
};

const automationRules = [
    { name: "Stage → Negotiation", action: "Email template: Pricing counter", icon: Mail, active: true },
    { name: "Stage → Approved", action: "Assign to Legal queue", icon: Settings, active: true },
    { name: "Stage → Order", action: "Send order form + invoice request", icon: FileText, active: true },
    { name: "Stage → Closed", action: "Trigger onboarding playbook", icon: Play, active: false },
];

const templates = [
    { name: "Follow-up", description: "Light nudge after demo", scope: "Pipeline", usage: 142 },
    { name: "Reminder", description: "Renewal reminder sequence", scope: "Pipeline", usage: 87 },
    { name: "Negotiation", description: "Pricing and terms counter", scope: "Pipeline", usage: 56 },
    { name: "Request for quote", description: "Ask for formal quote", scope: "Pipeline", usage: 203 },
    { name: "Request for invoice", description: "Collect invoice for PO", scope: "Pipeline", usage: 91 },
    { name: "Delivery confirmation", description: "Confirm delivery & acceptance", scope: "Pipeline", usage: 45 },
];

export default function PipelinesPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [showScrollArrows, setShowScrollArrows] = useState(false);
    const totalValue = stages.reduce((sum, stage) => sum + parseFloat(stage.value.replace('$', '').replace('k', '')), 0);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Fixed Header */}
            <div className="sticky top-0 z-10 border-b bg-white px-4 py-3 md:px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 max-w-full">
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900 truncate">Deal Pipeline</h1>
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                                {stages.reduce((acc, stage) => acc + stage.count, 0)} deals
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm truncate">
                            Total value: <span className="font-semibold text-gray-900">${totalValue}k</span>
                            <span className="mx-2">•</span>
                            Drag deals between stages to update
                        </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                        <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                            <Filter className="h-4 w-4" />
                            Filter
                        </button>
                        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                            <Users className="h-4 w-4" />
                            Team
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 whitespace-nowrap">
                            <Plus className="h-4 w-4" />
                            Add deal
                        </button>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="min-w-0">
                                <p className="text-xs text-gray-600 truncate">Total value</p>
                                <p className="text-lg font-bold text-gray-900 truncate">${totalValue}k</p>
                            </div>
                            <DollarSign className="h-4 w-4 text-green-600 flex-shrink-0" />
                        </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="min-w-0">
                                <p className="text-xs text-gray-600 truncate">Win rate</p>
                                <p className="text-lg font-bold text-gray-900 truncate">42%</p>
                            </div>
                            <TrendingUp className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="min-w-0">
                                <p className="text-xs text-gray-600 truncate">Avg. deal size</p>
                                <p className="text-lg font-bold text-gray-900 truncate">$98k</p>
                            </div>
                            <Tag className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="min-w-0">
                                <p className="text-xs text-gray-600 truncate">Avg. cycle</p>
                                <p className="text-lg font-bold text-gray-900 truncate">34 days</p>
                            </div>
                            <Calendar className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="px-4 py-4 md:px-6 md:py-6 max-w-full overflow-hidden">
                {/* Pipeline Board */}
                <div className="relative mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Pipeline Stages</h2>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Move className="h-4 w-4" />
                            <span>Drag to move deals</span>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Optional Scroll Arrows */}
                        <div className="hidden lg:flex absolute left-0 top-0 bottom-0 z-20 items-center">
                            <button className="p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 -ml-2">
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="overflow-x-auto pb-4 -mx-2 px-2">
                            <div className="flex gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-4">
                                {stages.map((stage) => (
                                    <div key={stage.key} className="w-80 lg:w-full flex-shrink-0">
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className={`px-2 py-1 text-xs font-medium rounded ${stage.color}`}>
                                                    {stage.count}
                                                </span>
                                                <h3 className="font-semibold text-gray-900 text-sm truncate">{stage.name}</h3>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-900 whitespace-nowrap">{stage.value}</span>
                                                <MoreVertical className="h-4 w-4 text-gray-400 cursor-pointer flex-shrink-0" />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {cardsByStage[stage.key].map((card) => (
                                                <div
                                                    key={card.id}
                                                    className="bg-white rounded-lg border border-gray-200 p-4 shadow-xs hover:shadow-md transition-shadow cursor-move group min-w-0"
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="min-w-0">
                                                            <p className="font-medium text-gray-900 text-sm truncate">{card.title}</p>
                                                            <p className="text-xs text-gray-600 truncate">{card.company}</p>
                                                        </div>
                                                        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                                                    </div>

                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="font-bold text-gray-900 text-sm">{card.value}</span>
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                                <span className="text-xs font-medium text-blue-700">
                                                                    {card.owner.charAt(0)}
                                                                </span>
                                                            </div>
                                                            <span className="text-xs text-gray-600 truncate max-w-[60px]">{card.owner}</span>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className="flex justify-between text-xs text-gray-600">
                                                            <span>Probability</span>
                                                            <span className="font-medium">{card.probability}%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                            <div
                                                                className="bg-green-600 h-1.5 rounded-full"
                                                                style={{ width: `${card.probability}%` }}
                                                            />
                                                        </div>
                                                        <div className="flex justify-between text-xs text-gray-500">
                                                            <span className="flex items-center gap-1 truncate">
                                                                <Calendar className="h-3 w-3 flex-shrink-0" />
                                                                <span className="truncate">{card.daysInStage}d</span>
                                                            </span>
                                                            <span className="text-blue-600 font-medium text-xs truncate pl-2">Next: {card.nextStep}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <button className="w-full py-2 text-gray-500 text-sm font-medium rounded-lg border border-dashed border-gray-300 hover:border-gray-400 hover:text-gray-700 whitespace-nowrap">
                                                + Add deal to {stage.name}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Optional Scroll Arrows */}
                        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 z-20 items-center">
                            <button className="p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 -mr-2">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Automation & Templates */}
                <div className="grid gap-6 lg:grid-cols-2 max-w-full">
                    <section className="bg-white rounded-xl border p-4 md:p-5">
                        <div className="flex items-start justify-between mb-6">
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <Wand2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                    <h2 className="text-lg font-semibold text-gray-900 truncate">Stage Automations</h2>
                                </div>
                                <p className="text-sm text-gray-600 truncate">Rules triggered when deals move stages</p>
                            </div>
                            <button className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-100 whitespace-nowrap flex-shrink-0 ml-2">
                                + Add rule
                            </button>
                        </div>

                        <div className="space-y-3">
                            {automationRules.map((rule) => {
                                const Icon = rule.icon;
                                return (
                                    <div key={rule.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 min-w-0">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className={`p-2 rounded ${rule.active ? 'bg-green-100' : 'bg-gray-100'} flex-shrink-0`}>
                                                <Icon className={`h-4 w-4 ${rule.active ? 'text-green-600' : 'text-gray-400'}`} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-medium text-gray-900 truncate">{rule.name}</p>
                                                <p className="text-sm text-gray-600 truncate">{rule.action}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                                            <div className={`w-2 h-2 rounded-full ${rule.active ? 'bg-green-500' : 'bg-gray-300'}`} />
                                            <MoreVertical className="h-4 w-4 text-gray-400 cursor-pointer" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="flex items-start gap-3">
                                <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-blue-900">Pro tip</p>
                                    <p className="text-sm text-blue-700">Add SLA reminders, owner reassignment, or task creation as stage-based automations.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-xl border p-4 md:p-5">
                        <div className="flex items-start justify-between mb-6">
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                    <h2 className="text-lg font-semibold text-gray-900 truncate">Email Templates</h2>
                                </div>
                                <p className="text-sm text-gray-600 truncate">Quickly insert templates when updating deals</p>
                            </div>
                            <button className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-100 whitespace-nowrap flex-shrink-0 ml-2">
                                + Create
                            </button>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {templates.map((tpl) => (
                                <div key={tpl.name} className="p-3 md:p-4 border rounded-lg hover:border-blue-200 hover:bg-blue-50/50 min-w-0">
                                    <div className="flex justify-between items-start mb-2 min-w-0">
                                        <div className="min-w-0 pr-2">
                                            <p className="font-medium text-gray-900 truncate">{tpl.name}</p>
                                            <p className="text-sm text-gray-600 truncate">{tpl.description}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0">
                                            <Play className="h-3 w-3" />
                                            {tpl.usage}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between min-w-0">
                                        <span className="text-xs text-gray-500 truncate">{tpl.scope}</span>
                                        <button className="text-xs text-blue-600 font-medium hover:text-blue-700 whitespace-nowrap flex-shrink-0 ml-2">
                                            Use →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                            <Move className="h-4 w-4 text-gray-400 flex-shrink-0" />
                            <span className="truncate">Drag deals between stages to trigger automations and email sequences</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}