export default function UtilityTypesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Utility Types</h1>
        <p className="text-gray-600">TypeScript comes with a large number of types in the global namespace. Utility types make it easy to transform existing types.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Partial</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">Partial</code> makes all properties of a type optional.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Point {
  x: number;
  y: number;
}

const p1: Partial<Point> = {}; // OK — all properties optional
const p2: Partial<Point> = { x: 10 }; // OK`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Required</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">Required</code> makes all properties required (opposite of Partial).</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Car {
  make: string;
  model?: string;
  mileage?: number;
}

const myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // now required
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Record</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">Record</code> is a shortcut for defining an object type with a specific key type and value type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Omit</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">Omit</code> removes keys from an object type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Person {
  name: string;
  age: number;
  location: string;
}

const bob: Omit<Person, "age" | "location"> = { name: "Bob" };`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Pick</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">Pick</code> keeps only the specified keys from an object type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Person {
  name: string;
  age: number;
  location: string;
}

const bob: Pick<Person, "name"> = { name: "Bob" };`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Exclude</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">Exclude</code> removes types from a union.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type Primitive = string | number | boolean;
type WithoutBoolean = Exclude<Primitive, boolean>; // string | number`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">ReturnType</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">ReturnType</code> extracts the return type of a function type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type PointGenerator = () => { x: number; y: number };
type Point = ReturnType<PointGenerator>; // { x: number; y: number }`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Readonly</h2>
        <p className="text-gray-600"><code className="bg-gray-100 px-1 rounded">Readonly</code> makes all properties of an object read-only.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = { name: "Dylan", age: 35 };
person.name = "Israel"; // Error: Cannot assign to 'name' — it is read-only`}</pre>
      </section>
    </div>
  );
}
