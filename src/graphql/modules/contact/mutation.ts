import { IContext } from '../../context'

export interface IMutationContactArgs {
  email: string
  firstname: string
  lastname: string
}

export const createContact = async (_parent: any, args: IMutationContactArgs, ctx: IContext) => {
  const contact = await ctx.db.contact.create({ data: { ...args } })

  return contact
}

export default {
  createContact,
}
