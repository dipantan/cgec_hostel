import express, { json } from 'express';
import router from './api/router.js';

const app = express();
const port = process.env.PORT || 8000;
app.use(json());
app.use('/', router);
app.listen(port, function () {
    // console.log(router);
    console.log('listening on port ' + port);
});