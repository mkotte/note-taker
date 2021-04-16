// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
// const dbInfo = require('./Develop/db/db.json')

// Express Configurations
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/index.html')));

// app.get('/api/notes', (req, res) => {
//     res.json(JSON.parse(dbInfo))
// });

app.get('/api/notes', (req, res) => {
    fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
        if(err){res.status(400).json(err) } 
        res.status(200).json(JSON.parse(data))
    });     
});

// app.post('/api/notes', (req, res) => {
//     let dbInfo = fs.readFileSync('Develop/db/db.json', 'utf8');
//     dbInfo.push(req.body);
//     res.json(true);
// })


// listener 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));