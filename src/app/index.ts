import {Router} from 'express'
import {experience} from './experience'

export const api = Router().use('/experiences', experience.service)
