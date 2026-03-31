export default function IntegrationPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Integration Testing</h1>
      <p className="text-gray-600 mb-6">
        Integration tests verify that multiple units work correctly together —
        testing the interaction between components, services, or layers.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">When to Use</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Testing API routes with a real database</li>
            <li>Testing component trees with real child components</li>
            <li>Verifying data flows between modules</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Tools</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Jest + Supertest for API testing</li>
            <li>React Testing Library for component integration</li>
            <li>Test containers for database integration</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
