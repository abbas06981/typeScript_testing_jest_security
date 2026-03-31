export default function SpecialTypesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Special Types</h1>
        <p className="text-gray-600">TypeScript has special types that may not refer to a specific type of data: <strong>any</strong>, <strong>unknown</strong>, <strong>never</strong>, and <strong>undefined &amp; null</strong>.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type: any</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">any</code> is a type that disables type checking and effectively allows all types to be used. It should be avoided when possible.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let u = true;
u = "string"; // Error: Type 'string' not assignable to 'boolean'

let v: any = true;
v = "string"; // no error — any disables type checking`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type: unknown</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">unknown</code> is a similar but safer alternative to <code className="bg-gray-100 px-1 rounded">any</code>. TypeScript will prevent <code className="bg-gray-100 px-1 rounded">unknown</code> types from being used without first asserting or narrowing to a more specific type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let w: unknown = 1;
w = "string";   // no error
w = false;      // no error

let x: string = w; // Error: Type 'unknown' is not assignable to 'string'

// Must narrow the type first
if (typeof w === "string") {
  let x: string = w; // OK
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type: never</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">never</code> effectively throws an error whenever it is defined. It is rarely used explicitly but is useful in advanced type narrowing.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let x: never = true; // Error: Type 'boolean' is not assignable to 'never'

// Common use: exhaustive checks
function assertNever(x: never): never {
  throw new Error("Unexpected value: " + x);
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type: undefined &amp; null</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">undefined</code> and <code className="bg-gray-100 px-1 rounded">null</code> are types that refer to the JavaScript primitives of the same names.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let y: undefined = undefined;
let z: null = null;`}</pre>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-yellow-800">These types don't have much use on their own, but <code className="bg-yellow-100 px-1 rounded">undefined</code> is helpful in union types: <code className="bg-yellow-100 px-1 rounded">string | undefined</code>.</p>
        </div>
      </section>
    </div>
  );
}
