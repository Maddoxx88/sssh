/**
 * Custom color schemes per page. Used by Layout and Navigation for body + nav styling.
 */
export const PAGE_THEMES = {
  work: {
    bg: "#722620",
    text: "#F2BC94",
    /** Text color on the active nav pill (contrast with page text) */
    navPillText: "#722620",
  },
  hackathons: {
    bg: "#14281D",
    text: "#FFFCDC",
    navPillText: "#14281D",
  },
} as const;

export type PageThemeId = keyof typeof PAGE_THEMES;
