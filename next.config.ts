import type { NextConfig } from "next";

/**
 * Ce site est le « avant » d'une démonstration avant/après. Il est laid
 * exprès, et il l'est de la façon dont les sites le sont vraiment : pas
 * par sabotage, mais par accumulation de choix jamais repris.
 *
 * ------------------------------------------------------------------
 * Pourquoi un export statique, alors que les treize autres sites de la
 * série tournent sur le runtime Next de Netlify
 * ------------------------------------------------------------------
 *
 * Parce que le compte Netlify n'a plus de crédits de construction : une
 * construction lancée sur leur infrastructure est refusée avec
 * « Skipped due to account credit usage exceeded », et le déploiement
 * échoue avant d'avoir commencé.
 *
 * `output: "export"` déplace la construction ici : `next build` écrit un
 * dossier `out/` de fichiers plats, qu'on téléverse tel quel sans qu'une
 * seule minute de construction soit consommée chez l'hébergeur. Le site
 * s'y prête entièrement — toutes ses routes sont statiques, il n'a ni
 * fonction, ni image optimisée, ni rendu à la demande.
 *
 * La contrepartie, et elle compte : **un export statique ignore
 * `headers()`**. Les en-têtes ne sont donc plus déclarés ici mais dans
 * `public/_headers`, qui devient leur source unique. Les répéter aux
 * deux endroits créerait deux vérités qui finiraient par diverger — et
 * celle d'ici ne serait jamais appliquée, donc jamais démentie.
 */
const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
