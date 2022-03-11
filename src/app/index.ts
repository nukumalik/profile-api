import {Router} from 'express'
import {auth} from './auth'
import {experience} from './experience'
import {profile} from './profile'

export const api = Router()
  .use('/experiences', experience.service)
  .use('/profile', profile.service)
  .use('/auth', auth.service)
