import { Badge } from "./badge";
import { DiscordIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-xl font-bold text-transparent">
            Eksis
          </span>
          <Badge>Kapalı Alfa</Badge>
        </div>

        <nav
          className="flex items-center gap-6"
          aria-label="Alt bilgi bağlantıları"
        >
          <a
            href="#"
            className="group flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-purple-300"
          >
            <DiscordIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
            Discord
          </a>
          <span className="text-zinc-600" aria-hidden>
            ·
          </span>
          <a
            href="#"
            className="text-sm text-zinc-400 transition-colors hover:text-purple-300"
          >
            Destek
          </a>
        </nav>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Eksis. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
