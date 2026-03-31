export default function DeclarationMergingPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Declaration Merging</h1>
        <p className="text-gray-600">Declaration merging means that the compiler merges two separate declarations with the same name into a single definition. This is unique to TypeScript and not possible in JavaScript.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Merging Interfaces</h2>
        <p className="text-gray-600">The most common declaration merging. Two interfaces with the same name are merged into one.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number; // merged into the first Box
}

const box: Box = { height: 5, width: 6, scale: 10 };`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Merging Namespaces</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`namespace Animals {
  export class Zebra {}
}

namespace Animals {
  export interface Legged { numberOfLegs: number; }
  export class Dog {}
}

// Both are accessible
const z = new Animals.Zebra();
const d = new Animals.Dog();`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Augmenting Third-Party Types</h2>
        <p className="text-gray-600">A practical use-case: adding properties to existing module types via declaration merging.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// Augment Express Request to add a 'user' property
declare global {
  namespace Express {
    interface Request {
      user?: { id: string; name: string };
    }
  }
}`}</pre>
      </section>
    </div>
  );
}
