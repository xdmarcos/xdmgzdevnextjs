// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "xdmGzDev",
  description: " Marcos González, iOS Developer.",
  icons: {
    icon: "../public/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body>{children}</body>
    </html>
  );
}