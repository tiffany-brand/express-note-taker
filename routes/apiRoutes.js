const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        newNote.id = uuidv4();
        console.log(newNote);
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            notes.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                if (err) throw err;
                res.sendFile(path.join(__dirname, "../public/notes.html"));
            });
        });
    });

    app.delete("/api/notes/:id", (req, res) => {
        console.log(req.params.id);
    })

}