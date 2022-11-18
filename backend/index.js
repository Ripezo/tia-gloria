import * as dotenv from 'dotenv'; dotenv.config();
import express from 'express';

const App = express();

console.log('Starting server...')

App.use('/', (request, response, next) => response.send('Tía-Gloria.cl'));

App.listen(process.env.PORT || 3000, () => console.log('Server running on port:', process.env.PORT || 3000) );