import express from 'express'
import path from 'path'
import {api} from './app'
import {middlewares} from './middlewares'
import {jwtStrategy} from './utils/passport'
import 'dotenv/config'

const app = express()

// Middlewares
app.use(middlewares)
jwtStrategy()

// API
app.use('/api/v1', api)

// Static Files
app.use('/static', express.static(path.resolve('./static')))

const port = process.env.PORT || 80

app.listen(port, () => console.log('Server is running on port', port))
