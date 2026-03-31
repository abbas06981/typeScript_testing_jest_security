export default function BestPracticesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Best Practices</h1>
        <p className="text-gray-600">Follow these guidelines to write clean, maintainable, and safe TypeScript code.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">1. Enable strict mode</h2>
        <p className="text-gray-600">Always enable <code className="bg-gray-100 px-1 rounded">"strict": true</code> in tsconfig. It catches the most common bugs and forces better habits.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`{ "compilerOptions": { "strict": true } }`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">2. Avoid any</h2>
        <p className="text-gray-600">Using <code className="bg-gray-100 px-1 rounded">any</code> defeats the purpose of TypeScript. Use <code className="bg-gray-100 px-1 rounded">unknown</code> if you must represent an unknown type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Bad
function process(data: any) { ... }

// Good
function process(data: unknown) {
  if (typeof data === "string") { ... }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">3. Prefer interfaces for objects</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">interface</code> for object shapes and <code className="bg-gray-100 px-1 rounded">type</code> for unions, primitives, and computed types.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Object shape → interface
interface User { name: string; age: number; }

// Union → type alias
type Status = "active" | "inactive" | "pending";`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">4. Use readonly for immutable data</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">5. Prefer const assertions</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const ROUTES = {
  home: "/",
  about: "/about",
} as const;

type Route = typeof ROUTES[keyof typeof ROUTES]; // "/" | "/about"`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">6. Use discriminated unions over optional props</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Avoid: many optional properties
type Response = { data?: string; error?: string; loading?: boolean };

// Prefer: discriminated union — each state is clear
type Response =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; error: string };`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">7. Don't over-annotate</h2>
        <p className="text-gray-600">Let TypeScript infer where the type is obvious. Explicit annotations add value when inference isn't clear.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Unnecessary — TypeScript infers number
const count: number = 0;

// Good — inference handles it
const count = 0;`}</pre>
      </section>
    </div>
  );
}
