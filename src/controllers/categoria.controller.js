import categorias from "../models/categoria.model.js";

const categoriaController = {

    // Função responsável por cadastrar uma nova categoria
    cadastrarCategoria: async (req, res) => {
        try {
            const dadosCategoria = req.body;

            console.log(dadosCategoria);

            // Chama o model para inserir a categoria no banco de dados
            const resposta = await categorias.criarCategoria({
                descricaoCategoria: dadosCategoria.descricaoCategoria,
                dataCadastro: dadosCategoria.dataCad
            });

            // Verifica se a inserção foi realizada com sucesso
            if (resposta.insertId > 0) {
                return res.status(201).json({ mensagem: 'Categoria cadastrada com sucesso' });
            }

            // Caso ocorra erro na inserção
            res.status(400).json({ mensagem: 'Erro ao cadastrar a categoria' });

        } catch (erro) {
            console.error(erro);

            // Retorna erro interno do servidor
            res.status(500).json({ 
                mensagem: 'Erro interno no servidor', 
                detalheErro: erro.message 
            });
        }
    },

    // Função responsável por listar todas as categorias
    listarTodas: async (req, res) => {
        try {
            const listaCategorias = await categorias.selecionarTodos();

            return res.status(200).json(listaCategorias);

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
export default categoriaController;