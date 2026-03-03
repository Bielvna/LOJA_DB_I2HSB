import pool from "../config/db.js";

const categorias = {
    insert:async (pProduto) => {
        const sql = 'INSERT INTO produtos (id_categoria, descricao_categoria, data_cad) VALUES (?,?,?);';
        const values = [pProduto.id_categoria, pProduto.descricao_categoria, pProduto.data_cad];
        const [rows] = await pool.execute(sql, values);
        return rows;
    }, 
    selectALL: async () => {
        const sql = "SELECT * FROM produtos";
        const [rows] = await pool.execute(sql);
        return rows;
    },
    updatecategorias: async (pProduto) => {
        const sql = 'UPDATE Produtos SET idCategoria = ?, descrição_categoria = ?, dataCad = ? WHERE idProduto = ?';
        const values = [pProduto.idCategoria, pProduto.nomeProduto, pProduto.valorProduto, pProduto.vinculoImagem, pProduto.dataCad, pProduto.idProduto];
        const [rows] = await pool.execute(sql, values);
        return rows;
    }
}

export default categorias;