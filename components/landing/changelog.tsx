"use client";

import { changelog, changelogVersion } from "@/lib/content";
import { FadeIn, StaggerChildren, StaggerItem } from "./fade-in";
import { motion } from "framer-motion";

export function Changelog() {
  return (
    <section id="guncellemeler" className="px-6 py-24 md:py-32">
      <motion.div
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Güncelleme notları
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            En son geliştirmeler ve iyileştirmeler.
          </p>
        </FadeIn>

        <motion.article
          className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl"
          whileHover={{ borderColor: "rgba(168, 85, 247, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="border-b border-white/[0.06] bg-purple-500/5 px-6 py-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              {changelogVersion}
            </span>
          </div>

          <StaggerChildren className="divide-y divide-white/[0.06]" stagger={0.08}>
            {changelog.map((item) => (
              <StaggerItem key={item}>
                <div className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/[0.02]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400 transition-colors group-hover:border-purple-500/40 group-hover:bg-purple-500/20">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-zinc-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </motion.article>
      </motion.div>
    </section>
  );
}
