const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

let fruits = [
    {id: 1, nom: "Pomme", couleur: "Rouge"},
    {id: 2, nom: "Banane", couleur: "Jaune"},
    {id: 3, nom: "Orange", couleur: "Orange"},
    {id: 4, nom: "Fraise", couleur: "Rouge"},
    {id: 5, nom: "Kiwi", couleur: "Vert"}
]

app.get('/api/fruits', (req, res) => {
    res.json(fruits);
});

app.post('/api/fruits', (req, res) => {
    const newFruit = {
        id: fruits.length + 1,
        nom: req.body.nom,
        couleur: req.body.couleur
    }

    fruits.push(newFruit);
    res.status(201).json(newFruit);
});

app.listen(port, () => {
    console.log(`Mon Serveur est en cours d'exécution sur http://localhost:${port}`);
});