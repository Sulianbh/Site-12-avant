import Link from "next/link";
import { PROJETS } from "@/lib/projets";
import Schema from "@/components/Schema";

/*
 * La page des projets.
 *
 * Les six mêmes opérations que sur le site fini, et rien de ce qui les
 * rend lisibles. Pas d'accroche, pas de commune, pas d'année sous
 * l'image, pas de surface, pas de budget — les images d'un côté, une
 * liste de noms de l'autre, et au visiteur de faire le rapprochement.
 *
 * L'ordre n'est pas chronologique : c'est l'ordre dans lequel les six
 * fichiers ont été ajoutés au dossier, année après année, en mettant le
 * dernier arrivé à la fin. Personne ne l'a jamais décidé, et rien sur la
 * page ne dit quel ordre c'est.
 */
export default function ProjetsAvant() {
  return (
    <>
      <h2>Nos projets</h2>

      <p className="centre petit">
        Cliquez sur une image pour l&rsquo;agrandir.
      </p>

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

      <hr />

      {/*
        La liste des noms, séparée des images qu'elle désigne. Les deux
        blocs sont dans le même ordre, mais rien ne le dit et rien ne
        garantit qu'ils le resteront : le jour où l'un des deux sera
        réordonné, l'autre ne suivra pas.
      */}
      <h3>Liste des r&eacute;alisations</h3>
      <p className="petit">
        {PROJETS.map((p, i) => (
          <span key={p.slug}>
            {i > 0 && <br />}- <Link href={`/projets/${p.slug}`}>{p.nom}</Link>{" "}
            ({p.annee})
          </span>
        ))}
      </p>

      <p className="petit">
        Pour toute demande concernant un projet en particulier, merci de nous
        contacter par t&eacute;l&eacute;phone. Nous disposons
        &eacute;galement d&rsquo;autres r&eacute;alisations non
        pr&eacute;sent&eacute;es sur ce site.
      </p>
    </>
  );
}
