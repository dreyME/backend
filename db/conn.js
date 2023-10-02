const mongoose = require("mongoose");

 async function main() {
    try {
        

        await mongoose.connect("mongodb+srv://JoseAndrey:2oA548K9bJD1pbxX@cluster0.9sqh56l.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp");
          console.log('Conectado ao banco!');     
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;