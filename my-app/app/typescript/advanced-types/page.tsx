export default function AdvancedTypesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Advanced Types</h1>
        <p className="text-gray-600">Beyond the basics, TypeScript offers powerful type-level programming features including intersection types, conditional types, template literal types, and more.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Intersection Types</h2>
        <p className="text-gray-600">Combine multiple types into one using <code className="bg-gray-100 px-1 rounded">&amp;</code>. The resulting type has all properties of all types.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type Employee = { name: string; department: string };
type Manager = { reports: Employee[] };

type ManagerEmployee = Employee & Manager;

const mgr: ManagerEmployee = {
  name: "Alice",
  department: "Engineering",
  reports: [],
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Template Literal Types</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type EventName = "click" | "focus" | "blur";
type EventHandler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onFocus" | "onBlur"`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Infer in Conditional Types</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type UnpackArray<T> = T extends Array<infer Item> ? Item : T;

type Numbers = UnpackArray<number[]>; // number
type Str = UnpackArray<string>;       // string (not an array)`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Discriminated Unions</h2>
        <p className="text-gray-600">A pattern where a shared literal property acts as a type discriminant.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}`}</pre>
      </section>
    </div>
  );
}
