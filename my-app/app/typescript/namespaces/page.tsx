export default function NamespacesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Namespaces</h1>
        <p className="text-gray-600">Namespaces (formerly called "internal modules") are a TypeScript-specific way to organize code. They avoid name collisions in the global scope.</p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-yellow-800">In modern TypeScript, ES modules (<code className="bg-yellow-100 px-1 rounded">import/export</code>) are preferred over namespaces for code organization.</p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Defining a Namespace</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return /^[A-Za-z]+$/.test(s);
    }
  }
}

const validator = new Validation.LettersOnlyValidator();
console.log(validator.isAcceptable("Hello")); // true`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Nested Namespaces</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

const t = new Shapes.Polygons.Triangle();`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Namespace Aliases</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`import polygons = Shapes.Polygons;
const sq = new polygons.Square();`}</pre>
      </section>
    </div>
  );
}
