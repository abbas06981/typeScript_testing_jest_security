export default function ErrorHandlingPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Error Handling</h1>
        <p className="text-gray-600">TypeScript improves error handling by providing type safety around errors and exceptions.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">try / catch with unknown</h2>
        <p className="text-gray-600">In TypeScript 4+, caught errors are typed as <code className="bg-gray-100 px-1 rounded">unknown</code> by default when using <code className="bg-gray-100 px-1 rounded">"useUnknownInCatchVariables": true</code> (part of strict mode).</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`try {
  throw new Error("something went wrong");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message); // Safe — narrowed to Error
  } else {
    console.log("Unknown error", error);
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Custom Error Classes</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`class NetworkError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = "NetworkError";
  }
}

try {
  throw new NetworkError("Not Found", 404);
} catch (err) {
  if (err instanceof NetworkError) {
    console.log(err.statusCode); // 404
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Result Pattern</h2>
        <p className="text-gray-600">A functional alternative to try/catch — return a discriminated union instead of throwing.</p>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { success: false, error: "Division by zero" };
  }
  return { success: true, data: a / b };
}

const result = divide(10, 2);
if (result.success) {
  console.log(result.data); // 5
} else {
  console.error(result.error);
}`}</pre>
      </section>
    </div>
  );
}
