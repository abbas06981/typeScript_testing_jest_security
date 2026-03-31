export default function HooksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">React Hooks</h1>
      <p className="text-gray-600 mb-6">
        Hooks let you use state and other React features in function components.
      </p>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">useState</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`const [count, setCount] = useState(0);`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">useEffect</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`useEffect(() => {\n  document.title = \`Count: \${count}\`;\n}, [count]);`}
          </pre>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">useRef</h2>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto">
            {`const inputRef = useRef<HTMLInputElement>(null);\ninputRef.current?.focus();`}
          </pre>
        </section>
      </div>
    </div>
  );
}
