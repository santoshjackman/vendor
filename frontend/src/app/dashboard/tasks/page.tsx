import { Bell, CheckCircle2, ClipboardList, Mail, Phone, Users } from "lucide-react";

const tasks = [
    { title: "Call Apex Labs about renewal uplift", category: "Calls", owner: "You", due: "Today", related: "Apex Labs" },
    { title: "Email redlines to legal", category: "Emails", owner: "Jordan", due: "Tomorrow", related: "Northwind" },
    { title: "Prep QBR deck", category: "Internal Ops", owner: "Taylor", due: "Friday", related: "Drift" },
    { title: "Schedule vendor meeting", category: "Meetings", owner: "Sam", due: "Next week", related: "Helios" },
];

export default function TasksPage() {
    return (
        <div className="space-y-8">
            <header className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Tasks</p>
                    <h1 className="text-3xl font-semibold text-gray-900">Tactical actions</h1>
                    <p className="text-gray-600">
                        Daily task list tied to vendors or pipeline stages. Tasks are actions: not templates, not documents.
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                    <ClipboardList className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">Task reminders on</span>
                </div>
            </header>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Today & upcoming</h2>
                        <p className="text-sm text-gray-600">Assigned by vendor or pipeline stage</p>
                    </div>
                    <Bell className="h-5 w-5 text-amber-500" />
                </div>
                <div className="mt-4 space-y-3">
                    {tasks.map((task) => (
                        <div key={task.title} className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="font-semibold text-gray-900">{task.title}</p>
                                <p className="text-sm text-gray-600">{task.related}</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                                <span className="rounded-full bg-white px-3 py-1">{task.category}</span>
                                <span className="rounded-full bg-white px-3 py-1">Owner: {task.owner}</span>
                                <span className="rounded-full bg-white px-3 py-1">Due {task.due}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Task categories: Calls, Emails, Meetings, Internal Ops. Triggers can open Inbox threads or set Calendar holds.
                    <Phone className="h-4 w-4 text-gray-500" />
                    <Mail className="h-4 w-4 text-gray-500" />
                    <Users className="h-4 w-4 text-gray-500" />
                </div>
            </section>
        </div>
    );
}
