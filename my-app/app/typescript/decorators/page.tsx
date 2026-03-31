export default function DecoratorsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Decorators</h1>
        <p className="text-gray-600">Decorators are a way to add annotations and meta-programming syntax to class declarations and members. TypeScript 5 supports the ECMAScript Stage 3 decorator proposal.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Class Decorator</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Method Decorator</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function log(target: any, context: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log(\`Calling \${String(context.name)}\`);
    return target.call(this, ...args);
  };
}

class Greeter {
  @log
  greet(name: string) {
    return \`Hello, \${name}!\`;
  }
}

new Greeter().greet("Alice");
// logs: "Calling greet"
// returns: "Hello, Alice!"`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Property Decorator</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function format(formatString: string) {
  return function (target: any, context: ClassFieldDecoratorContext) {
    return function (this: any, value: string) {
      return formatString.replace("%s", value);
    };
  };
}

class Greeter {
  @format("Hello, %s!")
  greeting: string = "World";
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Enabling Decorators</h2>
        <p className="text-gray-600">In TypeScript 5+ the new decorators work without any special tsconfig flags. For legacy experimental decorators:</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`// tsconfig.json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}`}</pre>
      </section>
    </div>
  );
}
