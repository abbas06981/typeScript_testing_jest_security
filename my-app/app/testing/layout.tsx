import Sidebar from "../components/Sidebar";

const testingLinks = [
  { href: "/testing", label: "Overview" },
  { href: "/testing/jest", label: "Jest" },
  { href: "/testing/unit", label: "Unit Testing" },
  { href: "/testing/integration", label: "Integration" },
];

export default function TestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <Sidebar links={testingLinks} title="Testing" />
      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  );
}
