export default function ObjectTypesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Object Types</h1>
        <p className="text-gray-600">TypeScript has a specific syntax for typing objects. Object types define the shape — the property names and their types.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Basic Object Type</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Type Inference in Objects</h2>
        <p className="text-gray-600">TypeScript can infer object types from their values.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const car = {
  type: "Toyota", // inferred string
};
car.type = "Ford"; // OK
car.type = 2;      // Error: Type 'number' is not assignable to type 'string'`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Optional Properties</h2>
        <p className="text-gray-600">Add a <code className="bg-gray-100 px-1 rounded">?</code> after a property name to mark it as optional.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const car: { type: string; mileage?: number } = {
  type: "Toyota",
};
car.mileage = 2000; // OK`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Index Signatures</h2>
        <p className="text-gray-600">Index signatures can be used for objects without a defined list of properties.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const nameAgeMap: { [key: string]: number } = {};
nameAgeMap["Alice"] = 21;
nameAgeMap["Bob"] = 25;`}</pre>
      </section>
    </div>
  );
}
