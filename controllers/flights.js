const getSearch = require("../helpers/getSearch")
const getView = require("../helpers/getView")

const getHome = (req, res) => {
    return getView(res, "index.html")
}

const search = (req, res) => {
    return getSearch(res, "busqueda.html")
}

module.exports = {
    getHome,
    search
}