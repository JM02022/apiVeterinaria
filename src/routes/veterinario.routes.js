import { Router } from "express";
import {getVeterinario,getVeterinarioById,postVeterinario,DeleteVeterinoById,UpdateVeterinarioById} from '../controllers/veterinario.controller'

const router = Router()

router.get('/veterinario', getVeterinario);
router.post('/veterinario',postVeterinario)
router.get('/veterinario/:id',getVeterinarioById)
router.delete('/veterinario/:id',DeleteVeterinoById)
router.put('/veterinario/:id',UpdateVeterinarioById)

export default router