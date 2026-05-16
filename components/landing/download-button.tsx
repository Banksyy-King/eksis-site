"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { ALPHA_WARNING, downloadConfig } from "@/lib/download";
import { WindowsIcon } from "./icons";

const LOADING_RESET_MS = 4000;

export function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), LOADING_RESET_MS);
  }, [isLoading]);

  return (
    <motion.div className="flex flex-col items-center gap-4">
      <motion.a
        href={downloadConfig.href}
        download={downloadConfig.fileName}
        onClick={handleClick}
        aria-busy={isLoading}
        aria-label={`${downloadConfig.fileName} dosyasını indir (${downloadConfig.sizeLabel})`}
        className={`group relative inline-flex min-w-[280px] items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-purple-500/25 transition-shadow hover:shadow-purple-500/40 ${
          isLoading ? "pointer-events-none opacity-90" : ""
        }`}
        whileHover={!isLoading ? { scale: 1.03 } : undefined}
        whileTap={!isLoading ? { scale: 0.98 } : undefined}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-white/10 to-purple-400/0 opacity-0 transition-opacity group-hover:opacity-100" />

        {isLoading ? (
          <span
            className="relative h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white"
            aria-hidden
          />
        ) : (
          <WindowsIcon className="relative h-6 w-6 shrink-0" />
        )}

        <span className="relative">
          {isLoading ? "İndiriliyor…" : "Windows Alpha İndir"}
        </span>
      </motion.a>

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-zinc-400">
          <span>Windows 10/11</span>
          <span className="text-zinc-600" aria-hidden>
            ·
          </span>
          <span>{downloadConfig.sizeLabel}</span>
          <span className="sr-only">dosya boyutu</span>
        </p>
        <p className="max-w-sm text-xs leading-relaxed text-zinc-500">
          {ALPHA_WARNING}
        </p>
      </div>
    </motion.div>
  );
}
