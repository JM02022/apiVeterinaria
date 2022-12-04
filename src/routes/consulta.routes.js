import { Router } from "express";
import {getConsulta,postConsulta,getConsultayId,DeleteConsultaById,UpdateConsultaById} from '../controllers/consulta.controller'

const router = Router()

router.get('/consulta', getConsulta);
router.post('/consulta',postConsulta)
router.get('/consulta/:id',getConsultayId)
router.delete('/consulta/:id',DeleteConsultaById)
router.put('/consulta/:id',UpdateConsultaById)

export default router