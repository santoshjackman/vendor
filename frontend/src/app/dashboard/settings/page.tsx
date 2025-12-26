// frontend/src/app/dashboard/settings/page.tsx
"use client";

import { Bell, KeyRound, Link2, Settings, ShieldCheck, User, Wallet } from "lucide-react";

const settings = [
    { title: "User profile", description: "Name, photo, role, preferences", icon: User },
    { title: "Organization settings", description: "Domains, teams, permissions", icon: ShieldCheck },
    { title: "API keys", description: "Create and rotate keys", icon: KeyRound },
    { title: "Integrations", description: "Gmail, Outlook, Calendar, Accounting tools", icon: Link2 },
    { title: "Email templates", description: "Alternate location if needed", icon: Settings },
    { title: "Billing preferences", description: "Currency, cycles, exports", icon: Wallet },
    { title: "Vendor categories", description: "Segments and classifications", icon: Settings },
    { title: "Pipeline stage customization", description: "Stage order and names", icon: Settings },
    { title: "Notification settings", description: "Configure alerts across modules", icon: Bell },
];

export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-200">
            <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-8">
                    <header className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                                Settings
                            </p>
                            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                                Management blocks
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300">
                                User profile, org settings, API keys, integrations, email templates, billing preferences, vendor categories, pipeline stages, notifications.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
                                <Settings className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                                <span>Admin</span>
                            </div>
                        </div>
                    </header>

                    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {settings.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-[#353935] dark:hover:border-gray-700"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                                {item.title}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-700 transition-colors duration-200 group-hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:group-hover:bg-gray-700">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </div>
        </div>
    );
}