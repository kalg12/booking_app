class Flight {
    async getAll(){
        const flights = await query("SELECT * FROM flights")
        // Pending:
        console.log(flights)
    }

    static create(data){
        //Crear un query
        //Crear un insert into
    }
}

module.exports = Flight