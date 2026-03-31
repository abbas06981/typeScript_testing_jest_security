export default function UnitTestingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Unit Testing</h1>
      <p className="text-gray-600 mb-6">
        Unit tests verify the smallest pieces of your application in isolation —
        individual functions, classes, or components.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Principles</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Test one thing at a time</li>
            <li>Keep tests fast and isolated</li>
            <li>Use mocks to remove external dependencies</li>
            <li>Follow Arrange-Act-Assert pattern</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Example</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`function add(a: number, b: number) {\n  return a + b;\n}\n\ntest('add returns sum', () => {\n  expect(add(2, 3)).toBe(5);\n});`}
          </pre>
        </section>
      </div>
    </div>
  );
}
