type SectionMarkerProps = {
  id: string;
  number: string;
  title: string;
  size?: "lg" | "sm";
  onBand?: boolean;
};

// Numbered section heading on a heavy rule. The numbers match the header index.
export function SectionMarker({ id, number, title, size = "lg", onBand = false }: SectionMarkerProps) {
  return (
    <div className={`flex items-start gap-5 border-t pt-4 ${onBand ? "border-on-band/40" : "border-ink"}`}>
      <span className={`label ${size === "lg" ? "pt-1.5" : ""} ${onBand ? "text-primary-band" : "text-primary"}`}>
        {number}
      </span>
      <h2
        id={id}
        className={
          size === "lg" ? "text-[clamp(2.25rem,4.6vw,3.5rem)] leading-none font-extrabold tracking-[-0.035em]" : "label"
        }
      >
        {title}
      </h2>
    </div>
  );
}
