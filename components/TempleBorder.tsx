import React from "react";

type TempleBorderProps = {
  /**
   * Color variant for the border motifs:
   * - "maroon" (default): deep classical maroon (#a31e21)
   * - "ink": black / dark charcoal (#1d1d1e) directly matching the reference
   * - "gold": classical zari gold (#c6953f)
   * - "cream": light warm cream (#f9f7f5) for dark panels
   */
  variant?: "maroon" | "ink" | "gold" | "cream";
  /**
   * Background color of the strip container:
   * - "cream": #f9f7f5
   * - "cream-warm": #e9e3d6
   * - "maroon": var(--maroon)
   * - "transparent": transparent
   */
  bg?: "cream" | "cream-warm" | "maroon" | "transparent";
  /**
   * Whether to show subtle framing accent lines above and below the pattern
   */
  framed?: boolean;
  className?: string;
};

export function TempleBorder({
  variant = "maroon",
  bg = "cream",
  framed = true,
  className = "",
}: TempleBorderProps) {
  const colorMap = {
    maroon: "#a31e21",
    ink: "#1d1d1e",
    gold: "#c6953f",
    cream: "#f9f7f5",
  };

  const bgMap = {
    cream: "bg-[var(--cream)]",
    "cream-warm": "bg-[var(--cream-warm)]",
    maroon: "bg-[var(--maroon)]",
    transparent: "bg-transparent",
  };

  const frameColorMap = {
    maroon: "border-[var(--maroon)]/20",
    ink: "border-black/15",
    gold: "border-[var(--gold)]/30",
    cream: "border-white/20",
  };

  const motifColor = colorMap[variant] || colorMap.maroon;

  return (
    <div
      className={`w-full overflow-hidden ${bgMap[bg]} ${
        framed ? `border-y ${frameColorMap[variant]}` : ""
      } py-2 ${className}`}
      aria-hidden="true"
    >
      <div
        className="w-full h-8 md:h-9"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 54 36' width='54' height='36'%3E%3Cpolygon points='0,18 27,3 54,18 27,33' fill='none' stroke='${encodeURIComponent(
            motifColor
          )}' stroke-width='2.2' stroke-linejoin='miter' stroke-miterlimit='4'/%3E%3Cpolygon points='14,18 27,9.5 40,18 27,26.5' fill='${encodeURIComponent(
            motifColor
          )}'/%3E%3Ccircle cx='0' cy='5' r='2.5' fill='${encodeURIComponent(
            motifColor
          )}'/%3E%3Ccircle cx='54' cy='5' r='2.5' fill='${encodeURIComponent(
            motifColor
          )}'/%3E%3Ccircle cx='0' cy='31' r='2.5' fill='${encodeURIComponent(
            motifColor
          )}'/%3E%3Ccircle cx='54' cy='31' r='2.5' fill='${encodeURIComponent(
            motifColor
          )}'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          backgroundSize: "54px 36px",
        }}
      />
    </div>
  );
}
