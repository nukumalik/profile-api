import {Router} from 'express'
import {uploadAvatar} from '../../utils'
import {isAuth} from '../../utils/passport'
import {controllers} from './controller'
import {validations} from './validation'

export const service = Router()
  .get('/', controllers.detail)
  .patch('/', isAuth, uploadAvatar.single('avatar'), controllers.update)
  .post(
    '/',
    isAuth,
    validations.name,
    validations.avatar,
    validations.age,
    uploadAvatar.single('avatar'),
    controllers.create
  )
