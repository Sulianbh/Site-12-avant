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

/**
 * Le chemin de base.
 *
 * GitHub Pages sert un site de projet sous le nom du dépôt —
 * `https://sulianbh.github.io/Site-12-avant/` et non à la racine d'un
 * domaine. Sans `basePath`, chaque lien et chaque feuille de style
 * pointerait vers `/`, c'est-à-dire vers la page d'accueil de
 * `sulianbh.github.io` : le site se chargerait sans style et aucune
 * navigation ne fonctionnerait.
 *
 * La variable n'est posée que par la construction d'intégration, à
 * partir du nom du dépôt. En local elle est vide, le site est servi à la
 * racine, et `npm start` marche comme avant.
 */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: base,
  assetPrefix: base || undefined,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
