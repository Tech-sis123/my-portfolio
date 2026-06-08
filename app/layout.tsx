import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ThreeBackground from "@/components/ThreeBackground";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Esabu Blessing — Computer Engineer",
  description:
    "Portfolio of Esabu Blessing, a Computer Engineering student at the University of Lagos building across backend systems, embedded hardware, applied research, and project management.",
  openGraph: {
    title: "Esabu Blessing — Computer Engineer",
    description:
      "Backend, Hardware, Research, Project Management. Lagos, Nigeria.",
    url: "https://esabu.tech",
    siteName: "Esabu Blessing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esabu Blessing — Computer Engineer",
    description: "Backend, Hardware, Research, Project Management.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${jetbrains.variable} ${bricolage.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThreeBackground />
          <div className="content-layer min-h-screen">
            <NavBar />
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
