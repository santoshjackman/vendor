// frontend/src/app/dashboard/layout.tsx
"use client";

import Sidebar from "@/components/layout/Sidebar";
import React, { useEffect, useState } from "react";
import { Bell, Search, Settings } from "lucide-react";

type ThemeMode = "light" | "dark";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<ThemeMode>("light");
    const [mounted, setMounted] = useState(false);

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
        const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

        applyTheme(initialTheme, false);
        setMounted(true);
    }, []);

    // Watch for system theme changes
    useEffect(() => {
        if (!mounted) return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem("theme")) {
                applyTheme(e.matches ? "dark" : "light", false);
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [mounted]);

    const applyTheme = (mode: ThemeMode, persist = true) => {
        setTheme(mode);

        if (mode === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.style.backgroundColor = "#121212";
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.style.backgroundColor = "";
        }

        if (persist) {
            localStorage.setItem("theme", mode);
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
    };

    // Create theme context
    const themeContext = {
        theme,
        toggleTheme,
        applyTheme,
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="flex min-h-screen bg-gray-50 dark:bg-[#121212]">
                <div className="flex-1 p-8">
                    <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-4" />
                    <div className="h-4 w-64 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                </div>
            </div>
        );
    }

    return (
        <div className="app-shell flex min-h-screen bg-[#d8d8d8] text-gray-900 dark:bg-[#121212] dark:text-gray-50">
            <Sidebar />
            <main className="flex-1 px-8 py-6">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:border-[#121212] dark:bg-white/10">
                    <div className="flex w-72 items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm dark:border-[#121212] dark:bg-[#121212]">
                        <Search className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                        <input
                            type="text"
                            placeholder="Search vendors, pipelines, tasks..."
                            className="w-full border-none text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none dark:bg-transparent dark:text-gray-100 dark:placeholder:text-gray-400"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:bg-gray-700"
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            {theme === "dark" ? (
                                "🌞 Light"
                            ) : (
                                "🌙 Dark"
                            )}
                        </button>
                        <button className="relative rounded-full border border-gray-200 bg-white p-2 shadow-sm hover:border-gray-300 dark:border-[#121212] dark:bg-[#121212]">
                            <Bell className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-500" />
                        </button>
                        <div className="relative">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=VendorAI"
                                alt="Profile"
                                className="h-10 w-10 rounded-full border border-gray-200 bg-white object-cover shadow-sm dark:border-[#121212] dark:bg-[#121212]"
                            />
                            <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border border-white bg-emerald-500" />
                        </div>
                    </div>
                </div>
                {children}
            </main>
        </div>
    );
}