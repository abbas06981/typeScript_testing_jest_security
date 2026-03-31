export default function IntroductionPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Introduction</h1>
        <p className="text-gray-600">TypeScript is a syntactic superset of JavaScript which adds <strong>static typing</strong>. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add <strong>types</strong>.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Why should I use TypeScript?</h2>
        <p className="text-gray-600">JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript. In JavaScript, function parameters and variables don't have any information. So developers need to look at documentation, or guess based on the implementation.</p>
        <p className="text-gray-600">TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.</p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-yellow-800">TypeScript uses compile time type checking. Which means it checks if the specified types match <em>before</em> running the code, not while running the code.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">How do I use TypeScript?</h2>
        <p className="text-gray-600">A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm install -g typescript`}</pre>
        <p className="text-gray-600">Then compile a <code className="bg-gray-100 px-1 rounded">.ts</code> file to JavaScript:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`tsc index.ts`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">TypeScript vs JavaScript</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">TypeScript</th>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">JavaScript</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-4 py-2 text-gray-700">Statically typed</td><td className="px-4 py-2 text-gray-700">Dynamically typed</td></tr>
              <tr><td className="px-4 py-2 text-gray-700">Errors at compile time</td><td className="px-4 py-2 text-gray-700">Errors at runtime</td></tr>
              <tr><td className="px-4 py-2 text-gray-700">Supports interfaces</td><td className="px-4 py-2 text-gray-700">No interfaces</td></tr>
              <tr><td className="px-4 py-2 text-gray-700">Optional typing</td><td className="px-4 py-2 text-gray-700">No typing</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
