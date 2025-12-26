"use client";

import {
    LayoutDashboard,
    Users,
    Kanban,
    Inbox,
    Calendar,
    CheckSquare,
    CreditCard,
    LineChart,
    Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Vendors", href: "/dashboard/vendors", icon: Users },
    { name: "Pipelines", href: "/dashboard/pipelines", icon: Kanban },
    { name: "Inbox", href: "/dashboard/inbox", icon: Inbox },
    { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Analytics", href: "/dashboard/analytics", icon: LineChart },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/dashboard") return pathname === "/dashboard";
        return pathname.startsWith(href);
    };

    return (
        <aside className="w-64 border-r border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-white/10">
            <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">vendorV1</h1>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1 text-gray-900 dark:text-gray-100">
                {nav.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition border ${
                                active
                                    ? "bg-transparent text-gray-900 border-blue-300 font-semibold dark:bg-blue-50/10 dark:text-white dark:border-blue-200/30"
                                    : "text-gray-900 hover:bg-gray-100 hover:text-gray-900 border-transparent dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                            }`}
                        >
                            <Icon
                                className={`h-5 w-5 ${
                                    active ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-gray-300"
                                }`}
                            />
                            <span className={active ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-gray-300"}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
