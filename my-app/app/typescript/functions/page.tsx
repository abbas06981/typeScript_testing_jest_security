export default function FunctionsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Functions</h1>
        <p className="text-gray-600">TypeScript has a specific syntax for typing function parameters and return values.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Return Type</h2>
        <p className="text-gray-600">The type of the value returned by the function can be explicitly defined after the parameter list.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function getTime(): number {
  return new Date().getTime();
}

// Arrow function with return type
const getTime2 = (): number => new Date().getTime();`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">void Return Type</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">void</code> for functions that do not return a value.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function printHello(): void {
  console.log("Hello!");
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Parameter Types</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function add(a: number, b: number): number {
  return a + b;
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Optional Parameters</h2>
        <p className="text-gray-600">Mark a parameter optional with <code className="bg-gray-100 px-1 rounded">?</code>. Optional parameters must come after required ones.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function add(a: number, b: number, c?: number): number {
  return a + b + (c ?? 0);
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Default Parameter Values</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function pow(value: number, exponent: number = 10): number {
  return Math.pow(value, exponent);
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Rest Parameters</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function add(a: number, ...rest: number[]): number {
  return a + rest.reduce((p, c) => p + c, 0);
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Function Type Aliases</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type Negate = (value: number) => number;

const negateFunction: Negate = (value) => value * -1;`}</pre>
      </section>
    </div>
  );
}
