export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-20 py-6 text-center text-gray-400">
      <p className="mb-2">© {new Date().getFullYear()} Edward Vasallo. Todos los derechos reservados.</p>
      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/edward-ronaldo-vasallo-eraso-83a7a6159/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/EdwardVE"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          GitHub
        </a>
        <a
          href="mailto:edwardvasallo@gmail.com"
          className="hover:text-purple-400"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
