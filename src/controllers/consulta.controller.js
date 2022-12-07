import {getConnection,sql} from '../database/conecction'
export const getConsulta =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TConsulta')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  

export const postConsulta = async (req,res) => {
    const {CodConsulta,fechaConsulta,Diagnostico,Tratamiento,Precio,CodVeterinario,CodMascota} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodConsulta',sql.VarChar,CodConsulta)
        .input('FechaConsulta',sql.Date,fechaConsulta)
        .input('Diagnostico',sql.VarChar,Diagnostico)
        .input('Tratamiento',sql.VarChar,Tratamiento)
        .input('Precio',sql.Numeric,Precio)
        .input('CodVeterinario',sql.VarChar,CodVeterinario)
        .input('CodMascota',sql.VarChar,CodMascota)
        .query('insert into TConsulta (CodConsulta,fechaConsulta,Diagnostico,Tratamiento,Precio,CodVeterinario,CodMascota) Values(@CodConsulta,@fechaConsulta,@Diagnostico,@Tratamiento,@Precio,@CodVeterinario,@CodMascota)')
        res.json({CodConsulta,fechaConsulta})
    } catch (error) {
        res.json("error")
    }
}
export const getConsultayId = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TConsulta where CodConsulta =@id')
         res.json(result.recordset)   
    } catch (error) {
        res.json("error")
    }
}

export const DeleteConsultaById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TConsulta where CodConsulta =@id')
        res.json("se elimino")   
    } catch (error) {
        res.json("error")
    }
}

export const UpdateConsultaById = async (req,res) => {
    const {fechaConsulta,Diagnostico,Tratamiento,Precio,CodVeterinario,CodMascota} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodConsulta',sql.VarChar,id)
        .input('FechaConsulta',sql.Date,fechaConsulta)
        .input('Diagnostico',sql.VarChar,Diagnostico)
        .input('Tratamiento',sql.VarChar,Tratamiento)
        .input('Precio',sql.Numeric,Precio)
        .input('CodVeterinario',sql.VarChar,CodVeterinario)
        .input('CodMascota',sql.VarChar,CodMascota)
        .query('update TConsulta set CodConsulta=@CodConsulta,fechaConsulta=@fechaConsulta,Diagnostico=@Diagnostico,Tratamiento=@Tratamiento,Precio=@Precio,CodVeterinario=@CodVeterinario,CodMascota=@CodMascota where CodConsulta = @CodConsulta')
        res.json('Cactualizado')
    } catch (error) {
        res.json("error")
    }
}