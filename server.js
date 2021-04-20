// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// Express Configurations
const app = express();
const PORT = process.env.PORT || 3000;

//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

//
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if(err){ res.status(400).json(err) }; 

        res.status(200).json(JSON.parse(data));
    });     
});

//
app.post('/api/notes', (req, res) => {
    
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if(err){ res.status(400).json(err) };
        const dbInfo = JSON.parse(data);
        const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: dbInfo.length + 1
        };
        dbInfo.push(newNote)
        
        fs.writeFile('db/db.json', JSON.stringify(dbInfo), 'utf8', (err) => {
        if(err){ res.status(400).json(err) };
        return true;
        });
    });

    // res.json('Post worked!');
})


// listener 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));