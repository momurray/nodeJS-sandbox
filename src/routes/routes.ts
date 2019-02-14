import * as express from 'express';

export const register = (app: express.Application) => {

    // Default route. 
    app.get('/', (req, res) => res.send(`Hello World!, from nodejs-sandbox ${new Date().toString()}`));

}