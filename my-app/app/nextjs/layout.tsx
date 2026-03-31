import Sidebar from "../components/Sidebar";

const nextjsLinks = [
  { href: "/nextjs", label: "Overview" },
  { href: "/nextjs/app-router", label: "App Router" },
  { href: "/nextjs/server-components", label: "Server Components" },
  { href: "/nextjs/data-fetching", label: "Data Fetching" },
];

export default function NextjsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      <Sidebar links={nextjsLinks} title="Next.js" />
      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  );
}
