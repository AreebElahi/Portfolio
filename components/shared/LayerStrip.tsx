import type { Layer } from "@/data/site";

// Core web layers get an indigo marker; specialist layers (payments, machine learning) get the highlight.
const core = new Set(["Interface", "API", "Data", "Infrastructure"]);

export function LayerStrip({ layers, className = "" }: { layers: Layer[]; className?: string }) {
  return (
    <dl className={`border-t border-ink ${className}`}>
      {layers.map(({ layer, tools }) => (
        <div key={layer} className="grid grid-cols-[minmax(0,8.5rem)_1fr] gap-x-4 border-b border-line py-2">
          <dt className="label flex items-center gap-2 pt-0.5 text-muted">
            <span aria-hidden="true" className={`size-2 shrink-0 ${core.has(layer) ? "bg-primary" : "bg-highlight"}`} />
            {layer}
          </dt>
          <dd className="text-[0.9375rem]">{tools.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  );
}
