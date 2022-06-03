const express = require('express')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
const port = 3000 || process.env.PORT
const app = express()
require('./config/mongoose')

app.set('view engine', 'hbs')
app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => console.log(`App is running on http://localhost:${port}`))