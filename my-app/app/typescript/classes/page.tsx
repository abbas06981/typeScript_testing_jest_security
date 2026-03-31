export default function ClassesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Classes</h1>
        <p className="text-gray-600">TypeScript adds types and visibility modifiers to JavaScript classes.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Members: Types</h2>
        <p className="text-gray-600">Class members (properties and methods) are typed just like variables.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return "Hello, " + this.name;
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Members: Visibility</h2>
        <p className="text-gray-600">TypeScript supports three visibility modifiers:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li><code className="bg-gray-100 px-1 rounded">public</code> — accessible from anywhere (default)</li>
          <li><code className="bg-gray-100 px-1 rounded">private</code> — only accessible within the class</li>
          <li><code className="bg-gray-100 px-1 rounded">protected</code> — accessible within the class and subclasses</li>
        </ul>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Alice");
console.log(person.name); // Error: 'name' is private`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Parameter Properties</h2>
        <p className="text-gray-600">TypeScript provides a shorthand to declare and assign class members directly in the constructor.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`class Person {
  // 'public name' in constructor auto-creates and assigns the property
  constructor(public name: string) {}
}

const p = new Person("Alice");
console.log(p.name); // "Alice"`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Readonly</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Alice");
p.name = "Bob"; // Error: Cannot assign to 'name' because it is read-only`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Inheritance</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`class Animal {
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // inherited
dog.bark();`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Implements</h2>
        <p className="text-gray-600">Classes can implement interfaces to enforce a structure.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}`}</pre>
      </section>
    </div>
  );
}
