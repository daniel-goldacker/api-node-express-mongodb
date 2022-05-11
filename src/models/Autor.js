import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidsade:{type: String, required: true}
    }
);

const autores = mongoose.model('autores', autorSchema);

export default autores