export default function EnumsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Enums</h1>
        <p className="text-gray-600">An <strong>enum</strong> is a special class that represents a group of constants (unchangeable variables). Enums come in two flavors: <strong>string</strong> and <strong>numeric</strong>.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Numeric Enums</h2>
        <p className="text-gray-600">By default, enums will initialize the first value to <code className="bg-gray-100 px-1 rounded">0</code> and add <code className="bg-gray-100 px-1 rounded">1</code> to each additional value.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}
console.log(Direction.Up);   // 0
console.log(Direction.Left); // 2`}</pre>
        <p className="text-gray-600">You can set the value of the first numeric enum and it will auto-increment from there.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`enum Direction {
  Up = 1,
  Down,  // 2
  Left,  // 3
  Right, // 4
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">String Enums</h2>
        <p className="text-gray-600">String enums are more readable and common in modern TypeScript.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Direction.Up); // "UP"`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">const Enums</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">const</code> enums are inlined at compile time, producing no JavaScript object — just the values.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let d = Direction.Up; // compiled to: let d = 0`}</pre>
      </section>
    </div>
  );
}
