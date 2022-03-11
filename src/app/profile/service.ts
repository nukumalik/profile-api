import {Router} from 'express'
import {uploadAvatar} from '../../utils'
import {isAuth} from '../../utils/passport'
import {controllers} from './controller'

export const service = Router()
  .get('/', controllers.detail)
  .patch('/', isAuth, uploadAvatar.single('avatar'), controllers.update)
  .post('/', isAuth, controllers.create)
