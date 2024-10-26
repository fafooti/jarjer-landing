
interface Subtitle {
  main: string;
  secondary?: string;
}

interface HeroText {
  title: string;
  subtitle: Subtitle[];
  buttonText: string;
}

export const heroText: HeroText = {
  title: "WPFO",
  subtitle: [
    { main: "Cleare Ocean" },
    { main: "of", secondary: "Opportunity" },
  ],
  buttonText: "Buy and Sell",
};
