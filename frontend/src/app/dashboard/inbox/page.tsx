import { Activity, Mail, MessageCircle, NotebookPen, Sparkles } from "lucide-react";

const threads = [
    { subject: "Renewal timeline + pricing", from: "Apex Labs", status: "Open", channel: "Email", time: "2h ago" },
    { subject: "Follow-up: security questionnaire", from: "Helios Security", status: "Waiting", channel: "Email", time: "5h ago" },
    { subject: "Internal note: prep for QBR", from: "You", status: "Note", channel: "Note", time: "1d ago" },
];

const automations = [
    "Auto-create follow-up task after 24h of no reply",
    "Route escalations from Finance to Billing queue",
    "AI draft responses for renewal objections",
];

export default function InboxPage() {
    return (
        <div className="space-y-8">
            <header className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Inbox</p>
                    <h1 className="text-3xl font-semibold text-gray-900">Email + Internal Notes</h1>
                    <p className="text-gray-600">
                        Unified communication feed: emails, internal notes, (future) SMS, and automations for follow-ups with AI suggestions.
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">AI auto-reply ready</span>
                </div>
            </header>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Unified feed</h2>
                        <p className="text-sm text-gray-600">Emails + internal notes in one place</p>
                    </div>
                    <Mail className="h-5 w-5 text-indigo-500" />
                </div>
                <div className="mt-4 space-y-3">
                    {threads.map((thread) => (
                        <div key={thread.subject} className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                            <div>
                                <p className="font-semibold text-gray-900">{thread.subject}</p>
                                <p className="text-sm text-gray-600">{thread.from}</p>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-gray-600">
                                <span className="rounded-full bg-white px-3 py-1">{thread.channel}</span>
                                <span className="rounded-full bg-white px-3 py-1">{thread.status}</span>
                                <span className="text-gray-500">{thread.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Automations</h2>
                        <p className="text-sm text-gray-600">Triggered by follow-ups, not templates</p>
                    </div>
                    <Activity className="h-5 w-5 text-emerald-600" />
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {automations.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                            <NotebookPen className="mt-0.5 h-4 w-4 text-gray-500" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <MessageCircle className="h-4 w-4 text-indigo-500" />
                    Inbox is for conversations; templates stay under Pipelines → Templates.
                </div>
            </section>
        </div>
    );
}
