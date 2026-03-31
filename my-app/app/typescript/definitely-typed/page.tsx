export default function DefinitelyTypedPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Definitely Typed</h1>
        <p className="text-gray-600">Many JavaScript libraries do not include TypeScript type definitions. <strong>Definitely Typed</strong> is a project that provides type definitions for popular JavaScript libraries.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">What is Definitely Typed?</h2>
        <p className="text-gray-600">Definitely Typed is a huge repository of TypeScript type definitions for packages that don't ship their own types. They are published under the <code className="bg-gray-100 px-1 rounded">@types</code> scope on npm.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Installing Type Definitions</h2>
        <p className="text-gray-600">For example, to add types for the popular <code className="bg-gray-100 px-1 rounded">lodash</code> library:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm install --save-dev @types/lodash`}</pre>
        <p className="text-gray-600">Common type packages:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm install --save-dev @types/node
npm install --save-dev @types/react
npm install --save-dev @types/express
npm install --save-dev @types/jest`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Using Types After Installing</h2>
        <p className="text-gray-600">Once installed, TypeScript automatically picks up the definitions — no imports needed.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`import _ from "lodash";
// TypeScript now knows the full API of lodash
_.chunk(["a", "b", "c", "d"], 2); // string[][]`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Libraries with Built-in Types</h2>
        <p className="text-gray-600">Many modern libraries include their own TypeScript types and don't need <code className="bg-gray-100 px-1 rounded">@types</code> packages. Check the library's <code className="bg-gray-100 px-1 rounded">package.json</code> for a <code className="bg-gray-100 px-1 rounded">types</code> or <code className="bg-gray-100 px-1 rounded">typings</code> field.</p>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="text-sm text-blue-800">Axios, Zod, Prisma, and most modern libraries ship their own types. You only need <code className="bg-blue-100 px-1 rounded">@types/</code> for older or untyped packages.</p>
        </div>
      </section>
    </div>
  );
}
