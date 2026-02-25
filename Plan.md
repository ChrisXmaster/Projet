Plateforme de Gestion de Stage — Analyse Frontend
🔍 Acteurs identifiés
text

┌─────────────────────────────────────────────────────────────┐
│                    ACTEURS DU SYSTÈME                       │
├─────────────┬───────────────────────────────────────────────┤
│ Étudiant    │ Postule, soumet documents, suit sa candidature│
│ Enseignant  │ Encadre, évalue, valide (Niveau 2)           │
│ Entreprise  │ Publie offres, accueille, évalue (Niveau 1)  │
│ Chef Dépt.  │ Approuve les conventions (Niveau 3)          │
│ Coordinateur│ Gère le processus global (Niveau 4)          │
│ Admin       │ Gère le système, utilisateurs, paramètres    │
└─────────────┴───────────────────────────────────────────────┘
🔄 Flux de validation multi-niveaux
text

Étudiant soumet ──▶ Enseignant valide ──▶ Chef Dépt. approuve ──▶ Coordinateur finalise
    (Demande)          (Niveau 1)            (Niveau 2)              (Niveau 3)
                                                                         │
                                                                         ▼
                                                                  Entreprise confirme
                                                                     (Niveau 4)
📄 Liste complète des pages (59 pages)
1. 🔐 Pages Communes (Authentification & Erreurs) — 7 pages
text

pages/
├── auth/
│   ├── login.html                  ← Connexion
│   ├── register.html               ← Inscription (choix du rôle)
│   ├── forgot-password.html        ← Mot de passe oublié
│   ├── reset-password.html         ← Réinitialisation mot de passe
│   └── verify-email.html           ← Vérification email
├── errors/
│   ├── 404.html                    ← Page non trouvée
│   └── 403.html                    ← Accès interdit
2. 🎓 Pages Étudiant — 12 pages
text

pages/etudiant/
├── dashboard.html                  ← Tableau de bord étudiant
├── profil.html                     ← Mon profil / modifier
├── offres-stage.html               ← Parcourir les offres de stage
├── offre-detail.html               ← Détail d'une offre + bouton postuler
├── postuler.html                   ← Formulaire de candidature
├── mes-candidatures.html           ← Liste de mes candidatures + statut
├── candidature-detail.html         ← Suivi détaillé d'une candidature
├── mon-stage.html                  ← Détails de mon stage en cours
├── journal-stage.html              ← Journal / carnet de stage
├── documents.html                  ← Upload documents (convention, rapport...)
├── mes-evaluations.html            ← Voir mes évaluations/notes
└── notifications.html              ← Centre de notifications
3. 👨‍🏫 Pages Enseignant (Encadrant Académique) — 8 pages
text

pages/enseignant/
├── dashboard.html                  ← Tableau de bord enseignant
├── profil.html                     ← Mon profil
├── mes-etudiants.html              ← Liste des étudiants encadrés
├── etudiant-detail.html            ← Fiche détaillée d'un étudiant
├── validations-en-attente.html     ← Demandes à valider (Niveau 1)
├── validation-detail.html          ← Détail + formulaire accepter/refuser
├── evaluer-rapport.html            ← Évaluer/noter le rapport de stage
├── notifications.html              ← Notifications
4. 🏢 Pages Entreprise (Encadrant Professionnel) — 10 pages
text

pages/entreprise/
├── dashboard.html                  ← Tableau de bord entreprise
├── profil.html                     ← Profil entreprise / modifier
├── nouvelle-offre.html             ← Publier une nouvelle offre
├── mes-offres.html                 ← Gérer mes offres (liste)
├── offre-edit.html                 ← Modifier une offre
├── candidatures-recues.html        ← Candidatures reçues
├── candidature-detail.html         ← Détail candidature + accepter/refuser
├── mes-stagiaires.html             ← Mes stagiaires en cours
├── evaluer-stagiaire.html          ← Évaluer un stagiaire
└── notifications.html              ← Notifications
5. 🏛️ Pages Chef de Département — 7 pages
text

pages/chef-departement/
├── dashboard.html                  ← Tableau de bord + KPIs
├── profil.html                     ← Mon profil
├── validations-en-attente.html     ← Conventions à approuver (Niveau 2)
├── validation-detail.html          ← Détail convention + approuver/rejeter
├── historique-validations.html     ← Historique des décisions
├── statistiques.html               ← Statistiques du département
└── notifications.html              ← Notifications
6. 📋 Pages Coordinateur de Stage — 9 pages
text

