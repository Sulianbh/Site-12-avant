import type { Metadata } from "next";
import Link from "next/link";
import { AGENCE } from "@/lib/agence";
import "./globals.css";

/*
 * Les métadonnées d'un site qui n'en a jamais eu.
 *
 * Un seul titre pour toutes les pages — c'est celui que le premier
 * gabarit portait, et aucune page n'a jamais eu le sien. Dans un onglet,
 * six pages ouvertes donnent six fois « Site de PASUPA architectes ».
 * Dans un moteur, elles se ressemblent au point d'être traitées comme
 * des doublons.
 *
 * Pas de description, donc pas de résumé sous le lien. Pas de langue
 * déclarée autrement que par `<html lang>`. Pas de canonique, pas de
 * plan du site, pas de données structurées, pas d'image de partage :
 * collé dans une conversation, le lien s'affiche nu.
 */
export const metadata: Metadata = {
  title: "Site de PASUPA architectes",
};

export default function RacineAvant({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
      {/*
        Le `noindex`, en balise et non en en-tête.

        Sur Netlify il venait de `public/_headers`. GitHub Pages ne
        connaît pas ce fichier : il sert des fichiers plats et rien
        d'autre, sans moyen d'ajouter le moindre en-tête. Or
        `sulianbh.github.io` est un domaine réel et indexable.

        La balise fait le même travail pour ce qui compte ici — un robot
        qui charge la page la lit et n'indexe pas. Ce qu'elle ne fait
        pas, et qu'il faut savoir : elle ne protège pas les fichiers qui
        ne sont pas du HTML, et elle n'apporte évidemment aucune des
        protections de la politique de sécurité du contenu, qui est
        perdue elle aussi sur cet hébergeur. Pour un site de
        démonstration entièrement statique, sans formulaire qui
        transmette quoi que ce soit et sans une seule ressource tierce,
        c'est une perte acceptable — mais c'en est une, et elle est
        écrite ici pour qu'on ne la découvre pas plus tard.
      */}
      <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        <div className="page">
          <div className="bandeau">
            <h1>PASUPA ARCHITECTES</h1>
            <p className="devise">
              Architecture &amp; Ma&icirc;trise d&rsquo;&OElig;uvre - Paris et
              R&eacute;gion Parisienne
            </p>
          </div>

          {/*
            La navigation.

            Quatre liens, aucun repère de position, et un cinquième
            libellé — « Plan du site » — qui mène à une page qui ne fait
            que répéter les quatre autres. Le libellé « L'agence » et le
            libellé « Qui sommes-nous » désignent la même chose à deux
            endroits du site, ce que personne n'a jamais remarqué parce
            que personne n'a jamais relu les deux ensemble.
          */}
          <div className="menu">
            <Link href="/">Accueil</Link> | <Link href="/projets">Projets</Link>{" "}
            | <Link href="/agence">L&rsquo;agence</Link> |{" "}
            <Link href="/plan">Plan du site</Link>
          </div>

          <hr />

          {children}

          <div className="pied">
            {/*
              Le compteur de visites. Il est faux : c'est un nombre écrit
              en dur qui ne bouge pas d'une visite à l'autre. Il l'était
              déjà quand le service qui le fournissait a fermé, et
              personne ne s'en est aperçu.
            */}
            Vous &ecirc;tes le 04127&egrave;me visiteur de ce site.
            <br />
            Derni&egrave;re mise &agrave; jour : 09/08/2026
            <br />
            <br />
            {AGENCE.nom} - {AGENCE.adresse.rue}, {AGENCE.adresse.codePostal}{" "}
            {AGENCE.adresse.ville}
            <br />
            T&eacute;l&eacute;phone : {AGENCE.telephone} - Courriel :{" "}
            <a href={`mailto:${AGENCE.courriel}`}>{AGENCE.courriel}</a>
            <br />
            <br />
            Site r&eacute;alis&eacute; en interne. Reproduction interdite.
            <br />
            <span className="petit">
              D&eacute;monstration - agence, projets et personnes
              enti&egrave;rement fictifs.
            </span>
          </div>
        </div>
      </body>
    </html>
  );
}
