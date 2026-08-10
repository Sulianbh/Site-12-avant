# PASUPA — le site AVANT (n° 12)

Le « avant » de la démonstration avant/après. Il se regarde à côté du
site 12, dont il porte **exactement le même contenu** : même agence,
mêmes six opérations, mêmes chiffres, mêmes trois règles, mêmes neuf
personnes. `src/lib/projets.ts` et `src/lib/agence.ts` sont les fichiers
du site fini, repris sans une modification.

Rien n'a été retiré. Tout a été mal montré.

**Tout est fictif** : l'agence, les associés, l'équipe, les projets, les
communes, les surfaces et les montants.

## Le parti : la laideur qui a une histoire

Il y a deux façons de faire un « avant ». La première est de saboter :
texte qui se chevauche, liens invisibles, couleurs qui piquent. Elle
donne un contraste spectaculaire et une démonstration nulle — le client
voit une caricature et n'y reconnaît pas son propre site.

Celle-ci est l'autre. C'est le site fait une fois, par quelqu'un de
consciencieux, en 1999, et jamais repris. **Rien n'y est cassé** : tout
se lit, tout se clique, tout fonctionne. C'est simplement qu'aucun choix
n'y a été refait. La largeur est fixe parce qu'à l'époque les écrans
l'étaient ; la mise en page est un tableau parce que c'était le seul
moyen ; les images ont leurs dimensions écrites en dur parce que c'était
la recommandation. Chacune de ces décisions était juste. Pas une n'a été
rouverte en vingt-cinq ans.

C'est ce site-là que le client a. C'est pour ça qu'il se reconnaîtra.

## Ce qu'on montre, point par point

| Sur ce site | Sur le site 12 |
| --- | --- |
| Six vignettes en vrac, sans un mot : ni titre, ni commune, ni année, ni surface. Il faut cliquer pour savoir ce qu'on regarde. | Chaque opération porte son nom, sa commune, son année, sa surface, son budget, sa durée de chantier et une phrase qui dit ce qui a été fait. |
| Les images sont posées en 160 × 120 sur des plans tracés en 400 × 250 : **tout est écrasé**. C'est la déformation la plus répandue du web, et elle vient toujours de là. | Le dessin garde ses proportions à toutes les largeurs. |
| **La fiche d'un projet n'a aucune description.** Les trois paragraphes existent dans les données ; ils ne sont jamais appelés. Une agence qui publie ses opérations sans dire ce qu'elle y a fait publie des images que personne ne peut juger. | Description complète, légende du plan, matières employées, distinction du existant / déposé / projeté. |
| **Aucun lien vers le projet suivant.** Arrivé au bas d'une fiche, on n'a que le bouton « précédent » du navigateur. | Précédent et suivant, avec le nom du projet, plus le retour à la liste. |
| Le menu n'indique jamais où l'on se trouve. Le visiteur sait ce qu'il peut atteindre, jamais où il est. | Trait et étoile sur la page courante, fil d'Ariane en chemin de fichier. |
| **Il n'y a pas de page « contact ».** Le téléphone est répété à trois endroits — colonne de gauche, pied de page, page agence — et aucun des trois n'est celui qu'on trouve en cherchant. | Une page dédiée, un formulaire de rendez-vous, les horaires, la zone d'intervention. |
| Largeur figée à 760 px. Sur un téléphone la page **déborde de 95 %** : il faut la pousser du doigt pour lire la fin de chaque ligne. | Testé de 320 à 1920 px, plus zoom 200 % et 400 %. |
| Texte justifié sans césure sur 110 caractères : des rivières de blanc, et l'œil perd sa ligne à chaque retour. | Mesure tenue à 68 caractères. |
| Un titre unique pour les neuf pages, aucune description, pas de plan du site, pas de données structurées, **pas d'image de partage** : collé dans une conversation, le lien s'affiche nu. | Titre et description par page, plan du site généré, données structurées liées, image de partage dessinée. |
| Un quart du menu est occupé par « Plan du site », la seule page qui n'apporte rien. | Quatre entrées, quatre destinations utiles. |
| La mise en page est un vrai `<table>` : un lecteur d'écran annonce « tableau, deux colonnes » avant chaque paragraphe. | Balisage sémantique, vérifié par `npm run semantique`. |
| Le compteur de visites est **faux** — un nombre écrit en dur qui n'a pas bougé depuis que le service a fermé. | — |

## Ce qui n'est pas laid

Les en-têtes de sécurité, et eux seuls. Un en-tête ne se voit pas dans
la page : le supprimer n'ajouterait rien à la démonstration et mettrait
en ligne un site moins sûr que nécessaire.

Le site est servi en `X-Robots-Tag: noindex, nofollow`, **sans variable
pour le lever**. Sur les sites finis, ce réglage existe parce qu'un jour
le gabarit portera le nom d'une agence réelle. Ici, non : il n'y a aucune
circonstance où l'on veuille qu'une page volontairement ratée, portant le
nom PASUPA, remonte dans un moteur.

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3013
npm run build && npm start
```

Le site fini tourne sur le port 3011 — les deux côte à côte, c'est la
démonstration.
