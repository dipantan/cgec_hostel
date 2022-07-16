import express, { json } from 'express';
import router from './api/router.js';
import cors from 'cors'

const app = express();
const port = process.env.PORT || 8000;
app.use(json());
app.use(cors())
app.use('/', router);
app.listen(port, function () {
    console.log('listening on port ' + port);
});