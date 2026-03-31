export default function ToolingPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Tooling</h1>
        <p className="text-gray-600">A good TypeScript setup includes editor support, linting, formatting, and build tools. Here's what the modern TypeScript ecosystem looks like.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Editor: VS Code</h2>
        <p className="text-gray-600">VS Code has first-class TypeScript support built in — autocomplete, error highlighting, go-to-definition, and refactoring tools all work out of the box.</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>IntelliSense for types and APIs</li>
          <li>Inline type errors</li>
          <li>Automatic imports</li>
          <li>Rename symbol across files</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Linting: ESLint</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">@typescript-eslint</code> for TypeScript-aware linting rules.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Formatting: Prettier</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm install --save-dev prettier`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Build: esbuild / SWC</h2>
        <p className="text-gray-600">For fast TypeScript transpilation without type checking:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li><strong>esbuild</strong> — extremely fast bundler written in Go</li>
          <li><strong>SWC</strong> — Rust-based TypeScript/JS compiler (used by Next.js)</li>
          <li><strong>Vite</strong> — uses esbuild for dev, Rollup for production builds</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type Checking in CI</h2>
        <p className="text-gray-600">Run <code className="bg-gray-100 px-1 rounded">tsc --noEmit</code> to type-check without producing output — great for CI pipelines.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// package.json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  }
}`}</pre>
      </section>
    </div>
  );
}
