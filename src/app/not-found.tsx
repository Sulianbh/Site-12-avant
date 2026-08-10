import Link from "next/link";

/*
 * La page d'erreur.
 *
 * Un titre, une phrase, un lien. C'est déjà mieux que ce qu'ont la
 * plupart des sites de cette génération, où l'erreur 404 est celle du
 * serveur — trois lignes en Times sur fond blanc, sans en-tête, sans
 * menu, sans le nom de l'agence. Ici au moins la mise en page tient,
 * puisqu'elle est dans la racine.
 *
 * Ce qu'elle n'a pas : la moindre idée de ce que le visiteur cherchait,
 * et la moindre proposition. Il est arrivé quelque part par erreur, on
 * le lui dit, et on le renvoie au début.
 */
export default function IntrouvableAvant() {
  return (
    <>
      <h2>Erreur 404</h2>

      <p className="centre">
        La page demand&eacute;e n&rsquo;existe pas ou a &eacute;t&eacute;
        d&eacute;plac&eacute;e.
      </p>

      <p className="centre petit">
        <Link href="/">Retour &agrave; l&rsquo;accueil</Link>
      </p>
    </>
  );
}
