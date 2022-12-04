
import { Router } from "express";
import {getMascota,getMascotaById,postMascota,DeleteMascotaById,UpdateMascotaById} from '../controllers/mascota.controller'

const router = Router()

router.get('/mascota', getMascota);
router.post('/mascota',postMascota)
router.get('/mascota/:id',getMascotaById)
router.delete('/mascota/:id',DeleteMascotaById)
router.put('/mascota/:id',UpdateMascotaById)

export default router