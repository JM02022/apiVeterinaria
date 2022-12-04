
import { Router } from "express";
import {getServicio,getServicioById,postServicio,DeleteServicioById,UpdateServicioById} from '../controllers/servicio.controller'

const router = Router()

router.get('/servicio', getServicio);
router.post('/servicio',postServicio)
router.get('/servicio/:id',getServicioById)
router.delete('/servicio/:id',DeleteServicioById)
router.put('/servicio/:id',UpdateServicioById)

export default router