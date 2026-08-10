import Link from "next/link";
import { AGENCE, CHIFFRES, REGLES } from "@/lib/agence";
import { PROJETS } from "@/lib/projets";
import Schema from "@/components/Schema";

/*
 * La page d'accueil.
 *
 * Elle contient exactement le même contenu que celle du site fini : les
 * mêmes chiffres, les mêmes trois règles, les mêmes six opérations. La
 * différence n'est pas dans ce qui est dit, elle est dans le fait que
 * rien n'est distingué de rien.
 *
 * Sur le site fini, ces éléments sont trois choses : un argument, une
 * méthode, un portfolio. Ici ils sont une seule coulée de texte justifié
 * dans laquelle il faut entrer par le début, parce qu'aucun repère ne
 * permet d'entrer ailleurs. Le visiteur qui cherche « est-ce qu'ils font
 * de la réhabilitation » doit lire jusqu'au bout pour le savoir, alors
 * que la réponse est écrite.
 */
/*
 * Les quatre paragraphes du mur de texte.
 *
 * Ils sont composés ici, en chaînes, plutôt que dans le balisage. Ce
 * n'est pas un détail de style : dans du JSX, un retour à la ligne placé
 * juste après une expression `{…}` est supprimé, espace compris. Écrits
 * directement dans la page, ces paragraphes rendaient « architectesest »
 * et « réhabilitation.L'équipe » — des soudures qui se lisent comme des
 * fautes de frappe, pas comme une décision d'époque.
 *
 * Le site doit être laid, pas fautif. La laideur est dans la mise en
 * page ; le texte, lui, est le même mot pour mot que celui du site fini.
 */
const MURS = [
  `La société ${AGENCE.nomLong} est une agence d’architecture installée à ` +
    `${AGENCE.adresse.ville} depuis ${AGENCE.depuis}. ${AGENCE.these} ` +
    `${AGENCE.sousThese} Nous intervenons principalement sur le secteur de ` +
    `${AGENCE.zone.slice(0, -1).join(", ")} et ${AGENCE.zone[AGENCE.zone.length - 1]}, ` +
    `dans un rayon d’environ soixante kilomètres autour de nos bureaux, ` +
    `distance qui nous permet d’assurer une visite hebdomadaire sur chacun ` +
    `de nos chantiers en cours. Notre agence est ` +
    `${AGENCE.ordre.charAt(0).toLowerCase()}${AGENCE.ordre.slice(1)}.`,

  `Depuis notre création, nous avons réalisé ${CHIFFRES[0].valeur} ` +
    `${CHIFFRES[0].libelle}. ${CHIFFRES[0].precision} L’équipe compte ` +
    `aujourd’hui ${CHIFFRES[1].valeur} ${CHIFFRES[1].libelle}. ` +
    `${CHIFFRES[1].precision} Après chaque réunion hebdomadaire, un compte ` +
    `rendu vous est adressé dans un délai de ${CHIFFRES[2].valeur}. ` +
    `${CHIFFRES[2].precision} ${CHIFFRES[3].precision}`,

  `Notre méthode de travail repose sur trois principes que nous appliquons ` +
    `systématiquement. Premièrement, ${REGLES[0].titre.toLowerCase()} : ` +
    `${REGLES[0].texte} Deuxièmement, ${REGLES[1].titre.toLowerCase()} : ` +
    `${REGLES[1].texte} Troisièmement, ${REGLES[2].titre.toLowerCase()} : ` +
    `${REGLES[2].texte}`,
];

export default function AccueilAvant() {
  return (
    <>
      <h2>Bienvenue sur le site de PASUPA architectes</h2>

      <table className="mise">
        <tbody>
          <tr>
            {/*
              La colonne de gauche est une liste de liens qui répète le
              menu du haut, plus quelques entrées qui n'existent nulle
              part ailleurs. Elle occupe un quart de la largeur sur toutes
              les pages, quelle que soit son utilité.
            */}
            <td className="colonne-etroite">
              <h3>Menu</h3>
              <p className="petit">
                &gt; <Link href="/">Accueil</Link>
                <br />
                &gt; <Link href="/projets">Nos projets</Link>
                <br />
                &gt; <Link href="/agence">L&rsquo;agence</Link>
                <br />
                &gt; <Link href="/agence">Qui sommes-nous</Link>
                <br />
                &gt; <Link href="/plan">Plan du site</Link>
              </p>

              <hr />

              <h3>Nous contacter</h3>
              <p className="petit">
                {AGENCE.adresse.rue}
                <br />
                {AGENCE.adresse.codePostal} {AGENCE.adresse.ville}
                <br />
                T&eacute;l. {AGENCE.telephone}
                <br />
                {AGENCE.horaires}
              </p>

              <hr />

              <p className="nouveau centre">
                *** NOUVEAU ***
                <br />
                Consultez nos derni&egrave;res r&eacute;alisations !
              </p>
            </td>

            <td>
              {/*
                Le mur de texte. Tout le contenu de la page d'accueil du
                site fini est là, mais coulé en paragraphes justifiés de
                cent dix caractères, sans intertitre, sans chiffre mis en
                avant, sans rien qui permette de sauter.
              */}
              {MURS.map((texte) => (
                <p key={texte.slice(0, 40)}>{texte}</p>
              ))}

              <p>
                {`N’hésitez pas à nous contacter par téléphone au ${AGENCE.telephone} ou par courrier électronique à l’adresse `}
                <a href={`mailto:${AGENCE.courriel}`}>{AGENCE.courriel}</a>
                {` pour toute demande de renseignement concernant vos projets de construction, de réhabilitation ou de surélévation. ${AGENCE.visite}. Nos bureaux sont ouverts ${AGENCE.horaires.toLowerCase()}.`}
              </p>

              <p className="important">
                Cliquez ici pour voir nos r&eacute;alisations :{" "}
                <Link href="/projets">nos projets</Link>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Quelques r&eacute;alisations</h2>

      {/*
        Les six planches, en vrac et sans un mot.

        Aucun titre, aucune commune, aucune année, aucune légende. Chaque
        vignette est un lien, mais rien ne le dit — ni couleur, ni
        soulignement, ni curseur annoncé — et le texte de remplacement se
        limite au nom du projet, si bien qu'au clavier on parcourt six
        liens sans savoir vers quoi ils mènent.

        Les dimensions 160 × 120 sont écrites en dur sur des dessins
        tracés en 400 × 250 : tout est écrasé.
      */}
      <table className="mise centre">
        <tbody>
          <tr>
            {PROJETS.slice(0, 3).map((p) => (
              <td key={p.slug} className="centre">
                <Link href={`/projets/${p.slug}`}>
                  <span className="vignette">
                    <Schema slug={p.slug} />
                  </span>
                </Link>
              </td>
            ))}
          </tr>
          <tr>
            {PROJETS.slice(3, 6).map((p) => (
              <td key={p.slug} className="centre">
                <Link href={`/projets/${p.slug}`}>
                  <span className="vignette">
                    <Schema slug={p.slug} />
                  </span>
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <p className="centre petit">
        Pour agrandir une image, cliquez dessus.
      </p>
    </>
  );
}
