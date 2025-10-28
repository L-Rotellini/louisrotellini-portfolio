import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="left-0 w-full border-t border-[--surface-border] py-3 text-sm text-[--muted] z-40">
      <div className="mx-auto max-w-5xl px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} <strong>louisrotellini.fr</strong>
        </p>

        <nav className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[--foreground] transition-colors"
          >
            Contact
          </a>
          <a
            href="/mentions-legales"
            className="hover:text-[--foreground] transition-colors"
          >
            Mentions légales
          </a>
        </nav>
      </div>
    </footer>
  );
}
