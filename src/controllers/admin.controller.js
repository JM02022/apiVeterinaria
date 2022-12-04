import {getConnection,sql} from '../database/conecction'

export const postLoginAdmin = async (req,res) => {
    const {usario,contrasenia} = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input('usuario',sql.VarChar,usario)
        .input('contrasenia',sql.VarChar,contrasenia)
        .query('select usuario,contrasenia from TAdmin where usuario = @usuario and contrasenia = @contrasenia')
        if(result.rowsAffected == 0){
            res.json("error")
        }else{
            const rpta = {
                datos: result.recordset,
                token: '123456789'
            }
            res.json(rpta)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}