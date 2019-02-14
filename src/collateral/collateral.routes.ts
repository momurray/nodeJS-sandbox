import * as express from 'express';
import { WebAsset, Collateral, EmailAsset } from './collateral';

export const register = (app: express.Application) => {

    app.get('/collateral/webassets/:id', (req, res) => {

        let webasset: WebAsset = new Collateral().getWebAssetById(req.params.id);

        if (webasset) {
            res.json(webasset);
        }

        res.status(400).send("Unknown id");
    });

    app.get('/collateral/emailassets/:id', (req, res) => {

        let webasset: EmailAsset = new Collateral().getEmailAssetById(req.params.id);

        if (webasset) {
            res.json(webasset);
        }

        res.status(400).send("Unknown id");
    });

}

