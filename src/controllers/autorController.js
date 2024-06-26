import { autor } from "../models/Autor.js";


class AutorController{


    static async listarAutores(req, res){
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - Falha em listar Autors`
            })
        }
    }

    static async cadastrarAutor(req,res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso", Autor: novoAutor
            });
        } catch(erro) {
            res.status(500).json({
                message: `${erro.message} - Falha em cadastrar Autor`
            })
        }
    }

    static async listarAutorPorId(req, res){
        try{
            const id = req.params.id;
            const AutorEncontrado = await autor.findById(id);
            res.status(200).json(AutorEncontrado);
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - Falha ao encontrar Autor`
            })
        }
    }

    static async atualizarAutor(req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor atualizado"});
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - Falha ao atualizar Autor`
            })
        }
    }

    static async excluirAutor(req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor excluido"});
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - Falha ao excluir Autor`
            })
        }
    }


};


export default AutorController;