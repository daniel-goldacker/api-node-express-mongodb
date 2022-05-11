import autores from "../models/Autor.js";

class autorController {
    static listarAutores = (req, res) => {
        autores.find((er, autores) => {
            res.status(200).json(autores);
        })
    }

    static listarAutorPorID = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (er, autores) =>{
            if (er){
                res.status(400).send({message: `${er.message} - falha ao localizar autor.`})
            } else {
                res.status(200).json(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) =>{
        let autor = new autores(req.body);

        autor.save((er) => {
            if (er) {
                res.status(500).send({message: `${er.message} - falha ao cadastrar autor.`})
            } else {
                res.status(201).send(autor.toJSON())

            }
        })
    }

    static atualizarAutor = (req, res) =>{
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set:req.body}, (er) => {
            if(!er){
                res.status(200).send({message: "autor foi atualizado com sucesso"})
            } else {
                res.status(500).send({message: `${er.message} - falha ao atualizar autor.`})   
            }
        })
    }


    static deletarAutor = (req, res) =>{
        const id = req.params.id;

        autores.findByIdAndDelete(id, (er, autores) =>{
            if(!er){
                res.status(200).send({message: "autor foi excluido com sucesso"})
            } else {
                res.status(500).send({message: `${er.message} - falha ao atualizar autor.`})   
            } 
        })
    }
}

export default autorController;
