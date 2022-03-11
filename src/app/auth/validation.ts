import {check} from 'express-validator'

export const validations = {
  username: check('username').not().isEmpty().withMessage('Username is required'),
  password: check('password').not().isEmpty().withMessage('Password is required'),
}
