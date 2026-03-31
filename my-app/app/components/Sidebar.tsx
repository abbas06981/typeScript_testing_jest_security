"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLink {
  href: string;
  label: string;
}

interface SidebarProps {
  links: SidebarLink[];
  title: string;
}

export default function Sidebar({ links, title }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 bg-gray-50 border-r border-gray-200 min-h-full px-4 py-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        {title}
      </p>
      <ul className="space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-3 py-2 rounded text-sm transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white font-medium"
                    : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
