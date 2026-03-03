import pool from "../config/db.js";

const categorias = {

    // Inserir categoria
    insert: async (categoria) => {
        const sql = `
            INSERT INTO categoria (descricao_categoria, data_cad)
            VALUES (?, ?)
        `;

        const values = [
            categoria.descricaoCategoria,
            categoria.dataCad
        ];

        const [result] = await pool.execute(sql, values);
        return result;
    },

    // Selecionar todas
    selectALL: async () => {
        const sql = "SELECT * FROM categoria";
        const [rows] = await pool.execute(sql);
        return rows;
    }

};

export default categorias;