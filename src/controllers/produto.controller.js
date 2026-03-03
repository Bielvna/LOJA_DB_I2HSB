import produtos from "../models/produto.model.js";

const produtoController = {

    // Função responsável pelo upload de arquivo (ex: imagem do produto)
    uploadArquivo: async (req, res) => {
        try {
            // Verifica se nenhum arquivo foi enviado na requisição
            if (!req.file) {
                return res.status(400).json({ mensagem: 'Nenhum arquivo foi enviado' });
            }

            // Retorna sucesso caso o upload tenha sido realizado
            return res.status(200).json({ mensagem: 'Upload concluído com sucesso' });

        } catch (erro) {
            // Exibe erro no console do servidor
            console.error(erro);

            // Retorna erro interno
            res.status(500).json({ 
                mensagem: 'Erro interno no servidor', 
                detalheErro: erro.message 
            });
        }
    },

    // Função responsável por cadastrar um novo produto
    cadastrarProduto: async (req, res) => {
        try {
            const dadosProduto = req.body;

            console.log(dadosProduto);

            // Chama o model para inserir os dados no banco
            const resposta = await produtos.criarProduto({
                idCategoria: dadosProduto.idCategoria,
                nomeProduto: dadosProduto.nomeProduto,
                valorProduto: dadosProduto.valorProduto,
                vinculoImagem: dadosProduto.vinculoImagem,
                dataCadastro: dadosProduto.dataCad
            });

            // Verifica se o produto foi inserido com sucesso
            if (resposta.insertId > 0) {
                return res.status(201).json({ mensagem: 'Produto cadastrado com sucesso' });
            }

            // Caso não insira corretamente
            res.status(400).json({ mensagem: 'Erro ao cadastrar o produto' });

        } catch (erro) {
            console.error(erro);

            res.status(500).json({ 
                mensagem: 'Erro interno no servidor', 
                detalheErro: erro.message 
            });
        }
    },

    // Função responsável por listar todos os produtos
    listarTodos: async (req, res) => {
        try {
            const listaProdutos = await produtos.selecionarTodos();

            return res.status(200).json(listaProdutos);

        } catch (erro) {
            console.error(erro);

            res.status(500).json({ 
                mensagem: 'Erro interno no servidor', 
                detalheErro: erro.message 
            });
        }
    }
};

// Exporta o controller
export default produtoController;