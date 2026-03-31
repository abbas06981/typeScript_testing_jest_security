export default function TuplesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Tuples</h1>
        <p className="text-gray-600">A <strong>tuple</strong> is a typed array with a pre-defined length and types for each index. Tuples are great when you want to keep type information alongside values.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Define a Tuple</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// define a tuple type
let ourTuple: [number, boolean, string];

// initialize it
ourTuple = [5, false, "Coding God was here"];`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Readonly Tuple</h2>
        <p className="text-gray-600">A good practice is to make your tuple <code className="bg-gray-100 px-1 rounded">readonly</code> to prevent accidental modifications.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, "The Real Coding God"];
ourReadonlyTuple.push("New value"); // Error`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Named Tuples</h2>
        <p className="text-gray-600">Named tuples allow us to provide context for our values at each index.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const graph: [x: number, y: number] = [55.2, 41.3];`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Destructuring Tuples</h2>
        <p className="text-gray-600">Since tuples are arrays, they can be destructured.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
console.log(x); // 55.2
console.log(y); // 41.3`}</pre>
      </section>
    </div>
  );
}
