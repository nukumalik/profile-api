import {Experience, Profile} from '@prisma/client'
import {Request, Response} from 'express'
import {jsonRes, prisma} from '../../utils'
import jwt from 'jsonwebtoken'

export const controllers = {
  // Create new profile
  login: async (req: Request, res: Response) => {
    try {
      const profile: Profile | null = await prisma.profile.findFirst()
      if (!profile) return jsonRes(res, 400, 'Profile not found')

      const {username, password} = req.body
      console.log({username, password})
      if (username === 'admin' && password === 'admin') {
        const token = jwt.sign(profile, 'this is very strong secret, lol!', {expiresIn: 3600})
        return jsonRes(res, 200, 'Success to create profile', {token})
      }

      return jsonRes(res, 400, 'Username or Password was invalid')
    } catch (error) {
      return jsonRes(res, 500, 'Failed to create profile', null, error)
    }
  },
}
