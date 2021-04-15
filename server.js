// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');


// Express Configurations
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('api/notes', (req,res) => )
