const infoNote = require("../models/NewNote");

const notesController = {

    create: async(req, res) => {
        try {
            const Note = new infoNote({
                title: req.body.title,
                description: req.body.description, 
                image: req.body.image,
            })

            const notePost = await infoNote.create(Note);
            notePost.save();
            res.send('Criado com sucesso!')

        } catch (error) {
            console.log(error);
        }
    },

    find: async(req, res) => {
        try {
           const noteGet = await infoNote.find()
           res.send(noteGet)

        } catch (error) {
            console.log(error);
        }
    },

    delete: async(req, res) => {
        try {
           const noteDel = await infoNote.findByIdAndRemove(req.params.id)
           res.send(noteDel);

        } catch (error) {
            console.log(error);
        }
    },

    put: async (req, res) => {
        try {
           const notePut = await infoNote.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                description: req.body.description, 
                image: req.body.image,
           })
           res.send(notePut);

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = notesController;
