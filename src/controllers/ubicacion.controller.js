import {getConnection} from '../database/conecction'
export const getDatosUbicacion =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TUbicacion')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  