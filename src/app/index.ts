import {Router} from 'express'
import {experience} from './experience'
import {profile} from './profile'

export const api = Router().use('/experiences', experience.service).use('/profile', profile.service)
