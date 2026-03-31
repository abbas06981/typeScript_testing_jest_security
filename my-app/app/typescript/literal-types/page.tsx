export default function LiteralTypesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Literal Types</h1>
        <p className="text-gray-600">Literal types allow you to specify the exact value a variable must have. They are a more specific kind of <code className="bg-gray-100 px-1 rounded">string</code>, <code className="bg-gray-100 px-1 rounded">number</code>, or <code className="bg-gray-100 px-1 rounded">boolean</code>.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">String Literal Types</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type Direction = "North" | "South" | "East" | "West";

function move(direction: Direction) {
  console.log("Moving:", direction);
}

move("North"); // OK
move("Up");    // Error: "Up" is not assignable to Direction`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Numeric Literal Types</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
  return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Boolean Literal Types</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type AlwaysTrue = true;
type AlwaysFalse = false;`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Literal Types with as const</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">as const</code> to infer literal types for all values in an object or array.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const directions = ["North", "South", "East", "West"] as const;
type Direction = typeof directions[number]; // "North" | "South" | "East" | "West"

const config = { port: 3000, host: "localhost" } as const;
// config.port is 3000 (literal), not number`}</pre>
      </section>
    </div>
  );
}
