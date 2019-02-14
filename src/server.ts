import express from 'express';
import cors from 'cors';
import * as routes from "./routes/routes";
import bodyparser from "body-parser";
import fileupload from "express-fileupload";

// Default listening port. 
const PORT = 8080;

// Create my app object. 
const app = express();

// Allow access from any location. 
app.use(cors());

// Serve some static files from various folders. 
app.use("/testform", express.static(__dirname + '/testform'));
app.use("/images", express.static(__dirname + '/images'));

// Enable file upload functionality. 
app.use(fileupload({ useTempFiles: true, tempFileDir: '/tmp/', safeFileNames: true, preserveExtension: true}));

// // Support body or URL parsing. 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Register all of my routes. 
routes.register(app);

// Start listening....
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}!`));
