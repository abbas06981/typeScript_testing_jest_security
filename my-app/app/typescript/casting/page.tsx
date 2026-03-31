export default function CastingPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Casting</h1>
        <p className="text-gray-600">There are times when working with types where it is necessary to override the type of a variable. <strong>Casting</strong> is the process of overriding a type.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Casting with as</h2>
        <p className="text-gray-600">Use the <code className="bg-gray-100 px-1 rounded">as</code> keyword to cast a variable to a different type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let x: unknown = "hello";
console.log((x as string).length); // 5`}</pre>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-yellow-800">Casting does not actually change the type of the data within the variable — it only tells TypeScript to treat the value as the casted type.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Casting with angle brackets</h2>
        <p className="text-gray-600">The angle-bracket syntax works the same as <code className="bg-gray-100 px-1 rounded">as</code> but cannot be used in TSX files (React).</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let x: unknown = "hello";
console.log((<string>x).length); // 5`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Force Casting</h2>
        <p className="text-gray-600">To override type errors that TypeScript may throw when casting, first cast to <code className="bg-gray-100 px-1 rounded">unknown</code>, then to the target type.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`let x = "hello";
console.log((x as unknown as number).toFixed(2));
// No TypeScript error — use with extreme caution`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Casting DOM Elements</h2>
        <p className="text-gray-600">A very common use-case for casting is working with DOM elements.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const ctx = myCanvas.getContext("2d");`}</pre>
      </section>
    </div>
  );
}
