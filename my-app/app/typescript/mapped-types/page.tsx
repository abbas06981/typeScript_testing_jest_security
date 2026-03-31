export default function MappedTypesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Mapped Types</h1>
        <p className="text-gray-600">Mapped types allow you to create new types by transforming properties of an existing type. They use the syntax <code className="bg-gray-100 px-1 rounded">{`{ [K in keyof T]: ... }`}</code>.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Basic Mapped Type</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Point { x: number; y: number; }
const p: Readonly<Point> = { x: 1, y: 2 };
p.x = 5; // Error: cannot assign to readonly`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Making Properties Optional</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type Partial<T> = {
  [K in keyof T]?: T[K];
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Modifiers: + and -</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">-</code> to remove modifiers and <code className="bg-gray-100 px-1 rounded">+</code> to add them.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Remove readonly from all properties
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// Remove optional from all properties
type Required<T> = {
  [K in keyof T]-?: T[K];
};`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Remapping Keys with as</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface Person { name: string; age: number; }
type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number; }`}</pre>
      </section>
    </div>
  );
}
