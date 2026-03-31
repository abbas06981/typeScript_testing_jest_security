export default function BasicsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">TypeScript Basics</h1>
      <p className="text-gray-600 mb-6">
        Learn the foundational concepts of TypeScript — types, interfaces, and
        type annotations.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Primitive Types</h2>
          <p className="text-gray-600">
            <code className="bg-gray-100 px-1 rounded">string</code>,{" "}
            <code className="bg-gray-100 px-1 rounded">number</code>,{" "}
            <code className="bg-gray-100 px-1 rounded">boolean</code>,{" "}
            <code className="bg-gray-100 px-1 rounded">null</code>,{" "}
            <code className="bg-gray-100 px-1 rounded">undefined</code>
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Type Annotations</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`let name: string = "Alice";\nlet age: number = 30;\nlet active: boolean = true;`}
          </pre>
        </section>
      </div>
    </div>
  );
}
