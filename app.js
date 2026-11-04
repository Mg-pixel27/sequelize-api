const express = require('express');
require ('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.get('/', (req,res) => {
    res.send({ status: 'ok'})
});

app.listen(port,() => {
    console.log (`Servidor executanto em: http://localhost:${port}`)
})