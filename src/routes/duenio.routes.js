import { Router } from "express";
import {getDuenio,getDuenioyId,postDuenio,DeleteDuenioById,UpdateDuenioById} from '../controllers/duenio.controller'

const router = Router()

router.get('/duenio', getDuenio);
router.post('/duenio',postDuenio)
router.get('/duenio/:id',getDuenioyId)
router.delete('/duenio/:id',DeleteDuenioById)
router.put('/duenio/:id',UpdateDuenioById)

export default router