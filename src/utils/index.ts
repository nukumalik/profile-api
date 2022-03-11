import {PrismaClient} from '@prisma/client'
import {Response} from 'express'
import multer from 'multer'

export const jsonRes = (
  res: Response,
  code: number,
  message: string,
  data: any = null,
  error: any = null
) => {
  let result: any = {code, message}
  if (error) result.error = error
  if (data) result.data = data
  return res.status(code).json(result)
}

export const prisma = new PrismaClient()

export const uploadAvatar = multer({
  storage: multer.diskStorage({
    destination: './static/avatar',
    filename: (_, file, cb) => cb(null, `avatar-${Date.now()}-${file.originalname}`),
  }),
  dest: 'avatar',
})

export const uploadCompany = multer({
  storage: multer.diskStorage({
    destination: './static/company',
    filename: (_, file, cb) => cb(null, `company-${Date.now()}-${file.originalname}`),
  }),
  dest: 'company',
})
