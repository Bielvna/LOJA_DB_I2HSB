import pool from "../config/db.js";

const produtos = {
    insert:async (pProduto) => {
        const sql = 'INSERT INTO produtos (id_produto, id_categoria, nome_produto, valor_produto, vinculo_imagem, data_cad) VALUES (?,?,?,?,?,?);';
        const values = [pProduto.id_produto, pProduto.id_categoria, pProduto.nome_produto, pProduto.valor_produto, pProduto.vinculo_imagem, pProduto.data_cad];
        const [rows] = await pool.execute(sql, values);
        return rows;
    }, 
    selectALL: async () => {
        const sql = "SELECT * FROM produtos;";
        const [rows] = await pool.execute(sql);
        return rows;
    },
    updateProduto: async (pProduto) => {
        const sql = 'UPDATE Produtos SET idCategoria = ?, nomeProduto = ?, valorProduto = ?, vinculoImagem = ?, dataCad = ? WHERE idProduto = ?';
        const values = [pProduto.idCategoria, pProduto.nomeProduto, pProduto.valorProduto, pProduto.vinculoImagem, pProduto.dataCad, pProduto.idProduto];
        const [rows] = await pool.execute(sql, values);
        return rows;
    }
}

export default produtos;