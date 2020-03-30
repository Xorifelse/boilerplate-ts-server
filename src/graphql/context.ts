import { PrismaClient } from '@prisma/client'
import { Request } from 'express'
import { verify, TokenError } from './jwt'

export interface IContext {
  db: PrismaClient
  me?: {
    id: string
    email: string
  }
}

const db: PrismaClient = new PrismaClient()

export default async (request: Request): Promise<IContext> => {
  let me

  try {
    me = await verify(request)
  } catch (ex) {
    if (ex instanceof TokenError) {
      console.debug('Ignoring token error')
    } else {
      throw new Error(ex.message)
    }
  }

  return {
    db,
    me,
  }
}
