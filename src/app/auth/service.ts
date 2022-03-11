import {Router} from 'express'
import {controllers} from './controller'

export const service = Router().post('/login', controllers.login)
