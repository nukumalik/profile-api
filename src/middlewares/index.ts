import bodyParser from 'body-parser'
import {Router} from 'express'
import morgan from 'morgan'

export const middlewares = Router()
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(morgan('dev'))
