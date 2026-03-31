export default function DataFetchingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Fetching</h1>
      <p className="text-gray-600 mb-6">
        Next.js extends the native <code className="bg-gray-100 px-1 rounded">fetch</code> API
        with caching and revalidation built in.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Server Component Fetch</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`async function getData() {\n  const res = await fetch('https://api.example.com/data', {\n    next: { revalidate: 60 }, // revalidate every 60s\n  });\n  return res.json();\n}\n\nexport default async function Page() {\n  const data = await getData();\n  return <div>{data.title}</div>;\n}`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cache Options</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li><code className="bg-gray-100 px-1 rounded">force-cache</code> — cache indefinitely (default)</li>
            <li><code className="bg-gray-100 px-1 rounded">no-store</code> — fetch fresh every request</li>
            <li><code className="bg-gray-100 px-1 rounded">next.revalidate</code> — ISR with a time interval</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
