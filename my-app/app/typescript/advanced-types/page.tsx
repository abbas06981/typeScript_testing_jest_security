export default function AdvancedTypesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Advanced Types</h1>
      <p className="text-gray-600 mb-6">
        Explore union types, intersection types, mapped types, and conditional
        types.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Union Types</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`type ID = string | number;`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Intersection Types</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`type Admin = User & { role: "admin" };`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Mapped Types</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`type Readonly<T> = { readonly [K in keyof T]: T[K] };`}
          </pre>
        </section>
      </div>
    </div>
  );
}
