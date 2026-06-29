import type { MetadataRoute } from "next";
import { brandSettings } from "../content/brandSettings";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brandSettings.appName,
    short_name: "Casa Sole",
    description: brandSettings.appSubtitle,
    start_url: "/sharmhills",
    scope: "/sharmhills",
    display: "standalone",
    orientation: "portrait",
    background_color: brandSettings.colors.surface,
    theme_color: brandSettings.colors.navy,
    categories: ["travel", "lifestyle"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
