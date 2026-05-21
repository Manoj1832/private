import React from "react";

const iconProps = {
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icons = {
  birthday: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M12 6V2M8 4v2M16 4v2M5 10h14l1 11H4l1-11z" />
      <path d="M8 6c0-1 .5-2 2-2s2 1 2 2M14 6c0-1 .5-2 2-2s2 1 2 2" />
    </svg>
  ),
  graduation: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M12 3L1 9l11 6 9-4.91V17M5 13.18v4L12 21l7-3.82v-4" />
    </svg>
  ),
  family: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="7" r="2" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M17 11a3 3 0 013 3v2" />
    </svg>
  ),
  building: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
    </svg>
  ),
  scale: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M12 3v18M3 7l3-4 3 4M15 7l3-4 3 4M3 7v4a3 3 0 003 3h0a3 3 0 003-3V7M15 7v4a3 3 0 003 3h0a3 3 0 003-3V7" />
    </svg>
  ),
  people: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <circle cx="17" cy="7" r="3" />
      <path d="M21 21v-2a3 3 0 00-2-2.83" />
    </svg>
  ),
  chart: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M3 3v18h18M7 16l4-6 4 3 5-7" />
    </svg>
  ),
  road: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M8 3v18M16 3v18M12 3v4M12 11v4M12 19v2" />
    </svg>
  ),
  hospital: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 21v-6h6v6M12 7v6M9 10h6" />
    </svg>
  ),
  water: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
    </svg>
  ),
  book: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15zM8 7h8M8 11h6" />
    </svg>
  ),
  office: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
    </svg>
  ),
  trophy: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M6 9H4a2 2 0 01-2-2V5a2 2 0 012-2h2M18 9h2a2 2 0 002-2V5a2 2 0 00-2-2h-2M6 3h12v7a6 6 0 01-12 0V3zM9 21h6M12 16v5" />
    </svg>
  ),
  lightbulb: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
    </svg>
  ),
  tree: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M12 22V14M7 14l5-10 5 10H7zM9 14l3-6 3 6H9z" />
    </svg>
  ),
  school: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M12 3L1 9l11 6 9-4.91V17M5 13.18v4L12 21l7-3.82v-4M12 22v-6" />
    </svg>
  ),
  construction: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M14.5 2l5 5-7.5 7.5-5-5L14.5 2zM10 13l-6 6M3 21l3-3M16 8l5 5" />
    </svg>
  ),
  heart: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  whatsapp: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  document: (props: Partial<typeof iconProps>) => (
    <svg viewBox="0 0 24 24" {...iconProps} {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
};

export type IconName = keyof typeof Icons;
