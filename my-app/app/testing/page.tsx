export default function TestingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Testing</h1>
      <p className="text-gray-600 mb-6">
        Testing ensures your code works as expected. Use the sidebar to explore
        different testing strategies and tools.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Unit testing with Jest</li>
        <li>Integration testing</li>
        <li>End-to-end testing</li>
        <li>Mocking and spies</li>
      </ul>
    </div>
  );
}
