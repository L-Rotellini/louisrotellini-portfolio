import { profile } from "@/data/profile";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="left-0 w-full border-t border-[--surface-border] py-3 text-sm text-[--muted] z-40">
      <div className="mx-auto max-w-5xl px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} <strong>louisrotellini.fr</strong>
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {profile.githubUrl && (
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[--foreground] transition-colors">
                <Github className="size-4" />
              </a>
            )}
            {profile.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[--foreground] transition-colors">
                <Linkedin className="size-4" />
              </a>
            )}
            {profile.maltUrl && (
              <a href={profile.maltUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[--foreground] transition-colors font-medium">
                Malt
              </a>
            )}
          </div>
          <nav className="flex items-center gap-4">
            <a href={`mailto:${profile.email}`} className="hover:text-[--foreground] transition-colors">
              Contact
            </a>
            <a href="/mentions-legales" className="hover:text-[--foreground] transition-colors">
              Mentions légales
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}