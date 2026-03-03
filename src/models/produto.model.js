import pool from "../config/db.js";

const produtos = {

    // Criar produto
    criarProduto: async (produto) => {

        const sql = `
            INSERT INTO produtos 
            (id_categoria, nome_produto, valor_produto, vinculo_imagem, data_cad)
            VALUES (?, ?, ?, ?, ?);
        `;

        const values = [
            produto.idCategoria ?? null,
            produto.nomeProduto ?? null,
            produto.valorProduto ?? null,
            produto.vinculoImagem ?? null,
            produto.dataCad ?? null
        ];

        console.log("VALORES INSERT:", values);

        const [result] = await pool.execute(sql, values);
        return result;
    },

    // Listar todos
    selectALL: async () => {
        const sql = "SELECT * FROM produtos;";
        const [rows] = await pool.execute(sql);
        return rows;
    },

    // Atualizar produto
    updateProduto: async (produto) => {

        const sql = `
            UPDATE produtos 
            SET id_categoria = ?,
                nome_produto = ?,
                valor_produto = ?,
                vinculo_imagem = ?,
                data_cad = ?
            WHERE id_produto = ?;
        `;

        const values = [
            produto.idCategoria ?? null,
            produto.nomeProduto ?? null,
            produto.valorProduto ?? null,
            produto.vinculoImagem ?? null,
            produto.dataCad ?? null,
            produto.idProduto
        ];

        console.log("VALORES UPDATE:", values);

        const [result] = await pool.execute(sql, values);
        return result;
    }

};

export default produtos;