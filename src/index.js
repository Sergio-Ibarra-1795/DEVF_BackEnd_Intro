const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Definir rutas
app.use(require('./routes/zoo.routes'));

app.listen(3000);
console.log("Server listening on port 3000");


