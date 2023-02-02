import { Router } from 'express';
import { Subject } from './controler/Subject';

const routes = Router()

routes.post('/subject', new Subject().create)

export default routes