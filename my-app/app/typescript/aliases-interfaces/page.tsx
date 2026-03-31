export default function AliasesInterfacesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Aliases &amp; Interfaces</h1>
        <p className="text-gray-600">TypeScript allows types to be defined separately from the variables that use them. <strong>Type Aliases</strong> and <strong>Interfaces</strong> are the two ways to do this.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type Aliases</h2>
        <p className="text-gray-600">Type Aliases allow defining types with a custom name. They can be used for primitives, unions, tuples, and objects.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const car: Car = {
  year: 2009,
  type: "Toyota",
  model: "Corolla",
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Interfaces</h2>
        <p className="text-gray-600">Interfaces are similar to type aliases, except they <strong>only</strong> apply to object types.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Extending Interfaces</h2>
        <p className="text-gray-600">Interfaces can extend other interfaces using the <code className="bg-gray-100 px-1 rounded">extends</code> keyword.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const square: Square = {
  color: "blue",
  sideLength: 10,
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Aliases vs Interfaces</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Feature</th>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Type Alias</th>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Interface</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-4 py-2 text-gray-700">Primitive types</td><td className="px-4 py-2 text-green-600">Yes</td><td className="px-4 py-2 text-red-500">No</td></tr>
              <tr><td className="px-4 py-2 text-gray-700">Union types</td><td className="px-4 py-2 text-green-600">Yes</td><td className="px-4 py-2 text-red-500">No</td></tr>
              <tr><td className="px-4 py-2 text-gray-700">Declaration merging</td><td className="px-4 py-2 text-red-500">No</td><td className="px-4 py-2 text-green-600">Yes</td></tr>
              <tr><td className="px-4 py-2 text-gray-700">extends keyword</td><td className="px-4 py-2 text-red-500">No</td><td className="px-4 py-2 text-green-600">Yes</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