pages/coordinateur/
├── dashboard.html                  ← Tableau de bord global
├── profil.html                     ← Mon profil
├── tous-les-stages.html            ← Vue globale de tous les stages
├── stage-detail.html               ← Détail complet d'un stage
├── affecter-encadrant.html         ← Affecter enseignant ↔ étudiant
├── validations-finales.html        ← Validations finales (Niveau 3)
├── validation-detail.html          ← Détail + finaliser
├── conventions.html                ← Gestion des conventions
├── statistiques-rapports.html      ← Rapports & statistiques globales
└── notifications.html              ← Notifications
7. ⚙️ Pages Administrateur — 9 pages
text

pages/admin/
├── dashboard.html                  ← Tableau de bord admin
├── utilisateurs.html               ← Gérer les utilisateurs (CRUD)
├── utilisateur-form.html           ← Ajouter/modifier un utilisateur
├── departements.html               ← Gérer les départements
├── entreprises.html                ← Gérer les entreprises
├── parametres.html                 ← Paramètres du système
├── roles-permissions.html          ← Gestion des rôles
├── journal-audit.html              ← Logs d'activité
└── statistiques-globales.html      ← Statistiques globales
📁 Architecture complète des fichiers
text

projet-gestion-stage/
│
├── index.html                          ← Landing page / redirection
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   ├── style.css                   ← Styles globaux personnalisés
│   │   ├── dashboard.css               ← Styles des tableaux de bord
│   │   └── auth.css                    ← Styles pages auth
│   ├── js/
│   │   ├── bootstrap.bundle.min.js
│   │   ├── app.js                      ← Logique globale
│   │   ├── auth.js                     ← Logique authentification
│   │   ├── validation.js               ← Validation des formulaires
│   │   ├── notifications.js            ← Gestion notifications
│   │   ├── datatables.js               ← Tableaux dynamiques
│   │   └── charts.js                   ← Graphiques (Chart.js)
│   ├── img/
│   │   ├── logo.png
│   │   ├── avatars/
│   │   └── illustrations/
│   └── vendors/                        ← Librairies tierces
│       ├── chart.js
│       ├── sweetalert2/
│       └── datatables/
│
├── components/                         ← Composants HTML réutilisables
│   ├── sidebar-etudiant.html
│   ├── sidebar-enseignant.html
│   ├── sidebar-entreprise.html
│   ├── sidebar-chef-dept.html
│   ├── sidebar-coordinateur.html
│   ├── sidebar-admin.html
│   ├── navbar.html
│   ├── footer.html
│   └── modal-validation.html
│
├── pages/
│   ├── auth/            (5 pages)
│   ├── errors/          (2 pages)
│   ├── etudiant/        (12 pages)
│   ├── enseignant/      (8 pages)
│   ├── entreprise/      (10 pages)
│   ├── chef-departement/(7 pages)
│   ├── coordinateur/    (9 pages)
│   └── admin/           (9 pages)
│
│                        TOTAL : 62 pages + composants
🧩 Composants UI récurrents à prévoir
text

┌──────────────────────────────────────────────────────────────────┐
│  COMPOSANT               │  UTILISÉ DANS                        │
├──────────────────────────┼───────────────────────────────────────┤
│  Sidebar navigation      │  Tous les dashboards (6 variantes)   │
│  Navbar supérieure       │  Toutes les pages connectées         │
│  Cards statistiques      │  Tous les dashboards                 │
│  Tableau de données      │  Listes (utilisateurs, stages, etc.) │
│  Timeline de validation  │  Suivi candidature, validation       │
│  Badge de statut         │  En attente / Validé / Refusé        │
│  Modal de confirmation   │  Actions valider / refuser           │
│  Formulaire upload       │  Documents, rapports                 │
│  Stepper (étapes)        │  Processus de candidature            │
│  Système de notation     │  Évaluation (étoiles ou note /20)    │
│  Graphiques (Chart.js)   │  Statistiques, dashboards            │
│  Toast notifications     │  Alertes temps réel                  │
└──────────────────────────┴───────────────────────────────────────┘
🎨 Suggestion de code couleur par rôle
text

Étudiant       →  🔵 Bleu      (#0d6efd)
Enseignant     →  🟢 Vert      (#198754)
Entreprise     →  🟠 Orange    (#fd7e14)
Chef Dépt.     →  🟣 Violet    (#6f42c1)
Coordinateur   →  🔴 Rouge     (#dc3545)
Admin          →  ⚫ Sombre    (#212529)