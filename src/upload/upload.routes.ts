import * as express from 'express';
import { UploadedFile } from 'express-fileupload';

export const register = (app: express.Application) => {

    app.post('/upload', function (req, res) {
         
        console.log(req.files);

        if (Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile:UploadedFile = req.files.sampleFile as UploadedFile;
        
        // Use the mv() method to place the file somewhere on your server
        let fileurl = `/temp/nodejs-sandbox/dist/images/${sampleFile.name}`;
        console.log(fileurl);

        sampleFile.mv(fileurl , function (err: any) {
            if (err)
                return res.status(500).send(err);

            res.json({filename: `http://localhost:8080/images/${sampleFile.name}`});
        });
    });

}