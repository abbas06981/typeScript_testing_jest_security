export default function TypeScriptPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">TypeScript</h1>
      <p className="text-gray-600 mb-6">
        TypeScript is a strongly typed superset of JavaScript that compiles to
        plain JavaScript. Use the sidebar to explore topics.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Static type checking</li>
        <li>Interfaces and type aliases</li>
        <li>Generics and utility types</li>
        <li>Enums and decorators</li>
      </ul>
    </div>
  );
}
