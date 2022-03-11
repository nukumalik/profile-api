import express from 'express'
import {api} from './app'
import {middlewares} from './middlewares'

const app = express()

// Middlewares
app.use(middlewares)

// API
app.use('/api/v1', api)

app.listen(3000, () => console.log('Server is running on port', 3000))
