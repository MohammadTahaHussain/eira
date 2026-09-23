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
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
