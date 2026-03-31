export default function ArraysPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Arrays</h1>
        <p className="text-gray-600">TypeScript has a specific syntax for typing arrays. There are two ways to define array types.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Array Type Syntax</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Method 1: type[]
const names: string[] = ["Alice", "Bob", "Charlie"];

// Method 2: Array<type> (generic)
const numbers: Array<number> = [1, 2, 3];`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Readonly Arrays</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">readonly</code> to prevent arrays from being changed after creation.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on 'readonly string[]'`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type Inference in Arrays</h2>
        <p className="text-gray-600">TypeScript can infer the type of an array if it has values.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const numbers = [1, 2, 3]; // inferred as number[]
numbers.push(4);           // OK
numbers.push("string");    // Error: Argument of type 'string' not assignable to 'number'`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Mixed Type Arrays</h2>
        <p className="text-gray-600">Use union types to allow multiple types in an array.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const mixed: (string | number)[] = [1, "two", 3, "four"];`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Multidimensional Arrays</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];`}</pre>
      </section>
    </div>
  );
}
