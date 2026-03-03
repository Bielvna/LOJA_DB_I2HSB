import categorias from "../models/categoria.model.js";

const categoriaController = {

    // Cadastrar nova categoria
    cadastrarCategoria: async (req, res) => {
        try {
            const { descricaoCategoria, dataCad } = req.body;

            // Validação simples
            if (!descricaoCategoria || !dataCad) {
                return res.status(400).json({
                    mensagem: "Todos os campos são obrigatórios"
                });
            }

            const resposta = await categorias.insert({
                descricaoCategoria,
                dataCad
            });

            if (resposta.insertId > 0) {
                return res.status(201).json({
                    mensagem: "Categoria cadastrada com sucesso"
                });
            }

            return res.status(400).json({
                mensagem: "Erro ao cadastrar categoria"
            });

        } catch (erro) {
            console.error(erro);
            return res.status(500).json({
                mensagem: "Erro interno no servidor",
                detalheErro: erro.message
            });
        }
    },

    // Listar todas categorias
    listarTodas: async (req, res) => {
        try {
            const lista = await categorias.selectALL();
            return res.status(200).json(lista);
        } catch (erro) {
            console.error(erro);
            return res.status(500).json({
                mensagem: "Erro interno no servidor",
                detalheErro: erro.message
            });
        }
    }
};

export default categoriaController;