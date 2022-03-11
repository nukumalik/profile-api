import {Router} from 'express'
import {uploadAvatar} from '../../utils'
import {controllers} from './controller'

export const service = Router()
  .get('/', controllers.detail)
  .patch('/', uploadAvatar.single('avatar'), controllers.update)
  .post('/', controllers.create)
