import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({status: 200});
})

app.listen(3333, () => console.log(`Running`))
