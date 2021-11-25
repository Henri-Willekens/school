const express = require("express");

let Note = require("./models/noteModel.js");

let routes = () => {
    let notesRouter = express.Router();

    notesRouter.route("/notes")

    .get( (req, res) => {
        //let notes = [1, 2, 3, 4];
        let notes = Note.find({}, (err, notes) =>{
            if(err){
                res.status(500);
            } else {
                res.send(notes);
            }
        
        //res.send("GET op /notes")
    })
    
    .post( (req, res) => {
        let note = new Note(req.body)
        //let title = req.body.title;
        note.save();
        //res.send("POST op /notes")
    } );

    return notesRouter;
})}
module.exports = routes;

//const router = express.Router();

//router.get('/', (req, res) => {
//    res.render('index', { title: 'my express', message: 'hello' });
//});

//module.exports = router;