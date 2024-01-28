# Exercise-Quiz

## Aperçu

Dans cet exercice, j'ai mis en place avec succès un simple jeu de quiz en JavaScript en suivant les directives et les instructions fournies. L'exercice consistait à créer des fonctionnalités interactives pour poser des questions, recueillir les réponses des utilisateurs, vérifier leur exactitude et modifier dynamiquement le Modèle d'Objet de Document (DOM) en fonction des entrées utilisateur.

## Étapes Implémentées

### Étape 1 - Récupération de la Première Question

Au lancement de la page, j'ai mis en œuvre une logique pour récupérer la première question du fichier `js/questions.js` et l'ai stockée dans une nouvelle variable. Cette étape m'a permis de me familiariser avec l'accès aux données depuis des fichiers externes.

### Étape 2 - Poser la Question et Récupérer la Réponse de l'Utilisateur

J'ai réussi à implémenter la fonctionnalité pour inviter l'utilisateur à répondre à une question et recueillir sa réponse en utilisant la fonction `prompt`. L'entrée de l'utilisateur a ensuite été affichée dans la console.

### Étape 3 - Vérification de la Réponse

Pour assurer la correction de la réponse de l'utilisateur, j'ai comparé celle-ci avec la réponse attendue du fichier `js/questions.js`. Selon la correction, "CORRECT" ou "faux" a été affiché dans la console.

### Étape 4 - Modification du DOM

J'ai implémenté la modification du DOM en fonction de la correction de la réponse de l'utilisateur. Si la réponse était correcte, la question correspondante a été ajoutée à la liste verte ; sinon, elle a été ajoutée à la liste rouge.


### Étape 5 - Bouclage !

J'ai mis en œuvre avec succès une boucle qui itérait sur toutes les questions du tableau, posait chaque question, vérifiait les réponses et modifiait le DOM en conséquence.



## Défis Bonus

- En guise d'amélioration supplémentaire, j'ai utilisé des techniques telles que `createElement` pour créer dynamiquement des éléments et `append` pour les ajouter au DOM. Cette fonctionnalité avancée a amélioré l'expérience utilisateur globale.

## Conclusion

Cet exercice a fourni une expérience pratique précieuse en JavaScript, en manipulation du DOM et en implémentation de fonctionnalités interactives.
