import {getConnection,sql} from '../database/conecction'

export const postLoginAdmin = async (req,res) => {
    const {Email,Contrasenia} = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input('Email',sql.VarChar,Email)
        .input('Contrasenia',sql.VarChar,Contrasenia)
        .query('select Email,Contrasenia from TAdmi where Email = @Email and Contrasenia = @Contrasenia')
        console.log(result.recordset)
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
        res.json("error")
    }
}