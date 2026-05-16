type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md",
    accent:
      "border-purple-500/30 bg-purple-500/10 text-purple-300 backdrop-blur-md",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {variant === "accent" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
        </span>
      )}
      {children}
    </span>
  );
}
