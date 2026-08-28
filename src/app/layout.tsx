import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brasília Móveis Planejados",
  description: "Móveis planejados sob medida para o seu ambiente.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {process.env.NODE_ENV === "development" && (
          <Script
            src="http://localhost:8400/live.js?token=f90cef6b-c01a-4317-ade2-cc0af45f9ffc"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
