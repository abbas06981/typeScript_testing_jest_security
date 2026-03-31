export default function NodejsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript with Node.js</h1>
        <p className="text-gray-600">TypeScript works great with Node.js. You need to install the Node.js type definitions and configure your project correctly.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Setup</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Recommended tsconfig for Node</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Example Node.js Server</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from TypeScript Node!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Running TypeScript Directly</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">ts-node</code> to run TypeScript files directly without compiling first:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm install -D ts-node
npx ts-node src/index.ts`}</pre>
        <p className="text-gray-600">Or use <code className="bg-gray-100 px-1 rounded">tsx</code> for a faster alternative:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`npm install -D tsx
npx tsx src/index.ts`}</pre>
      </section>
    </div>
  );
}
