//Importaciones y constantes
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const flights = require('./routes/flights')

//Middlewares
app.use(express.json())

//Rutas
app.use(flights)


/* app.get('/', (req, res) => {
    res.send('<h1>Holaaa</h1>')
}) */

//Server
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})