"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/typescript", label: "TypeScript" },
  { href: "/testing", label: "Testing" },
  { href: "/react", label: "React" },
  { href: "/nextjs", label: "Next.js" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex items-center gap-8 shadow-md">
      <Link href="/" className="text-lg font-bold tracking-tight text-white mr-4">
        DevDocs
      </Link>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium px-3 py-1.5 rounded transition-colors ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
