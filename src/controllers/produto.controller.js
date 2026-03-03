import produtos from "../models/produto.model.js";

const produtoController = {

    // Upload de imagem (caso esteja usando multer)
    uploadArquivo: async (req, res) => {
        try {

            if (!req.file) {
                return res.status(400).json({
                    mensagem: "Nenhum arquivo enviado"
                });
            }

            return res.status(200).json({
                mensagem: "Upload realizado com sucesso",
                arquivo: req.file.filename
            });

        } catch (erro) {
            console.error(erro);
            return res.status(500).json({
                mensagem: "Erro interno no servidor",
                detalheErro: erro.message
            });
        }
    },

    // Criar produto
    cadastrarProduto: async (req, res) => {
        try {

            const {
                idCategoria,
                nomeProduto,
                valorProduto,
                vinculoImagem,
                dataCad
            } = req.body;

            console.log("BODY RECEBIDO:", req.body);

            // Validação básica
            if (!idCategoria || !nomeProduto || !valorProduto || !dataCad) {
                return res.status(400).json({
                    mensagem: "Campos obrigatórios não enviados"
                });
            }

            const resposta = await produtos.criarProduto({
                idCategoria,
                nomeProduto,
                valorProduto,
                vinculoImagem: vinculoImagem || null,
                dataCad
            });

            if (resposta.insertId > 0) {
                return res.status(201).json({
                    mensagem: "Produto cadastrado com sucesso"
                });
            }

            return res.status(400).json({
                mensagem: "Erro ao cadastrar produto"
            });

        } catch (erro) {
            console.error(erro);
            return res.status(500).json({
                mensagem: "Erro interno no servidor",
                detalheErro: erro.message
            });
        }
    },

    // Listar produtos
    listarTodos: async (req, res) => {
        try {

            const listaProdutos = await produtos.selectALL();

            return res.status(200).json(listaProdutos);

        } catch (erro) {
            console.error(erro);
            return res.status(500).json({
                mensagem: "Erro interno no servidor",
                detalheErro: erro.message
            });
        }
    }

};

export default produtoController;