import {Router} from 'express';
import { getPeluqueros } from '../controllers/peluquero';


const router = Router();
router.get('/',getPeluqueros);

export default router;