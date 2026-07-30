module.exports = {
    listar: async (req,res) => {

    },
    crear: async (req,res) => {

    },
    listarInfo: async (req,res) => {
    },
    prueba: async (req,res) => {
        try {
            console.log("Ejecutando prueba usuario")
            res.json({
                message: "Hola mundo"
            })
        }catch (e) {
            console.log(e)
        }
    },
}