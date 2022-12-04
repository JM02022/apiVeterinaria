import sql from 'mssql'

const dbSettings = {
    user: "usuarioSql",
    password: "12345",
    server: "localhost",
    database: "BDVETERINARIO",
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.error(error)
    }
}
export {sql};