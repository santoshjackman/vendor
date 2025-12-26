import { BarChart3, CreditCard, FileText, Receipt, TrendingUp } from "lucide-react";

const invoiceTable = [
    { id: "INV-2401", vendor: "Apex Labs", amount: "$35,000", status: "Overdue", due: "Dec 05" },
    { id: "INV-2402", vendor: "Northwind", amount: "$58,000", status: "Pending", due: "Dec 18" },
    { id: "INV-2403", vendor: "Helios", amount: "$42,000", status: "Paid", due: "Nov 30" },
];

const spend = [
    { label: "Monthly vendor spend", value: "$420K", note: "vs $400K budget" },
    { label: "Budget forecast", value: "$4.9M", note: "FY estimate" },
    { label: "Overdue invoices", value: "3", note: "Reminders queued" },
    { label: "Payments processed", value: "124", note: "YTD" },
];

export default function BillingPage() {
    return (
        <div className="space-y-8">
            <header className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Billing</p>
                    <h1 className="text-3xl font-semibold text-gray-900">Global finance</h1>
                    <p className="text-gray-600">
                        All invoices, receipts, purchase orders, payments, exports, spend analytics, forecasting, and overdue reminders.
                        Global Billing ≠ Vendor Billing.
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                    <CreditCard className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">System-wide</span>
                </div>
            </header>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {spend.map((item) => (
                        <div key={item.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                            <p className="text-xs uppercase text-gray-500">{item.label}</p>
                            <p className="text-xl font-semibold text-gray-900">{item.value}</p>
                            <p className="text-xs text-gray-500">{item.note}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Invoices</h2>
                        <p className="text-sm text-gray-600">All vendors</p>
                    </div>
                    <Receipt className="h-5 w-5 text-indigo-500" />
                </div>
                <div className="mt-4 space-y-2">
                    {invoiceTable.map((row) => (
                        <div key={row.id} className="grid grid-cols-2 items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 sm:grid-cols-5">
                            <span className="font-semibold text-gray-900">{row.id}</span>
                            <span className="text-sm text-gray-600">{row.vendor}</span>
                            <span className="text-sm text-gray-900">{row.amount}</span>
                            <span className="text-xs text-gray-500">Due {row.due}</span>
                            <span className="rounded-full bg-white px-3 py-1 text-xs text-gray-700">{row.status}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <BarChart3 className="h-4 w-4 text-emerald-600" />
                    Monthly vendor spend + forecasting, vendor-wise analytics, and accounting exports live here.
                </div>
            </section>

            <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Exports & reminders</h2>
                        <p className="text-sm text-gray-600">Accounting sync + overdue nudges</p>
                    </div>
                    <TrendingUp className="h-5 w-5 text-indigo-500" />
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-700">
                    <span className="rounded-full bg-gray-50 px-3 py-1">Overdue invoice reminders</span>
                    <span className="rounded-full bg-gray-50 px-3 py-1">Accounting exports</span>
                    <span className="rounded-full bg-gray-50 px-3 py-1">Vendor-wise spend analytics</span>
                    <span className="rounded-full bg-gray-50 px-3 py-1">Budget forecasting</span>
                    <span className="rounded-full bg-gray-50 px-3 py-1">Receipts & POs</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <FileText className="h-4 w-4 text-indigo-500" />
                    Use vendor-level Billing tab for vendor-specific invoices; this view is global.
                </div>
            </section>
        </div>
    );
}
