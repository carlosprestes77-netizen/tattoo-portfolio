import type { Metadata } from "next";
import Script from "next/script";
import { playfair, raleway } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Kael | Tatuagem Autoral & Blackwork Premium",
  description: "Estúdio e portfólio oficial de Thiago Kael, tatuador autoral brasileiro especializado em surrealismo sombrio, geometria sagrada e fine line de alto padrão em São Paulo.",
  keywords: ["tattoo autoral", "blackwork", "fine line", "tatuador sao paulo", "tatuagem de luxo", "thiago kael"],
  openGraph: {
    title: "Thiago Kael | Tatuagem Autoral & Blackwork Premium",
    description: "Estúdio e portfólio oficial de Thiago Kael, tatuador autoral brasileiro especializado em surrealismo sombrio, geometria sagrada e fine line de alto padrão.",
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
