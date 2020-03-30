import { ApolloServer } from 'apollo-server'
import { makeModulesSchema } from './utils'
import Context from './context'

export default async () =>
  new ApolloServer({
    schema: await makeModulesSchema(),
    context: Context,
    playground: {
      settings: {
        'editor.theme': 'dark',
        'editor.cursorShape': 'line',
      },
    },
    tracing: process.env.NODE_ENV === 'development',
  })
