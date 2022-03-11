import {Router} from 'express'
import {controllers} from './controller'

export const service = Router()
  .get('/', controllers.list)
  .get('/:id', controllers.detail)
  .patch('/:id', controllers.update)
  .post('/', controllers.create)
  .delete('/:id', controllers.delete)
