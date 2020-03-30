import { IContext } from '../../context'

export default {
  me(_parent: any, _args: any, ctx: IContext) {
    return ctx.me
  },
}
