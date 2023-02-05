import { Router } from 'express';
import { SubjectController } from './controller/SubjectController';
import { RoomController } from './controller/RoomController';

const routes = Router()

routes.post('/subject', new SubjectController().create);
routes.post('/room', new RoomController().create);
routes.post('/room/:idRoom/create', new RoomController().createVideo);

export default routes