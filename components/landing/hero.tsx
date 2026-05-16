"use client";

import { motion } from "framer-motion";
import type { DownloadInfo } from "@/lib/download";
import { Badge } from "./badge";
import { DownloadButton } from "./download-button";

type HeroProps = {
  downloadInfo: DownloadInfo;
};

export function Hero({ downloadInfo }: HeroProps) {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <Badge variant="accent">Kapalı Alfa</Badge>
      </motion.div>

      <motion.h1
        className="max-w-4xl bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        Eksis
      </motion.h1>

      <motion.p
        className="mt-6 max-w-xl text-lg text-zinc-400 sm:text-xl md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Modern topluluk, sohbet ve ses platformu.
      </motion.p>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        <DownloadButton downloadInfo={downloadInfo} />
      </motion.div>

      <motion.div
        className="mt-16 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
    </section>
  );
}
