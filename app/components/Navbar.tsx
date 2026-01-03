"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className="bg-slate-800 border-b border-slate-700 shado-lg">
      <div className="max-w-7xl mx-auto p-4">
        <div className="h-16 flex justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-primary text-xl font-bold">
              Event Planner
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/events"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Events
            </Link>
            <Link
              href="/events/create"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Create Event
            </Link>
            <Link
              href="/dashboard"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Dashboard
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-foreground hover:text-primary focus:outline-none focus:text-primary"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {/* Replace text with Hamburger icon. */}
              Click
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/events"
                className=" block text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Events
              </Link>
              <Link
                href="/events/create"
                className="block text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Create Event
              </Link>
              <Link
                href="/dashboard"
                className="block text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
