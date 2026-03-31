export default function NullPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Null &amp; Undefined</h1>
        <p className="text-gray-600">TypeScript has a powerful system to deal with <code className="bg-gray-100 px-1 rounded">null</code> or <code className="bg-gray-100 px-1 rounded">undefined</code> values. By default, <code className="bg-gray-100 px-1 rounded">null</code> and <code className="bg-gray-100 px-1 rounded">undefined</code> handling is disabled and can be enabled with <code className="bg-gray-100 px-1 rounded">strictNullChecks</code>.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Types: null &amp; undefined</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let value: string | undefined | null = null;
value = "hello";
value = undefined;`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Optional Chaining (?.)</h2>
        <p className="text-gray-600">Optional chaining is a JavaScript feature that works well with TypeScript's null checking. It short-circuits and returns <code className="bg-gray-100 px-1 rounded">undefined</code> if the value is null/undefined.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}

const house: House = { sqft: 500 };
const yardSqft = house.yard?.sqft; // undefined — no error`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Nullish Coalescence (??)</h2>
        <p className="text-gray-600">The <code className="bg-gray-100 px-1 rounded">??</code> operator falls back to a default value when dealing with null or undefined — but not 0 or empty string (unlike <code className="bg-gray-100 px-1 rounded">||</code>).</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function printMileage(mileage: number | null | undefined) {
  console.log(mileage ?? "Not Available");
}

printMileage(null);      // "Not Available"
printMileage(undefined); // "Not Available"
printMileage(0);         // 0 (not "Not Available")`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Non-null Assertion (!)</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">!</code> to tell TypeScript a value is definitely not null or undefined.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function getValue(): string | undefined {
  return "hello";
}

const value = getValue();
console.log(value!.length); // Asserting non-null — use carefully`}</pre>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <p className="text-sm text-red-800">Non-null assertions bypass type safety. Only use them when you are certain the value cannot be null or undefined.</p>
        </div>
      </section>
    </div>
  );
}
