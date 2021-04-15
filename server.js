// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const dbInfo = require('./Develop/db/db.json')

// Express Configurations
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/index.html')));

app.get('api/notes', (req, res) => res.json(dbInfo));
app.post('api/notes', (req, res) => {
    const newNote = req.body;

    
    
    
})


// listener 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));