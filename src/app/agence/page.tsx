import { AGENCE, EQUIPE, FRISE, DISTINCTIONS } from "@/lib/agence";

/*
 * La page « L'agence ».
 *
 * Elle contient la frise, l'équipe et les distinctions — le même contenu
 * que la page du site fini. Là-bas, la frise est une suite de grosses
 * dates qu'on parcourt de l'œil, l'équipe une grille de personnes, les
 * distinctions une liste datée.
 *
 * Ici, les trois sont des paragraphes. La frise perd ses dates comme
 * repères visuels : elles sont dans le texte, à la même taille que le
 * reste, et il faut lire chaque phrase pour trouver l'année. L'équipe
 * devient une énumération où les neuf personnes se suivent sans respirer.
 * Rien n'est perdu, et rien ne se voit.
 */
export default function AgenceAvant() {
  return (
    <>
      <h2>L&rsquo;agence</h2>

      <h3>Pr&eacute;sentation</h3>
      <p>
        {AGENCE.nomLong} a &eacute;t&eacute; cr&eacute;&eacute;e en{" "}
        {AGENCE.depuis}. {AGENCE.these} {AGENCE.sousThese} {AGENCE.ordre}.
      </p>

      {/*
        La frise, coulée en un seul paragraphe. Quinze ans d'histoire de
        l'agence deviennent un bloc de six cents mots dans lequel les
        années sont noyées au fil du texte.
      */}
      <h3>Notre parcours</h3>
      <p>
        {FRISE.map((e) => `En ${e.annee}, ${e.titre.toLowerCase()}. ${e.texte}`).join(" ")}
      </p>

      {/*
        L'équipe, en énumération. Les rôles y sont, les dates d'arrivée
        aussi, mais il faut les lire un par un — aucune structure ne les
        rend comparables.
      */}
      <h3>L&rsquo;&eacute;quipe</h3>
      <p>
        L&rsquo;&eacute;quipe est actuellement compos&eacute;e de{" "}
        {EQUIPE.length} personnes :{" "}
        {EQUIPE.map(
          (m, i) =>
            `${m.nom} (${m.role.toLowerCase()}, depuis ${m.depuis})${
              i === EQUIPE.length - 1 ? "." : i === EQUIPE.length - 2 ? " et " : ", "
            }`,
        ).join("")}
      </p>

      <h3>R&eacute;compenses</h3>
      <p>
        {DISTINCTIONS.map(
          (d) => `${d.intitule} (${d.annee}), pour ${d.projet}.`,
        ).join(" ")}
      </p>

      <hr />

      {/*
        Il n'y a pas de page « contact » sur ce site : elle n'a jamais été
        faite. Les coordonnées sont répétées ici, dans le pied de page, et
        dans la colonne de gauche de l'accueil — trois fois, sans qu'aucune
        des trois ne soit celle qu'on trouve en cherchant « contact ».
      */}
      <h3>Coordonn&eacute;es</h3>
      <p className="petit">
        {AGENCE.nomLong}
        <br />
        {AGENCE.adresse.rue}
        <br />
        {AGENCE.adresse.codePostal} {AGENCE.adresse.ville}
        <br />
        T&eacute;l&eacute;phone : {AGENCE.telephone}
        <br />
        Courriel : <a href={`mailto:${AGENCE.courriel}`}>{AGENCE.courriel}</a>
        <br />
        {AGENCE.horaires}
        <br />
        {AGENCE.visite}
      </p>
    </>
  );
}
