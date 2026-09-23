export default function manifest() {
  return {
    name: "EIRA Forklifts Pakistan",
    short_name: "EIRA",
    description: "Heavy-duty diesel, electric and LPG forklifts for sale in Pakistan.",
    start_url: "/",
    display: "standalone",
    background_color: "#121c2a",
    theme_color: "#121c2a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
