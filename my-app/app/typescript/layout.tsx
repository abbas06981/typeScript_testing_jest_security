import Sidebar from "../components/Sidebar";

const typescriptLinks = [
  { href: "/typescript", label: "Overview" },
  { href: "/typescript/basics", label: "Basics" },
  { href: "/typescript/advanced-types", label: "Advanced Types" },
  { href: "/typescript/generics", label: "Generics" },
];

export default function TypeScriptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <Sidebar links={typescriptLinks} title="TypeScript" />
      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  );
}
