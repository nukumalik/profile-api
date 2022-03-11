import {check} from 'express-validator'

export const validations = {
  name: check('name').not().isEmpty().withMessage('Name is required'),
  avatar: check('avatar').not().isEmpty().withMessage('Avatar is required'),
  age: check('age').not().isEmpty().withMessage('Age is required'),
}
