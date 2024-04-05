import express from 'express';

const app = express()
const port = 3000

app.get('/',(req, res) => res.json({
    name: 'Shreyas',
    email: 'shreyas@gmail.com'
},
{
    name: 'Ram',
    email: 'ram123@gmail.com'

}))

app.listen(port, () => console.log('Example app listening on port $(port)!'))