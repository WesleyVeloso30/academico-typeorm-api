import express, { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import routes from './routes';

AppDataSource.initialize().then( () => {
    const app = express();

    app.use(express.json());

    app.use(routes)

    app.listen(process.env.PORT);
    console.log('api rodando na porta ' + process.env.PORT)
});