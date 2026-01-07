import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Stethoscope, User, Calendar, Home, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Find a Doctor', path: '/', icon: Home },
        { name: 'Patient Dashboard', path: '/patient-dashboard', icon: User },
        { name: 'Doctor Dashboard', path: '/doctor-dashboard', icon: Calendar },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <Stethoscope className="h-6 w-6 text-primary" />
                                </div>
                                <span className="font-bold text-xl text-slate-800 hidden sm:block">Doctor Market IL</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:flex sm:space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={cn(
                                        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors",
                                        location.pathname === item.path
                                            ? "border-primary text-primary"
                                            : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                                    )}
                                >
                                    <item.icon className="w-4 h-4 mr-2" />
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="sm:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100"
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden bg-white border-b border-slate-200">
                        <div className="pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
                                        location.pathname === item.path
                                            ? "bg-primary/5 border-primary text-primary"
                                            : "border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700"
                                    )}
                                >
                                    <div className="flex items-center">
                                        <item.icon className="w-5 h-5 mr-3" />
                                        {item.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-slate-500">
                        © 2026 Doctor Marketplace Israel. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
