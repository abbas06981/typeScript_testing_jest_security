export default function ReactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">React</h1>
      <p className="text-gray-600 mb-6">
        React is a JavaScript library for building user interfaces using a
        component-based architecture. Use the sidebar to explore topics.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Declarative UI with components</li>
        <li>State and lifecycle with hooks</li>
        <li>Unidirectional data flow</li>
        <li>Virtual DOM and reconciliation</li>
      </ul>
    </div>
  );
}
