import {Response} from 'express'

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
