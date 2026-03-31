export default function StateManagementPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">State Management</h1>
      <p className="text-gray-600 mb-6">
        Manage shared state across your React app using Context, reducers, or
        external libraries.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">useContext</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`const theme = useContext(ThemeContext);`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">useReducer</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`const [state, dispatch] = useReducer(reducer, initialState);`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">External Libraries</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li>Zustand — lightweight and simple</li>
            <li>Redux Toolkit — scalable and predictable</li>
            <li>Jotai — atomic state model</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
