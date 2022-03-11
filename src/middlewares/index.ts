import bodyParser from 'body-parser'
import {Router} from 'express'

export const middlewares = Router()
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
