export default function ConfigurationPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Configuration</h1>
        <p className="text-gray-600">The <code className="bg-gray-100 px-1 rounded">tsconfig.json</code> file is used to configure the TypeScript compiler. It controls how TypeScript compiles your project.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Creating tsconfig.json</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`tsc --init`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Common Compiler Options</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`{
  "compilerOptions": {
    "target": "ES2020",        // JS version to compile to
    "module": "commonjs",      // module system
    "lib": ["ES2020", "DOM"],  // built-in type definitions
    "strict": true,            // enable all strict checks
    "outDir": "./dist",        // output directory
    "rootDir": "./src",        // source directory
    "sourceMap": true,         // generate source maps
    "noImplicitAny": true,     // error on implicit 'any'
    "esModuleInterop": true    // interop with CommonJS modules
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">strict Mode</h2>
        <p className="text-gray-600">Enabling <code className="bg-gray-100 px-1 rounded">"strict": true</code> enables all strict type-checking options at once:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li><code className="bg-gray-100 px-1 rounded">strictNullChecks</code> — null and undefined are separate types</li>
          <li><code className="bg-gray-100 px-1 rounded">noImplicitAny</code> — disallow implicit any types</li>
          <li><code className="bg-gray-100 px-1 rounded">strictFunctionTypes</code> — stricter function parameter checking</li>
          <li><code className="bg-gray-100 px-1 rounded">strictPropertyInitialization</code> — class properties must be initialized</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">target Options</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">target</th>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Use when</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-4 py-2 font-mono text-gray-700">ES5</td><td className="px-4 py-2 text-gray-600">Legacy browser support</td></tr>
              <tr><td className="px-4 py-2 font-mono text-gray-700">ES2016</td><td className="px-4 py-2 text-gray-600">Widely supported modern browsers</td></tr>
              <tr><td className="px-4 py-2 font-mono text-gray-700">ES2020</td><td className="px-4 py-2 text-gray-600">Modern environments (recommended)</td></tr>
              <tr><td className="px-4 py-2 font-mono text-gray-700">ESNext</td><td className="px-4 py-2 text-gray-600">Latest ES features</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
