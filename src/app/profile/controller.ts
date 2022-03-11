import {Experience, Profile} from '@prisma/client'
import {Request, Response} from 'express'
import {jsonRes, prisma} from '../../utils'

export const controllers = {
  // detail of profile
  detail: async (_: Request, res: Response) => {
    try {
      const profile: Profile | null = await prisma.profile.findFirst({include: {experiences: true}})
      if (!profile) return jsonRes(res, 404, 'Profile not found')

      return jsonRes(res, 200, 'Success to get profile', profile)
    } catch (error) {
      return jsonRes(res, 500, 'Failed to get profile', null, error)
    }
  },

  // Create new profile
  create: async (req: Request, res: Response) => {
    try {
      const profile: Profile | null = await prisma.profile.findFirst()
      if (profile) return jsonRes(res, 404, 'Profile meet maximum capacity')

      const {name, avatar, age} = req.body
      const created = await prisma.profile.create({
        data: {
          age,
          name,
          avatar,
        },
      })

      return jsonRes(res, 200, 'Success to create profile', created)
    } catch (error) {
      return jsonRes(res, 500, 'Failed to create profile', null, error)
    }
  },

  // Update profile
  update: async (req: Request, res: Response) => {
    try {
      const profile: Profile | null = await prisma.profile.findFirst()
      if (!profile) return jsonRes(res, 404, 'Profile not found')

      const {name, avatar, age} = req.body
      const data: any = {}
      if (name) data.name = name
      if (avatar) data.avatar = avatar
      if (age) data.age = age

      const updated = await prisma.profile.update({where: {id: profile?.id}, data})

      return jsonRes(res, 200, 'Success to update profile', updated)
    } catch (error) {
      return jsonRes(res, 500, 'Failed to update profile', null, error)
    }
  },
}
