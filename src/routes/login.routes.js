import { Router } from "express";
import {postLoginAdmin} from '../controllers/admin.controller'

const router = Router()


router.post('/login',postLoginAdmin)

export default router