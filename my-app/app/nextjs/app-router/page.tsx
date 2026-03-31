export default function AppRouterPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">App Router</h1>
      <p className="text-gray-600 mb-6">
        The App Router uses the <code className="bg-gray-100 px-1 rounded">app/</code> directory
        and introduces layouts, nested routes, and React Server Components by default.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">File Conventions</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li><code className="bg-gray-100 px-1 rounded">page.tsx</code> — unique UI for a route</li>
            <li><code className="bg-gray-100 px-1 rounded">layout.tsx</code> — shared UI wrapping child routes</li>
            <li><code className="bg-gray-100 px-1 rounded">loading.tsx</code> — loading UI with Suspense</li>
            <li><code className="bg-gray-100 px-1 rounded">error.tsx</code> — error boundary UI</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Dynamic Routes</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`// app/blog/[slug]/page.tsx\nexport default function Post({ params }: { params: { slug: string } }) {\n  return <h1>{params.slug}</h1>;\n}`}
          </pre>
        </section>
      </div>
    </div>
  );
}
