import express, { json } from 'express';
import router from './api/router';

const app = express();
app.use(json());
app.use('/', router);
app.listen(3000, function () {
    console.log('listening on port 3000');
});