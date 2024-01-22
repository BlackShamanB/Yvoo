export default function manifest() {
  return {
    name: "Yvoo Technologies",
    short_name: "Yvoo Technologies",
    description: "Ultimate Industrial B2B Supplier Platform",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#06D6F8",
    icons: [
      {
        src: "/images/auditorBg.webp",
        type: "image/png",
        sizes: "any",
        purpose: "maskable any",
      },
    ],
  };
}
