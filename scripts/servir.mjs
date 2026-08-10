/**
 * Un serveur de fichiers plats, pour regarder l'export en local.
 *
 * `next start` ne fonctionne pas avec `output: "export"` — il n'y a plus
 * de serveur Next à démarrer, seulement un dossier `out/`. Et un serveur
 * de fichiers naïf ne suffit pas : l'export écrit `projets.html`, alors
 * que les liens du site pointent vers `/projets`. Sans la résolution
 * ci-dessous, toute la navigation répond 404 en local alors qu'elle
 * fonctionne en ligne, où l'hébergeur fait ce travail.
 *
 * Zéro dépendance, comme le reste de la série.
 *
 *     node scripts/servir.mjs [port]
 */

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

/* `fileURLToPath` et non `.pathname` : le dossier de ce projet
   contient des espaces, et `pathname` les rend en %20. Le chemin
   obtenu n'existe alors sur aucun disque, et toutes les routes
   répondent 404 pendant que le serveur, lui, tourne très bien. */
const RACINE = fileURLToPath(new URL("../out/", import.meta.url));
const PORT = Number(process.argv[2] ?? 3013);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".png": "image/png",
};

/*
 * Les en-têtes que `public/_headers` déclare pour l'hébergeur. Ils sont
 * répétés ici — c'est la seule duplication du projet, et elle est
 * assumée : sans elle, le site servi en local n'aurait pas le `noindex`
 * ni la politique de sécurité, et on ne pourrait donc pas vérifier en
 * local ce qu'on vérifie en ligne.
 */
const ENTETES = {
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline'; " +
    "style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; " +
    "connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; " +
    "form-action 'self'; object-src 'none'",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "X-Robots-Tag": "noindex, nofollow",
};

/** Le fichier réellement demandé, dans l'ordre où l'hébergeur le cherche. */
async function resoudre(chemin) {
  const candidats =
    chemin.endsWith("/")
      ? [join(chemin, "index.html")]
      : [chemin, `${chemin}.html`, join(chemin, "index.html")];

  for (const c of candidats) {
    const absolu = join(RACINE, normalize(c));
    if (!absolu.startsWith(RACINE)) continue; // remontée de chemin
    try {
      if ((await stat(absolu)).isFile()) return absolu;
    } catch {
      /* candidat suivant */
    }
  }
  return null;
}

createServer(async (requete, reponse) => {
  const chemin = decodeURIComponent(new URL(requete.url, "http://x").pathname);
  const fichier = await resoudre(chemin === "/" ? "/index.html" : chemin);

  const envoyer = (code, corps, type) => {
    reponse.writeHead(code, {
      ...ENTETES,
      "Content-Type": type,
      "Content-Length": Buffer.byteLength(corps),
    });
    reponse.end(corps);
  };

  if (!fichier) {
    const absent = await resoudre("/404.html");
    return envoyer(
      404,
      absent ? await readFile(absent) : "404",
      "text/html; charset=utf-8",
    );
  }

  envoyer(
    200,
    await readFile(fichier),
    TYPES[extname(fichier)] ?? "application/octet-stream",
  );
}).listen(PORT, () => {
  console.log(`  export servi sur http://localhost:${PORT}`);
});
