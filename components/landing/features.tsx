"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/content";
import {
  ChatIcon,
  ServerIcon,
  UiIcon,
  VoiceIcon,
} from "./icons";
import { FadeIn, StaggerChildren, StaggerItem } from "./fade-in";

const iconMap = {
  chat: ChatIcon,
  voice: VoiceIcon,
  server: ServerIcon,
  ui: UiIcon,
} as const;

export function Features() {
  return (
    <section id="ozellikler" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Neler sunuyoruz?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Topluluğunuz için ihtiyacınız olan her şey, tek platformda.
          </p>
        </FadeIn>

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-purple-500/10">
                  <motion.div
                    className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0"
                  />
                  <motion.div
                    className="mb-4 inline-flex rounded-xl border border-purple-500/20 bg-purple-500/10 p-3 text-purple-400 transition-colors group-hover:border-purple-500/40 group-hover:bg-purple-500/20 group-hover:text-purple-300"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
