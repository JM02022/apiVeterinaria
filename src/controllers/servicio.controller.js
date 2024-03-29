import {getConnection,sql} from '../database/conecction'
export const getServicio =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TServicio')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  

export const postServicio = async (req,res) => {
    const {CodServicio,Descripcion,Precio,UrlFoto,CodMascota} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodServicio',sql.VarChar,CodServicio)
        .input('Descripcion',sql.VarChar,Descripcion)
        .input('Precio',sql.Numeric,Precio)
        .input('UrlFoto',sql.VarChar,UrlFoto)
        .input('CodMascota',sql.VarChar,CodMascota)
        .query('insert into TServicio (CodServicio,Descripcion,Precio,UrlFoto,CodMascota) Values(@CodServicio,@Descripcion,@Precio,@UrlFoto,@CodMascota)')
        res.json({CodServicio,Descripcion})
    } catch (error) {
        res.json("error")
    }
}
export const getServicioById = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TServicio where CodServicio =@id')
        res.json(result.recordset)   
    } catch (error) {
        res.json("error")
    }
}

export const DeleteServicioById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TServicio where CodServicio =@id')
        res.json("se elimino") 
    } catch (error) {
        res.json("error")
    }
}

export const UpdateServicioById = async (req,res) => {
    const {Descripcion,Precio,UrlFoto,CodMascota} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodServicio',sql.VarChar,id)
        .input('Descripcion',sql.VarChar,Descripcion)
        .input('Precio',sql.Numeric,Precio)
        .input('UrlFoto',sql.VarChar,UrlFoto)
        .input('CodMascota',sql.VarChar,CodMascota)
        .query('update TServicio set Descripcion=@Descripcion,Precio=@Precio,UrlFoto=@UrlFoto,CodMascota=@CodMascota where CodServicio = @CodServicio')
        res.json('actualizado')
    } catch (error) {
        res.json("error")
    }
}