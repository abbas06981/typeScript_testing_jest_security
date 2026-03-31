import Sidebar from "../components/Sidebar";

const reactLinks = [
  { href: "/react", label: "Overview" },
  { href: "/react/components", label: "Components" },
  { href: "/react/hooks", label: "Hooks" },
  { href: "/react/state-management", label: "State Management" },
];

export default function ReactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      <Sidebar links={reactLinks} title="React" />
      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  );
}
