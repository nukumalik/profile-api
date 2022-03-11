import express from 'express'
import {middlewares} from './middlewares'
import {jsonRes} from './utils'

const app = express()

// Middlewares
app.use(middlewares)

app.get('/', (req, res) => jsonRes(res, 200, 'Hello, World'))

app.listen(3000, () => console.log('Server is running on port', 3000))
