import livros from "../models/Livro.js";

class livroController {
    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((er, livros) => {
            res.status(200).json(livros);
        })
    }

    static listarLivroPorID = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
        .populate('autor')
        .exec((er, livros) =>{
            if (er){
                res.status(400).send({message: `${er.message} - falha ao localizar livro.`})
            } else {
                res.status(200).json(livros);
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora

        livros.find({"editora": editora})
        .populate('autor')
        .exec((er, livros) =>{
            if (er){
                res.status(400).send({message: `${er.message} - falha ao localizar livro.`})
            } else {
                res.status(200).json(livros);
            }
        })
    }

    static cadastrarLivro = (req, res) =>{
        let livro = new livros(req.body);

        livro.save((er) => {
            if (er) {
                res.status(500).send({message: `${er.message} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON())

            }
        })
    }

    static atualizarLivro = (req, res) =>{
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set:req.body}, (er) => {
            if(!er){
                res.status(200).send({message: "livro foi atualizado com sucesso"})
            } else {
                res.status(500).send({message: `${er.message} - falha ao atualizar livro.`})   
            }
        })
    }


    static deletarLivro = (req, res) =>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (er, livros) =>{
            if(!er){
                res.status(200).send({message: "livro foi excluido com sucesso"})
            } else {
                res.status(500).send({message: `${er.message} - falha ao atualizar livro.`})   
            } 
        })
    }
}

export default livroController;
