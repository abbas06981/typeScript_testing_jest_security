export default function JestPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Jest</h1>
      <p className="text-gray-600 mb-6">
        Jest is a delightful JavaScript testing framework with a focus on
        simplicity.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Basic Test</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`test('adds 1 + 2 to equal 3', () => {\n  expect(1 + 2).toBe(3);\n});`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Common Matchers</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li><code className="bg-gray-100 px-1 rounded">toBe</code> — strict equality</li>
            <li><code className="bg-gray-100 px-1 rounded">toEqual</code> — deep equality</li>
            <li><code className="bg-gray-100 px-1 rounded">toBeTruthy / toBeFalsy</code></li>
            <li><code className="bg-gray-100 px-1 rounded">toThrow</code> — expect errors</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
