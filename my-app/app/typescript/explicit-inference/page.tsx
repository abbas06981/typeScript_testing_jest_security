export default function ExplicitInferencePage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Explicit Types & Type Inference</h1>
        <p className="text-gray-600">TypeScript has two ways of assigning types to variables: <strong>Explicit</strong> — writing out the type — and <strong>Implicit</strong> — TypeScript guessing the type based on the assigned value.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Explicit Type</h2>
        <p className="text-gray-600">Explicit typing is when you write out the type yourself. It is easier to read and more intentional.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let firstName: string = "Dylan";
let age: number = 30;
let isLoggedIn: boolean = true;`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Implicit Type (Type Inference)</h2>
        <p className="text-gray-600">TypeScript will "guess" the type of a variable based on its assigned value. This is called <strong>infer</strong>.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let firstName = "Dylan"; // inferred as string
let age = 30;            // inferred as number
let isLoggedIn = true;   // inferred as boolean`}</pre>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="text-sm text-blue-800">Implicit assignment forces TypeScript to infer the value. TypeScript may not always infer the type correctly — for example, <code className="bg-blue-100 px-1 rounded">let json = JSON.parse("55");</code> is inferred as <code className="bg-blue-100 px-1 rounded">any</code>.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Unable to Infer</h2>
        <p className="text-gray-600">In some cases TypeScript cannot infer the type, and will set it to <code className="bg-gray-100 px-1 rounded">any</code> — which disables type checking.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// TypeScript infers x as 'any'
let x = JSON.parse("{}");

// Explicitly type to avoid 'any'
let y: { name: string } = JSON.parse('{"name":"Dylan"}');`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Best Practice</h2>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
          <p className="text-sm text-green-800">Use explicit types when you want clarity. Use implicit types (inference) when the value makes the type obvious and you want shorter code. Avoid <code className="bg-green-100 px-1 rounded">any</code> whenever possible.</p>
        </div>
      </section>
    </div>
  );
}
