import type { Metadata } from "next";
import { instrumentSerif, jetBrainsMono, outfit } from "@/lib/fonts";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import Cursor from "@/components/layout/Cursor";
import Navbar from "@/components/layout/Navbar";
import { FramerProvider } from "@/components/providers/FramerProvider";

export const metadata: Metadata = {
  title: "ALEX RIVERA | Ultra-Rich Creative Portfolio",
  description: "Graphic Designer · Product Designer · Video Editor · Photo Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${instrumentSerif.variable} ${jetBrainsMono.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <FramerProvider>
          <SmoothScroll>
            <div className="noise-overlay" />
            <Preloader />
            <Cursor />
            <Navbar />
            <main className="relative">{children}</main>
          </SmoothScroll>

        </FramerProvider>
      </body>
    </html>
  );
}
