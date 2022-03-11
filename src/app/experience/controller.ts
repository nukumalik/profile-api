import {Experience, Profile} from '@prisma/client'
import {Request, Response} from 'express'
import {jsonRes, prisma} from '../../utils'

export const controllers = {
  // list of experience
  list: async (_: Request, res: Response) => {
    try {
      const profile: Profile | null = await prisma.profile.findFirst()
      if (!profile) return jsonRes(res, 404, 'Profile not found')

      const experiences: Experience[] = await prisma.experience.findMany({
        where: {profileId: profile?.id},
      })

      return jsonRes(
        res,
        200,
        experiences.length ? 'Success to get list experience' : 'Experience is empty',
        experiences
      )
    } catch (error) {
      return jsonRes(res, 500, 'Failed to get list experience', null, error)
    }
  },

  // Detail of experience
  detail: async (req: Request, res: Response) => {
    try {
      const {id} = req.params
      const experience: Experience | null = await prisma.experience.findUnique({where: {id}})
      if (!experience) return jsonRes(res, 404, 'Experience not found')

      return jsonRes(res, 200, 'Success to get experience detail', experience)
    } catch (error) {
      return jsonRes(res, 500, 'Failed to get experience detail', null, error)
    }
  },

  // Create new experience
  create: async (req: Request, res: Response) => {
    try {
      const profile: Profile | null = await prisma.profile.findFirst()
      if (!profile) return jsonRes(res, 404, 'Profile not found')

      const {companyName, companyLogo, jobTitle, jobDescription, startDate, endDate, isPresent} =
        req.body

      const data: any = {
        companyName,
        companyLogo,
        jobTitle,
        jobDescription,
        startDate,
        endDate,
        isPresent,
      }

      const created = await prisma.experience.create({data})

      return jsonRes(res, 200, 'Success to create new experience', created)
    } catch (error) {
      return jsonRes(res, 500, 'Failed to create new experience', null, error)
    }
  },

  // Update experience
  update: async (req: Request, res: Response) => {
    try {
      const {id} = req.params
      const experience: Experience | null = await prisma.experience.findUnique({where: {id}})
      if (!experience) return jsonRes(res, 404, 'Experience not found')

      const {companyName, companyLogo, jobTitle, jobDescription, startDate, endDate, isPresent} =
        req.body

      const data: any = {}
      if (companyName) data.companyName = companyName
      if (companyLogo) data.companyLogo = companyLogo
      if (jobTitle) data.jobTitle = jobTitle
      if (jobDescription) data.jobDescription = jobDescription
      if (startDate) data.startDate = startDate
      if (endDate) data.endDate = endDate
      if (isPresent) data.isPresent = isPresent

      const updated = await prisma.experience.update({where: {id}, data})

      return jsonRes(res, 200, 'Success to update experience', updated)
    } catch (error) {
      return jsonRes(res, 500, 'Failed to update experience', null, error)
    }
  },

  // Delete experience
  delete: async (req: Request, res: Response) => {
    try {
      const {id} = req.params
      const experience: Experience | null = await prisma.experience.findUnique({where: {id}})
      if (!experience) return jsonRes(res, 404, 'Experience not found')

      await prisma.experience.delete({where: {id}})

      return jsonRes(res, 200, 'Success to delete experience')
    } catch (error) {
      return jsonRes(res, 500, 'Failed to delete experience', null, error)
    }
  },
}
