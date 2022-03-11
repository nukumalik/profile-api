import {Router} from 'express'
import {controllers} from './controller'
import {validations} from './validation'

export const service = Router().post(
  '/login',
  validations.username,
  validations.password,
  controllers.login
)
