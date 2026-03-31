export default function IndexSignaturesPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Index Signatures</h1>
        <p className="text-gray-600">Index signatures are used to type objects with dynamic keys — where you don't know the key names ahead of time but you know their types.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Basic Index Signature</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface StringByString {
  [key: string]: string;
}

const translations: StringByString = {
  hello: "hola",
  goodbye: "adiós",
};

translations["thank you"] = "gracias"; // OK
translations["count"] = 42;            // Error: number not assignable to string`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Index Signature with number Keys</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface NumberArray {
  [index: number]: string;
}

const arr: NumberArray = ["Alice", "Bob", "Charlie"];
console.log(arr[0]); // "Alice"`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Mixing Known and Dynamic Keys</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface Config {
  name: string;           // known property
  [key: string]: string;  // any other string keys
}

const config: Config = {
  name: "MyApp",
  version: "1.0",
  env: "production",
};`}</pre>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-yellow-800">Known properties must be compatible with the index signature type. If the index signature is <code className="bg-yellow-100 px-1 rounded">string</code>, all known properties must also be <code className="bg-yellow-100 px-1 rounded">string</code>.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Readonly Index Signatures</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface ReadonlyMap {
  readonly [key: string]: number;
}

const scores: ReadonlyMap = { alice: 95, bob: 87 };
scores["alice"] = 100; // Error: Index signature is readonly`}</pre>
      </section>
    </div>
  );
}
