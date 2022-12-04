import { Router } from "express";
import {getDatosUbicacion} from '../controllers/ubicacion.controller'

const router = Router()

router.get('/ubicacion', getDatosUbicacion);

export default router