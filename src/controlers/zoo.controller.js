//AQUI VAMOS A CREAR LAS FUNCIONES QUE DARÁN SENTIDO A LAS RESPUESTAS DE NUESTRAS API

//AQUI VAMOS A PONER LA CONEXION A LA BASE 
const {Pool} = require('pg');

const pool_zoo = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database : 'zoo_sql',
    port: 5432
});

const getAllZoo = async (req,res) =>{

    const response = await pool_zoo.query('SELECT * FROM zoos');
    res.status(200).json(response.rows);
};

const getOneZoo = async (req,res) =>{

    const {id} = req.params;
    const response = await pool_zoo.query('SELECT * FROM zoos WHERE id_zoo = $1',[id]);
    console.log(response);
    res.status(200).json(response.rows);
};

module.exports = {
    getAllZoo,
    getOneZoo
}