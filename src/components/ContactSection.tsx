"use client";

import { Mail, Globe, Linkedin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { profile } from "@/data/profile";
import { mailtoHref } from "@/lib/mailto";

export default function ContactSection() {
  return (
    <div className="space-y-8 text-center">
      <FadeIn>
        <h2 id="contact-title" className="text-3xl md:text-4xl font-bold">
          Un projet en tête ?
        </h2>
        <p className="mt-3 text-[--muted]">
          Discutons-en par email ou retrouvez-moi sur mes réseaux.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Email */}
          
          <a  href={mailtoHref()}
            className="group inline-flex items-center gap-2 rounded-full border border-[--surface-border] bg-[--foreground]/5 px-6 py-3 text-sm font-medium transition-all hover:bg-[--foreground] hover:text-[--background]"
          >
            <Mail className="size-4" />
            <span>Email</span>
          </a>

          {/* Malt */}
          {profile.maltUrl && (
            
            <a  href={profile.maltUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[--surface-border] bg-[--foreground]/5 px-6 py-3 text-sm font-medium transition-all hover:bg-[--foreground] hover:text-[--background]"
            >
              <Globe className="size-4" />
              <span>Malt</span>
            </a>
          )}

          {/* LinkedIn */}
          {profile.linkedinUrl && (
            
            <a href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[--surface-border] bg-[--foreground]/5 px-6 py-3 text-sm font-medium transition-all hover:bg-[--foreground] hover:text-[--background]"
            >
              <Linkedin className="size-4" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </FadeIn>
    </div>
  );
}