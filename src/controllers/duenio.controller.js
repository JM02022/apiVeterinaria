import {getConnection,sql} from '../database/conecction'
export const getDuenio =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TDuenio')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  

export const postDuenio = async (req,res) => {
    const {CodDuenio,DniDuenio,NomDuenio,ApeDuenio,EdadDuenio,Email,CelDuenio,DireccionDuenio} = req.body
    console.log(req.body)
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodDuenio',sql.VarChar,CodDuenio)
        .input('DniDuenio',sql.VarChar,DniDuenio)
        .input('NomDuenio',sql.VarChar,NomDuenio)
        .input('ApeDuenio',sql.VarChar,ApeDuenio)
        .input('EdadDuenio',sql.Date,EdadDuenio)
        .input('Email',sql.VarChar,Email)
        .input('CelDuenio',sql.VarChar,CelDuenio)
        .input('DireccionDuenio',sql.VarChar,DireccionDuenio)
        .query('insert into TDuenio (CodDuenio,DniDuenio,NomDuenio,ApeDuenio,EdadDuenio,Email,CelDuenio,DireccionDuenio) Values(@CodDuenio,@DniDuenio,@NomDuenio,@ApeDuenio,@EdadDuenio,@Email,@CelDuenio,@DireccionDuenio)')
        res.json({CodDuenio,NomDuenio})
    } catch (error) {
        res.json("error")
    }
}
export const getDuenioyId = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TDuenio where CodDuenio =@id')
        res.json(result.recordset)   
    } catch (error) {
        res.json("error")
    }
}

export const DeleteDuenioById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TDuenio where CodDuenio =@id')
        res.json("se elimino")   
    } catch (error) {
        res.json("error")
    }
}

export const UpdateDuenioById = async (req,res) => {
    const {DniDuenio,NomDuenio,ApeDuenio,EdadDuenio,Email,CelDuenio,DireccionDuenio} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodDuenio',sql.VarChar,id)
        .input('DniDuenio',sql.VarChar,DniDuenio)
        .input('NomDuenio',sql.VarChar,NomDuenio)
        .input('ApeDuenio',sql.VarChar,ApeDuenio)
        .input('EdadDuenio',sql.Date,EdadDuenio)
        .input('Email',sql.VarChar,Email)
        .input('CelDuenio',sql.VarChar,CelDuenio)
        .input('DireccionDuenio',sql.VarChar,DireccionDuenio)
        .query('update TDuenio set CodDuenio = @CodDuenio,DniDuenio=@DniDuenio,NomDuenio=@NomDuenio,ApeDuenio=@ApeDuenio,EdadDuenio=@EdadDuenio,Email=@Email,CelDuenio=@CelDuenio,DireccionDuenio=@DireccionDuenio where CodDuenio = @CodDuenio')
        res.json('actualizado')
    } catch (error) {
        res.json("error")
    }
}