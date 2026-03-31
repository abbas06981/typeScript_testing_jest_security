export default function MigrationPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Migrating to TypeScript</h1>
        <p className="text-gray-600">Migrating a JavaScript project to TypeScript is a gradual process. You don't have to convert everything at once.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Step 1: Install TypeScript</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm install --save-dev typescript @types/node
npx tsc --init`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Step 2: Configure for Migration</h2>
        <p className="text-gray-600">Start with a lenient config that allows JavaScript and doesn't fail on errors:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`{
  "compilerOptions": {
    "allowJs": true,       // allow .js files
    "checkJs": false,      // don't check .js yet
    "strict": false,       // relax strict mode initially
    "noEmit": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Step 3: Rename Files Gradually</h2>
        <p className="text-gray-600">Rename files one at a time from <code className="bg-gray-100 px-1 rounded">.js</code> to <code className="bg-gray-100 px-1 rounded">.ts</code>. Fix errors file by file.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Stage</th>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-4 py-2 text-gray-700">1</td><td className="px-4 py-2 text-gray-600">Add tsconfig, keep <code className="bg-gray-100 px-1 rounded">.js</code> files</td></tr>
              <tr><td className="px-4 py-2 text-gray-700">2</td><td className="px-4 py-2 text-gray-600">Enable <code className="bg-gray-100 px-1 rounded">checkJs: true</code>, fix JSDoc errors</td></tr>
              <tr><td className="px-4 py-2 text-gray-700">3</td><td className="px-4 py-2 text-gray-600">Rename files to <code className="bg-gray-100 px-1 rounded">.ts</code>, add explicit types</td></tr>
              <tr><td className="px-4 py-2 text-gray-700">4</td><td className="px-4 py-2 text-gray-600">Enable <code className="bg-gray-100 px-1 rounded">strict: true</code>, fix remaining errors</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Using any as a Migration Aid</h2>
        <p className="text-gray-600">It's acceptable to use <code className="bg-gray-100 px-1 rounded">any</code> temporarily during migration. Gradually replace <code className="bg-gray-100 px-1 rounded">any</code> with proper types over time.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Temporary — replace with proper types later
function processData(data: any) {
  // TODO: add proper typing
}`}</pre>
      </section>
    </div>
  );
}
