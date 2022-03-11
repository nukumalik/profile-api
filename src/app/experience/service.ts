import {Router} from 'express'
import {uploadCompany} from '../../utils'
import {isAuth} from '../../utils/passport'
import {controllers} from './controller'
import {validations} from './validation'

export const service = Router()
  .get('/', controllers.list)
  .get('/:id', isAuth, controllers.detail)
  .patch('/:id', isAuth, uploadCompany.single('companyLogo'), controllers.update)
  .post(
    '/',
    isAuth,
    validations.companyName,
    validations.companyLogo,
    validations.jobTitle,
    validations.startDate,
    uploadCompany.single('companyLogo'),
    controllers.create
  )
  .delete('/:id', isAuth, controllers.delete)
