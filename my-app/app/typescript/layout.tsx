import Sidebar from "../components/Sidebar";

const typescriptLinks = [
  { href: "/typescript", label: "TS Home" },
  { href: "/typescript/introduction", label: "Introduction" },
  { href: "/typescript/get-started", label: "Get Started" },
  { href: "/typescript/simple-types", label: "Simple Types" },
  { href: "/typescript/explicit-inference", label: "Explicit & Inference" },
  { href: "/typescript/special-types", label: "Special Types" },
  { href: "/typescript/arrays", label: "Arrays" },
  { href: "/typescript/tuples", label: "Tuples" },
  { href: "/typescript/object-types", label: "Object Types" },
  { href: "/typescript/enums", label: "Enums" },
  { href: "/typescript/aliases-interfaces", label: "Aliases & Interfaces" },
  { href: "/typescript/union-types", label: "Union Types" },
  { href: "/typescript/functions", label: "Functions" },
  { href: "/typescript/casting", label: "Casting" },
  { href: "/typescript/classes", label: "Classes" },
  { href: "/typescript/basic-generics", label: "Basic Generics" },
  { href: "/typescript/utility-types", label: "Utility Types" },
  { href: "/typescript/keyof", label: "Keyof" },
  { href: "/typescript/null", label: "Null" },
  { href: "/typescript/definitely-typed", label: "Definitely Typed" },
  { href: "/typescript/ts5-updates", label: "TS 5 Updates" },
  { href: "/typescript/configuration", label: "Configuration" },
  { href: "/typescript/nodejs", label: "With Node.js" },
  { href: "/typescript/react", label: "With React" },
  { href: "/typescript/tooling", label: "Tooling" },
  { href: "/typescript/advanced-types", label: "Advanced Types" },
  { href: "/typescript/type-guards", label: "Type Guards" },
  { href: "/typescript/conditional-types", label: "Conditional Types" },
  { href: "/typescript/mapped-types", label: "Mapped Types" },
  { href: "/typescript/type-inference", label: "Type Inference" },
  { href: "/typescript/literal-types", label: "Literal Types" },
  { href: "/typescript/namespaces", label: "Namespaces" },
  { href: "/typescript/index-signatures", label: "Index Signatures" },
  { href: "/typescript/declaration-merging", label: "Declaration Merging" },
  { href: "/typescript/async-programming", label: "Async Programming" },
  { href: "/typescript/decorators", label: "Decorators" },
  { href: "/typescript/ts-in-js", label: "TS in JS Projects" },
  { href: "/typescript/migration", label: "Migration" },
  { href: "/typescript/error-handling", label: "Error Handling" },
  { href: "/typescript/best-practices", label: "Best Practices" },
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
