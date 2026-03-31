export default function TsInJsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript in JavaScript Projects</h1>
        <p className="text-gray-600">You can get TypeScript type checking in plain <code className="bg-gray-100 px-1 rounded">.js</code> files using JSDoc comments — without converting to TypeScript.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Enabling JS Type Checking</h2>
        <p className="text-gray-600">Add <code className="bg-gray-100 px-1 rounded">// @ts-check</code> at the top of a JS file to enable TypeScript checking in that file.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// @ts-check

/** @type {string} */
let name = "Alice";

name = 42; // Error: Type 'number' is not assignable to type 'string'`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">JSDoc Type Annotations</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// @ts-check

/**
 * @param {string} name
 * @param {number} age
 * @returns {string}
 */
function greet(name, age) {
  return \`\${name} is \${age} years old\`;
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">JSDoc Object Types</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// @ts-check

/**
 * @typedef {{ name: string, age: number }} Person
 */

/** @type {Person} */
const person = { name: "Bob", age: 30 };`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Check All JS Files via tsconfig</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`{
  "compilerOptions": {
    "checkJs": true,
    "allowJs": true,
    "noEmit": true
  },
  "include": ["src/**/*.js"]
}`}</pre>
      </section>
    </div>
  );
}
