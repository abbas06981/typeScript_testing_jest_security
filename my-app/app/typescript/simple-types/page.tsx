export default function SimpleTypesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Simple Types</h1>
        <p className="text-gray-600">There are three main primitives in JavaScript and TypeScript: <strong>boolean</strong>, <strong>number</strong>, and <strong>string</strong>. There are also 2 less common primitives: <strong>bigint</strong> and <strong>symbol</strong>.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">boolean</h2>
        <p className="text-gray-600">A simple true/false value.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let isDone: boolean = false;`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">number</h2>
        <p className="text-gray-600">All numbers in TypeScript are floating point values.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">string</h2>
        <p className="text-gray-600">Textual data. Use single quotes, double quotes, or template literals.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let color: string = "blue";
let fullName: string = "Bob Bobbington";
let sentence: string = \`Hello, my name is \${fullName}.\`;`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">bigint</h2>
        <p className="text-gray-600">Used for very large integers.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let big: bigint = 100n;`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">symbol</h2>
        <p className="text-gray-600">Used to create a globally unique reference.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const firstName = Symbol("name");
const secondName = Symbol("name");
// firstName === secondName → false`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type Assignment</h2>
        <p className="text-gray-600">TypeScript supports two ways to assign types: explicit and implicit.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Explicit
let firstName: string = "Dylan";

// Implicit (TypeScript infers the type)
let lastName = "Dylan"; // type inferred as string`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type Error Example</h2>
        <p className="text-gray-600">TypeScript will report an error if you try to assign a wrong type:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let firstName: string = "Dylan";
firstName = 33; // Error: Type 'number' is not assignable to type 'string'`}</pre>
      </section>
    </div>
  );
}
