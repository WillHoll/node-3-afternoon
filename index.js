require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
app.use(express.json());
const ctrl = require('./products_controller');

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)

app.put('/api/products/:id', ctrl.update)

app.post('/api/products', ctrl.create)

app.delete('/api/products/:id', ctrl.delete)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database connected')
    app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} bottles of beer on the wall.`)});
}).catch(err => {
    console.log(err)
})