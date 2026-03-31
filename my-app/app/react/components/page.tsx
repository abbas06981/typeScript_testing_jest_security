export default function ComponentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">React Components</h1>
      <p className="text-gray-600 mb-6">
        Components are the building blocks of React apps — reusable pieces of UI
        that accept props and return JSX.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Function Component</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`function Button({ label }: { label: string }) {\n  return <button>{label}</button>;\n}`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Props</h2>
          <p className="text-gray-600 text-sm">
            Props are read-only inputs passed from parent to child. They make
            components configurable and reusable.
          </p>
        </section>
      </div>
    </div>
  );
}
