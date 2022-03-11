import express from 'express'
import path from 'path'
import {api} from './app'
import {middlewares} from './middlewares'

const app = express()

// Middlewares
app.use(middlewares)

// API
app.use('/api/v1', api)

// Static Files
app.use('/static', express.static(path.resolve('./static')))

app.listen(3000, () => console.log('Server is running on port', 3000))
