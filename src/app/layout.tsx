import type { Metadata } from "next";
import Script from "next/script";
import { playfair, raleway } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "DW Tattooer | Tatuagem Autoral & Realismo Premium",
  description: "Estúdio e portfólio oficial de DW, tatuador autoral brasileiro especializado em realismo, florais, geometria sagrada e mini tatuagens de alto padrão.",
  keywords: ["tattoo autoral", "realismo", "fine line", "tatuador", "tatuagem de luxo", "dw tattooer"],
  openGraph: {
    title: "DW Tattooer | Tatuagem Autoral & Realismo Premium",
    description: "Estúdio e portfólio oficial de DW, tatuador autoral brasileiro especializado em realismo, florais, geometria sagrada e mini tatuagens.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  const gaId = "G-GA4MEASUREMENTID"; // Placeholder a ser substituído pelo usuário
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased text-paper-100 bg-ink-warm select-none">
        {/* Google Analytics 4 Integration */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
