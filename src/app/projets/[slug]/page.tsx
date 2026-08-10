import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJETS, projetParSlug } from "@/lib/projets";
import Schema from "@/components/Schema";

export function generateStaticParams() {
  return PROJETS.map((p) => ({ slug: p.slug }));
}

/*
 * La fiche d'un projet.
 *
 * C'est ici que la démonstration se joue le mieux, parce que c'est ici
 * que le site fini a le plus à dire et que celui-ci n'a rien.
 *
 * Le contenu existe pourtant : `projet.description` compte trois
 * paragraphes, `projet.legende` explique ce que le plan montre, et
 * `projet.matieres` nomme ce qui a été employé. Rien de tout cela n'est
 * appelé. Une agence d'architecture qui publie ses opérations sans dire
 * ce qu'elle y a fait publie six images que personne ne peut juger — et
 * c'est le cas de figure le plus répandu.
 *
 * Il ne reste que le tableau des données brutes, sans unité déclarée,
 * sans mise en forme, et sans lien vers le projet suivant : arrivé au
 * bas de la page, le visiteur n'a d'autre issue que le bouton
 * « précédent » de son navigateur.
 */
export default async function ProjetAvant({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projet = projetParSlug(slug);
  if (!projet) notFound();

  return (
    <>
      <h2>{projet.nom}</h2>

      <span className="vignette-grande">
        <Schema slug={projet.slug} />
      </span>

      <p className="centre petit">
        {projet.commune} - {projet.annee}
      </p>

      <hr />

      <h3>Caract&eacute;ristiques</h3>

      <table className="donnees">
        <tbody>
          {projet.fiche.map((l) => (
            <tr key={l.libelle}>
              <td>{l.libelle}</td>
              <td>{l.valeur}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="petit">
        <Link href="/projets">Retour</Link>
      </p>
    </>
  );
}
