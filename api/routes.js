const bodyParser = require('body-parser')
const app = require('express')()
app.use(bodyParser.json())

import ConfirmationController from './controllers/confirmation';

app.post('/confirmation', ConfirmationController.confirmate);

module.exports = app
