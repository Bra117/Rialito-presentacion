import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const description =
  "App móvil de finanzas personales: ahorro, gastos, auto-préstamos, inversiones y tasas de cambio en tiempo real. 100% local y privado.";

export const metadata: Metadata = {
  title: "Rialito — Gestor Inteligente de Finanzas y Metas",
  description,
  alternates: {
    canonical: "https://rialito.webtrader.trade/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://rialito.webtrader.trade/",
    title: "Rialito — Gestor Inteligente de Finanzas y Metas",
    description,
    images: ["https://rialito.webtrader.trade/icon.png"],
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: "Rialito — Gestor Inteligente de Finanzas y Metas",
    description:
      "App móvil de finanzas personales: ahorro, gastos, auto-préstamos, inversiones y tasas de cambio en tiempo real.",
    images: ["https://rialito.webtrader.trade/icon.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Rialito",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Android, iOS, Web",
              description,
              url: "https://rialito.webtrader.trade/",
              image: "https://rialito.webtrader.trade/icon.png",
              author: {
                "@type": "Person",
                name: "Airan Bracamonte",
                url: "https://webtrader.trade/",
              },
            }),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
