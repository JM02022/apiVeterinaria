import {getConnection,sql} from '../database/conecction'
export const getVeterinario =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TVeterinario')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  

export const postVeterinario = async (req,res) => {
    const {CodVeterinario,DniVeterinario,NomVeterinario,ApeVeterinario,EdadVeterinario,Email,AniosExperiencia,CelVeterinario,DireccionVeterinario,UrlFoto} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodVeterinario',sql.VarChar,CodVeterinario)
        .input('DniVeterinario',sql.VarChar,DniVeterinario)
        .input('NomVeterinario',sql.VarChar,NomVeterinario)
        .input('ApeVeterinario',sql.VarChar,ApeVeterinario)
        .input('EdadVeterinario',sql.Date,EdadVeterinario)
        .input('Email',sql.VarChar,Email)
        .input('AniosExperiencia',sql.VarChar,AniosExperiencia)
        .input('CelVeterinario',sql.VarChar,CelVeterinario)
        .input('DireccionVeterinario',sql.VarChar,DireccionVeterinario)
        .input('UrlFoto',sql.VarChar,UrlFoto)
        .query('insert into TVeterinario (CodVeterinario,DniVeterinario,NomVeterinario,ApeVeterinario,EdadVeterinario,Email,AniosExperiencia,CelVeterinario,DireccionVeterinario,UrlFoto) Values(@CodVeterinario,@DniVeterinario,@NomVeterinario,@ApeVeterinario,@EdadVeterinario,@Email,@AniosExperiencia,@CelVeterinario,@DireccionVeterinario,@UrlFoto)')
        res.json({CodVeterinario,DniVeterinario})
    } catch (error) {
        res.json("error")
    }
}
export const getVeterinarioById = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TVeterinario where CodVeterinario =@id')
        res.json(result.recordset)   
    } catch (error) {
        res.json("error")
    }
}

export const DeleteVeterinoById = async (req,res) => {
    try {
        const {id} = req.params 
       const pool = await getConnection()
       await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TVeterinario where CodVeterinario =@id')
       res.json("se elimino")   
    } catch (error) {
        res.json("error")     
    }
}

export const UpdateVeterinarioById = async (req,res) => {
    const {DniVeterinario,NomVeterinario,ApeVeterinario,EdadVeterinario,Email,AniosExperiencia,CelVeterinario,DireccionVeterinario,UrlFoto} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodVeterinario',sql.VarChar,id)
        .input('DniVeterinario',sql.VarChar,DniVeterinario)
        .input('NomVeterinario',sql.VarChar,NomVeterinario)
        .input('ApeVeterinario',sql.VarChar,ApeVeterinario)
        .input('EdadVeterinario',sql.Date,EdadVeterinario)
        .input('Email',sql.VarChar,Email)
        .input('AniosExperiencia',sql.VarChar,AniosExperiencia)
        .input('CelVeterinario',sql.VarChar,CelVeterinario)
        .input('DireccionVeterinario',sql.VarChar,DireccionVeterinario)
        .input('UrlFoto',sql.VarChar,UrlFoto)
        .query('update TVeterinario set DniVeterinario = @DniVeterinario ,NomVeterinario = @NomVeterinaria,ApeVeterinario = @ApeVeterinario,EdadVeterinario = @EdadVeterinario,Email = @Email,AniosExperiencia = @AniosExperiencia,CelVeterinario=@CelVeterinario,DireccionVeterinario = @DireccionVeterinario,UrlFoto=@UrlFoto where CodVeterinario = @CodVeterinario')
        res.json('actualizado')
    } catch (error) {
        res.json("error")
    }
}