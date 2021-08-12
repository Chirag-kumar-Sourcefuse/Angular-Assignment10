import express from 'express';
import * as http from 'http';
import cors from 'cors'
import debug from 'debug';
import router from './routes-users-db';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
//const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json())
app.use(cors());

app.use(express.urlencoded());

app.use(express.static('public'));
app.use('/routes-users',router);




const runningMessage = `Server running at http://localhost:${port}`;
server.listen(port, () => {
    console.log(runningMessage);
});