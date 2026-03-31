export default function UnionTypesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Union Types</h1>
        <p className="text-gray-600">Union types are used when a value can be more than a single type. Use the <code className="bg-gray-100 px-1 rounded">|</code> (pipe) operator to separate each type.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Union Type Syntax</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);     // OK
printId("202");   // OK
printId(true);    // Error`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Union Type Errors</h2>
        <p className="text-gray-600">TypeScript will only allow operations that are valid for every member of the union.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function printId(id: number | string) {
  console.log(id.toUpperCase());
  // Error: Property 'toUpperCase' does not exist on type 'number'
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Narrowing with typeof</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">typeof</code> to narrow the type within a union.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // string methods safe here
  } else {
    console.log(id.toFixed(2));   // number methods safe here
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Union with Arrays</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function getFirstElement(arr: string[] | number[]) {
  return arr[0];
}

// Or allow mixed arrays
const mixed: (string | number)[] = ["hello", 42, "world"];`}</pre>
      </section>
    </div>
  );
}
