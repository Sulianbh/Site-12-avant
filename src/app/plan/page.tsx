import Link from "next/link";
import { PROJETS } from "@/lib/projets";

/*
 * Le « plan du site ».
 *
 * Il occupe une entrée sur quatre du menu principal — un quart de la
 * navigation — pour répéter les trois autres entrées et lister les six
 * projets. C'est la page la plus mise en avant du site et la seule qui
 * n'apporte rien : elle existe parce qu'on faisait des plans de site, à
 * une époque où les sites étaient assez grands pour qu'on s'y perde.
 *
 * Celui-ci compte neuf pages.
 */
export default function PlanAvant() {
  return (
    <>
      <h2>Plan du site</h2>

      <p className="petit">
        &gt; <Link href="/">Accueil</Link>
        <br />
        &gt; <Link href="/projets">Projets</Link>
        <br />
        {PROJETS.map((p) => (
          <span key={p.slug}>
            &nbsp;&nbsp;&nbsp;&gt; <Link href={`/projets/${p.slug}`}>{p.nom}</Link>
            <br />
          </span>
        ))}
        &gt; <Link href="/agence">L&rsquo;agence</Link>
        <br />
        &gt; <Link href="/plan">Plan du site</Link>
      </p>

      <hr />

      <p className="petit">
        Ce site est optimis&eacute; pour une r&eacute;solution de 800x600.
      </p>
    </>
  );
}
