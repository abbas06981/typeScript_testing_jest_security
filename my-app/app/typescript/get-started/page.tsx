export default function GetStartedPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Get Started</h1>
        <p className="text-gray-600">TypeScript can be installed through npm (Node Package Manager). Install it globally to use the <code className="bg-gray-100 px-1 rounded">tsc</code> command anywhere.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Installing the Compiler</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm install -g typescript`}</pre>
        <p className="text-gray-600">Check the installed version:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`tsc --version`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Your First TypeScript File</h2>
        <p className="text-gray-600">Create a file named <code className="bg-gray-100 px-1 rounded">hello.ts</code>:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let message: string = "Hello World";
console.log(message);`}</pre>
        <p className="text-gray-600">Compile it to JavaScript:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`tsc hello.ts`}</pre>
        <p className="text-gray-600">This generates a <code className="bg-gray-100 px-1 rounded">hello.js</code> file which you can run with Node.js:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`node hello.js`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Configuring TypeScript</h2>
        <p className="text-gray-600">Initialize a TypeScript project with a config file:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`tsc --init`}</pre>
        <p className="text-gray-600">This creates a <code className="bg-gray-100 px-1 rounded">tsconfig.json</code> file with default settings. You can then compile your whole project with just:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`tsc`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">TypeScript in Watch Mode</h2>
        <p className="text-gray-600">Use the <code className="bg-gray-100 px-1 rounded">--watch</code> flag to automatically recompile when files change:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`tsc --watch`}</pre>
      </section>
    </div>
  );
}
