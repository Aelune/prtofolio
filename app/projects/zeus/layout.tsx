import type { Metadata } from "next";
import "./local.css";

export const metadata: Metadata = {
  title: "Klipb – Clipboard Manager for Wayland",
  description:
    "Store, list, decode, delete, and wipe your Wayland clipboard with wl-clipboard & rofi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
