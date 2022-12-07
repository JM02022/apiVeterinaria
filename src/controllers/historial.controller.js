import {getConnection,sql} from '../database/conecction'
export const getHistorial =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from THistorial')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  

export const postHistorial = async (req,res) => {
    const {CodHistorial,Registro,CodServicio,CodConsulta} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodHistorial',sql.VarChar,CodHistorial)
        .input('Registro',sql.VarChar,Registro)
        .input('CodServicio',sql.VarChar,CodServicio)
        .input('CodConsulta',sql.VarChar,CodConsulta)
        .query('insert into THistorial(CodHistorial,Registro,CodServicio,CodConsulta) Values(@CodHistorial,@Registro,@CodServicio,@CodConsulta)')
        res.json({CodHistorial,Registro})
    } catch (error) {
        res.json("error")
    }
}
export const getHistorialById = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from THistorial where CodHistorial =@id')
        res.json(result.recordset)   
    } catch (error) {
        res.json("error")
    }
}

export const DeleteHistorialById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from THistorial where CodHistorial =@id')
        res.json("se elimino")   
    } catch (error) {
        res.json("error")
    }
}

export const UpdateHistorialById = async (req,res) => {
    const {Registro,CodServicio,CodConsulta} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodHistorial',sql.VarChar,id)
        .input('Registro',sql.VarChar,Registro)
        .input('CodServicio',sql.VarChar,CodServicio)
        .input('CodConsulta',sql.VarChar,CodConsulta)
        .query('update THistorial set Registro=@Registro,CodServicio=@CodServicio,CodConsulta=@CodConsulta where CodHistorial = @CodHistorial')
        res.json('actualizado')
    } catch (error) {
        res.json("error")
    }
}