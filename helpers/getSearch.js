const path = require("path") // Gestionar rutas de archivos

console.log(__dirname) // Carpeta o ubicación actual de este archivo "getView.js"

const getSearch = (res, viewName) => {
    return res.sendFile(path.join(__dirname,"..","views",viewName))
}

module.exports = getSearch