# Guide Commits Conventionnels - Version Concise

## Structure de base
```
<type>[étendue]: <description>

[corps optionnel]

[pied optionnel]
```

## Types principaux
- **`feat:`** - nouvelle fonctionnalité (MINOR)
- **`fix:`** - correction de bug (PATCH)
- **`BREAKING CHANGE:`** ou **`!`** - rupture de compatibilité (MAJOR)

## Types secondaires
- `docs:` - documentation
- `style:` - formatage, style
- `refactor:` - refactorisation
- `test:` - ajout/modification de tests
- `chore:` - tâches de maintenance
- `perf:` - amélioration de performance
- `ci:` - intégration continue
- `build:` - système de build

## Exemples rapides
```
feat: ajouter système d'authentification
fix: corriger bug de validation formulaire
feat!: modifier API de connexion
docs: mettre à jour README
style: formatter le code selon ESLint
refactor: réorganiser les composants
test: ajouter tests unitaires pour Contact
chore: mettre à jour les dépendances
```

## Règles importantes
1. **Type obligatoire** en minuscules
2. **Description impérative** (ajouter, corriger, modifier...)
3. **Messages en français** (sauf le type)
4. **`!` après le type** pour breaking change
5. **Étendue optionnelle** : `feat(auth):`, `fix(ui):`

## Breaking Changes
```
feat!: modifier l'API des utilisateurs
# OU
feat: modifier l'API des utilisateurs

BREAKING CHANGE: les endpoints /users ont changé
```

Cette version concise permet aux outils de génération automatique de commits de mieux comprendre et appliquer les conventions.