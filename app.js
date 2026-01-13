const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour lire le JSON dans les requêtes
app.use(express.json());

// Données fictives (Simule une base de données)
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// --- LES ROUTES ---

// 1. GET : Récupérer tous les utilisateurs
app.get('/users', (req, res) => {
    res.json(users);
});

// 2. POST : Ajouter un utilisateur
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 3. DELETE : Supprimer un utilisateur par ID
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.send({ message: "Utilisateur supprimé" });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});