// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');


// Express Configurations
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/index.html')));



app.get('/api/notes', (req, res) => {
    let dbInfo = fs.readFileSync('Develop/db/db.json', 'utf8')    
    res.json(JSON.parse(dbInfo))
});

app.post('/api/notes', (req, res) => {
    let dbInfo = fs.readFileSync('Develop/db/db.json', 'utf8')
    
    
    
})


// listener 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));