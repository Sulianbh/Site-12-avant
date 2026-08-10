import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Ce site est le « avant » d'une démonstration avant/après. Il est laid
 * exprès, et il l'est de la façon dont les sites le sont vraiment : pas
 * par sabotage, mais par accumulation de choix jamais repris.
 *
 * Ce qui suit, en revanche, n'est pas laid. Un en-tête de sécurité ne se
 * voit pas dans la page, donc le laisser tomber n'ajouterait rien à la
 * démonstration et mettrait en ligne un site moins sûr que nécessaire.
 * La laideur est dans ce que le visiteur voit, nulle part ailleurs.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'" + (isDev ? " ws: wss:" : ""),
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          /*
           * Sans condition, et sans variable pour le lever.
           *
           * Sur les sites finis, `NEXT_PUBLIC_INDEXABLE` existe parce
           * qu'un jour le gabarit portera le nom d'une agence réelle.
           * Ici, non : il n'y a aucune circonstance où l'on veuille
           * qu'une page volontairement ratée, portant le nom PASUPA,
           * remonte dans un moteur de recherche. Le réglage n'existe
           * donc pas, plutôt que d'exister et de pouvoir être basculé
           * par distraction.
           */
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
