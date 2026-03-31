export default function ConditionalTypesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Conditional Types</h1>
        <p className="text-gray-600">Conditional types select one of two possible types based on a condition expressed as a type relationship test. They look like <code className="bg-gray-100 px-1 rounded">T extends U ? X : Y</code>.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Basic Syntax</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Conditional with infer</h2>
        <p className="text-gray-600">The <code className="bg-gray-100 px-1 rounded">infer</code> keyword lets you extract a type from within a conditional type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(): string { return "hello"; }
type Greeting = ReturnType<typeof greet>; // string`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Distributive Conditional Types</h2>
        <p className="text-gray-600">When a conditional type acts on a union, it distributes over each member.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type ToArray<T> = T extends any ? T[] : never;

type StrOrNumArray = ToArray<string | number>;
// string[] | number[]  (distributed)`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Practical: NonNullable</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Built-in utility type implemented with conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

type A = NonNullable<string | null | undefined>; // string`}</pre>
      </section>
    </div>
  );
}
