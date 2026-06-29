import type { Metadata } from "next";
import type { Viewport } from "next";
import type { ReactNode } from "react";
import { brandSettings } from "../content/brandSettings";
import "./globals.css";

export const metadata: Metadata = {
  title: `${brandSettings.appName} | ${brandSettings.resortName}`,
  description: `A premium digital concierge for ${brandSettings.brandName} guests staying at ${brandSettings.resortName}.`,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: brandSettings.appName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: brandSettings.colors.navy,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
