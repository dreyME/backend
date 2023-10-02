const mongoose = require("mongoose");

const Nota = mongoose.model('Nota',{
    title: String,
    description: String,
    image: String,
})

module.exports = Nota;