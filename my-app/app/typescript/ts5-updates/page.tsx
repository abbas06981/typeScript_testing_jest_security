export default function Ts5UpdatesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript 5 Updates</h1>
        <p className="text-gray-600">TypeScript 5 introduced several new features and improvements. Here are the most notable ones.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Decorators (Stage 3)</h2>
        <p className="text-gray-600">TypeScript 5 added support for ECMAScript stage 3 decorators — the new standardized decorator syntax.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function loggedMethod(target: any, context: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log("Calling", context.name);
    return target.call(this, ...args);
  };
}

class MyClass {
  @loggedMethod
  greet() {
    return "Hello!";
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">const Type Parameters</h2>
        <p className="text-gray-600">Adding <code className="bg-gray-100 px-1 rounded">const</code> to a type parameter infers the most specific (literal) type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function identity<const T>(value: T): T {
  return value;
}

// Without const: type is string[]
// With const:    type is ["hello", "world"]
const result = identity(["hello", "world"]);`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Multiple Config File Extends</h2>
        <p className="text-gray-600">tsconfig.json can now extend from multiple base configs.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`{
  "extends": ["@tsconfig/strictest/tsconfig.json", "@tsconfig/node18/tsconfig.json"],
  "compilerOptions": {
    "outDir": "./dist"
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">All enums are Union Enums</h2>
        <p className="text-gray-600">All enums now behave as union enums, allowing TypeScript to narrow enum types more precisely.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`enum Status {
  Pending,
  Active,
  Inactive,
}

function handle(s: Status) {
  if (s === Status.Pending) {
    // TypeScript knows 's' is Pending here
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Speed &amp; Memory Improvements</h2>
        <p className="text-gray-600">TypeScript 5 significantly improved build performance:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Up to 10-25% faster builds</li>
          <li>Up to 20% less memory usage</li>
          <li>Faster incremental builds with <code className="bg-gray-100 px-1 rounded">--incremental</code></li>
        </ul>
      </section>
    </div>
  );
}
