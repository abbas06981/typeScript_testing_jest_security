export default function BasicGenericsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Basic Generics</h1>
        <p className="text-gray-600">Generics allow creating <strong>reusable</strong> components that work over a variety of types rather than a single one. The type variable <code className="bg-gray-100 px-1 rounded">T</code> is a placeholder for any type.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Generic Functions</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("hello")); // "hello"
console.log(identity<number>(42));      // 42
console.log(identity(true));            // boolean inferred`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Generic Classes</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`class NamedValue<T> {
  private _value: T | undefined;

  setValue(value: T) {
    this._value = value;
  }

  getValue(): T | undefined {
    return this._value;
  }
}

const value = new NamedValue<number>();
value.setValue(10);
console.log(value.getValue()); // 10`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Generic Interfaces</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair: KeyValuePair<string, number> = { key: "age", value: 30 };`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Default Generic Types</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`class NamedValue<T = string> {
  private _value: T | undefined;
}

const value = new NamedValue(); // T defaults to string`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Generic Constraints</h2>
        <p className="text-gray-600">Use <code className="bg-gray-100 px-1 rounded">extends</code> to constrain what types a generic accepts.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

getLength("hello");   // 5
getLength([1, 2, 3]); // 3
getLength(42);        // Error: number has no 'length'`}</pre>
      </section>
    </div>
  );
}
