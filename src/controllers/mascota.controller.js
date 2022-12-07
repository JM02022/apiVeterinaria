import {getConnection,sql} from '../database/conecction'
export const getMascota =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TMascota')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  

export const postMascota = async (req,res) => {
    const {CodMascota,NomMascota,EdadMascota,Especie,Raza,Peso,Tamanio,Sexo,CodDuenio,UrlFoto} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodMascota',sql.VarChar,CodMascota)
        .input('NomMascota',sql.VarChar,NomMascota)
        .input('EdadMascota',sql.Date,EdadMascota)
        .input('Especie',sql.VarChar,Especie)
        .input('Raza',sql.VarChar,Raza)
        .input('Peso',sql.VarChar,Peso)
        .input('Tamanio',sql.VarChar,Tamanio)
        .input('Sexo',sql.VarChar,Sexo)
        .input('CodDuenio',sql.VarChar,CodDuenio)
        .input('UrlFoto',sql.VarChar,UrlFoto)
        .query('insert into TMascota (CodMascota,NomMascota,EdadMascota,Especie,Raza,Peso,Tamanio,Sexo,CodDuenio,UrlFoto) Values(@CodMascota,@NomMascota,@EdadMascota,@Especie,@Raza,@Peso,@Tamanio,@Sexo,@CodDuenio,@UrlFoto)')
        res.json({CodMascota,NomMascota})
    } catch (error) {
        res.json("error")
    }
}
export const getMascotaById = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TMascota where CodMascota =@id')
        res.json(result.recordset)   
    } catch (error) {
        res.json("error")
    }
}

export const DeleteMascotaById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TMascota where CodMascota =@id')
        res.json("se elimino")
    } catch (error) {
        res.json("error")
    }
    
}

export const UpdateMascotaById = async (req,res) => {
    const {NomMascota,EdadMascota,Especie,Raza,Peso,Tamanio,Sexo,CodDuenio,UrlFoto} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodMascota',sql.VarChar,id)
        .input('NomMascota',sql.VarChar,NomMascota)
        .input('EdadMascota',sql.Date,EdadMascota)
        .input('Especie',sql.VarChar,Especie)
        .input('Raza',sql.VarChar,Raza)
        .input('Peso',sql.VarChar,Peso)
        .input('Tamanio',sql.VarChar,Tamanio)
        .input('Sexo',sql.VarChar,Sexo)
        .input('CodDuenio',sql.VarChar,CodDuenio)
        .input('UrlFoto',sql.VarChar,UrlFoto)
        .query('update TMascota set CodMascota=@CodMascota,NomMascota=@NomMascota,EdadMascota=@EdadMascota,Especie=@Especie,Raza=@Raza,Peso=@Peso,Tamanio=@Tamanio,Sexo=@Sexo,CodDuenio=@CodDuenio,UrlFoto=@UrlFoto where CodMascota = @CodMascota')
        res.json('actualizado')
    } catch (error) {
        res.json("error")
    }
}