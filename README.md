# TP Web Service NestJS – Gestion de Livres

## Objectif
Créer une petite API REST en NestJS pour gérer une bibliothèque virtuelle, en apprenant à utiliser TypeORM, les services, contrôleurs, DTOs avec validation et Swagger pour la documentation.

## Services Web Utilisés

*   **NestJS**: Framework Node.js pour construire des applications côté serveur efficaces et évolutives.
*   **TypeORM**: Un ORM (Object-Relational Mapper) pour interagir avec la base de données (PostgreSQL dans ce cas).
*   **PostgreSQL**: Système de gestion de base de données relationnelle utilisé pour stocker les données des livres.
*   **Swagger (OpenAPI)**: Utilisé pour documenter l'API et fournir une interface utilisateur interactive pour l'explorer et la tester.
*   **class-validator & class-transformer**: Bibliothèques utilisées pour valider les données des DTOs (Data Transfer Objects).

## Étapes de Mise en Place et Modifications Effectuées

Les étapes suivantes ont été suivies pour mettre en place et exécuter ce projet :

1.  **Initialisation du projet NestJS** :
    ```bash
    nest new book-api
    cd book-api
    ```
2.  **Installation des dépendances nécessaires** (TypeORM, PostgreSQL, validation) :
    ```bash
    npm install @nestjs/typeorm typeorm pg class-validator class-transformer
    ```
3.  **Génération du module, contrôleur et service pour les livres** :
    ```bash
    nest g module book
    nest g controller book
    nest g service book
    ```
4.  **Création de l'entité `Book`** dans `src/book/book.entity.ts` pour définir la structure de la table `book` dans la base de données.
5.  **Création du DTO `CreateBookDto`** dans `src/book/dto/create-book.dto.ts` pour définir la structure des données attendues lors de la création d'un nouveau livre, avec des décorateurs pour la validation.
6.  **Implémentation du `BookService`** dans `src/book/book.service.ts` pour gérer la logique métier (création et récupération des livres) en utilisant le repository TypeORM.
7.  **Implémentation du `BookController`** dans `src/book/book.controller.ts` pour gérer les routes HTTP (`/books`) et appeler les méthodes du service correspondant.
8.  **Configuration de `AppModule`** dans `src/app.module.ts` pour intégrer `TypeOrmModule.forRoot` (avec les informations de connexion à la base de données PostgreSQL) et `BookModule`.
9.  **Configuration de Swagger et de la validation globale des DTOs** dans `src/main.ts` pour documenter l'API et activer la validation automatique des requêtes entrantes.

## Pour Exécuter le Projet

1.  Assurez-vous d'avoir Docker installé et en cours d'exécution (ou une instance PostgreSQL locale disponible).
2.  Créez une base de données PostgreSQL nommée `bookdb`.
3.  Assurez-vous que les informations de connexion à la base de données dans `src/app.module.ts` sont correctes (`username`, `password`, `host`, `port`, `database`).
4.  Lancez l'application :
    ```bash
    npm run start:dev
    ```
5.  L'API sera accessible à l'adresse `http://localhost:3000`.
6.  La documentation Swagger sera disponible à l'adresse `http://localhost:3000/api`.

Voilà le résumé du projet et des étapes pour le faire fonctionner ! 
