import { ReactNode } from "react";

export default function AuthShell({
                                       title,
                                       subtitle,
                                       children,
                                   }: {
    title: string;
    subtitle?: string;
    children: ReactNode;
}) {
    return (
        <main className="min-h-screen grid lg:grid-cols-2 bg-slate-50 text-slate-900">
            <section className="hidden lg:flex flex-col justify-between p-12 bg-white border-r border-slate-100">
                <div>
                    <div className="text-sm font-semibold tracking-tight uppercase text-slate-700">vendorV1</div>
                    <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900">
                        Run daily operations. Without chaos.
                    </h1>
                    <p className="mt-4 text-slate-600 max-w-md">
                        Tasks, follow-ups, vendors, pipelines, billing, analytics — one system built for operators.
                    </p>
                    <ul className="mt-8 space-y-3 text-sm text-slate-700">
                        <li>• Clear task ownership and execution</li>
                        <li>• Structured follow-ups and inbox</li>
                        <li>• Real visibility into pipeline and cash flow</li>
                    </ul>
                </div>
                <div className="text-xs text-slate-500">
                    Encrypted • Reliable • Export anytime • No credit card required
                </div>
            </section>

            <section className="flex items-center justify-center p-6">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
                    {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}
                    <div className="mt-8">{children}</div>
                </div>
            </section>
        </main>
    );
}
