interface PlaceholderImageProps {
  icon: string;
  label: string;
  variant?: "default" | "rose";
  aspect?: string;
  className?: string;
}

export default function PlaceholderImage({
  icon,
  label,
  variant = "default",
  aspect,
  className,
}: PlaceholderImageProps) {
  const classes = ["ph-img", variant === "rose" ? "roseph" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={aspect ? { aspectRatio: aspect } : undefined}>
      <span className="ph-label">
        <i className={`ph ${icon}`} />
        {label}
      </span>
    </div>
  );
}
