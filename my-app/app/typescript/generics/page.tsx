export default function GenericsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Generics</h1>
      <p className="text-gray-600 mb-6">
        Generics allow you to write reusable, type-safe functions, classes, and
        interfaces.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Generic Function</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`function identity<T>(arg: T): T {\n  return arg;\n}`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Generic Interface</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`interface Box<T> {\n  value: T;\n}`}
          </pre>
        </section>
      </div>
    </div>
  );
}
