export default function TypeInferencePage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Type Inference</h1>
        <p className="text-gray-600">TypeScript automatically infers types from values and usage when no explicit type annotation is provided. Understanding inference helps you write less verbose code without sacrificing safety.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Variable Inference</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let x = 3;           // inferred: number
let y = "hello";     // inferred: string
let z = true;        // inferred: boolean
let arr = [1, 2, 3]; // inferred: number[]`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Return Type Inference</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function add(a: number, b: number) {
  return a + b; // inferred return type: number
}

const greet = (name: string) => {
  return "Hello, " + name; // inferred return type: string
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Contextual Typing</h2>
        <p className="text-gray-600">TypeScript infers types from context — such as the position of a value in a function call.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// TypeScript infers 'e' as MouseEvent based on the event handler context
document.addEventListener("click", (e) => {
  console.log(e.clientX); // TypeScript knows this exists on MouseEvent
});`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Best Common Type</h2>
        <p className="text-gray-600">When inferring types for arrays or other constructs with multiple types, TypeScript finds the "best common type".</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let mixed = [1, "hello", true];
// inferred: (number | string | boolean)[]`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">const vs let Inference</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let a = "hello"; // inferred as: string (wide)
const b = "hello"; // inferred as: "hello" (literal — narrower)

// Useful with objects
const config = { port: 3000 } as const;
// config.port is type 3000 (literal), not number`}</pre>
      </section>
    </div>
  );
}
