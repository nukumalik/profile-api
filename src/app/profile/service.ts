import {Router} from 'express'
import {controllers} from './controller'

export const service = Router()
  .get('/', controllers.detail)
  .patch('/', controllers.update)
  .post('/', controllers.create)
