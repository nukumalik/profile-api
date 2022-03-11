import {Router} from 'express'
import {uploadCompany} from '../../utils'
import {controllers} from './controller'

export const service = Router()
  .get('/', controllers.list)
  .get('/:id', controllers.detail)
  .patch('/:id', uploadCompany.single, controllers.update)
  .post('/', uploadCompany.single, controllers.create)
  .delete('/:id', controllers.delete)
