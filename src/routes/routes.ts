import * as express from 'express';
import * as CollateralRoutes from '../collateral/collateral.routes';
import * as UploadRoutes from '../upload/upload.routes';

export const register = (app: express.Application) => {

    // Default route. 
    app.get('/', (req, res) => res.send(`Hello from nodejs-sandbox ${new Date().toString()}`));

    UploadRoutes.register(app);

    CollateralRoutes.register(app);
}