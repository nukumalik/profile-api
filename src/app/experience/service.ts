import {Router} from 'express'
import {uploadCompany} from '../../utils'
import {controllers} from './controller'

export const service = Router()
  .get('/', controllers.list)
  .get('/:id', controllers.detail)
  .patch('/:id', uploadCompany.single('companyLogo'), controllers.update)
  .post('/', uploadCompany.single('companyLogo'), controllers.create)
  .delete('/:id', controllers.delete)
