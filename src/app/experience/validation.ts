import {check} from 'express-validator'

export const validations = {
  companyName: check('companyName').not().isEmpty().withMessage('Company Name is required'),
  companyLogo: check('companyLogo').not().isEmpty().withMessage('Company Logo is required'),
  jobTitle: check('jobTitle').not().isEmpty().withMessage('Job Title is required'),
  startDate: check('startDate').not().isEmpty().withMessage('Start Date is required'),
}
