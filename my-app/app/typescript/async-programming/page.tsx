export default function AsyncProgrammingPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">TypeScript Async Programming</h1>
        <p className="text-gray-600">TypeScript fully supports async/await and Promises with strong type inference for asynchronous code.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Typing Promises</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`function fetchUser(id: number): Promise<{ name: string; age: number }> {
  return fetch(\`/api/users/\${id}\`).then((res) => res.json());
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">async / await</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`interface User {
  id: number;
  name: string;
}

async function getUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  const user: User = await response.json();
  return user;
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Error Handling with try/catch</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`async function fetchData(url: string): Promise<unknown> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch failed:", error.message);
    }
    throw error;
  }
}`}</pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Promise.all Typing</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`const [users, posts] = await Promise.all([
  fetch("/api/users").then((r) => r.json()) as Promise<User[]>,
  fetch("/api/posts").then((r) => r.json()) as Promise<Post[]>,
]);
// users: User[], posts: Post[]`}</pre>
      </section>
    </div>
  );
}
