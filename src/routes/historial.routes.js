
import { Router } from "express";
import {getHistorial,getHistorialById,postHistorial,DeleteHistorialById,UpdateHistorialById} from '../controllers/historial.controller'

const router = Router()

router.get('/historial', getHistorial);
router.post('/historial',postHistorial)
router.get('/historial/:id',getHistorialById)
router.delete('/historial/:id',DeleteHistorialById)
router.put('/historial/:id',UpdateHistorialById)

export default router