import { redirect } from "next/navigation";

export default function Home() {
    redirect("/dashboard");
}

/*
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">VF</span>
                            </div>
                            <span className="text-2xl font-bold text-gray-800">VendorFlow</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => setActiveTab("home")}
                                className={`font-medium ${activeTab === "home" ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}`}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => setActiveTab("features")}
                                className={`font-medium ${activeTab === "features" ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}`}
                            >
                                Features
                            </button>
                            <button
                                onClick={() => setActiveTab("pricing")}
                                className={`font-medium ${activeTab === "pricing" ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}`}
                            >
                                Pricing
                            </button>
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`font-medium ${activeTab === "about" ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}`}
                            >
                                About
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/login" className="px-5 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105"
                            >
                                Sign up free
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                            🚀 Built for SMB Sales Teams
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Automate Vendor Follow-Ups &
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Never Miss a Follow-Up</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Streamline your vendor communications, automate follow-ups, and never miss a sales opportunity again. Designed specifically for small and medium
                            businesses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/signup"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all hover:scale-105 text-center"
                            >
                                Start 14-Day Free Trial
                            </Link>
                            <Link href="/demo" className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border hover:shadow-lg transition-all text-center">
                                📹 Watch Demo (2 min)
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4 pt-4">
                            <div className="flex items-center">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <img
                                            key={i}
                                            src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&${i}`}
                                            alt="Customer avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600">
                                <span className="font-semibold text-gray-900">250+</span> SMBs trust VendorFlow
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 border transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-gray-100 rounded-lg p-4">
                                        <div className="text-sm text-gray-500">Automated Follow-Up Sequence</div>
                                        <div className="font-medium">Vendor Payment Reminder</div>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { time: "Day 1", action: "Initial email sent", status: "✅" },
                                            { time: "Day 3", action: "Follow-up SMS", status: "📱" },
                                            { time: "Day 7", action: "Phone call scheduled", status: "⏰" },
                                            { time: "Day 10", action: "Final reminder", status: "📨" },
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-blue-600">
                                                        {step.time.split(" ")[1]}
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">{step.action}</div>
                                                        <div className="text-sm text-gray-500">{step.time}</div>
                                                    </div>
                                                </div>
                                                <div className="text-2xl">{step.status}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium text-green-800">Success Rate</div>
                                                <div className="text-2xl font-bold text-green-900">94%</div>
                                            </div>
                                            <div className="text-5xl">📈</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                            <div className="text-sm text-gray-500">Response Rate</div>
                            <div className="text-2xl font-bold text-blue-600">+67%</div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                            <div className="text-sm text-gray-500">Time Saved</div>
                            <div className="text-2xl font-bold text-green-600">15 hrs/week</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for Vendor Management</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">From automated follow-ups to intelligent insights, weve got your sales process covered</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "🤖", title: "Smart Automation", desc: "Set up automated follow-up sequences based on vendor behavior" },
                            { icon: "📊", title: "Real-time Analytics", desc: "Track response rates, engagement, and conversion metrics" },
                            { icon: "📞", title: "Multi-channel", desc: "Email, SMS, and voice follow-ups all in one platform" },
                            { icon: "🔔", title: "Smart Reminders", desc: "Never miss important vendor deadlines or meetings" },
                            { icon: "📑", title: "Template Library", desc: "Pre-built templates for different vendor scenarios" },
                            { icon: "🔒", title: "Secure & Compliant", desc: "GDPR compliant with enterprise-grade security" },
                        ].map((feature, i) => (
                            <div key={i} className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border hover:shadow-xl transition-shadow">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
                        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Vendor Follow-ups?</h2>
                        <p className="text-xl text-blue-100 mb-8">Join thousands of SMBs saving hours every week with automated vendor communications</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/signup" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors">
                                Get Started Free
                            </Link>
                            <Link href="/demo" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                                Schedule a Demo
                            </Link>
                        </div>
                        <p className="mt-6 text-blue-200 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg"></div>
                                <span className="text-2xl font-bold">VendorFlow</span>
                            </div>
                            <p className="text-gray-400">Automating vendor communications for SMB sales teams worldwide.</p>
                        </div>
                        {[
                            { title: "Product", links: ["Features", "Pricing", "Use Cases", "Updates"] },
                            { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
                            { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
                        ].map((column, i) => (
                            <div key={i}>
                                <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                                <ul className="space-y-2">
                                    {column.links.map((link, j) => (
                                        <li key={j}>
                                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>© 2025 VendorFlow. All rights reserved. Made for SMB sales teams.</p>
                    </div>
                </div>
            </footer>
            <div className="fixed bottom-8 right-8 z-50">
                <Link href="/dashboard" className="inline-block bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 font-medium">
                    Go to Dashboard
                </Link>
            </div>
        </main>
    );
}
*/
