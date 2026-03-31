export default function NextjsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Next.js</h1>
      <p className="text-gray-600 mb-6">
        Next.js is a React framework that gives you the building blocks to create
        full-stack web applications. Use the sidebar to explore topics.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>File-system based routing</li>
        <li>Server and Client Components</li>
        <li>Built-in data fetching and caching</li>
        <li>API routes and middleware</li>
      </ul>
    </div>
  );
}
