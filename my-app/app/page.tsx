import Link from "next/link";

const sections = [
  {
    href: "/typescript",
    title: "TypeScript",
    description:
      "Master static typing, interfaces, generics, and advanced type patterns to write safer, more maintainable code.",
    icon: "TS",
    color: "bg-blue-600",
    topics: ["Basics", "Advanced Types", "Generics"],
  },
  {
    href: "/testing",
    title: "Testing",
    description:
      "Learn unit testing, integration testing, and best practices with Jest and React Testing Library.",
    icon: "✓",
    color: "bg-emerald-600",
    topics: ["Jest", "Unit Testing", "Integration"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-gray-50">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          DevDocs
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          A hands-on reference for TypeScript and Testing — pick a topic and
          start learning.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/typescript"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            TypeScript Docs
          </Link>
          <Link
            href="/testing"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition-colors"
          >
            Testing Docs
          </Link>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-4xl mx-auto w-full px-6 py-16 grid gap-8 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow flex flex-col gap-5"
          >
            <div className="flex items-center gap-4">
              <span
                className={`${section.color} text-white text-lg font-bold w-12 h-12 rounded-xl flex items-center justify-center`}
              >
                {section.icon}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {section.description}
            </p>
            <ul className="flex flex-wrap gap-2 mt-auto">
              {section.topics.map((topic) => (
                <li
                  key={topic}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center py-6 text-sm text-gray-400 border-t border-gray-200">
        Built with Next.js &amp; Tailwind CSS
      </footer>
    </div>
  );
}
