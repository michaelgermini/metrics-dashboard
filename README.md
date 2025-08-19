# Metrics Dashboard - Tableau de bord SaaS

Un dashboard SaaS moderne pour visualiser des données e-commerce, cryptomonnaies et météo avec React et TypeScript.

## 🚀 Fonctionnalités

### Web (React)
- **Graphiques interactifs** avec Recharts
- **Filtres dynamiques** avec React Query
- **Thème clair/sombre** avec persistance
- **Design responsive** avec Tailwind CSS
- **Navigation fluide** avec React Router

### Sections disponibles
- **Vue d'ensemble** : KPIs principaux et aperçu global
- **E-commerce** : Métriques détaillées, graphiques de revenus, top produits
- **Cryptomonnaies** : Données en temps réel via CoinGecko API
- **Météo** : Conditions météorologiques par ville
- **Paramètres** : Configuration de l'application

## 🛠️ Technologies

- **Frontend** : React 18 + TypeScript
- **Styling** : Tailwind CSS + Lucide React
- **Graphiques** : Recharts
- **État** : React Query (TanStack Query)
- **Routing** : React Router DOM
- **Build** : Vite
- **Tests** : Jest + React Testing Library

## 📦 Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd metrics-dashboard
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Construire le package shared**
```bash
cd shared && npm run build && cd ..
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev          # Lancer le serveur de développement
npm run build        # Construire pour la production
npm run preview      # Prévisualiser la build

# Tests
npm run test         # Lancer les tests
npm run test:watch   # Tests en mode watch

# Qualité de code
npm run lint         # Vérifier le code avec ESLint
npm run lint:fix     # Corriger automatiquement les erreurs
npm run format       # Formater le code avec Prettier
```

## 🌐 APIs intégrées

### CoinGecko API
- Données cryptomonnaies en temps réel
- Prix, market cap, volume
- Fallback vers données mockées

### OpenWeatherMap API (optionnel)
- Données météorologiques
- Nécessite une clé API dans `VITE_WEATHER_API_KEY`

## 📱 Structure du projet

```
metrics-dashboard/
├── shared/                 # Types et utilitaires partagés
│   ├── src/
│   │   ├── types.ts       # Interfaces TypeScript
│   │   ├── utils.ts       # Fonctions utilitaires
│   │   └── index.ts       # Exports
│   └── package.json
├── web/                   # Application React
│   ├── src/
│   │   ├── components/    # Composants réutilisables
│   │   ├── pages/         # Pages de l'application
│   │   ├── hooks/         # Hooks personnalisés
│   │   ├── services/      # Services API
│   │   ├── contexts/      # Contextes React
│   │   └── utils/         # Utilitaires
│   └── package.json
└── package.json           # Configuration monorepo
```

## 🎨 Thèmes

L'application supporte deux thèmes :
- **Mode clair** : Interface claire et moderne
- **Mode sombre** : Interface sombre pour réduire la fatigue oculaire

Le thème est automatiquement sauvegardé dans le localStorage.

## 📊 Données

### E-commerce (Mock)
- Revenus, commandes, clients
- Top produits et catégories
- Graphiques d'évolution
- Taux de conversion

### Cryptomonnaies (API réelle)
- Prix en temps réel
- Variations 24h
- Market cap et volume
- Images des cryptomonnaies

### Météo (API réelle)
- Température, humidité, vent
- Conditions météorologiques
- Recherche par ville

## 🧪 Tests

```bash
# Lancer tous les tests
npm run test

# Tests en mode watch
npm run test:watch

# Tests avec couverture
npm run test -- --coverage
```

## 🚀 Déploiement

### Vercel (recommandé)
1. Connecter le repository GitHub
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Variables d'environnement
```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

## 📝 TODO

- [ ] Application mobile React Native
- [ ] Tests unitaires complets
- [ ] CI/CD avec GitHub Actions
- [ ] Plus de graphiques et métriques
- [ ] Export de données
- [ ] Notifications push

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- [CoinGecko](https://coingecko.com/) pour l'API cryptomonnaies
- [OpenWeatherMap](https://openweathermap.org/) pour l'API météo
- [Recharts](https://recharts.org/) pour les graphiques
- [Tailwind CSS](https://tailwindcss.com/) pour le styling
