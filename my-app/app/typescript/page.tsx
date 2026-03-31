export default function TypeScriptPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript</h1>
        <p className="text-gray-600">
          TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript.
          It adds static typing, interfaces, generics, and many other features on top of JavaScript.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">What you will learn</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            "Simple & Special Types",
            "Type Inference",
            "Arrays & Tuples",
            "Object Types & Interfaces",
            "Enums",
            "Union & Literal Types",
            "Functions",
            "Classes",
            "Generics",
            "Utility Types",
            "Type Guards",
            "Mapped & Conditional Types",
            "Decorators",
            "Async Programming",
            "Error Handling",
            "Best Practices",
          ].map((topic) => (
            <div key={topic} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-blue-500 font-bold">✓</span>
              {topic}
            </div>
          ))}
        </div>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <p className="text-sm text-blue-800">
          Use the sidebar to navigate through all topics — from beginner basics to advanced type-level programming.
        </p>
      </div>
    </div>
  );
}
