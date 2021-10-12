export type Theme = {
  cardBackground: string;
  textMuted: string;
  text: string;
  background: string;
  toggleButton: string;
  toggleBackground: string;
};

export const themes: Theme[] = [
  {
    cardBackground: "bg-dark-card-bg hover:brightness-125",
    textMuted: "text-dark-muted-text",
    text: "text-dark-text",
    background: "bg-dark-bg",
    toggleButton: "bg-dark-bg",
    toggleBackground:
      "bg-gradient-to-r from-dark-toggle-from to-dark-toggle-to",
  },
  {
    cardBackground: "bg-light-card-bg hover:brightness-95",
    textMuted: "text-light-muted-text",
    text: "text-light-text",
    background: "bg-light-bg",
    toggleButton: "bg-light-bg",
    toggleBackground: "bg-light-toggle",
  },
];
