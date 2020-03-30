import { IContext } from '../../context'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export interface IMutationLoginArgs {
  email: string
  password: string
  firstname: string
  lastname: string
}

export const signup = async (_parent: any, args: IMutationLoginArgs, ctx: IContext) => {
  const password: string = await bcrypt.hash(args.password, 10)

  const user = await ctx.db.user.create({ data: { ...args, password } })

  return {
    token: jwt.sign({ id: user.id }, process.env.JWT_SECRET),
    user,
  }
}

export const signin = async (_parent: any, { email, password }: IMutationLoginArgs, ctx: IContext) => {
  console.log(email, password)

  const user = await ctx.db.user.findOne({ where: { email } })
  if (!user) {
    throw new Error(`Invalid login for ${email}`)
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ id: user.id }, process.env.JWT_SECRET),
    user,
  }
}

export default {
  signin,
  signup,
}
