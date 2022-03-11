import bodyParser from 'body-parser'
import {Router} from 'express'
import morgan from 'morgan'
import passport from 'passport'

export const middlewares = Router()
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use(passport.initialize())
