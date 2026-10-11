import { socialLinks } from "./links";

export default function Footer() {
  return (
    <footer className="mono-label mt-20 mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {socialLinks.map(({ name, href }) => (
          <li key={name}>
            <a
              className="hover:underline underline-offset-4"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              ▸ {name}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-muted">© {new Date().getFullYear()} David Wells</p>
    </footer>
  );
}
