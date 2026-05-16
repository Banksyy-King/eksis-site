"use client";

import { motion } from "framer-motion";
import { Badge } from "./badge";

const links = [
  { href: "#ozellikler", label: "Özellikler" },
  { href: "#guncellemeler", label: "Güncellemeler" },
] as const;

export function Nav() {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-black/60 backdrop-blur-xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Ana navigasyon"
      >
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          Eksis
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-purple-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Badge variant="accent" className="hidden sm:inline-flex">
          Kapalı Alfa
        </Badge>
      </nav>
    </motion.header>
  );
}
