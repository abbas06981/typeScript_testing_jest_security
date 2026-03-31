export default function ServerComponentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Server Components</h1>
      <p className="text-gray-600 mb-6">
        React Server Components run on the server, reducing bundle size and
        enabling direct access to backend resources.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Default in App Router</h2>
          <p className="text-gray-600 text-sm">
            All components in the <code className="bg-gray-100 px-1 rounded">app/</code> directory
            are Server Components by default. Add <code className="bg-gray-100 px-1 rounded">"use client"</code> at
            the top to opt into the Client Component model.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">When to use Client Components</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li>Event listeners (onClick, onChange)</li>
            <li>Browser-only APIs (localStorage, window)</li>
            <li>React hooks (useState, useEffect)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
