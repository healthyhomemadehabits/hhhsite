interface PlaceholderImageProps {
  icon: string;
  label: string;
  variant?: "default" | "rose";
  className?: string;
}

export default function PlaceholderImage({
  icon,
  label,
  variant = "default",
  className,
}: PlaceholderImageProps) {
  const classes = ["ph-img", variant === "rose" ? "roseph" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <span className="ph-label">
        <i className={`ph ${icon}`} />
        {label}
      </span>
    </div>
  );
}
