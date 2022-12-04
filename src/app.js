import express  from "express"
import config from "./config"

import adminRoutes from './routes/login.routes'
import ubicacionRoutes from './routes/ubicacion.routes'
import veterinarioRoutes from './routes/veterinario.routes'
import duenioRoutes from './routes/duenio.routes'
import consultaRoute from './routes/consulta.routes'
import mascotaRoute from './routes/mascota.routes'
import servicioRoute from './routes/servicio.routes'
import historialRoute from './routes/historial.routes'

const cors = require('cors')
const app = express()

app.use(cors())
app.set('port',config.port || 3000)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(adminRoutes)
app.use(ubicacionRoutes)
app.use(veterinarioRoutes)
app.use(duenioRoutes)
app.use(consultaRoute)
app.use(mascotaRoute)
app.use(servicioRoute)
app.use(historialRoute)

export default app