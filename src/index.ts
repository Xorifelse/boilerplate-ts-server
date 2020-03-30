import '../config'
import GraphqlServer from './graphql'

const main = async () => {
  GraphqlServer()
    .then(apollo => {
      apollo
        .listen({ port: 4000 })
        .then(({ url }) => {
          console.log(`🚀 Apollo server ready at ${url}`)
        })
        .catch(ex => {
          console.error(ex.message)
        })
    })
    .catch(ex => {
      console.error(ex.message)
    })
}

main().catch(e => console.error(e))
