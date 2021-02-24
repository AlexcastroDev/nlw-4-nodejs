import 'reflect-metadata'
import express from 'express';
import './database'
import { router } from './router';

const app = express();
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    return res.json({status: 200});
})

app.listen(3333, () => console.log(`Running`))
