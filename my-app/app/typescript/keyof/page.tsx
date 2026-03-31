export default function KeyofPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Keyof</h1>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">keyof</code> is a TypeScript keyword that creates a union type of all the keys of an object type.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">keyof with Explicit Keys</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 30 };
getProperty(person, "name"); // string
getProperty(person, "age");  // number
getProperty(person, "job");  // Error: "job" not in keyof Person`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">keyof with Index Signatures</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type StringMap = { [key: string]: unknown };
type Keys = keyof StringMap; // string | number
// (number because JS converts numeric keys to strings)`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Practical Example: Safe Property Getter</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

pluck(people, "name"); // ["Alice", "Bob"]
pluck(people, "age");  // [30, 25]`}</pre>
      </section>
    </div>
  );
}
