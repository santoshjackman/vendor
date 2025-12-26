import { CalendarClock, CalendarRange, CheckSquare, Mail } from "lucide-react";

const events = [
    { title: "Follow-up: Apex Labs renewal", when: "Today · 3:00 PM", type: "Follow-up" },
    { title: "Procurement deadline - Northwind", when: "Tomorrow · 11:00 AM", type: "Procurement" },
    { title: "Vendor renewal date - Drift", when: "Fri · 9:00 AM", type: "Renewal" },
    { title: "Upcoming invoice reminder - INV-2312", when: "Mon · 10:00 AM", type: "Invoice" },
    { title: "CS + Vendor sync", when: "Tue · 1:00 PM", type: "Meeting" },
];

export default function CalendarPage() {
    return (
        <div className="space-y-8">
            <header className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Calendar</p>
                    <h1 className="text-3xl font-semibold text-gray-900">Follow-ups & vendor meetings</h1>
                    <p className="text-gray-600">
                        Follow-up dates, procurement deadlines, renewal dates, invoice reminders, and daily overview. Integrates with Tasks + Inbox.
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                    <CalendarRange className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">Synced</span>
                </div>
            </header>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Upcoming</h2>
                        <p className="text-sm text-gray-600">Pipeline-linked reminders</p>
                    </div>
                    <CalendarClock className="h-5 w-5 text-indigo-500" />
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {events.map((event) => (
                        <div key={event.title} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                            <p className="font-semibold text-gray-900">{event.title}</p>
                            <p className="text-sm text-gray-600">{event.when}</p>
                            <p className="text-xs text-gray-500">{event.type}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <CheckSquare className="h-4 w-4 text-emerald-600" />
                    Tasks sync here; follow-ups generate inbox threads when due.
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                    <Mail className="h-4 w-4 text-indigo-500" />
                    Email reminders can trigger AI suggestions in Inbox.
                </div>
            </section>
        </div>
    );
}
